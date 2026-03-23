import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // ── Validation ────────────────────────────────────────────────────────────
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }
    if (name.trim().length < 2) {
      return NextResponse.json({ error: "Name must be at least 2 characters." }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }
    if (message.trim().length < 10) {
      return NextResponse.json({ error: "Message must be at least 10 characters." }, { status: 400 });
    }

    // ── Transporter ───────────────────────────────────────────────────────────
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // ── Email to portfolio owner ──────────────────────────────────────────────
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `📬 New message from ${name} — Portfolio`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family:'Georgia',serif;max-width:580px;margin:0 auto;padding:40px 32px;background:#eae8e0;border-radius:12px;">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:32px;">
            <span style="font-size:11px;font-family:sans-serif;text-transform:uppercase;letter-spacing:.1em;color:#7a746c;">Portfolio</span>
            <span style="font-family:sans-serif;font-size:11px;color:#c0b8b0;">·</span>
            <span style="font-size:11px;font-family:sans-serif;text-transform:uppercase;letter-spacing:.1em;color:#cf6c3f;">New Message</span>
          </div>
          <h1 style="font-size:28px;font-weight:900;color:#0f0e0c;margin:0 0 8px;letter-spacing:-.02em;line-height:1.1;">
            Message from ${name}
          </h1>
          <p style="color:#7a746c;font-size:14px;font-family:sans-serif;margin:0 0 32px;">
            Sent via portfolio contact form
          </p>

          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid rgba(15,14,12,0.08);">
                <div style="font-size:11px;font-family:sans-serif;text-transform:uppercase;letter-spacing:.08em;color:#7a746c;margin-bottom:4px;">Name</div>
                <div style="font-size:16px;font-weight:600;color:#0f0e0c;font-family:sans-serif;">${name}</div>
              </td>
            </tr>
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid rgba(15,14,12,0.08);">
                <div style="font-size:11px;font-family:sans-serif;text-transform:uppercase;letter-spacing:.08em;color:#7a746c;margin-bottom:4px;">Email</div>
                <div style="font-size:16px;font-weight:600;font-family:sans-serif;">
                  <a href="mailto:${email}" style="color:#cf6c3f;text-decoration:none;">${email}</a>
                </div>
              </td>
            </tr>
          </table>

          <div style="background:#f5f3ec;border-left:3px solid #cf6c3f;border-radius:0 8px 8px 0;padding:20px 24px;">
            <div style="font-size:11px;font-family:sans-serif;text-transform:uppercase;letter-spacing:.08em;color:#7a746c;margin-bottom:10px;">Message</div>
            <p style="font-size:15px;line-height:1.75;color:#3a3530;margin:0;white-space:pre-wrap;font-family:sans-serif;">${message}</p>
          </div>

          <p style="margin-top:32px;font-size:12px;font-family:sans-serif;color:#b0a89e;">
            Reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
    });

    // ── Auto-reply to sender ──────────────────────────────────────────────────
    await transporter.sendMail({
      from: `"Alex Rivera" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Thanks for reaching out, ${name}!`,
      text: `Hi ${name},\n\nThanks for your message! I've received it and will get back to you within 48 hours.\n\nBest,\nAlex Rivera\nSoftware Developer`,
      html: `
        <div style="font-family:'Georgia',serif;max-width:580px;margin:0 auto;padding:40px 32px;background:#eae8e0;border-radius:12px;">
          <h1 style="font-size:28px;font-weight:900;color:#0f0e0c;margin:0 0 16px;letter-spacing:-.02em;line-height:1.1;">
            Thanks for reaching out, ${name}!
          </h1>
          <p style="color:#3a3530;font-size:16px;line-height:1.75;font-family:sans-serif;font-weight:300;margin:0 0 12px;">
            I've received your message and will get back to you within <strong style="font-weight:600;color:#0f0e0c;">48 hours</strong>.
          </p>
          <p style="color:#3a3530;font-size:16px;line-height:1.75;font-family:sans-serif;font-weight:300;margin:0 0 32px;">
            In the meantime, feel free to explore my projects or connect with me on LinkedIn.
          </p>
          <div style="border-top:1px solid rgba(15,14,12,0.1);padding-top:24px;margin-top:8px;">
            <p style="margin:0;font-size:15px;font-family:sans-serif;font-weight:600;color:#0f0e0c;">Alex Rivera</p>
            <p style="margin:4px 0 0;font-size:13px;font-family:sans-serif;color:#7a746c;text-transform:uppercase;letter-spacing:.06em;">Software Developer</p>
          </div>
        </div>
      `,
    });

    console.log(`✅ Contact form: email sent from ${name} <${email}>`);
    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });

  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    console.error("❌ Contact API error:", msg);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
