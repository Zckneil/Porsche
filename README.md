# Porsche 356C Website

A modern, responsive website showcasing the classic 1965 Porsche 356C.

## Features

- Responsive design
- Interactive image gallery
- Detailed specifications
- Contact form with email integration
- Modern animations and transitions

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Resend (for email)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file with the following variables:
   ```
   RESEND_API_KEY=your_resend_api_key
   CONTACT_EMAIL=your_email_address
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Deployment on Vercel

1. Push your code to a Git repository
2. Import your project to Vercel
3. Add the following environment variables in Vercel:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
4. Deploy!

## Environment Variables

- `RESEND_API_KEY`: Your Resend API key for sending emails
- `CONTACT_EMAIL`: The email address where contact form submissions will be sent

## Development

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm start`: Start production server
- `npm run lint`: Run ESLint
