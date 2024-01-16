import { cnn } from "../../conexion/database"

export async function POST(req, { params }) {
    const validar = (parametro) => parametro == '¿' ? "" : parametro
    const empresa = params.param[0]
    const sede = params.param[1]
    const almacen = validar(params.param[2])
    const subarea = validar(params.param[3])
    const posicion = validar(params.param[4])
    console.log(empresa,sede,almacen,subarea,posicion)
    try {
        const result = await cnn.query("call crear_ubicacion(?,?,?,?,?)", [empresa, sede, almacen, subarea, posicion])
        return Response.json("Ubicacion creada correctamente")
    } catch (err) {
        console.log(err)
        return Response.json("error al crear ubicacion: "+err)
    }
}

