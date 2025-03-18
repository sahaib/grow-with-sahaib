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

interface AdminNotificationProps {
  name: string;
  email: string;
  experience: string;
  interests: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export default function AdminNotification({
  name,
  email,
  experience,
  interests,
}: AdminNotificationProps) {
  return (
    <Html>
      <Head />
      <Preview>New Waitlist Registration: {name}</Preview>
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
          <Heading style={heading}>New Waitlist Registration</Heading>
          
          <Text style={paragraph}>
            A new user has joined the AI with Devs waitlist! Here are their details:
          </Text>
          
          <Section style={detailsContainer}>
            <Text style={detailsText}>
              <strong>Name:</strong> {name}
            </Text>
            <Text style={detailsText}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={detailsText}>
              <strong>Experience Level:</strong> {experience}
            </Text>
            <Text style={detailsText}>
              <strong>Interests:</strong> {interests}
            </Text>
          </Section>
          
          <Section style={buttonContainer}>
            <Link
              style={button}
              href={`mailto:${email}`}
            >
              Reply to {name}
            </Link>
          </Section>
          
          <Hr style={hr} />
          
          <Text style={footer}>
            © {new Date().getFullYear()} AI with Devs. All rights reserved.
            <br />
            <Link href={baseUrl} style={link}>
              Admin Dashboard (Coming Soon)
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

const detailsContainer = {
  backgroundColor: '#f9fafb',
  borderRadius: '5px',
  padding: '16px',
  marginBottom: '16px',
};

const detailsText = {
  margin: '8px 0',
  fontSize: '16px',
  lineHeight: '1.4',
  color: '#484848',
};

const buttonContainer = {
  padding: '12px 0 24px',
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