import CrearUsuario from "../componentes/CrearUsuario"
import CrearUbicacion from "../componentes/CrearUbicacion"
import CrearEquipo from "../componentes/CrearEquipo"
import CrearMovimiento from "../componentes/CrearMovimiento"

export const metadata = {
    title: 'GA Registro',
}
const page = () => {
    return (
        <div className="overflow-y-auto max-h-screen">
            <div>
                <h1>Crear Usario</h1>
                <p>----------------------------</p>
                <CrearUsuario />
                <p>----------------------------</p>
            </div>
            <div>
                <h1>Crear Ubicacion</h1>
                <p>----------------------------</p>
                <CrearUbicacion />
                <p>----------------------------</p>
            </div>
            <div>
                <h1>Crear Equipo</h1>
                <p>----------------------------</p>
                <CrearEquipo />
                <p>----------------------------</p>
            </div>
            <div>
                <h1>Crear Movimiento</h1>
                <p>----------------------------</p>
                <CrearMovimiento />
                <p>----------------------------</p>
            </div>
        </div>
    )
}

export default page