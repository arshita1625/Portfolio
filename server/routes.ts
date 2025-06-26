import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
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
      console.log("Contact form submission:", {
        name,
        email,
        message,
        timestamp: new Date().toISOString(),
      });

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER, // your Gmail address
          pass: process.env.EMAIL_PASS, // your Gmail App Password
        },
      });

      const mailOptions = {
        from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: `Message from ${name}`,
        text: `You received a new message:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      };
      const info = await transporter.sendMail(mailOptions);
      console.log("Res:", info.response);
      if (info.accepted && info.accepted.length > 0) {
        console.log("Email sent:", info.response);
        return res.json({
          success: true,
          message: "Thank you for your message! I'll get back to you soon.",
        });
      } else {
        console.error(" Email not accepted by SMTP server:", info);
        return res.status(500).json({
          error: "Message could not be sent. Please try again later.",
        });
      }
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
      // 🔐 Updated path: resume now lives in client/attached_assets/
      const resumePath = path.resolve("attached_assets", "Arshita_Software_Developer.pdf");

      if (!fs.existsSync(resumePath)) {
        console.error(" Resume not found at:", resumePath);
        return res.status(404).json({ error: "Resume file not found" });
      }

      // ✅ Set headers for browser view
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", 'attachment; filename="Arshita_Software_Developer.pdf"');

      // ✅ Send file
      return res.sendFile(resumePath, (err) => {
        if (err) {
          console.error(" Error sending file:", err);
          res.status(500).json({ error: "Failed to send resume." });
        }
      });
    } catch (error) {
      console.error(" Resume download error:", error);
      res.status(500).json({ error: "Unexpected server error." });
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
