import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    console.log("API WORKS")

    const body = await req.json()

    await resend.emails.send({
      from: "PGOLD <onboarding@resend.dev>",
      to: "proformation1710@gmail.com",
      subject: "Test PGOLD",
      html: "<h1>Email OK</h1>",
    })

    return Response.json({
      success: true,
    })
  } catch (error) {
    console.log(error)

    return Response.json(
      { error: "Email failed" },
      { status: 500 }
    )
  }
}