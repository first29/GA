import { NextResponse } from 'next/server'
import { jwtVerify } from 'jose';

export async function middleware(request) {

  const jwt = request.cookies.get('tukicoockie')
  if (!jwt) return NextResponse.redirect(new URL('/login', request.url))
  try {
    const { payload } = await jwtVerify(jwt.value, new TextEncoder().encode('clave'));
    return NextResponse.next()
  } catch (err) {
    console.log(err)
    return NextResponse.redirect(new URL('/login', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/search', '/', '/Registro'],
}