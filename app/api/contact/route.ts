export async function POST(req: Request) {
  console.log("API CONTACT WORKS")

  return Response.json({
    success: true,
  })
}