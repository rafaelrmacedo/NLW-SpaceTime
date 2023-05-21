import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {

  const redirectURL = new URL('/', request.url) // Redirect to home page

  return NextResponse.redirect(redirectURL, { // Redirect to home page
    headers: {
      'Set-Cookie': `token=; Path=/; max-age=0;`, // Set token cookie
    },
  })
}