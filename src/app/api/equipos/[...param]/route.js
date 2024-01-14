import { cnn } from "../../conexion/database"
import { enviarCorreo } from "./funciones"

const buscar = async (fma, fme, serie, ticket, usuario, etiqueta) => {
    console.log(fma, fme, serie, ticket, usuario, etiqueta)
    const result = await cnn.query("call buscar(?,?,?,?,?,?)", [fme, fma, serie, ticket, usuario, etiqueta])
    if (result.length === 0) return ({ message: "no se encontraron el activos" })
    else return { data: result[0] }
}
const validar = (parametro) => parametro == '¿' ? "" : parametro

export async function GET(req, { params }) {
    const fma = params.param[0]
    const fme = params.param[1]
    const serie = validar(params.param[2])
    const ticket = validar(params.param[3])
    const usuario = validar(params.param[4])
    const etiqueta = validar(params.param[5])
    try {
        const result = await buscar(fma, fme, serie, ticket, usuario, etiqueta);
        return Response.json(result.data);
    } catch (err) {
        return Response.json({ err });
    }
}


export async function POST(req, { params }) {
    const fma = params.param[0]
    const fme = params.param[1]
    const serie = validar(params.param[2])
    const ticket = validar(params.param[3])
    const usuario = validar(params.param[4])
    const etiqueta = validar(params.param[5])
    try {
        const result = await cnn.query("call buscar(?,?,?,?,?,?)", [fme, fma, serie, ticket, usuario, etiqueta])
        if (result[0].length === 0) return Response.json({ message: "no se encontraron el activos" }, { status: 404 })
        await enviarCorreo("rchacon@canvia.com", "prueba de activos", result[0][0], "")
        return Response.json("Correo enviado correctamente")
    } catch (err) {
        console.log(err)
        return Response.json("error al mandar correo")
    }
}

