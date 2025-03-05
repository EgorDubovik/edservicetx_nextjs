import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
   try {
      const { name, phone, message } = await req.json();

      // Configure Nodemailer with Gmail SMTP
      const transporter = nodemailer.createTransport({
         service: "gmail",
         auth: {
            user: process.env.EMAIL_USER, // Your Gmail
            pass: process.env.EMAIL_PASS, // Your App Password
         },
      });

      if (!phone || !name || !message) {
         return NextResponse.json({
            success: false,
            message: "Missing required fields",
         });
      }

      // Email content
      const mailOptions = {
         from: process.env.EMAIL_USER,
         to: "edservicetx@gmail.com", // Your Gmail
         subject: `New Contact Form Submission from ${name}`,
         text: `Name: ${name}\nPhone: ${phone}\nMessage: ${message}`,
      };

      // Send email
      await transporter.sendMail(mailOptions);

      return NextResponse.json({
         success: true,
         message: "Email sent successfully!",
      });
   } catch (error) {
      return NextResponse.json(
         { success: false, error: (error as Error).message },
         { status: 500 }
      );
   }
}
