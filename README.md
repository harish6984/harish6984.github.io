
# Harish - DevOps & Cloud Engineer Portfolio

A modern, responsive portfolio website showcasing DevOps and Cloud Engineering expertise.

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Dark Theme**: Developer-friendly dark theme with blue/teal accents
- **Interactive Navigation**: Smooth scrolling navigation with active section highlighting
- **Typing Animation**: Dynamic typing effect on hero section
- **Project Showcase**: Featured projects with links to GitHub and live demos
- **Skills Display**: Comprehensive skills overview with proficiency indicators
- **Blog Section**: Ready for technical blog posts
- **Contact Form**: Professional contact form and information
- **Performance Optimized**: Fast loading with modern web standards

## 🛠️ Tech Stack

- **React 18** - Modern React with TypeScript
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe development

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.tsx    # Fixed navigation with smooth scrolling
│   ├── Hero.tsx         # Hero section with typing animation
│   ├── About.tsx        # About section with bio and overview
│   ├── Skills.tsx       # Skills showcase with categories
│   ├── Projects.tsx     # Featured projects portfolio
│   ├── Blog.tsx         # Blog posts section
│   ├── Contact.tsx      # Contact form and information
│   └── Footer.tsx       # Footer with social links
├── pages/
│   ├── Index.tsx        # Main page combining all sections
│   └── NotFound.tsx     # 404 error page
├── lib/
│   └── utils.ts         # Utility functions
├── hooks/
│   └── use-toast.ts     # Toast notification hook
├── index.css            # Global styles and design system
└── main.tsx             # App entry point
```

## 🎨 Design System

### Colors
- **Primary**: Deep blue (#0ea5e9) for DevOps branding
- **Secondary**: Teal green (#10b981) for Cloud branding
- **Background**: Dark theme with subtle gradients
- **Text**: High contrast for accessibility

### Typography
- **Primary Font**: Inter (clean, modern sans-serif)
- **Code Font**: JetBrains Mono (for technical content)

### Animations
- Fade-in animations for sections
- Typing effect on hero tagline
- Hover effects on cards and buttons
- Smooth scrolling navigation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd harish-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:8080`

### Building for Production

```bash
# Build the project
npm run build

# Preview the build locally
npm run preview
```

## 🌐 Deploying to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. **Create `.github/workflows/deploy.yml`**:
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: '18'
             cache: 'npm'
         - run: npm ci
         - run: npm run build
         - uses: actions/deploy-pages@v4
           with:
             path: ./dist
   ```

2. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: GitHub Actions
   - Push to main branch to trigger deployment

### Option 2: Manual Deployment

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "gh-pages -d dist"

# Build and deploy
npm run build
npm run deploy
```

## 📝 Customization

### Personal Information
Update the following files with your information:

1. **src/components/Hero.tsx**: Name and tagline
2. **src/components/About.tsx**: Bio and experience
3. **src/components/Contact.tsx**: Contact information and links
4. **src/components/Projects.tsx**: Your actual projects
5. **index.html**: Title and meta tags

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add to `src/pages/Index.tsx`
3. Update navigation in `src/components/Navigation.tsx`

### Styling
- Modify `src/index.css` for global styles
- Update `tailwind.config.ts` for theme customization
- Colors are defined in CSS custom properties

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large**: > 1400px

## ⚡ Performance Features

- **Code Splitting**: Automatic code splitting with Vite
- **Tree Shaking**: Dead code elimination
- **Image Optimization**: Optimized images and icons
- **Lazy Loading**: Components load as needed
- **Minimal Bundle**: Only necessary code included

## 📧 Contact & Support

For questions or support, please reach out:
- **Email**: harish@example.com
- **GitHub**: [github.com/harish](https://github.com/harish)
- **LinkedIn**: [linkedin.com/in/harish](https://linkedin.com/in/harish)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
