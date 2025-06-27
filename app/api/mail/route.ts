// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, company,  email, phone, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_RECEIVER, // Your admin or company email
      subject: 'New Contact Message',
      html: `
        <div class="max-w-xl mx-auto bg-white p-8 shadow-xl border border-gray-200 rounded-xl font-serif space-y-4">
            <h2 class="text-2xl font-bold text-gray-800 underline underline-offset-4">New Contact Request</h2>

            <p><strong class="text-gray-700">Name:</strong> ${name}</p>
            <p><strong class="text-gray-700">Company:</strong> ${company}</p>
            <p><strong class="text-gray-700">Email:</strong> ${email}</p>
            <p><strong class="text-gray-700">Phone:</strong> ${phone}</p>

            <div>
                <p class="font-semibold text-gray-700 mb-1">Message:</p>
                <p class="whitespace-pre-line text-gray-800 leading-relaxed">${message}</p>
            </div>

            <hr class="my-4 border-gray-300" />

            <p class="text-sm text-gray-500 italic">This message was received via the contact form.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: 'Message sent successfully.' });
  } catch (err) {
    console.error('Email error:', err);
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }
}
