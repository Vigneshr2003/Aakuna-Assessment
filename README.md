# Aakuna Assessment

A modern, responsive website for Aakuna - built with React, Vite, and Tailwind CSS.

## 📋 Overview

This project is a full-featured web application showcasing an automotive company's car models and services. It's built with modern web technologies and best practices for performance, accessibility, and user experience.

**🚀 [Live Demo](https://aakuna-assessment.vercel.app/)**

## ✨ Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Fast Performance**: Built with Vite for lightning-fast development and production builds
- **Modern UI**: Beautiful interface powered by Tailwind CSS and React Icons
- **Structured Components**: Well-organized component architecture for easy maintenance
- **Accessible Navigation**: Top navigation bar and footer for easy site navigation

## 🏗️ Project Structure

```
client/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── home/       # Home page specific components
│   │   │   ├── Header.jsx
│   │   │   ├── CarModelSection.jsx
│   │   │   ├── CarModel.jsx
│   │   │   ├── WelcomeSection.jsx
│   │   │   ├── OurCompany.jsx
│   │   │   └── Contact.jsx
│   │   ├── TopNavbar.jsx
│   │   └── Footer.jsx
│   ├── pages/           # Page components
│   │   └── Home.jsx
│   ├── assets/          # Images and media
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   ├── index.css        # Global styles
│   └── App.css          # App-specific styles
├── index.html           # HTML template
├── package.json         # Project dependencies
├── vite.config.js       # Vite configuration
└── eslint.config.js     # ESLint configuration
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.6
- **Build Tool**: Vite 8.0.12
- **Styling**: Tailwind CSS 4.3.0
- **Icons**: 
  - Lucide React 1.16.0
  - React Icons 5.6.0
- **Code Quality**: ESLint 10.3.0

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Vigneshr2003/Aakuna-Assessment.git
cd Aakuna-Assessment/client
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server with hot module replacement:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:
```bash
npm run build
```

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

### Linting

Check code quality and style:
```bash
npm run lint
```

## 📄 Pages and Components

### Home Page
The main landing page featuring:
- **Header**: Eye-catching hero section
- **Car Model Section**: Showcase of available car models with detailed cards
- **Welcome Section**: Introduction to the company and its values
- **Our Company**: Information about the organization
- **Contact Section**: Contact form and company information

### Navigation
- **Top Navbar**: Primary navigation with links and branding
- **Footer**: Secondary navigation, links, and company information

## 🎨 Styling

The project uses Tailwind CSS for utility-first styling, providing a clean, maintainable approach to CSS. All components are styled responsively for optimal display on mobile, tablet, and desktop devices.

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint to check code quality

## 🌐 Deployment

The project is deployed on **Vercel** and is live at: **https://aakuna-assessment.vercel.app/**

The project includes a `vercel.json` configuration for easy deployment to Vercel.

## 📧 Contact

For more information about Aakuna, please visit the Contact section on the website or check the footer.

## 📄 License

This project is part of an assessment. Please check the repository for license details.

---

**Created by**: Vigneshr2003  
**Repository**: [Aakuna-Assessment](https://github.com/Vigneshr2003/Aakuna-Assessment)  
**Live Demo**: [https://aakuna-assessment.vercel.app/](https://aakuna-assessment.vercel.app/)
