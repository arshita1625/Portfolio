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

### Data Storage Solutions
- **Database**: PostgreSQL configured via Drizzle ORM
- **Schema Management**: Drizzle Kit for migrations and schema definition
- **Connection**: Neon Database serverless PostgreSQL
- **Fallback Storage**: In-memory storage implementation for development

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

### Database Schema
- **Users Table**: Basic user authentication structure (id, username, password)
- **Validation**: Zod schemas for type-safe data validation

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **Server Processing**: Express routes handle requests with validation and logging
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: JSON responses with proper error handling
5. **UI Updates**: React Query manages cache invalidation and UI state

## External Dependencies

### UI Libraries
- Radix UI for accessible component primitives
- Framer Motion for animations
- Lucide React for icons

### Development Tools
- TypeScript for type safety
- ESLint and Prettier for code quality
- PostCSS with Autoprefixer for CSS processing

### Database & Infrastructure
- Neon Database for serverless PostgreSQL
- Drizzle ORM for database operations
- Connect-pg-simple for session management

## Deployment Strategy

### Development Environment
- **Port**: 5000
- **Hot Reload**: Vite dev server with HMR
- **Database**: Environment-based DATABASE_URL configuration

### Production Build
- **Frontend**: Static assets built to `dist/public`
- **Backend**: Server bundled with esbuild to `dist/index.js`
- **Deployment**: Autoscale deployment target on Replit
- **Environment**: NODE_ENV-based configuration

### Build Process
1. `npm run build` - Builds both frontend and backend
2. Frontend assets compiled via Vite
3. Server code bundled with esbuild
4. Static file serving in production mode

## User Preferences

Preferred communication style: Simple, everyday language.