create database inventario;
use inventario;

create table ubicacion(
	id int AUTO_INCREMENT primary key,
    empresa varchar(50) not null,
    sede varchar(50) not null,
    almacen varchar(100),
    sub_area varchar(100) not null,
    posicion int not null
);

create table usuario(
	id int AUTO_INCREMENT primary key,
    dni char(11) not null,
    nombres varchar(200) not null,
    cod_proyecto varchar(100) not null
);

create table equipo(
	id int AUTO_INCREMENT primary key,
	activo int,
    f_adquisicion date,
    depreciacion varchar(50),
    tipo varchar(50),
	marca varchar(50),
    modelo varchar(50),
    serie varchar(50),
    ct_cargador varchar(100),
    etiqueta varchar(50),
    caracteristicas varchar(100),
    operatividad varchar(50),
    estado varchar(50),
    ubicacion INT,
    FOREIGN KEY (ubicacion) REFERENCES ubicacion(id),
    est_garantia varchar(50),
    pago_mensual float
);

CREATE TABLE movimiento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(50),
    fecha DATE,
    usuario INT,
    ticket VARCHAR(100),
    motivo VARCHAR(100),
    observacion TEXT,
    inconveniente TEXT,
    accesorio text,
    activo INT,
    FOREIGN KEY (usuario) REFERENCES usuario(id), 
    FOREIGN KEY (activo) REFERENCES equipo(id) 
);




select * from ubicacion;






-- Procedimiento para crear ubicación
DELIMITER //
CREATE PROCEDURE crear_ubicacion(
    IN empresa_param VARCHAR(50),
    IN sede_param VARCHAR(50),
    IN almacen_param VARCHAR(100),
    IN sub_area_param VARCHAR(100),
    IN posicion_param INT
)
BEGIN
    INSERT INTO ubicacion (empresa, sede, almacen, sub_area, posicion)
    VALUES (empresa_param, sede_param, almacen_param, sub_area_param, posicion_param);
END //
DELIMITER ;

-- Procedimiento para crear usuario
DELIMITER //
CREATE PROCEDURE crear_usuario(
    IN dni_param CHAR(11),
    IN nombres_param VARCHAR(200),
    IN cod_proyecto_param VARCHAR(100)
)
BEGIN
    INSERT INTO usuario (dni, nombres, cod_proyecto)
    VALUES (dni_param, nombres_param, cod_proyecto_param);
END //
DELIMITER ;

-- Procedimiento para crear equipo
DELIMITER //
CREATE PROCEDURE crear_equipo(
    IN activo_param INT,
    IN f_adquisicion_param DATE,
    IN depreciacion_param VARCHAR(50),
    IN tipo_param VARCHAR(50),
    IN marca_param VARCHAR(50),
    IN modelo_param VARCHAR(50),
    IN serie_param VARCHAR(50),
    IN ct_cargador_param VARCHAR(100),
    IN etiqueta_param VARCHAR(50),
    IN caracteristicas_param VARCHAR(100),
    IN operatividad_param VARCHAR(50),
    IN estado_param VARCHAR(50),
    IN ubicacion_param INT,
    IN est_garantia_param VARCHAR(50),
    IN pago_mensual_param FLOAT
)
BEGIN
    INSERT INTO equipo (
        activo, f_adquisicion, depreciacion, tipo, marca, modelo, serie, ct_cargador,
        etiqueta, caracteristicas, operatividad, estado, ubicacion, est_garantia, pago_mensual
    )
    VALUES (
        activo_param, f_adquisicion_param, depreciacion_param, tipo_param, marca_param, 
        modelo_param, serie_param, ct_cargador_param, etiqueta_param, caracteristicas_param, 
        operatividad_param, estado_param, ubicacion_param, est_garantia_param, pago_mensual_param
    );
END //
DELIMITER ;

-- Procedimiento para crear movimiento
DELIMITER //
CREATE PROCEDURE crear_movimiento(
    IN tipo_param VARCHAR(50),
    IN fecha_param DATE,
    IN usuario_param INT,
    IN ticket_param VARCHAR(100),
    IN motivo_param VARCHAR(100),
    IN observacion_param TEXT,
    IN inconveniente_param TEXT,
    IN accesorio_param TEXT,
    IN activo_param INT
)
BEGIN
    INSERT INTO movimiento (
        tipo, fecha, usuario, ticket, motivo, observacion, inconveniente, accesorio , activo
    )
    VALUES (
        tipo_param, fecha_param, usuario_param, ticket_param, motivo_param, 
        observacion_param, inconveniente_param, accesorio_param, activo_param
    );
END //
DELIMITER ;

-- Procedimiento para modificar ubicación
DELIMITER //
CREATE PROCEDURE modificar_ubicacion(
    IN id_param INT,
    IN empresa_param VARCHAR(50),
    IN sede_param VARCHAR(50),
    IN almacen_param VARCHAR(100),
    IN sub_area_param VARCHAR(100),
    IN posicion_param INT
)
BEGIN
    UPDATE ubicacion
    SET 
        empresa = empresa_param,
        sede = sede_param,
        almacen = almacen_param,
        sub_area = sub_area_param,
        posicion = posicion_param
    WHERE id = id_param;
END //
DELIMITER ;

-- Procedimiento para modificar usuario
DELIMITER //
CREATE PROCEDURE modificar_usuario(
    IN id_param INT,
    IN dni_param CHAR(11),
    IN nombres_param VARCHAR(200),
    IN cod_proyecto_param VARCHAR(100)
)
BEGIN
    UPDATE usuario
    SET 
        dni = dni_param,
        nombres = nombres_param,
        cod_proyecto = cod_proyecto_param
    WHERE id = id_param;
END //
DELIMITER ;

-- Procedimiento para modificar equipo
DELIMITER //
CREATE PROCEDURE modificar_equipo(
    IN id_param INT,
    IN activo_param INT,
    IN f_adquisicion_param DATE,
    IN depreciacion_param VARCHAR(50),
    IN tipo_param VARCHAR(50),
    IN marca_param VARCHAR(50),
    IN modelo_param VARCHAR(50),
    IN serie_param VARCHAR(50),
    IN ct_cargador_param VARCHAR(100),
    IN etiqueta_param VARCHAR(50),
    IN caracteristicas_param VARCHAR(100),
    IN operatividad_param VARCHAR(50),
    IN estado_param VARCHAR(50),
    IN ubicacion_param INT,
    IN est_garantia_param VARCHAR(50),
    IN pago_mensual_param FLOAT
)
BEGIN
    UPDATE equipo
    SET 
        activo = activo_param,
        f_adquisicion = f_adquisicion_param,
        depreciacion = depreciacion_param,
        tipo = tipo_param,
        marca = marca_param,
        modelo = modelo_param,
        serie = serie_param,
        ct_cargador = ct_cargador_param,
        etiqueta = etiqueta_param,
        caracteristicas = caracteristicas_param,
        operatividad = operatividad_param,
        estado = estado_param,
        ubicacion = ubicacion_param,
        est_garantia = est_garantia_param,
        pago_mensual = pago_mensual_param
    WHERE id = id_param;
END //
DELIMITER ;

-- Procedimiento para modificar movimiento
DELIMITER //
CREATE PROCEDURE modificar_movimiento(
    IN id_param INT,
    IN tipo_param VARCHAR(50),
    IN fecha_param DATE,
    IN usuario_param INT,
    IN ticket_param VARCHAR(100),
    IN motivo_param VARCHAR(100),
    IN observacion_param TEXT,
    IN inconveniente_param TEXT,
    IN accesorio_param TEXT,
    IN activo_param INT
)
BEGIN
    UPDATE movimiento
    SET 
        tipo = tipo_param,
        fecha = fecha_param,
        usuario = usuario_param,
        ticket = ticket_param,
        motivo = motivo_param,
        observacion = observacion_param,
        inconveniente = inconveniente_param,
        accesorio = accesorio_param,
        activo = activo_param
    WHERE id = id_param;
END //
DELIMITER ;

-- Procedimiento para borrar ubicación
DELIMITER //
CREATE PROCEDURE borrar_ubicacion(
    IN id_param INT
)
BEGIN
    DELETE FROM ubicacion WHERE id = id_param;
END //
DELIMITER ;

-- Procedimiento para borrar usuario
DELIMITER //
CREATE PROCEDURE borrar_usuario(
    IN id_param INT
)
BEGIN
    DELETE FROM usuario WHERE id = id_param;
END //
DELIMITER ;

-- Procedimiento para borrar equipo
DELIMITER //
CREATE PROCEDURE borrar_equipo(
    IN id_param INT
)
BEGIN
 DELETE FROM equipo WHERE id = id_param;
END //
DELIMITER ;

-- Procedimiento para borrar movimiento
DELIMITER //
CREATE PROCEDURE borrar_movimiento(
    IN id_param INT
)
BEGIN
    DELETE FROM movimiento WHERE id = id_param;
END //
DELIMITER ;

CREATE VIEW vista_equipo AS
SELECT
    e.id AS CODIGO,
    e.activo AS ACTIVO,
    e.f_adquisicion AS 'fechaAdquisicion',
    e.depreciacion AS DEPRECIACION,
    e.empresa,
    e.tipo,
    e.marca,
    e.modelo,
    e.serie,
    e.ct_cargador,
    e.etiqueta,
    e.caracteristicas,
    e.sede,
    e.almacen,
    e.sub_area,
    e.estado,
    e.operatividad,
    e.fecha_ingreso,
    e.fecha_salida,
    e.usuario_anterior,
    e.usuario_asignado,
    e.ticket_anterior,
    e.ticket,
    e.proyecto,  
    e.motivo_salida_ingreso,
    e.garantia,
    e.observacion,
     e.accesorio,
    e.inconveniente

FROM (
    SELECT
        eq.id,
        eq.activo,
        eq.f_adquisicion,
        eq.depreciacion,
        eq.tipo,
        eq.marca,
        eq.modelo,
        eq.serie,
        eq.ct_cargador,
        eq.etiqueta,
        eq.caracteristicas,
        ub.empresa,
        ub.sede,
        ub.almacen,
        ub.sub_area,
        eq.estado,
        eq.operatividad,
        mov.fecha AS fecha_ingreso,
        (SELECT fecha FROM movimiento WHERE activo = eq.id AND tipo = 'Salida' ORDER BY fecha DESC LIMIT 1) AS fecha_salida,
        (SELECT GROUP_CONCAT(u.nombres SEPARATOR '/') FROM movimiento m JOIN usuario u ON m.usuario = u.id WHERE m.activo = eq.id AND m.tipo = 'Ingreso') AS usuario_anterior,
        (SELECT u.nombres FROM movimiento m JOIN usuario u ON m.usuario = u.id WHERE m.activo = eq.id ORDER BY m.fecha DESC LIMIT 1) AS usuario_asignado,
        (SELECT GROUP_CONCAT(m.ticket SEPARATOR '/') FROM movimiento m WHERE m.activo = eq.id AND m.tipo = 'Ingreso' ORDER BY m.fecha DESC LIMIT 1) AS ticket_anterior,
        (SELECT m.ticket FROM movimiento m WHERE m.activo = eq.id ORDER BY m.fecha DESC LIMIT 1) AS ticket,
        usr.cod_proyecto AS proyecto,  -- Corregido aquí
        (SELECT m.motivo FROM movimiento m WHERE m.activo = eq.activo ORDER BY m.fecha DESC LIMIT 1) AS motivo_salida_ingreso,
        (SELECT e.est_garantia FROM equipo e WHERE e.activo = eq.activo LIMIT 1) AS garantia,
        (SELECT m.observacion FROM movimiento m WHERE m.activo = eq.activo ORDER BY m.fecha DESC LIMIT 1) AS observacion,
        (SELECT m.accesorio FROM movimiento m WHERE m.activo = eq.activo ORDER BY m.fecha DESC LIMIT 1) AS accesorio,
        (SELECT m.inconveniente FROM movimiento m WHERE m.activo = eq.activo ORDER BY m.fecha DESC LIMIT 1) AS inconveniente

    FROM equipo eq
    LEFT JOIN ubicacion ub ON eq.ubicacion = ub.id
    LEFT JOIN movimiento mov ON mov.activo = eq.id AND mov.tipo = 'Ingreso'
    LEFT JOIN usuario usr ON mov.usuario = usr.id  -- Nueva unión a la tabla usuario
) AS e;
-- drop view vista_equipo;

select * from vista_equipo;
select * from ubicacion;
select * from usuario;
select * from equipo;
select * from movimiento;
select * from vista_equipo where fechaAdquisicion<=2016-10-10 and fechaAdquisicion>=2014-06-14;