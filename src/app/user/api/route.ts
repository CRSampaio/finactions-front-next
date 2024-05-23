import { setTimeout } from "timers"

export async function GET() {
  return Response.json({ message: 'Hello world!' })
}