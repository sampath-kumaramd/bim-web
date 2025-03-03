# BIM - The Dating Social Media Landing Page

This is a modern, multilingual dating platform built with Next.js, offering a seamless experience for users worldwide.

## Project Overview

BIM (Better International Match) is a global dating application that connects singles worldwide. This is the landing page of the application. The platform features:

* **Multilingual Support**: Available in English, French, Spanish, German, Italian, and Luxembourgish
* **Responsive Design**: Optimized for all device sizes
* **Pre-registration System**: Allows users to sign up before the official launch
* **Contact Form**: Direct communication channel with the BIM team

## Tech Stack

* **Framework**: Next.js 14
* **Styling**: Tailwind CSS with shadcn/ui components
* **Animation**: Framer Motion
* **Form Handling**: React Hook Form with Zod validation
* **Email**: Nodemailer
* **Google Integration**: Google Drive API for data storage
* **Analytics**: Google Analytics integration
* **Internationalization**: Custom i18n implementation with JSON dictionaries

## Key Features

* **Internationalization**: Full support for multiple languages with easy switching
* **Pre-registration System**: Collects user information and stores it in Google Drive
* **Contact Form**: Secure form with reCAPTCHA verification
* **Cookie Consent**: GDPR-compliant cookie consent management
* **Responsive Design**: Optimized for mobile, tablet, and desktop
* **Legal Information**: Comprehensive legal notices and terms of service

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

* `/app`: Next.js app router pages and API routes
* `/app/[lang]`: Language-specific routes
* `/app/api`: Backend API endpoints
* `/components`: Reusable UI components
* `/lib`: Utility functions and types
* `/locales`: Language dictionaries
* `/public`: Static assets

## Deployment

The easiest way to deploy this application is using the [Vercel Platform](https://vercel.com) from the creators of Next.js.

## Development Practices

* **Code Quality**: ESLint and Prettier for code formatting
* **Git Hooks**: Husky for pre-commit hooks
* **TypeScript**: Strong typing throughout the codebase
* **Component Structure**: Modular, reusable components

## License

© 2024 by BIM Group. All rights reserved