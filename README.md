# Christopher Cruz - Game Developer Portfolio

A modern, responsive portfolio website showcasing game development projects, skills, and experience.

## Features

- Responsive design with modern UI/UX
- Interactive project showcase
- Skills visualization
- Contact form with email functionality
- Smooth animations and transitions
- Dark mode support

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Nodemailer

## Getting Started

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file with your email configuration:
```
EMAIL_USER=your.email@outlook.com
EMAIL_PASS=your_app_password
```

4. Run the development server:
```bash
npm run dev
```

## Deployment

This project is configured for deployment on Vercel. Follow these steps to deploy:

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Go to [Vercel](https://vercel.com) and sign in with your GitHub account

3. Click "New Project" and import your repository

4. Configure your environment variables in the Vercel dashboard:
   - Add `EMAIL_USER` and `EMAIL_PASS` from your `.env.local` file

5. Click "Deploy"

Your site will be live at `https://your-project-name.vercel.app`

## Customization

- Update project information in `app/data/projects.ts`
- Modify styling in `app/globals.css`
- Edit components in the `app/components` directory

## License

MIT
