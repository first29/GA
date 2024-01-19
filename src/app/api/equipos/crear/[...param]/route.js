import { cnn } from "../../conexion/database"

export async function POST(req, { params }) {
    const validar = (parametro) => (parametro === '¿' ? "" : parametro)
    const activo_param = validar(params.param[0])
    const f_adquisicion_param = validar(params.param[1])
    const depreciacion_param = validar(params.param[2])
    const tipo_param = validar(params.param[3])
    const pulgadas_param = validar(params.param[4])
    const processador_param = validar(params.param[5])
    const modelo_processador_param = validar(params.param[6])
    const ram_param = validar(params.param[7])
    const tipo_ram_param = validar(params.param[8])
    const tipo_disco_param = validar(params.param[9])
    const capacidad_disco_param = validar(params.param[10])
    const marca_param = validar(params.param[11])
    const modelo_param = validar(params.param[12])
    const serie_param = validar(params.param[13])
    const ct_cargador_param = validar(params.param[14])
    const etiqueta_param = validar(params.param[15])
    const operatividad_param = validar(params.param[16])
    const estado_param = validar(params.param[17])
    const ubicacion_param = validar(params.param[18])
    const est_garantia_param = validar(params.param[19])
    const pago_mensual_param = validar(params.param[20])

    console.log(params.param)
    try {
        await cnn.query("call crear_equipo(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [
            activo_param,
            f_adquisicion_param,
            depreciacion_param,
            tipo_param,
            pulgadas_param,
            processador_param,
            modelo_processador_param,
            ram_param,
            tipo_ram_param,
            tipo_disco_param,
            capacidad_disco_param,
            marca_param,
            modelo_param,
            serie_param,
            ct_cargador_param,
            etiqueta_param,
            operatividad_param,
            estado_param,
            ubicacion_param,
            est_garantia_param,
            pago_mensual_param
        ]);

        return Response.json("Movimiento creado correctamente")
    } catch (err) {
        console.log(err)
        return Response.json("error al crear movimiento: " + err)
    }
}

