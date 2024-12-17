import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // 이메일 전송을 위한 transporter 설정
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 디버깅을 위해 에러 로깅 추가
    try {
      // verify connection configuration
      await transporter.verify();
      console.log("Server is ready to take our messages");
    } catch (error) {
      console.error("SMTP connection error:", error);
    }

    // 이메일 내용 구성
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: "새로운 상담 신청이 접수되었습니다",
      html: `
        <h2>상담 신청 내용</h2>
        <ul>
          ${Object.entries(data)
            .map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`)
            .join("")}
        </ul>
      `,
    };

    // 이메일 전송
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
