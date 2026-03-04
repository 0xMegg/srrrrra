import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      pool: true,
      maxConnections: 1,
      maxMessages: 1,
      rateDelta: 1000,
      rateLimit: 1,
      connectionTimeout: 5000,
      greetingTimeout: 5000,
      socketTimeout: 5000,
      logger: false,
      debug: false,
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: [process.env.RECIPIENT_EMAIL, process.env.RECIPIENT_EMAIL_2].join(
        ", "
      ),
      subject: `[하이테크] ${data.신청유형} 신청`,
      text: Object.entries(data)
        .filter(([key]) => key !== "emailBody" && key !== "개인정보동의") // emailBody와 개인정보동의 제외
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n\n"), // 줄바꿈을 두 번으로 하여 가독성 향상
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
