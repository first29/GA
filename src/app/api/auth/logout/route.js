import { verify } from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function GET(req, res) {
    // Intenta obtener el token de las cookies
    const token = req.cookies.get("myTokenName").value;
    if(!token) return Response.json({ message: "sin token" }, { status: 401 });
    // Intenta verificar el token con la clave secreta
    try {
        verify(token, "clave");
        const serialized = serialize('myTokenName', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 0,
            path: '/'
        })
        // Si la verificación es exitosa, responde con un estado autorizado (200)
        return Response.json({ message: "Se cerro la sesion" },{status: 200, headers: {'Set-Cookie': serialized}});
    } catch (e) {
        console.log(e)
        // Si hay un error en la verificación, responde con un estado no autorizado (401)
        return Response.json({ message: e.message }, { status: 401 });
    }
}
 