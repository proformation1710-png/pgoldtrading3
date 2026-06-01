import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { name, email, message } = body

    await resend.emails.send({
      from: "PGOLD <onboarding@resend.dev>",
      to: "proformation1710@gmail.com",
      subject: "New message PGOLD",
      html: `
        <h1>New Contact</h1>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error(error)

    return Response.json(
      { error: "Email failed" },
      { status: 500 }
    )
  }
}