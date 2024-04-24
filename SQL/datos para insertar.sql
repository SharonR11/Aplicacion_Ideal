-- Insertar roles en la tabla Rol
INSERT INTO `Roles` (`Nombre`) VALUES ('administrador');
INSERT INTO `Roles` (`Nombre`) VALUES ('arrendador');
INSERT INTO `Roles` (`Nombre`) VALUES ('estudiante');

-- SELECT * FROM Roles;

-- Insertar roles en la tabla ColorFondo
INSERT INTO `ColorFondo` (`NombreColor`, `CodigoHexadecimal`) VALUES
('Blanco', '#FFFFFF'),
('Negro', '#000000'),
('Rojo', '#FF0000'),
('Verde', '#00FF00'),
('Azul', '#0000FF'),
('Amarillo', '#FFFF00'),
('Cyan', '#00FFFF'),
('Magenta', '#FF00FF'),
('Gris', '#808080'),
('Gris Claro', '#C0C0C0'),
('Gris Oscuro', '#808080'),
('Naranja', '#FFA500'),
('Rosado', '#FFC0CB'),
('Violeta', '#8A2BE2'),
('Marrón', '#A52A2A'),
('Turquesa', '#40E0D0'),
('Plata', '#C0C0C0'),
('Oro', '#FFD700'),
('Verde Lima', '#00FF00'),
('Coral', '#FF7F50');
-- SELECT * FROM ColorFondo;

-- Insertar roles en la tabla Servicios
INSERT INTO Servicios (Nombre) VALUES ('Luz');
INSERT INTO Servicios (Nombre) VALUES ('Agua');
INSERT INTO Servicios (Nombre) VALUES ('Internet');
INSERT INTO Servicios (Nombre) VALUES ('Limpieza');
INSERT INTO Servicios (Nombre) VALUES ('Agua Caliente');
INSERT INTO Servicios (Nombre) VALUES ('Cama');

-- Insertar roles en la tabla Instituciones
INSERT INTO Instituciones (nombre, abreviacion) VALUES ('Instituto Superior Daniel Alcides Carrión', 'Instituto Carrión');
INSERT INTO Instituciones (nombre, abreviacion) VALUES ('Instituto de Educación Superior Tecnológico Túpac Amaru', 'ISTTA');
INSERT INTO Instituciones (nombre, abreviacion) VALUES ('Instituto de Educación Superior Tecnológico Francisco de Paula Gonzales Vigil', 'IESP VIGIL');
INSERT INTO Instituciones (nombre, abreviacion) VALUES ('Instituto Superior Tecnológico Público Simón Bolívar', 'ISTSB');
INSERT INTO Instituciones (nombre, abreviacion) VALUES ('Instituto de Educación Superior Tecnológico Público San Marcos', 'IESTP-SM');
INSERT INTO Instituciones (nombre, abreviacion) VALUES ('Instituto de Educación Superior Tecnológico Público República Federal de Alemania', 'I.E.S República Federal de Alemania');
INSERT INTO Instituciones (nombre, abreviacion) VALUES ('Instituto Peruano de Administración de empresas', 'IPAE');
INSERT INTO Instituciones (nombre, abreviacion) VALUES ('Instituto de Educación Superior Privado CIBERTEC', 'Cibertec');
INSERT INTO Instituciones (nombre, abreviacion) VALUES ('Instituto San Ignacio de Loyola', 'ISIL');
INSERT INTO Instituciones (nombre, abreviacion) VALUES ('Insituto Técnico de Administración de Empresas', 'ITAE');
INSERT INTO Instituciones (nombre, abreviacion) VALUES ('Instituto de Educación Superior Tecnológico Privado CEPEA', 'CEPEA');
INSERT INTO Instituciones (nombre, abreviacion) VALUES ('Instituto Superior Tecnológico IDAT', 'IDAT');
INSERT INTO Instituciones (nombre, abreviacion) VALUES ('Instituto Continental', 'Instituto Continental');
INSERT INTO Instituciones (nombre, abreviacion) VALUES ('Instituto Superior Tecnológico Maria Montessori', 'Instituto Maria Montessori');
INSERT INTO Instituciones (nombre, abreviacion) VALUES ('Instituto de Educación Superior Privado KHIPU', 'KHIPU');
INSERT INTO Instituciones (nombre, abreviacion) VALUES ('Instituto de Educación Superior Privado Jhalebet', 'Jhalebet');
INSERT INTO Instituciones (nombre, abreviacion) VALUES ('Instituto de Educación Superior Privado EF', 'EF');
INSERT INTO Instituciones (nombre, abreviacion) VALUES ('Instituto de Educación Superior en Perú', 'Tecsup');
INSERT INTO Instituciones (nombre, abreviacion) VALUES ('Instituto TEC', 'TEC');
INSERT INTO Instituciones (nombre, abreviacion) VALUES ('Instituto Superior Tecnológico Clorinda Matto de Turner', 'IES Clorinda Matto de Turner');
INSERT INTO Instituciones (nombre, abreviacion) VALUES ('Instituto de Educación Superior María de Los Ángeles CIMA’S', 'CIMA’S');
INSERT INTO Instituciones (nombre, abreviacion) VALUES ('Instituto Superior Tecnológico Arzobispo Loayza', 'IAL');
INSERT INTO Instituciones (nombre, abreviacion) VALUES ('Instituto Superior Tecnológico Paul Muller', 'Instituto Paul Muller');
INSERT INTO Instituciones (nombre, abreviacion) VALUES ('Instituto de Educación Superior Tecnológico Privado de la Construcción CAPECO', 'CAPECO');
INSERT INTO Instituciones (nombre, abreviacion) VALUES ('Instituto De Educación Superior Tecnológico Privado Latino', 'Latino');
INSERT INTO Instituciones (nombre, abreviacion) VALUES ('Instituto de Educación Superior Wernher Von Braun', 'Wernher Von Braun');
INSERT INTO Instituciones (nombre, abreviacion) VALUES ('Instituto Superior Columbia', 'Columbia');
INSERT INTO Instituciones (nombre, abreviacion) VALUES ('Instituto Superior Tecnológico Privado Nina Design', 'Nina Design');
INSERT INTO Instituciones (nombre, abreviacion) VALUES ('Instituto de Educación Superior Ricardo Palma', 'Instituto Ricardo Palma');
INSERT INTO Instituciones (nombre, abreviacion) VALUES ('Instituto Superior de Comunicación y Diseño Toulouse Lautrec', 'Toulouse Lautrec');


-- Insertar roles en la tabla Departamentos
INSERT INTO Departamentos (nombre) VALUES ('Amazonas');
INSERT INTO Departamentos (nombre) VALUES ('Áncash');
INSERT INTO Departamentos (nombre) VALUES ('Apurímac');
INSERT INTO Departamentos (nombre) VALUES ('Arequipa');
INSERT INTO Departamentos (nombre) VALUES ('Ayacucho');
INSERT INTO Departamentos (nombre) VALUES ('Cajamarca');
INSERT INTO Departamentos (nombre) VALUES ('Cusco');
INSERT INTO Departamentos (nombre) VALUES ('Huancavelica');
INSERT INTO Departamentos (nombre) VALUES ('Huánuco');
INSERT INTO Departamentos (nombre) VALUES ('Ica');
INSERT INTO Departamentos (nombre) VALUES ('Junín');
INSERT INTO Departamentos (nombre) VALUES ('La Libertad');
INSERT INTO Departamentos (nombre) VALUES ('Lambayeque');
INSERT INTO Departamentos (nombre) VALUES ('Lima');
INSERT INTO Departamentos (nombre) VALUES ('Loreto');
INSERT INTO Departamentos (nombre) VALUES ('Madre de Dios');
INSERT INTO Departamentos (nombre) VALUES ('Moquegua');
INSERT INTO Departamentos (nombre) VALUES ('Pasco');
INSERT INTO Departamentos (nombre) VALUES ('Piura');
INSERT INTO Departamentos (nombre) VALUES ('Puno');
INSERT INTO Departamentos (nombre) VALUES ('San Martín');
INSERT INTO Departamentos (nombre) VALUES ('Tacna');
INSERT INTO Departamentos (nombre) VALUES ('Tumbes');
INSERT INTO Departamentos (nombre) VALUES ('Ucayali');

-- SELECT * FROM Departamentos;
-- SELECT * FROM Provincias;

-- Agregar las provincias para el departamento de Amazonas (id 1)
INSERT INTO Provincias (Nombre, DepartamentoID) VALUES
('Chachapoyas', 1),
('Bagua', 1),
('Bongará', 1),
('Condorcanqui', 1),
('Luya', 1),
('Rodríguez de Mendoza', 1),
('Utcubamba', 1);

-- Agregar las provincias para el departamento de Áncash (id 2)
INSERT INTO Provincias (Nombre, DepartamentoID) VALUES
('Aija', 2),
('Antonio Raymondi', 2),
('Asunción', 2),
('Bolognesi', 2),
('Carhuaz', 2),
('Carlos F. Fitzcarrald', 2),
('Casma', 2),
('Corongo', 2),
('Huaraz', 2),
('Huari', 2),
('Huarmey', 2),
('Huaylas', 2),
('Mariscal Luzuriaga', 2),
('Ocros', 2),
('Pallasca', 2),
('Pomabamba', 2),
('Recuay', 2),
('Santa', 2),
('Sihuas', 2),
('Yungay', 2);
-- Agregar las provincias para el departamento de Apurímac (id 3)
INSERT INTO Provincias (Nombre, DepartamentoID) VALUES
('Abancay', 3),
('Andahuaylas', 3),
('Antabamba', 3),
('Aymaraes', 3),
('Cotabambas', 3),
('Grau', 3),
('Chincheros', 3);
-- Agregar las provincias para el departamento de Arequipa (id 4)
INSERT INTO Provincias (Nombre, DepartamentoID) VALUES
('Arequipa', 4),
('Camaná', 4),
('Caravelí', 4),
('Caylloma', 4),
('Condesuyos', 4),
('Islay', 4),
('La Unión', 4);
-- Agregar las provincias para el departamento de Ayacucho (id 5)
INSERT INTO Provincias (Nombre, DepartamentoID) VALUES
('La Mar', 5),
('Lucanas', 5),
('Parinacochas', 5),
('Victor Fajardo', 5),
('Huanca Sancos', 5),
('Paucar del Sara Sara', 5),
('Sucre', 5),
('Vilcas Huaman', 5),
('Huamanga', 5),
('Cangallo', 5),
('Huanta', 5);

-- Agregar las provincias para el departamento de Cajamarca (id 6)
INSERT INTO Provincias (Nombre, DepartamentoID) VALUES
('Cajamarca', 6),
('Cajabamba', 6),
('Celendín', 6),
('Chota', 6),
('Contumazá', 6),
('Cutervo', 6),
('Hualgayoc', 6),
('Jaén', 6),
('San Ignacio', 6),
('San Marcos', 6),
('San Miguel', 6),
('San Pablo', 6);
-- Agregar las provincias para el departamento de Cusco (id 7)
INSERT INTO Provincias (Nombre, DepartamentoID) VALUES
('Acomayo', 7),
('Anta', 7),
('Calca', 7),
('Canas', 7),
('Canchis', 7),
('Cuzco', 7),
('Chumbivilcas', 7),
('Espinar', 7),
('La Convención', 7),
('Paruro', 7),
('Paucartambo', 7),
('Quispicanchi', 7),
('Urubamba', 7);
-- Agregar las provincias para el departamento de Huancavelica (id 8)
INSERT INTO Provincias (Nombre, DepartamentoID) VALUES
('Huancavelica', 8),
('Acobamba', 8),
('Angaraes', 8),
('Castrovirreyna', 8),
('Churcampa', 8),
('Huaytará', 8),
('Tayacaja', 8);
-- Agregar las provincias para el departamento de Huánuco (id 9)
INSERT INTO Provincias (Nombre, DepartamentoID) VALUES
('Huánuco', 9),
('Puerto Inca', 9),
('Leoncio Prado', 9),
('Marañón', 9),
('Huamalíes', 9),
('Pachitea', 9),
('Lauricocha', 9),
('Huacaybamba', 9),
('Ambo', 9),
('Dos de Mayo', 9),
('Yarowilca', 9);
-- Agregar las provincias para el departamento de Ica (id 10)
INSERT INTO Provincias (Nombre, DepartamentoID) VALUES
('Ica', 10),
('Chincha', 10),
('Pisco', 10),
('Nasca', 10),
('Palpa', 10);
-- Agregar las provincias para el departamento de Junín (id 11)
INSERT INTO Provincias (Nombre, DepartamentoID) VALUES
('Huancayo', 11),
('Satipo', 11),
('Chanchamayo', 11),
('Tarma', 11),
('Jauja', 11),
('Concepción', 11),
('Chupaca', 11),
('Yauli', 11),
('Junín', 11);
-- Agregar las provincias para el departamento de La Libertad (id 12)
INSERT INTO Provincias (Nombre, DepartamentoID) VALUES
('Ascope', 12),
('Bolívar', 12),
('Chepén', 12),
('Gran Chimú', 12),
('Julcán', 12),
('Otuzco', 12),
('Pacasmayo', 12),
('Pataz', 12),
('Sánchez Carrión', 12),
('Santiago de Chuco', 12),
('Trujillo', 12),
('Virú', 12);
-- Agregar las provincias para el departamento de Lambayeque (id 13)
INSERT INTO Provincias (Nombre, DepartamentoID) VALUES
('Chiclayo', 13),
('Lambayeque', 13),
('Ferreñafe', 13);
-- Agregar las provincias para el departamento de Lima (id 14)
INSERT INTO Provincias (Nombre, DepartamentoID) VALUES
('Lima', 14),
('Callao', 14),
('Barranca', 14),
('Cajatambo', 14),
('Cañete', 14),
('Canta', 14),
('Huaral', 14),
('Huarochirí', 14),
('Huaura', 14),
('Oyón', 14),
('Yauyos', 14);

-- FALTAN LOS DEMAS provincias......
-- FALTAN LOS DEMAS provincias......
-- FALTAN LOS DEMAS provincias......
-- FALTAN LOS DEMAS provincias......
-- FALTAN LOS DEMAS provincias......
-- FALTAN LOS DEMAS provincias......
-- FALTAN LOS DEMAS provincias......
-- FALTAN LOS DEMAS provincias......
-- FALTAN LOS DEMAS provincias......

-- SELECT * FROM Provincias;

-- Agregar los distritos para la provincia de Lima (id 125)
INSERT INTO Distritos (Nombre, ProvinciaID) VALUES
('Ancón', 125),
('Ate', 125),
('Barranco', 125),
('Breña', 125),
('Carabayllo', 125),
('Chaclacayo', 125),
('Chorrillos', 125),
('Cieneguilla', 125),
('Comas', 125),
('El Agustino', 125),
('Independencia', 125),
('Jesús María', 125),
('La Molina', 125),
('La Victoria', 125),
('Lima', 125),
('Lince', 125),
('Los Olivos', 125),
('Lurigancho', 125),
('Lurín', 125),
('Magdalena del Mar', 125),
('Miraflores', 125),
('Pachacámac', 125),
('Pucusana', 125),
('Pueblo Libre', 125),
('Puente Piedra', 125),
('Punta Hermosa', 125),
('Punta Negra', 125),
('Rímac', 125),
('San Bartolo', 125),
('San Borja', 125),
('San Isidro', 125),
('San Juan de Lurigancho', 125),
('San Juan de Miraflores', 125),
('San Luis', 125),
('San Martín de Porres', 125),
('San Miguel', 125),
('Santa Anita', 125),
('Santa María del Mar', 125),
('Santa Rosa', 125),
('Santiago de Surco', 125),
('Surquillo', 125),
('Villa el Salvador', 125),
('Villa María del Triunfo', 125);


-- SELECT * FROM Instituciones;
-- SELECT * FROM Roles;

-- SELECT * FROM Departamentos;
-- SELECT * FROM Provincias;
