// app/api/pre-register/route.ts

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, phone, dob, TOC, recaptcha } =
    await request.json();

  // Validate TOC
  if (!TOC) {
    return NextResponse.json(
      { error: 'You must accept the terms and conditions' },
      { status: 400 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: 'ssl0.ovh.net',
    port: 587,
    secure: false,
    auth: {
      user: process.env.PRE_REGISTER_EMAIL_USER,
      pass: process.env.PRE_REGISTER_EMAIL_PASSWORD,
    },
  });

  console.log('transporter', transporter);
  const htmlContent = `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
          }
          h1 {
            color: #D10062;
          }
          .field {
            margin-bottom: 20px;
          }
          .label {
            font-weight: bold;
          }
          .value {
            margin-top: 5px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>New Pre-Registration Submission</h1>
          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${name}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${email}</div>
          </div>
          <div class="field">
            <div class="label">Phone:</div>
            <div class="value">${phone}</div>
          </div>
          <div class="field">
            <div class="label">Date of Birth:</div>
            <div class="value">${dob}</div>
          </div>
        </div>
      </body>
    </html>
  `;

  const mailOptions = {
    from: 'Pre-Registration Form',
    to: process.env.PRE_REGISTER_EMAIL_USER,
    subject: `New Pre-Registration Submission from ${name}`,
    html: htmlContent,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    return NextResponse.json(
      {
        message: 'Pre-registration submitted successfully',
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error sending email', error);
    return NextResponse.json(
      {
        error: 'Error submitting pre-registration',
      },
      { status: 500 },
    );
  }
}
