
-- Agregar Usuario estudiante (id: 3)
-- SELECT * FROM Usuarios;

INSERT INTO Usuarios (Nombres, Apellidos, DNI, Correo, Telefono, Direccion, Password, RolID, FechaCreacion, UltimaActividad, ColorID, ContratoArrendamiento, DocumentacionLegal, FotoUsuario, CorreoVerificado) VALUES
('Juan Carlos', 'Perez Fernandez', 12345678, 'juan.perez@tecsup.edu.pe', 987654321, 'Av. Los Pinos 123', '123456', 3, NOW(), NOW(), 1, NULL, NULL, NULL, 1),
('Ana Maria', 'Garcia Ramirez', 23456789, 'ana.garcia@tecsup.edu.pe', 876543210, 'Calle Las Flores 456', '234567', 3, NOW(), NOW(), 2, NULL, NULL, NULL, 1),
('Diego Alonso', 'Chavez Rojas', 34567890, 'diego.chavez@tecsup.edu.pe', 765432109, 'Jr. Los Alamos 789', '345678', 3, NOW(), NOW(), 3, NULL, NULL, NULL, 1),
('Carolina Sofia', 'Lopez Gomez', 45678901, 'carolina.lopez@tecsup.edu.pe', 654321098, 'Urb. San Juan 012', '456789', 3, NOW(), NOW(), 4, NULL, NULL, NULL, 1),
('Luis Alberto', 'Torres Silva', 56789012, 'luis.torres@tecsup.edu.pe', 543210987, 'Av. Los Rosales 345', '567890', 3, NOW(), NOW(), 5, NULL, NULL, NULL, 1),
('Juliana Fernanda', 'Diaz Rodriguez', 67890123, 'juliana.diaz@tecsup.edu.pe', 432109876, 'Calle Las Palmeras 678', '678901', 3, NOW(), NOW(), 6, NULL, NULL, NULL, 1),
('Miguel Angel', 'Vargas Sanchez', 78901234, 'miguel.vargas@tecsup.edu.pe', 321098765, 'Jr. Los Girasoles 901', '789012', 3, NOW(), NOW(), 7, NULL, NULL, NULL, 1),
('Valeria Gabriela', 'Martinez Flores', 89012345, 'valeria.martinez@tecsup.edu.pe', 210987654, 'Av. Los Tulipanes 234', '890123', 3, NOW(), NOW(), 8, NULL, NULL, NULL, 1),
('Eduardo Enrique', 'Gomez Garcia', 90123456, 'eduardo.gomez@tecsup.edu.pe', 109876543, 'Urb. Las Orquideas 567', '901234', 3, NOW(), NOW(), 9, NULL, NULL, NULL, 1),
('Camila Isabella', 'Rodriguez Perez', 12345670, 'camila.rodriguez@tecsup.edu.pe', 987654321, 'Calle Los Sauces 890', '123456', 3, NOW(), NOW(), 10, NULL, NULL, NULL, 1),
('Jorge Luis', 'Fernandez Torres', 23456780, 'jorge.fernandez@tecsup.edu.pe', 876543210, 'Jr. Los Cerezos 123', '234567', 3, NOW(), NOW(), 11, NULL, NULL, NULL, 1),
('Marina Alejandra', 'Sanchez Gomez', 34567890, 'marina.sanchez@tecsup.edu.pe', 765432109, 'Av. Los Abedules 456', '345678', 3, NOW(), NOW(), 12, NULL, NULL, NULL, 1),
('Pedro Pablo', 'Rojas Diaz', 45678900, 'pedro.rojas@tecsup.edu.pe', 654321098, 'Urb. Las Margaritas 789', '456789', 3, NOW(), NOW(), 13, NULL, NULL, NULL, 1),
('Lucia Fernanda', 'Gutierrez Fernandez', 56789010, 'lucia.gutierrez@tecsup.edu.pe', 543210987, 'Calle Los Claveles 012', '567890', 3, NOW(), NOW(), 14, NULL, NULL, NULL, 1),
('Andres Felipe', 'Martinez Torres', 67890120, 'andres.martinez@tecsup.edu.pe', 432109876, 'Av. Los Eucaliptos 345', '678901', 3, NOW(), NOW(), 15, NULL, NULL, NULL, 1),
('Paula Gabriela', 'Diaz Ramirez', 78901230, 'paula.diaz@tecsup.edu.pe', 321098765, 'Jr. Los Geranios 678', '789012', 3, NOW(), NOW(), 16, NULL, NULL, NULL, 1),
('Gonzalo Alejandro', 'Vargas Silva', 89012340, 'gonzalo.vargas@tecsup.edu.pe', 210987654, 'Urb. Los Cedros 901', '890123', 3, NOW(), NOW(), 17, NULL, NULL, NULL, 1),
('Ana Maria', 'Torres Rodriguez', 90123450, 'ana.torres@tecsup.edu.pe', 109876543, 'Calle Los Lirios 234', '901234', 3, NOW(), NOW(), 18, NULL, NULL, NULL, 1),
('Daniel Alejandro', 'Gomez Fernandez', 12345670, 'daniel.gomez@tecsup.edu.pe', 987654321, 'Av. Las Acacias 567', '123456', 3, NOW(), NOW(), 19, NULL, NULL, NULL, 1),
('Natalia Sofia', 'Martinez Diaz', 23456780, 'natalia.martinez@tecsup.edu.pe', 876543210, 'Jr. Los Pinos 890', '234567', 3, NOW(), NOW(), 20, NULL, NULL, NULL, 1);


-- Agregar Usuario Arrendador (id: 2)
INSERT INTO Usuarios (Nombres, Apellidos, DNI, Correo, Telefono, Direccion, Password, RolID, FechaCreacion, UltimaActividad, ContratoArrendamiento, DocumentacionLegal, FotoUsuario, CorreoVerificado) VALUES
('Juan', 'García', 12345678, 'juangarcia@gmail.com', 987654321, 'Calle Principal 123', 'password1', 2, NOW(), NOW(), NULL, NULL, NULL, 1),
('María', 'López', 23456789, 'marialopez@gmail.com', 987654322, 'Av. Los Pinos 456', 'password2', 2, NOW(), NOW(), NULL, NULL, NULL, 1),
('Pedro', 'Martínez', 34567890, 'pedromartinez@gmail.com', 987654323, 'Jr. Las Rosas 789', 'password3', 2, NOW(), NOW(), NULL, NULL, NULL, 1),
('Ana', 'Pérez', 45678901, 'anaperez@gmail.com', 987654324, 'Av. Primavera 101', 'password4', 2, NOW(), NOW(), NULL, NULL, NULL, 1),
('Luis', 'Rodríguez', 56789012, 'luisrodriguez@gmail.com', 987654325, 'Callejón Verde 234', 'password5', 2, NOW(), NOW(), NULL, NULL, NULL, 1),
('Laura', 'Gómez', 67890123, 'lauragomez@gmail.com', 987654326, 'Pje. Azul 567', 'password6', 2, NOW(), NOW(), NULL, NULL, NULL, 1),
('Carlos', 'Sánchez', 78901234, 'carlossanchez@gmail.com', 987654327, 'Calle Océano 890', 'password7', 2, NOW(), NOW(), NULL, NULL, NULL, 1),
('Elena', 'Hernández', 89012345, 'elenahernandez@gmail.com', 987654328, 'Av. Libertad 123', 'password8', 2, NOW(), NOW(), NULL, NULL, NULL, 1),
('Jorge', 'Díaz', 90123456, 'jorgediaz@gmail.com', 987654329, 'Jr. Los Pinos 456', 'password9', 2, NOW(), NOW(), NULL, NULL, NULL, 1),
('Sofía', 'Fernández', 12345670, 'sofiafernandez@gmail.com', 987654320, 'Calle Progreso 789', 'password10', 2, NOW(), NOW(), NULL, NULL, NULL, 1),
('Diego', 'Ramírez', 23456781, 'diegoramirez@gmail.com', 987654311, 'Av. Esperanza 101', 'password11', 2, NOW(), NOW(), NULL, NULL, NULL, 1),
('Fabiola', 'Gutiérrez', 34567892, 'fabiolagutierrez@gmail.com', 987654312, 'Jr. Las Rosas 112', 'password12', 2, NOW(), NOW(), NULL, NULL, NULL, 1),
('Roberto', 'Jiménez', 45678903, 'robertojimenez@gmail.com', 987654313, 'Av. Primavera 303', 'password13', 2, NOW(), NOW(), NULL, NULL, NULL, 1),
('Patricia', 'Martín', 56789024, 'patriciamartin@gmail.com', 987654314, 'Callejón Verde 514', 'password14', 2, NOW(), NOW(), NULL, NULL, NULL, 1),
('Fernando', 'Santos', 67890135, 'fernandosantos@gmail.com', 987654315, 'Pje. Azul 716', 'password15', 2, NOW(), NOW(), NULL, NULL, NULL, 1),
('Valeria', 'Pérez', 78901246, 'valeriaperez@gmail.com', 987654316, 'Calle Océano 917', 'password16', 2, NOW(), NOW(), NULL, NULL, NULL, 1),
('Camila', 'Moreno', 89012357, 'camilamoreno@gmail.com', 987654317, 'Av. Libertad 318', 'password17', 2, NOW(), NOW(), NULL, NULL, NULL, 1),
('José', 'Álvarez', 90123468, 'josealvarez@gmail.com', 987654318, 'Jr. Los Pinos 619', 'password18', 2, NOW(), NOW(), NULL, NULL, NULL, 1),
('Gabriela', 'González', 12345679, 'gabrielagonzalez@gmail.com', 987654319, 'Calle Progreso 920', 'password19', 2, NOW(), NOW(), NULL, NULL, NULL, 1),
('Ricardo', 'Silva', 23456780, 'ricardosilva@gmail.com', 987654320, 'Av. Esperanza 221', 'password20', 2, NOW(), NOW(), NULL, NULL, NULL, 1);



