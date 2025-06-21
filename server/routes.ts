import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({
          error: "Missing required fields: name, email, and message are required"
        });
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          error: "Invalid email format"
        });
      }

      // Here you would typically send an email using a service like SendGrid, Nodemailer, etc.
      // For now, we'll just log the contact information
      console.log('Contact form submission:', { name, email, message, timestamp: new Date().toISOString() });

      res.json({
        success: true,
        message: "Thank you for your message! I'll get back to you soon."
      });
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({
        error: "Failed to send message. Please try again later."
      });
    }
  });

  // Resume download endpoint
  app.get("/api/resume/download", async (req, res) => {
    try {
      const resumePath = path.join(process.cwd(), 'client/public/Arshita_Resume.pdf');

      // Check if file exists
      if (!fs.existsSync(resumePath)) {
        return res.status(404).json({
          error: "Resume file not found"
        });
      }

      // Set proper headers for PDF download
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="Arshita_Resume.pdf"');

      // Send the PDF file
      res.sendFile(resumePath);
    } catch (error) {
      console.error('Resume download error:', error);
      res.status(500).json({
        error: "Failed to download resume. Please try again later."
      });
    }
  });

  // Get portfolio stats/data
  app.get("/api/portfolio/stats", async (req, res) => {
    try {
      const stats = {
        yearsExperience: 1.5,
        projectsCompleted: 10,
        applicationsDeployed: 5,
        researchPublications: 1,
        technologiesUsed: 15,
        clientsSatisfied: 100
      };

      res.json(stats);
    } catch (error) {
      console.error('Portfolio stats error:', error);
      res.status(500).json({
        error: "Failed to load portfolio statistics"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
