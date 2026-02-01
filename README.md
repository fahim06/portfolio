# Fahim's Portfolio

A professional, modern personal portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## 📑 Table of Contents

- [🚀 Features](#-features)
- [📁 Project Structure](#-project-structure)
- [🛠️ Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [System Requirements](#system-requirements)
  - [Installation](#installation)
  - [Email Setup (Contact Form)](#email-setup-contact-form)
  - [Build for Production](#build-for-production)
  - [Start Production Server](#start-production-server)
- [🎨 Design System](#-design-system)
- [📝 Customization](#-customization)
- [🚢 Deployment](#-deployment)
  - [Vercel (Recommended)](#vercel-recommended)
  - [🐳 Docker Support](#-docker-support)
  - [AWS Deployment (using Docker Compose)](#aws-deployment-using-docker-compose)
  - [Azure Deployment (using Docker Compose)](#azure-deployment-using-docker-compose)
- [📄 License](#-license)
- [🤝 Contact](#-contact)

## 🚀 Features

- **Modern Stack**: Built with Next.js 15 (App Router), TypeScript, and Tailwind CSS
- **Dark/Light Mode**: System-aware theme with manual toggle
- **Responsive Design**: Optimized for all screen sizes
- **Semantic HTML**: Accessible markup with proper ARIA attributes
- **Performance Optimized**: Fast load times with optimized assets
- **Original Design**: Custom design system with no templates or UI kits
- **Dockerized**: Ready for containerized deployment (AWS, etc.)

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
├── tsconfig.json
├── Dockerfile                  # Docker configuration
├── docker-compose.yml          # Docker Compose configuration
└── .dockerignore
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn
- Docker (optional, for containerization)

### System Requirements

To run this project locally, your system should meet the following requirements:

- **Operating System**: Windows, macOS, or Linux
- **RAM**: Minimum 4GB (8GB recommended)
- **Disk Space**: At least 1GB of free space
- **Processor**: Dual-core processor or better

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

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Deploy with default settings

### 🐳 Docker Support

This project includes a multi-stage `Dockerfile` optimized for production and a `docker-compose.yml` file for easy deployment.

#### Build and Run with Docker Compose

1.  Create a `.env` file in the root directory with your environment variables:
    ```env
    EMAIL_USER=your-email@gmail.com
    EMAIL_PASS=your-app-password
    EMAIL_TO=your-email@gmail.com
    ```

2.  Run the application:
    ```bash
    docker-compose up -d --build
    ```

The application will be available at `http://localhost:3000`.

### AWS Deployment (using Docker Compose)

You can deploy this application to an AWS EC2 instance using Docker Compose.

1.  **Launch an EC2 Instance**:
    *   Launch an instance (e.g., Ubuntu or Amazon Linux 2).
    *   Ensure the security group allows inbound traffic on port `3000` (and `80`/`443` if using a reverse proxy).

2.  **Install Docker & Docker Compose**:
    *   Connect to your instance via SSH.
    *   Install Docker and Docker Compose following the official documentation.

3.  **Deploy**:
    *   Clone your repository to the server.
    *   Create the `.env` file with your secrets.
    *   Run:
        ```bash
        docker-compose up -d --build
        ```

### Azure Deployment (using Docker Compose)

You can deploy to Azure using a Virtual Machine or App Service (which supports Compose).

#### Option 1: Azure Virtual Machine
Similar to AWS EC2:
1.  Create a Linux VM in Azure.
2.  Open port `3000` in the networking settings.
3.  SSH into the VM, install Docker/Compose, clone the repo, and run `docker-compose up -d --build`.

#### Option 2: Azure App Service (Docker Compose)
1.  Create a Web App for Containers.
2.  Choose **Docker Compose** as the source.
3.  Upload your `docker-compose.yml` file (or link to your registry).
4.  Set your environment variables in the App Service configuration.

## 📄 License

MIT License—feel free to use this as a starting point for your own portfolio.

## 🤝 Contact

- Email: [fahim.yusuf06@gmail.com](mailto:fahim.yusuf06@gmail.com)
- GitHub: [@fahim06](https://github.com/fahim06)
- LinkedIn: [fahim06](https://www.linkedin.com/in/fahim06/)
