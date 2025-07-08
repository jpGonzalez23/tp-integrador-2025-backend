-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-07-2025 a las 00:02:10
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tp-integrador-2025`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `id_carrito` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `fecha_creacion` date NOT NULL,
  `estado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito_producto`
--

CREATE TABLE `carrito_producto` (
  `id_carrito` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_ventas`
--

CREATE TABLE `detalle_ventas` (
  `id` int(11) NOT NULL,
  `id_ventas` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio_unitario` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `detalle_ventas`
--

INSERT INTO `detalle_ventas` (`id`, `id_ventas`, `id_producto`, `cantidad`, `precio_unitario`) VALUES
(1, 1, 8, 1, 74500),
(2, 1, 9, 1, 90000),
(3, 1, 6, 1, 28500),
(4, 2, 8, 1, 74500),
(5, 3, 8, 1, 74500),
(6, 3, 6, 3, 28500),
(7, 3, 2, 8, 38500),
(8, 3, 3, 1, 45000),
(9, 3, 5, 3, 53000),
(10, 4, 8, 1, 74500),
(11, 5, 8, 1, 74500),
(12, 5, 5, 1, 53000),
(13, 5, 2, 1, 38500),
(14, 6, 8, 1, 74500),
(15, 6, 6, 1, 28500),
(16, 7, 8, 1, 74500),
(17, 7, 5, 1, 53000),
(18, 8, 8, 1, 74500),
(19, 9, 8, 1, 74500),
(20, 10, 8, 1, 74500),
(21, 11, 8, 1, 74500),
(22, 11, 5, 1, 53000),
(23, 11, 6, 1, 28500),
(24, 12, 8, 1, 74500),
(25, 13, 8, 1, 74500),
(26, 13, 9, 3, 90000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado_actividad`
--

CREATE TABLE `estado_actividad` (
  `id` int(11) NOT NULL,
  `nombre` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `estado_actividad`
--

INSERT INTO `estado_actividad` (`id`, `nombre`) VALUES
(1, 'activo'),
(2, 'inactivo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado_carrito`
--

CREATE TABLE `estado_carrito` (
  `id` int(11) NOT NULL,
  `nombre` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `estado_carrito`
--

INSERT INTO `estado_carrito` (`id`, `nombre`) VALUES
(1, 'activo'),
(2, 'cerrado'),
(3, 'cancelado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_producto` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `precio` float NOT NULL,
  `stock` int(11) NOT NULL,
  `img` varchar(300) NOT NULL,
  `categoria` varchar(200) NOT NULL,
  `id_estado` int(11) NOT NULL,
  `fecha_de_alta` date NOT NULL,
  `fecha_de_modificacion` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_producto`, `nombre`, `descripcion`, `precio`, `stock`, `img`, `categoria`, `id_estado`, `fecha_de_alta`, `fecha_de_modificacion`) VALUES
(1, 'assassin\'s creed shadows', 'Juego de pelea +18', 500, 10, 'https://www.cdmarket.com.ar/Image/0/600_750-a24e94d3-182c-4ab9-8df6-d500710f4d89.jpg', 'PS5', 1, '2025-07-06', '2025-07-07'),
(2, 'Whatch Dogs', 'Juego de mundo abierto', 500, 10, 'https://woogar.com/wp-content/uploads/2020/04/Watch_Dogs-1531731671-min-1.jpeg', 'ps4', 1, '2025-07-06', '2025-07-06'),
(3, 'The Last of Fast', 'Juego de mundo abierto', 1000, 10, 'https://ps4digitalargentina.com/files/images/productos/1491343640-last_of_us-2507095.jpg', 'PS4', 1, '2025-07-06', NULL),
(4, 'call of duty black ops III', 'juego de disparos +18', 200, 20, 'https://m.media-amazon.com/images/I/615S2VgX71L._SL1000_.jpg', 'ps4', 1, '2025-07-06', NULL),
(5, 'Grand theft auto V', 'Juego de mundo abierto', 13000, 20, 'https://juegosdigitalesargentina.com/files/images/productos/1538502712-gta5.jpg', 'ps4', 1, '2025-07-06', NULL),
(6, 'god of ward', 'Juego de mundo abierto', 21760, 20, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmOW1g9CAwhOrAaPt3X8c9BQfoF48DSq6VmQ&s', 'ps4', 1, '2025-07-06', NULL),
(7, 'Uncharted 4', 'Juego de mundo abierto', 11180, 6, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6SIptIWbzrleQhmKb1RmZipQR92ojTbDdjg&s', 'ps4', 1, '2025-07-06', NULL),
(8, 'horizon ZERO DAWN', 'Juego de mundo abierto', 23660, 6, 'https://storegamesargentina.com/wp-content/uploads/2021/11/HORIZON-ZER-DAWN.jpg', 'ps4', 1, '2025-07-06', NULL),
(9, 'FIFA 24', 'Juego de deporte ', 2000, 20, 'https://http2.mlstatic.com/D_NQ_NP_694255-MLU73126783410_122023-O.webp', 'ps4', 2, '2025-07-07', '2025-07-07'),
(10, 'Spider-Man 2', 'Juego de mundo abierto', 1000, 10, 'https://juegosdigitalesargentina.com/files/images/productos/1697557700-marvels-spider-man-2-ps5-pre-orden-0.jpg', 'PS5', 1, '2025-07-08', NULL),
(11, 'F1 2024', 'Juego de carreras', 1000, 10, 'https://storelaplata.com.ar/img/Public/1098/31893-producto-f1-2024.jpg', 'PS5', 1, '2025-07-08', NULL),
(12, 'INJUSTICE 2', 'Juego de pelea', 2000, 30, 'https://http2.mlstatic.com/D_NQ_NP_969775-MLU73268830607_122023-O.webp', 'ps4', 1, '2025-07-08', NULL),
(13, 'Black Myth - WUKONG', 'Juego de mundo abierto', 2000, 30, 'https://http2.mlstatic.com/D_NQ_NP_754429-MLA81202577318_122024-O.webp', 'ps5', 1, '2025-07-08', NULL),
(14, 'Assassin\'s Creed Valhalla', 'Juego de mundo abierto', 2000, 30, 'https://m.media-amazon.com/images/I/819zQmqyDcL._SL1500_.jpg', 'ps5', 1, '2025-07-08', NULL),
(15, 'Elden Ring - Nightreign', 'Juego de mundo abierto', 3000, 10, 'https://juegosdigitalesargentina.com/files/images/productos/1738017725-elden-ring-nightreign-ps5-pre-orden-0.webp', 'ps5', 1, '2025-07-08', NULL),
(16, 'Cyberpunk 2077', 'Juego de mundo abierto', 3000, 10, 'https://juegosdigitalesargentina.com/files/images/productos/1727476992-cyberpunk-2077-ultimate-edition-ps5-0.webp', 'ps5', 1, '2025-07-08', NULL),
(17, 'Batman Arkham knight', 'Juego de mundo abierto', 3000, 10, 'https://juegosdigitalesargentina.com/files/images/productos/1495822305-arkahamn.png', 'ps5', 1, '2025-07-08', NULL),
(18, 'overcooked!2', 'Juego de simulacion de comida', 3000, 2, 'https://gorilagames.com/img/Public/1019/producto-overcooked-2-3180.jpg', 'ps4', 1, '2025-07-08', NULL),
(19, 'Shadow of thr Tomb raider', 'Juego de mundo abierto', 3000, 2, 'https://epocasvideogames.com.ar/img/Public/producto-66554691-0.jpg', 'ps4', 1, '2025-07-08', NULL),
(20, 'Hogwarts legacy', 'Juego de mundo abierto', 3000, 2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpnc2zcaj1gA7r8fe94FKPW6etdJppPUUyqw&s', 'ps5', 1, '2025-07-08', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `nombre` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `nombre`) VALUES
(1, 'administrador'),
(2, 'cliente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nombre` varchar(80) NOT NULL,
  `apellido` varchar(80) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(80) NOT NULL,
  `id_estado` int(11) NOT NULL,
  `id_rol` int(11) NOT NULL,
  `rol_nombre` varchar(80) NOT NULL,
  `fecha_alta` date NOT NULL,
  `fecha_baja` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre`, `apellido`, `email`, `password`, `id_estado`, `id_rol`, `rol_nombre`, `fecha_alta`, `fecha_baja`) VALUES
(1, 'Juan Pablo', 'Gonzalez', 'JP.gonzalez@email.com', 'jp2302', 1, 1, 'administrador', '2025-07-07', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE `ventas` (
  `id_ventas` int(11) NOT NULL,
  `usuario` varchar(100) NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  `total` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ventas`
--

INSERT INTO `ventas` (`id_ventas`, `usuario`, `fecha_creacion`, `total`) VALUES
(1, 'Josefina', '2025-07-07 00:00:00', 193000.00),
(2, 'Josefina', '2025-07-07 00:00:00', 74500.00),
(3, 'Josefina', '2025-07-07 00:00:00', 672000.00),
(4, 'Josefina', '2025-07-07 00:00:00', 74500.00),
(5, 'Josefina', '2025-07-07 00:00:00', 166000.00),
(6, 'Josefina', '2025-07-07 00:00:00', 103000.00),
(7, 'Carlos', '2025-07-07 00:00:00', 127500.00),
(8, 'Carlitos', '2025-07-07 00:00:00', 74500.00),
(9, 'Carlitos', '2025-07-07 00:00:00', 74500.00),
(10, 'asd', '2025-07-07 00:00:00', 74500.00),
(11, '222', '2025-07-08 00:00:00', 156000.00),
(12, '1651651', '2025-07-08 00:00:00', 74500.00),
(13, 'Miguelito', '2025-07-08 00:00:00', 344500.00);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`id_carrito`),
  ADD KEY `fk_carrito_estado` (`estado`);

--
-- Indices de la tabla `carrito_producto`
--
ALTER TABLE `carrito_producto`
  ADD KEY `fk_carrito_producto` (`id_producto`),
  ADD KEY `fk_carrito_carrito` (`id_carrito`);

--
-- Indices de la tabla `detalle_ventas`
--
ALTER TABLE `detalle_ventas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_detalle_venta` (`id_ventas`),
  ADD KEY `fk_detalle_producto` (`id_producto`);

--
-- Indices de la tabla `estado_actividad`
--
ALTER TABLE `estado_actividad`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `estado_carrito`
--
ALTER TABLE `estado_carrito`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_producto`),
  ADD KEY `fk_estado_producto` (`id_estado`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD KEY `fk_usuario_estado` (`id_estado`),
  ADD KEY `fk_usuario_rol` (`id_rol`);

--
-- Indices de la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`id_ventas`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `id_carrito` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `detalle_ventas`
--
ALTER TABLE `detalle_ventas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `estado_actividad`
--
ALTER TABLE `estado_actividad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `estado_carrito`
--
ALTER TABLE `estado_carrito`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `ventas`
--
ALTER TABLE `ventas`
  MODIFY `id_ventas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `fk_carrito_estado` FOREIGN KEY (`estado`) REFERENCES `estado_carrito` (`id`);

--
-- Filtros para la tabla `carrito_producto`
--
ALTER TABLE `carrito_producto`
  ADD CONSTRAINT `fk_carrito_carrito` FOREIGN KEY (`id_carrito`) REFERENCES `carrito` (`id_carrito`),
  ADD CONSTRAINT `fk_carrito_producto` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`);

--
-- Filtros para la tabla `detalle_ventas`
--
ALTER TABLE `detalle_ventas`
  ADD CONSTRAINT `fk_detalle_producto` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`),
  ADD CONSTRAINT `fk_detalle_venta` FOREIGN KEY (`id_ventas`) REFERENCES `ventas` (`id_ventas`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `fk_usuario_estado` FOREIGN KEY (`id_estado`) REFERENCES `estado_actividad` (`id`),
  ADD CONSTRAINT `fk_usuario_rol` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
