import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { fullName, email, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: "UW PRISM Website <inquiry@uwprism.dev>", // Update this with our domain
      to: ["uwprism@gmail.com"],
      subject: `New Inquiry from ${fullName}`,
      replyTo: email,
      html: `
        <h2>New Inquiry</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h3>Message:</h3>
        <p>${message}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json(
      { message: "Email sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
