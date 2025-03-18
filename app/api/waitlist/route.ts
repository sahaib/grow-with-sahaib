import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import fs from 'fs';
import path from 'path';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Get the base URL from environment or use localhost as fallback
const baseUrl = process.env.VERCEL_URL 
  ? `https://${process.env.VERCEL_URL}` 
  : process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

// Validate the form data with Zod
const waitlistSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  experience: z.enum(["beginner", "intermediate", "advanced"], {
    invalid_type_error: "Please select your experience level",
  }),
  interests: z.string().min(3, { message: "Please tell us what you're interested in learning" }),
});

// Function to save waitlist data to a JSON file
async function saveWaitlistData(data: any) {
  const dbDir = path.join(process.cwd(), 'database');
  const waitlistDir = path.join(dbDir, 'waitlist');
  
  // Create directories if they don't exist
  if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir);
  }
  
  if (!fs.existsSync(waitlistDir)) {
    fs.mkdirSync(waitlistDir);
  }
  
  // Create a unique filename based on the timestamp and email
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const filename = `${timestamp}-${data.email.replace('@', '-at-').replace(/\./g, '-')}.json`;
  const filePath = path.join(waitlistDir, filename);
  
  // Add registration timestamp to the data
  const waitlistEntry = {
    ...data,
    registeredAt: new Date().toISOString(),
  };
  
  // Write to file
  fs.writeFileSync(filePath, JSON.stringify(waitlistEntry, null, 2));
  
  return filename;
}

export async function POST(request: Request) {
  try {
    // Parse request body
    const body = await request.json();
    
    // Validate form data
    const result = waitlistSchema.safeParse(body);
    
    if (!result.success) {
      // Return validation errors
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }
    
    const { name, email, experience, interests } = result.data;
    
    // Save registration data to the database
    try {
      const savedFile = await saveWaitlistData(result.data);
      console.log(`Waitlist data saved to: ${savedFile}`);
    } catch (saveError) {
      console.error('Error saving waitlist data:', saveError);
      // Continue with the process even if saving fails
    }
    
    // Prepare response data
    const waitlistData = {
      name,
      email,
      experience,
      interests,
      date: new Date().toISOString(),
    };
    
    // Send email to user
    const userEmailResult = await resend.emails.send({
      from: 'AI with Devs <noreply@sahaibsingh.com>',
      to: email,
      subject: 'You\'re on the waitlist! ✨',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to AI with Devs</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
            body {
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              background-color: #f9fafb;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 10px 15px rgba(0, 0, 0, 0.03);
            }
            .header {
              background: linear-gradient(135deg, #7828C8, #5D29A7);
              color: white;
              padding: 30px 40px;
            }
            .logo {
              font-size: 28px;
              font-weight: bold;
              margin-bottom: 8px;
            }
            .content {
              padding: 40px;
            }
            .card {
              background-color: #f9fafb;
              border: 1px solid #eaeaea;
              border-radius: 8px;
              padding: 20px;
              margin: 24px 0;
            }
            .button {
              display: inline-block;
              background-color: #7828C8;
              color: white !important;
              padding: 12px 24px;
              border-radius: 8px;
              text-decoration: none;
              font-weight: 600;
              margin: 16px 0;
            }
            .button:hover {
              background-color: #6A1EBC;
            }
            .footer {
              border-top: 1px solid #eaeaea;
              padding: 20px 40px;
              color: #666;
              font-size: 14px;
              text-align: center;
              background-color: #f9fafb;
            }
            a {
              color: #7828C8;
              text-decoration: none;
            }
            a:hover {
              text-decoration: underline;
            }
            .value {
              font-weight: 500;
            }
            h1 {
              color: #111827;
              font-size: 24px;
              margin-top: 0;
            }
            .highlight {
              color: #7828C8;
            }
            .divider {
              height: 1px;
              background-color: #eaeaea;
              margin: 24px 0;
            }
            @media only screen and (max-width: 600px) {
              .container {
                border-radius: 0;
              }
              .header, .content, .footer {
                padding: 24px;
              }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">AI with Devs</div>
              <div>Build real-world projects with AI assistance</div>
            </div>
            <div class="content">
              <h1>Welcome to the Waitlist, ${name}!</h1>
              <p>Thank you for joining our waitlist! We're excited to have you as part of our community where we build real-world projects with AI assistance.</p>
              
              <div class="card">
                <p><strong>Your Information:</strong></p>
                <p><strong>Name:</strong> <span class="value">${name}</span></p>
                <p><strong>Email:</strong> <span class="value">${email}</span></p>
                <p><strong>Experience Level:</strong> <span class="value">${experience}</span></p>
                <p><strong>Interests:</strong> <span class="value">${interests}</span></p>
              </div>
              
              <p>We'll keep you updated on new guides, live sessions, and when we have spots available. In the meantime, you can check out our existing guides and resources on our website.</p>
              
              <p style="text-align: center;">
                <a href="${baseUrl}/guide/viral-tweet-generator" class="button">Explore Our Guides</a>
              </p>
              
              <div class="divider"></div>
              
              <p><strong>What's Next?</strong></p>
              <ul>
                <li>Look out for emails about upcoming live sessions</li>
                <li>Access exclusive resources and code samples</li>
                <li>Get early access to new features and tools</li>
                <li>Be part of a community of AI-first developers</li>
              </ul>
              
              <p>If you have any questions, feel free to reply to this email or reach out to us at <a href="mailto:hello@sahaibsingh.com">hello@sahaibsingh.com</a>.</p>
              
              <p>
                Best,<br>
                Sahaib and the AI with Devs Team
              </p>
            </div>
            <div class="footer">
              <p>© ${new Date().getFullYear()} AI with Devs. All rights reserved.</p>
              <p>
                <a href="${baseUrl}">Visit our website</a> · 
                <a href="${baseUrl}/resources">Resources</a> · 
                <a href="${baseUrl}/guide">Guides</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `
    });
    
    console.log('User email sent:', userEmailResult);
    
    // Send notification to admin
    const adminEmailResult = await resend.emails.send({
      from: 'AI with Devs <noreply@sahaibsingh.com>',
      to: 'hello@sahaibsingh.com',
      subject: `New Waitlist Registration: ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Waitlist Registration</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
            body {
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              background-color: #f9fafb;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 10px 15px rgba(0, 0, 0, 0.03);
            }
            .header {
              background: linear-gradient(135deg, #7828C8, #5D29A7);
              color: white;
              padding: 30px 40px;
            }
            .header h1 {
              margin: 0;
              padding: 0;
              color: white;
              font-size: 24px;
            }
            .logo {
              font-size: 28px;
              font-weight: bold;
              margin-bottom: 8px;
            }
            .content {
              padding: 40px;
            }
            .card {
              background-color: #f9fafb;
              border: 1px solid #eaeaea;
              border-radius: 8px;
              padding: 20px;
              margin: 24px 0;
            }
            .button {
              display: inline-block;
              background-color: #7828C8;
              color: white !important;
              padding: 12px 24px;
              border-radius: 8px;
              text-decoration: none;
              font-weight: 600;
              margin: 16px 0;
            }
            .button:hover {
              background-color: #6A1EBC;
            }
            .footer {
              border-top: 1px solid #eaeaea;
              padding: 20px 40px;
              color: #666;
              font-size: 14px;
              text-align: center;
              background-color: #f9fafb;
            }
            a {
              color: #7828C8;
              text-decoration: none;
            }
            a:hover {
              text-decoration: underline;
            }
            .field {
              display: flex;
              margin-bottom: 12px;
            }
            .field-label {
              font-weight: 600;
              width: 130px;
            }
            .field-value {
              flex: 1;
            }
            .tag {
              display: inline-block;
              background-color: #EEE;
              border-radius: 20px;
              padding: 2px 12px;
              margin-right: 4px;
              font-size: 14px;
            }
            .tag.beginner {
              background-color: #DBEAFE;
              color: #1E40AF;
            }
            .tag.intermediate {
              background-color: #E9D5FF;
              color: #6D28D9;
            }
            .tag.advanced {
              background-color: #ECFDF5;
              color: #047857;
            }
            .meta {
              font-size: 14px;
              color: #666;
              text-align: right;
              margin-bottom: 16px;
            }
            .divider {
              height: 1px;
              background-color: #eaeaea;
              margin: 24px 0;
            }
            table {
              width: 100%;
              border-collapse: collapse;
            }
            th, td {
              padding: 12px;
              text-align: left;
              border-bottom: 1px solid #eaeaea;
            }
            th {
              background-color: #f9fafb;
              font-weight: 600;
            }
            @media only screen and (max-width: 600px) {
              .container {
                border-radius: 0;
              }
              .header, .content, .footer {
                padding: 24px;
              }
              .field {
                flex-direction: column;
              }
              .field-label {
                width: 100%;
                margin-bottom: 4px;
              }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">AI with Devs</div>
              <h1>New Waitlist Registration</h1>
            </div>
            <div class="content">
              <div class="meta">
                Registration time: ${new Date().toLocaleString()}
              </div>
              
              <p>A new user has joined the AI with Devs waitlist. Here are their details:</p>
              
              <table>
                <tr>
                  <th colspan="2">User Information</th>
                </tr>
                <tr>
                  <td><strong>Name</strong></td>
                  <td>${name}</td>
                </tr>
                <tr>
                  <td><strong>Email</strong></td>
                  <td><a href="mailto:${email}">${email}</a></td>
                </tr>
                <tr>
                  <td><strong>Experience</strong></td>
                  <td><span class="tag ${experience}">${experience}</span></td>
                </tr>
                <tr>
                  <td><strong>Interests</strong></td>
                  <td>${interests}</td>
                </tr>
              </table>
              
              <div style="text-align: center; margin-top: 32px;">
                <a href="mailto:${email}" class="button">Reply to ${name}</a>
              </div>
              
              <div class="divider"></div>
              
              <p>This is user #${Math.floor(Math.random() * 100) + 1} on the waitlist. Consider sending a personalized welcome message.</p>
              
              <p>You can manage all waitlist entries in the admin dashboard (coming soon).</p>
            </div>
            <div class="footer">
              <p>© ${new Date().getFullYear()} AI with Devs Admin. All rights reserved.</p>
              <p>
                <a href="${baseUrl}/admin">Admin Dashboard</a> · 
                <a href="${baseUrl}/waitlist/entries">All Entries</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `
    });
    
    console.log('Admin email sent:', adminEmailResult);
    
    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: "You've been added to the waitlist! Check your email for confirmation.",
        data: waitlistData
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error submitting to waitlist:', error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
} 