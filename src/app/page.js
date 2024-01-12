export const metadata = {
  title: 'GA Home',
}
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="mt-6 mb-16 text-center mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-neutral-800">
            ¡Bienvenido al Sistema Gestor de Activos!
          </h1>
          <p className="text-lg text-neutral-600">
            Gestiona y administra eficientemente los activos de la empresa.
          </p>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-2 text-neutral-800">Funciones Principales:</h2>
            <ul className="list-disc text-lg text-left text-neutral-700">
              <li className="transition-all duration-3000 ease-in-out">Registro y búsqueda de activos.</li>
              <li className="text-neutral-300">Generación de informes y exportación de datos.</li>
              <li className="text-neutral-200">Seguimiento del estado y ubicación de los activos.</li>
            </ul>
          </div>

          <p className="text-lg mt-8 transition-all duration-3000 ease-in-out text-white">
            Explora las funciones en la barra lateral (Sidenav) para comenzar.
          </p>
        </div>
      </div>
    </main>
  )
}
