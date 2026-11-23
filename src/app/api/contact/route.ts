import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Message from "@/models/Message";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Please submit a valid JSON message." },
      { status: 400 },
    );
  }

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return NextResponse.json(
      { error: "Please submit your contact details and message." },
      { status: 400 },
    );
  }

  const body = payload as Record<string, unknown>;
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const subject = typeof body.subject === "string" ? body.subject.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (
    name.length < 2 ||
    name.length > 80 ||
    !emailPattern.test(email) ||
    email.length > 254 ||
    subject.length < 2 ||
    subject.length > 120 ||
    message.length < 10 ||
    message.length > 4000
  ) {
    return NextResponse.json(
      { error: "Check your name, email, subject, and message, then try again." },
      { status: 400 },
    );
  }

  if (!process.env.MONGODB_URI) {
    return NextResponse.json(
      { error: "The contact form is not configured yet. Please email Zahid directly." },
      { status: 503 },
    );
  }

  try {
    await connectToDatabase();
    await Message.create({ name, email, subject, message });

    return NextResponse.json({ message: "Thanks — your message has been sent." }, { status: 201 });
  } catch (error) {
    console.error("Could not save a portfolio contact message.", error);
    return NextResponse.json(
      { error: "Your message could not be saved right now. Please try again later." },
      { status: 503 },
    );
  }
}
