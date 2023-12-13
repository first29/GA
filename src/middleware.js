import { NextResponse } from 'next/server'
import {jwtDecode} from 'jwt-decode';
 
// This function can be marked `async` if using `await` inside
export async function middleware(request) {
    const excludedRoutes = ["/search", "/home", "/Registro"];
    if (!excludedRoutes.some(route => request.nextUrl.pathname.includes(route))) return NextResponse.next()
    const jwt = request.cookies.get('myTokenName')
    if(!jwt) return NextResponse.redirect(new URL('/login', request.url))

    //
    /*const decode=jwtDecode(jwt)
    const validar= decode.exp * 1000 > Date.now();
    console.log(decode)
    if(!validar) return NextResponse.redirect(new URL('/login', request.url))
    return NextResponse.next()*/
    return NextResponse.next()
}
 