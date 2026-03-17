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

  // 1. Email to Salon (Enquiry Notification)
  const salonMailOptions = {
    from: `"Glow Beauty Salon Website" <${process.env.EMAIL_USER}>`,
    replyTo: `"${name}" <${email}>`,
    to: receiver,
    subject: `New Enquiry: ${service || "General Inquiry"} — from ${name}`,
    text: `New appointment enquiry from your website.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nService: ${service || "N/A"}\n\nMessage:\n${message}`,
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

  // 2. Email to Visitor (Auto-Confirmation)
  const visitorMailOptions = {
    from: `"Glow Beauty Salon" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: `We've received your enquiry, ${name.split(" ")[0]}! ✨`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
          <style>
              body { margin: 0; padding: 0; background-color: #fceef5; font-family: sans-serif; }
              .wrapper { width: 100%; background-color: #fceef5; padding: 20px 0; }
              .content { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
              .header { background: linear-gradient(135deg, #f53c91, #b41467); padding: 30px 20px; text-align: center; color: white; }
              .body { padding: 30px 40px; text-align: center; line-height: 1.6; color: #444; }
              .button { display: inline-block; background-color: #f53c91; color: white; padding: 14px 30px; text-decoration: none; border-radius: 50px; font-weight: bold; margin-top: 20px; }
              .footer { padding: 20px; background-color: #fff0f6; text-align: center; font-size: 12px; color: #888; }
          </style>
      </head>
      <body>
          <div class="wrapper">
              <div class="content">
                  <div class="header">
                      <h1 style="margin:0; font-size: 24px;">Glow Beauty Salon</h1>
                      <p style="margin:5px 0 0; opacity: 0.8; font-size: 14px;">Thank you for reaching out!</p>
                  </div>
                  <div class="body">
                      <h2 style="color: #b41467;">Hi ${name.split(" ")[0]},</h2>
                      <p>We've received your enquiry for <strong>${service || "our beauty services"}</strong>. Our team is already looking into it!</p>
                      <p>We will get back to you within 2 hours to confirm your preferred time and slot.</p>
                      <hr style="border: none; border-top: 1px solid #ffe4f0; margin: 25px 0;" />
                      <p style="font-size: 14px; color: #999;">"Your beauty is our passion. We can't wait to see you shine!"</p>
                      <a href="https://saloon-eight-taupe.vercel.app/" class="button">Visit Our Website</a>
                  </div>
                  <div class="footer">
                      <p style="margin-bottom: 12px;">
                          <a href="https://www.instagram.com/" style="color: #f53c91; text-decoration: none; margin: 0 8px;">Instagram</a>
                          <a href="https://www.facebook.com/" style="color: #f53c91; text-decoration: none; margin: 0 8px;">Facebook</a>
                          <a href="https://x.com/" style="color: #f53c91; text-decoration: none; margin: 0 8px;">X (Twitter)</a>
                          <a href="https://www.pinterest.com/" style="color: #f53c91; text-decoration: none; margin: 0 8px;">Pinterest</a>
                      </p>
                      <p>123 Beauty Avenue, Ramdaspeth, Nagpur</p>
                      <p>Phone: +91 12345 67890</p>
                  </div>
              </div>
          </div>
      </body>
      </html>
    `,
  };

  try {
    // Send both emails simultaneously
    await Promise.all([
      transporter.sendMail(salonMailOptions),
      transporter.sendMail(visitorMailOptions)
    ]);
    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Nodemailer Error:", error.code, error.message);
    return res.status(500).json({
      message: "Failed to send email. Please call us directly.",
      error: error.message,
    });
  }
}
