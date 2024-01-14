"use client"
import { useSearchParams } from 'next/navigation';
import CrearUsuario from "../componentes/CrearUsuario"
import CrearUbicacion from "../componentes/CrearUbicacion"
import CrearEquipo from "../componentes/CrearEquipo"
import CrearMovimiento from "../componentes/CrearMovimiento"


function registro() {
    const searchParams = useSearchParams();
    const category = searchParams.get('category')
    return (
        <div className="">
            {category == 4 ? (<div>
                <h1>Crear Movimiento</h1>
                <p>----------------------------</p>
                <CrearMovimiento />
            </div>) : (
                category == 2 ? (<div>
                    <h1>Crear Ubicacion</h1>
                    <p>----------------------------</p>
                    <CrearUbicacion />
                </div>) : (
                    category == 3 ? (<div>
                        <h1>Crear Equipo</h1>
                        <p>----------------------------</p>
                        <CrearEquipo />
                    </div>) : (<div>
                        <h1>Crear Usario</h1>
                        <p>----------------------------</p>
                        <CrearUsuario />
                    </div>)
                )
            )}
        </div>
    )
}



export default registro