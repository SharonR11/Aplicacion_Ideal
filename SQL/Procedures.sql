USE `ideal` ;
-- -----------------------------------------------------
-- Procedure `ideal`.`RegistrarArrendador`
-- -----------------------------------------------------
DELIMITER //

CREATE PROCEDURE RegistrarArrendador(
    IN p_Nombres VARCHAR(100),
    IN p_Apellidos VARCHAR(100),
    IN p_DNI INT,
    IN p_Correo VARCHAR(50),
    IN p_Telefono INT,
    IN p_Direccion VARCHAR(105),
    IN p_Password VARCHAR(100),
    IN p_ContratoArrendamiento LONGBLOB,
    IN p_DocumentacionLegal LONGBLOB
)
BEGIN
	DECLARE usuario_id INT;
    DECLARE token_generado VARCHAR(100);
    -- Fecha de creación del usuario
    DECLARE fecha_creacion DATETIME;
    SET fecha_creacion = NOW();
    
    -- Insertar el nuevo arrendador
    INSERT INTO Usuarios (Nombres, Apellidos, DNI, Correo, Telefono, Direccion, Password, RolID, FechaCreacion, ContratoArrendamiento, DocumentacionLegal, EstadoSesion, CorreoVerificado, Estado)
    VALUES (p_Nombres, p_Apellidos, p_DNI, p_Correo, p_Telefono, p_Direccion, p_Password, 2, fecha_creacion, p_ContratoArrendamiento, p_DocumentacionLegal, 0, 0,1);
    
    -- Obtener el ID del usuario insertado
    SET usuario_id = LAST_INSERT_ID();
    
    -- Generar el token
    SET token_generado = UUID(); -- Ejemplo de generación de token con UUID
    
    -- Insertar el token en la tabla VerificacionCorreo
    INSERT INTO VerificacionCorreo (UsuarioID, Token, FechaCreacion, FechaExpiracion, TipoToken, AsuntoCorreo, ContenidoCorreo)
    VALUES (usuario_id, token_generado, fecha_creacion, DATE_ADD(fecha_creacion, INTERVAL 1 DAY), 'VerificacionCorreo', 'Verificación de correo electrónico', 'Por favor, haga clic en el siguiente enlace para verificar su correo electrónico.');
    
    -- Seleccionar el UsuarioID y el Token para devolverlos
    SELECT usuario_id AS UsuarioID, token_generado AS Token;
END//

DELIMITER ;

-- DROP PROCEDURE IF EXISTS RegistrarEstudiante;

-- -----------------------------------------------------
-- Procedure `ideal`.`RegistrarEstudiante`
-- -----------------------------------------------------
DELIMITER //

CREATE PROCEDURE RegistrarEstudiante(
    IN p_Nombres VARCHAR(100),
    IN p_Apellidos VARCHAR(100),
    IN p_DNI INT,
    IN p_Correo VARCHAR(50),
    IN p_Telefono INT,
    IN p_Password VARCHAR(100)
)
BEGIN
	DECLARE token_generado VARCHAR(100);
    DECLARE usuario_id INT;
    -- Fecha de creación del estudiante
    DECLARE fecha_creacion DATETIME;
    SET fecha_creacion = NOW();
    
    -- Generar el token
    SET token_generado = UUID(); -- Ejemplo de generación de token con UUID
    
    -- Insertar el nuevo estudiante
    INSERT INTO Usuarios (Nombres, Apellidos, DNI, Correo, Telefono, Password, RolID, FechaCreacion, UltimaActividad, EstadoSesion, CorreoVerificado,Estado)
    VALUES (p_Nombres, p_Apellidos, p_DNI, p_Correo, p_Telefono, p_Password, 3, fecha_creacion, fecha_creacion, 0, 0,1);
    
    -- Obtener el ID del estudiante insertado
    SET usuario_id = LAST_INSERT_ID();
    
    -- Insertar el token en la tabla VerificacionCorreo
    INSERT INTO VerificacionCorreo (UsuarioID, Token, FechaCreacion, FechaExpiracion, TipoToken, AsuntoCorreo, ContenidoCorreo)
    VALUES (usuario_id, token_generado, fecha_creacion, DATE_ADD(fecha_creacion, INTERVAL 1 DAY), 'VerificacionCorreo', 'Verificación de correo electrónico', 'Por favor, haga clic en el siguiente enlace para verificar su correo electrónico.');
    
    -- Seleccionar el UsuarioID y el Token para devolverlos
    SELECT usuario_id AS UsuarioID, token_generado AS Token;
END//

DELIMITER ;




