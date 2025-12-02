# Fahim's Portfolio

A professional, modern personal portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Stack**: Built with Next.js 15 (App Router), TypeScript, and Tailwind CSS
- **Dark/Light Mode**: System-aware theme with manual toggle
- **Responsive Design**: Optimized for all screen sizes
- **Semantic HTML**: Accessible markup with proper ARIA attributes
- **Performance Optimized**: Fast load times with optimized assets
- **Original Design**: Custom design system with no templates or UI kits

## 📁 Project Structure

```text
portfolio/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/              # About page
│   │   ├── contact/            # Contact page with form
│   │   ├── experience/         # Experience & education
│   │   ├── projects/           # Projects showcase
│   │   ├── globals.css         # Global styles & design tokens
│   │   ├── layout.tsx          # Root layout
│   │   ├── not-found.tsx       # 404 page
│   │   └── page.tsx            # Home page
│   ├── components/             # React components
│   │   ├── ui/                 # Reusable UI primitives
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Section.tsx
│   │   │   └── index.ts
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── ThemeProvider.tsx
│   │   └── index.ts
│   └── data/                   # Static content data
│       ├── content.ts          # All site content
│       └── index.ts
├── public/                     # Static assets
│   └── fahim-cv.pdf            # CV download (add your own)
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/fahim06/portfolio.git
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables for the contact form:

   ```bash
   cp .env.example .env.local
   ```

   Then edit `.env.local` with your Gmail credentials (see Email Setup below).

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Email Setup (Contact Form)

To enable the contact form to send emails:

1. Use a Gmail account
2. Enable 2-Step Verification at <https://myaccount.google.com/security>
3. Generate an App Password:
    - Go to <https://myaccount.google.com/apppasswords>
    - Select "Mail" and generate a password

4. Add these to your `.env.local`:

   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-16-char-app-password
   EMAIL_TO=your-email@gmail.com
   ```

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## 🎨 Design System

### Color Tokens

The design system uses CSS custom properties for theming:

- **Neutral Palette**: `--neutral-50` through `--neutral-950`
- **Accent Color**: Deep teal (`--accent-400` through `--accent-900`)
- **Semantic Colors**: `--background`, `--foreground`, `--border`, etc.

### Typography Scale

- Font family: Geist Sans (variable font)
- Size scale: `--font-size-xs` through `--font-size-6xl`
- Line heights: `--leading-tight`, `--leading-normal`, `--leading-relaxed`

### Spacing

Consistent spacing scale from `--space-1` (0.25rem) to `--space-32` (8rem)

## 📝 Customization

### Updating Content

All site content is stored in `src/data/content.ts`. Update this file to customize:

- Personal information
- Engineering values
- Skills
- Work experience
- Education
- Projects

### Adding Your CV

Place your CV PDF file in the `public` directory and update the `cvUrl` in `content.ts`:

```typescript
export const personalInfo = {
    // ...
    cvUrl: "/your-cv-filename.pdf",
};
```

### Customizing Colors

Modify the CSS custom properties in `src/app/globals.css` to change the color scheme.

## 🚢 Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Deploy with default settings

Alternatively, you can deploy to any platform that supports Next.js.

## 📄 License

MIT License—feel free to use this as a starting point for your own portfolio.

## 🤝 Contact

- Email: <fahim.yusuf06@gmail.com>
- GitHub: [@fahim06](https://github.com/fahim06)
- LinkedIn: [fahim06](https://www.linkedin.com/in/fahim06/)
