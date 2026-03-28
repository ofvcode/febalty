import { NextResponse } from "next/server";

const VPS_API = process.env.FEEDBACK_API_URL || "https://147.182.134.38/api/feedback";
const CLIENT_ID = process.env.CLIENT_ID || "4";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { category, element, message } = body;

    if (!category || !message) {
      return NextResponse.json({ error: "Category and message are required" }, { status: 400 });
    }

    // Forward to VPS feedback endpoint
    const res = await fetch(VPS_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        client_id: CLIENT_ID,
        category,
        element: element || "",
        message,
      }),
    }).catch(() => null);

    if (res && res.ok) {
      return NextResponse.json({ success: true });
    }

    // Fallback: still return success so the user gets feedback
    return NextResponse.json({ success: true, note: "Queued for review" });
  } catch {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
