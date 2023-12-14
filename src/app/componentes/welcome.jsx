const WelcomeComponent = () => {
  return (
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
          <li className="text-neutral-400">Generación de informes y exportación de datos.</li>
          <li className="text-neutral-300">Seguimiento del estado y ubicación de los activos.</li>
        </ul>
      </div>

      <p className="text-lg mt-8 transition-all duration-3000 ease-in-out text-neutral-200">
        Explora las funciones en la barra lateral (Sidenav) para comenzar.
      </p>
    </div>
  );
};

export default WelcomeComponent;
