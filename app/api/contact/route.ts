import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
// Note: If RESEND_API_KEY is not set, the constructor will throw, or API calls will fail.
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, mobile, details } = body;

    // Validate required fields
    if (!name || !email || !details) {
      return NextResponse.json(
        { error: 'Name, email, and description are required fields.' },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is missing from environment variables');
      return NextResponse.json(
        { error: 'Server configuration error: Email service not configured.' },
        { status: 500 }
      );
    }

    // Send email using Resend
    // We use the onboarding@resend.dev domain because it allows free tier sending without domain verification
    // You must verify work.buildstates@gmail.com in the Resend dashboard as the delivery email.
    const { data, error } = await resend.emails.send({
      from: 'BuildStates Inquiry <onboarding@resend.dev>',
      to: ['work.buildstates@gmail.com'],
      subject: `New Project Request: ${company || name}`,
      replyTo: email,
      html: `
        <h2>New Request from BuildStates Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Mobile:</strong> ${mobile || 'Not provided'}</p>
        <br/>
        <h3>Project Details:</h3>
        <p style="white-space: pre-wrap;">${details}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
