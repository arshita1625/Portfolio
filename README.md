# Portfolio Application

## Overview

This is a modern portfolio website built for Arshita, a Software Developer and MEng student at the University of Waterloo. The application showcases professional experience, projects, and skills through an interactive single-page application with a sleek, space-themed design.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with custom shadcn/ui components
- **Animations**: Framer Motion for smooth transitions and micro-interactions

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful APIs with JSON responses
- **Middleware**: Custom logging, JSON parsing, and error handling
- **Development**: Hot module replacement via Vite integration

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scroll navigation
- **Hero Section**: Animated typing text with particle background
- **About Section**: Personal information with animated statistics
- **Skills Section**: Technical skills with progress bars and categorization
- **Projects Section**: Featured projects with technology tags and links
- **Experience Section**: Timeline of education and work experience
- **Contact Section**: Contact form with validation and social links

### Backend Endpoints
- `POST /api/contact` - Handles contact form submissions with validation
- `GET /api/resume/download` - Serves resume download functionality
