import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, service, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ message: "Name, Email, and Message are required." });
  }

  // Validate EMAIL_USER is configured
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error("Missing EMAIL_USER or EMAIL_PASS environment variables.");
    return res.status(500).json({ message: "Server email configuration is missing. Please contact us directly." });
  }

  // Create Gmail transporter using App Password
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const receiver = process.env.RECEIVER_EMAIL || process.env.EMAIL_USER;

  const mailOptions = {
    // IMPORTANT: Gmail SMTP requires 'from' to be the authenticated sender (EMAIL_USER).
    // Setting 'from' to the visitor's email causes a 530/550 SMTP auth rejection.
    // We show the visitor name in the display portion for readability.
    from: `"Glow Beauty Salon Website" <${process.env.EMAIL_USER}>`,
    replyTo: `"${name}" <${email}>`,  // Replying goes straight to the visitor
    to: receiver,
    subject: `New Enquiry: ${service || "General Inquiry"} — from ${name}`,
    text: `New appointment enquiry from your website.

Name:    ${name}
Email:   ${email}
Phone:   ${phone || "N/A"}
Service: ${service || "N/A"}

Message:
${message}
`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ffc9e1; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #f53c91, #b41467); padding: 24px 32px;">
          <h2 style="margin: 0; color: #fff; font-size: 20px;">✨ New Appointment Enquiry</h2>
          <p style="margin: 6px 0 0; color: #ffd6eb; font-size: 14px;">Via Glow Beauty Salon Website</p>
        </div>
        <div style="padding: 28px 32px; background: #fff;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #888; font-size: 14px; width: 90px;">Name</td><td style="padding: 8px 0; font-weight: 600; color: #111;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #888; font-size: 14px;">Email</td><td style="padding: 8px 0; font-weight: 600; color: #111;"><a href="mailto:${email}" style="color: #d5237b;">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #888; font-size: 14px;">Phone</td><td style="padding: 8px 0; font-weight: 600; color: #111;">${phone || "—"}</td></tr>
            <tr><td style="padding: 8px 0; color: #888; font-size: 14px;">Service</td><td style="padding: 8px 0; font-weight: 600; color: #d5237b;">${service || "General Inquiry"}</td></tr>
          </table>
          <hr style="border: none; border-top: 1px solid #ffe4f0; margin: 20px 0;" />
          <p style="color: #888; font-size: 13px; margin: 0 0 8px;">Message:</p>
          <p style="color: #333; font-size: 15px; line-height: 1.6; margin: 0;">${message.replace(/\n/g, "<br>")}</p>
        </div>
        <div style="padding: 16px 32px; background: #fff0f6; text-align: center; font-size: 12px; color: #aaa;">
          Reply to this email to contact ${name} directly at ${email}
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Nodemailer Error:", error.code, error.message);
    return res.status(500).json({
      message: "Failed to send email. Please call us directly at +91 12345 67890.",
      error: error.message,
    });
  }
}
