import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate the required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Simulate processing delay (e.g., sending email, saving to DB)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In a real application, you would integrate with an email service like Resend, SendGrid, or Nodemailer here.
    // Example:
    // await resend.emails.send({
    //   from: 'Portfolio <onboarding@resend.dev>',
    //   to: 'your-email@example.com',
    //   subject: subject || `New Contact Form Submission from ${name}`,
    //   text: message,
    //   reply_to: email,
    // });

    console.log("API Contact Form Submission:", {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
