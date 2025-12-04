# Sound360 - Professional Audio, Lighting & Visual Solutions

Official website for Sound360, Cape Town's premier event production company specializing in professional audio, lighting, and visual solutions.

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone or extract the project
2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Set up environment variables:
\`\`\`bash
cp .env.example .env.local
\`\`\`

4. Add your Resend API key to `.env.local`:
\`\`\`
RESEND_API_KEY=your_resend_api_key_here
\`\`\`

5. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Environment Variables

- `RESEND_API_KEY` - Required for contact form email functionality

## Tech Stack

- Next.js 14 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui components
- Resend for email delivery

## Project Structure

\`\`\`
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── services/          # Services pages
│   ├── gallery/           # Gallery page
│   ├── contact/           # Contact page
│   └── actions/           # Server actions
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── ...               # Custom components
├── public/               # Static assets
│   └── images/          # Images
└── hooks/               # Custom React hooks
\`\`\`

## Features

- Responsive design
- Professional service showcases
- Contact form with email integration
- WhatsApp integration
- SEO optimized
- Performance optimized images

## Support

For support, email info@sound360.co.za or call +27 67 111 4362

## License

Copyright © 2025 Sound360. All rights reserved.
# sound360final
