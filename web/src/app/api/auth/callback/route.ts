import { api } from '@/lib/api'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url) // URLSearchParams object
  const code = searchParams.get('code') // GitHub OAuth code from GitHub redirect URL

  const registerResponse = await api.post('/register', {
    code,
  }) // Register user with GitHub OAuth code

  const { token } = registerResponse.data // User's token

  const redirectURL = new URL('/', request.url) // Redirect to home page

  const cookieExpiresInSeconds = 60 * 60 * 24 * 30

  return NextResponse.redirect(redirectURL, { // Redirect to home page
    headers: {
      'Set-Cookie': `token=${token}; Path=/; max-age=${cookieExpiresInSeconds};`, // Set token cookie
    },
  })
}