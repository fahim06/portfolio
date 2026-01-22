# Fahim's Portfolio

A professional, modern personal portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

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

## 🐳 Docker Support

This project includes a multi-stage `Dockerfile` optimized for production.

### Build the Image

```bash
docker build -t portfolio .
```

### Run the Container

```bash
docker run -p 3000:3000 portfolio
```

The application will be available at `http://localhost:3000`.

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

### AWS Deployment Advice

This project is container-ready and can be easily deployed to AWS using services like **App Runner** or **ECS (Elastic Container Service)**.

#### AWS Resource Requirements (Recommended)
For optimal performance on AWS, we recommend the following configuration:

- **vCPU**: 0.5 vCPU or 1 vCPU
- **Memory**: 1 GB or 2 GB
- **Instance Type (if using EC2)**: t3.micro or t3.small

#### Option 1: AWS App Runner (Simplest)
App Runner is a fully managed service that makes it easy to deploy containerized web applications.

1.  **Push to ECR**: Build your Docker image and push it to Amazon Elastic Container Registry (ECR).
    ```bash
    # Login to ECR
    aws ecr get-login-password --region <region> | docker login --username AWS --password-stdin <account-id>.dkr.ecr.<region>.amazonaws.com
    
    # Build and Tag
    docker build -t portfolio .
    docker tag portfolio:latest <account-id>.dkr.ecr.<region>.amazonaws.com/portfolio:latest
    
    # Push
    docker push <account-id>.dkr.ecr.<region>.amazonaws.com/portfolio:latest
    ```
2.  **Create Service**: Go to the AWS App Runner console and create a service using your ECR image.
3.  **Configure**: Set the port to `3000` and add your environment variables (e.g., `EMAIL_USER`, `EMAIL_PASS`) in the configuration settings.

#### Option 2: Amazon ECS (More Control)
For more control over infrastructure or if you are already using ECS:

1.  **Push to ECR**: Same as above.
2.  **Task Definition**: Create a Task Definition in ECS.
    *   Select **Fargate** launch type.
    *   Add your container image URI.
    *   Map port `3000`.
    *   Define environment variables.
3.  **Service**: Create a Service based on your Task Definition.
4.  **Load Balancer**: Ideally, put an Application Load Balancer (ALB) in front of your service to handle SSL termination and traffic routing.

**Note**: Since `NEXT_PUBLIC_` variables are inlined at build time, if you need different values for different environments, you should provide them as build arguments (`--build-arg`) during the Docker build process.

## 📄 License

MIT License—feel free to use this as a starting point for your own portfolio.

## 🤝 Contact

- Email: [fahim.yusuf06@gmail.com](mailto:fahim.yusuf06@gmail.com)
- GitHub: [@fahim06](https://github.com/fahim06)
- LinkedIn: [fahim06](https://www.linkedin.com/in/fahim06/)
