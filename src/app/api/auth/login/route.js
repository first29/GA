import jwt from 'jsonwebtoken'
import { cnn } from "../../conexion/database"
import { serialize } from 'cookie';

export async function POST(req, res, next) {
    const { correo, contraseña } = await req.json();
    try {
        const rows = await cnn.query(`SELECT * FROM login WHERE correo=?`, [correo])

        if (rows[0].length === 0) {
            return Response.json({ error: 'Usuario no existe', status: 404 });
        }
        const usuario = rows[0];
        const contraseñaValida = contraseña === usuario[0].contraseña;

        if (!contraseñaValida) {
            return Response.json({ error: 'Credenciales inválidas', status: 401 });
        }

        const token = jwt.sign({ usuarioId: usuario[0].id }, 'secreto', { expiresIn: '1h' });
        const usuarioNombre = usuario[0].nombres;

        console.log("Ingreso usuario " + usuarioNombre + " con token: " + token);
        const serialized = serialize('myTokenName', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 1000 * 60 * 60 * 24 * 30,
            path: '/'
        })
        //const cookies = await res.setHeader('Set-Cookie', serialized)
        //console.log(cookies)
        return Response.json({ token },{status: 200, headers: {'Set-Cookie': serialized}});
    } catch (error) {
        console.error("Error en la autenticación", error);
        return Response.json({ error: 'Error en el servidor', status: 500 });
    }
}