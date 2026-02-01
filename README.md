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

- **Modern Stack**: Built with Next.js 16 (App Router), TypeScript, and Tailwind CSS
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

> **Note for Production:** For production deployments, consider setting up a reverse proxy (like nginx) in front of the application to handle SSL/TLS termination and serve on standard ports 80/443. This provides better security and allows you to serve the application over HTTPS. See the "Production Reverse Proxy Setup" section below for details.

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

### Production Reverse Proxy Setup

For production deployments, it's recommended to use a reverse proxy like nginx to:
- Handle SSL/TLS termination for HTTPS
- Serve the application on standard ports (80/443)
- Add an additional layer of security
- Enable better caching and load balancing capabilities

#### Example nginx Configuration

1.  Install nginx on your server:
    ```bash
    sudo apt update
    sudo apt install nginx
    ```

2.  Create an nginx configuration file (e.g., `/etc/nginx/sites-available/portfolio`):
    ```nginx
    server {
        listen 80;
        server_name yourdomain.com www.yourdomain.com;
        
        # Redirect HTTP to HTTPS
        return 301 https://$host$request_uri;
    }

    server {
        listen 443 ssl http2;
        server_name yourdomain.com www.yourdomain.com;

        # SSL certificates (use Let's Encrypt with certbot)
        ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
        ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;
        
        # SSL configuration (TLSv1.3 for maximum security)
        # For broader compatibility, add TLSv1.2: ssl_protocols TLSv1.2 TLSv1.3;
        ssl_protocols TLSv1.3;
        ssl_prefer_server_ciphers off;

        location / {
            proxy_pass http://localhost:3000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_cache_bypass $http_upgrade;
        }
    }
    ```

3.  Enable the configuration and obtain SSL certificates:
    ```bash
    sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
    sudo apt install certbot python3-certbot-nginx
    sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
    sudo nginx -t
    sudo systemctl restart nginx
    ```

4.  Update your firewall/security group to allow ports 80 and 443:
    - For AWS EC2: Update security group inbound rules
    - For Azure VM: Update Network Security Group rules
    - For local firewall: `sudo ufw allow 'Nginx Full'`

With this setup, your application will be accessible via HTTPS at `https://yourdomain.com`, while nginx handles SSL/TLS termination and proxies requests to your Next.js application running on port 3000.

## 📄 License

MIT License—feel free to use this as a starting point for your own portfolio.

## 🤝 Contact

- Email: [fahim.yusuf06@gmail.com](mailto:fahim.yusuf06@gmail.com)
- GitHub: [@fahim06](https://github.com/fahim06)
- LinkedIn: [fahim06](https://www.linkedin.com/in/fahim06/)
