import { cnn } from "../../conexion/database"

export async function POST(req, { params }) {
    const validar = (parametro) => parametro == '¿' ? "" : parametro
    const tipo_param = params.param[0]
    const fecha_param = params.param[1]
    const usuario_param = validar(params.param[2])
    const ticket_param = validar(params.param[3])
    const motivo_param = validar(params.param[4])
    const observacion_param = validar(params.param[5])
    const inconveniente_param = validar(params.param[6])
    const accesorio_param = validar(params.param[7])
    const activo_param = validar(params.param[8])
    try {
        await cnn.query("call crear_movimiento(?,?,?,?,?,?,?,?,?)", [tipo_param, fecha_param, usuario_param, ticket_param, motivo_param, observacion_param, inconveniente_param, accesorio_param, activo_param])
        return Response.json("Movimiento creado correctamente")
    } catch (err) {
        console.log(err)
        return Response.json("error al crear movimiento: " + err)
    }
}

