import * as React from 'react';
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Link,
} from '@react-email/components';

interface UserNotificationProps {
  name: string;
  email: string;
  experience: string;
  interests: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export default function UserNotification({
  name,
  email,
  experience,
  interests,
}: UserNotificationProps) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to the AI with Devs waitlist!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoContainer}>
            <Link href={baseUrl}>
              <Text style={{
                fontWeight: 'bold',
                fontSize: '28px',
                color: '#7828C8',
              }}>
                AI with Devs
              </Text>
            </Link>
          </Section>
          <Heading style={heading}>Welcome to AI with Devs!</Heading>
          
          <Text style={paragraph}>
            Hey {name},
          </Text>
          
          <Text style={paragraph}>
            Thank you for joining our waitlist! We're excited to have you as part of our community where we build real-world projects with AI assistance.
          </Text>
          
          <Text style={paragraph}>
            <strong>Your Information:</strong>
            <br />
            <strong>Email:</strong> {email}
            <br />
            <strong>Experience Level:</strong> {experience}
            <br />
            <strong>Interests:</strong> {interests}
          </Text>
          
          <Text style={paragraph}>
            We'll keep you updated on new guides, live sessions, and when we have spots available. In the meantime, you can check out our existing guides and resources on our website.
          </Text>
          
          <Section style={buttonContainer}>
            <Link
              style={button}
              href={`${baseUrl}/guide/viral-tweet-generator`}
            >
              Explore Our Guides
            </Link>
          </Section>
          
          <Text style={paragraph}>
            If you have any questions, feel free to reply to this email or reach out to us at hello@sahaibsingh.com.
          </Text>
          
          <Text style={paragraph}>
            Best,
            <br />
            Sahaib and the AI with Devs Team
          </Text>
          
          <Hr style={hr} />
          
          <Text style={footer}>
            © {new Date().getFullYear()} AI with Devs. All rights reserved.
            <br />
            <Link href={baseUrl} style={link}>
              Visit our website
            </Link>
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '40px 20px',
  maxWidth: '600px',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const logoContainer = {
  marginBottom: '24px',
};

const heading = {
  fontSize: '24px',
  letterSpacing: '-0.5px',
  lineHeight: '1.3',
  fontWeight: '800',
  color: '#484848',
  padding: '0 0 10px',
};

const paragraph = {
  margin: '0 0 16px',
  fontSize: '16px',
  lineHeight: '1.5',
  color: '#484848',
};

const buttonContainer = {
  padding: '20px 0',
};

const button = {
  backgroundColor: '#7828C8',
  borderRadius: '5px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '12px 20px',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const footer = {
  color: '#9ca299',
  fontSize: '14px',
  marginTop: '20px',
};

const link = {
  color: '#7828C8',
  textDecoration: 'underline',
}; 