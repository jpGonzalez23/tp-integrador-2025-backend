-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-07-2025 a las 03:03:14
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
  `img` varchar(200) NOT NULL,
  `categoria` varchar(200) NOT NULL,
  `id_estado` int(11) NOT NULL,
  `fecha_de_alta` date NOT NULL,
  `fecha_de_modificacion` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_producto`, `nombre`, `descripcion`, `precio`, `stock`, `img`, `categoria`, `id_estado`, `fecha_de_alta`, `fecha_de_modificacion`) VALUES
(2, 'Chicken Salad Kit', 'All-in-one kit for making delicious chicken salad.', 5.99, 2, 'http://dummyimage.com/144x100.png/ff4444/ffffff', 'Food - Prepared Foods', 2, '2024-12-12', NULL),
(3, 'Sesame Oil', 'Nutty-scented oil for stir-fry and marinades.', 3.99, 3, 'http://dummyimage.com/198x100.png/cc0000/ffffff', 'Food - Oils & Vinegars', 1, '2024-07-02', NULL),
(4, 'Bamboo Bathtub Caddy', 'Expandable caddy for holding books, phones, and snacks while in the bath.', 34.99, 4, 'http://dummyimage.com/114x100.png/dddddd/000000', 'Home', 2, '2025-03-21', NULL),
(5, 'Casual Long Cardigan', 'A cozy long cardigan designed for layering in any season.', 45.99, 5, 'http://dummyimage.com/248x100.png/ff4444/ffffff', 'Clothing - Outerwear', 2, '2024-09-09', NULL),
(6, 'Wireless Charger', 'Qi-certified wireless charger for fast charging.', 24.99, 6, 'http://dummyimage.com/139x100.png/ff4444/ffffff', 'Accessories', 1, '2025-05-26', NULL),
(7, 'Fleece Hoodie', 'Ultra-soft fleece hoodie for warmth and comfort during chilly days.', 39.99, 7, 'http://dummyimage.com/192x100.png/dddddd/000000', 'Clothing - Outerwear', 2, '2025-06-04', NULL),
(8, 'Cotton Basic Tank', 'Essential cotton tank top, perfect for layering.', 14.99, 8, 'http://dummyimage.com/157x100.png/ff4444/ffffff', 'Clothing - Tops', 1, '2025-06-10', NULL),
(9, 'Organic Coconut Yogurt', 'Dairy-free yogurt made from coconut milk.', 4.49, 9, 'http://dummyimage.com/196x100.png/dddddd/000000', 'Food - Dairy', 1, '2024-12-01', NULL),
(10, 'Lightweight Travel Backpack', 'Compact and portable backpack for day trips and travel.', 39.99, 10, 'http://dummyimage.com/242x100.png/cc0000/ffffff', 'Travel', 1, '2024-07-17', NULL),
(11, 'botella', 'Botella de 2 lts', 4000, 20, 'http://dummyimage.com/196x100.png/cc0000/ffffff', 'Produce', 1, '2025-06-30', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `nombre` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
  `fecha_alta` date NOT NULL,
  `fecha_baja` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre`, `apellido`, `email`, `password`, `id_estado`, `fecha_alta`, `fecha_baja`) VALUES
(1, 'Saw', 'Morkham', 'smorkham0@ebay.com', 'xA3\'>ygpD6', 1, '2024-10-07', NULL),
(2, 'Juan Pablo', 'Gonzalez', 'jp.gonzalez@email.com', 'pepito1234', 1, '2024-10-29', NULL),
(3, 'Loella', 'Bullingham', 'lbullingham2@miibeian.gov.cn', 'iJ9~wfkP?DQA)', 1, '2024-12-13', NULL),
(4, 'Christy', 'Rowcastle', 'crowcastle3@purevolume.com', 'jG0%u3,h/}', 1, '2024-07-22', '2025-06-28'),
(5, 'Patrice', 'William', 'pwilliam4@ycombinator.com', 'dK2*.\"Ax/xj', 1, '2024-12-22', NULL),
(6, 'Dorree', 'Dencs', 'ddencs5@google.ru', 'pG6~LRW/y', 2, '2025-02-22', NULL),
(7, 'Harvey', 'Enbury', 'henbury6@ihg.com', 'eS8>M6*MM', 2, '2024-11-06', NULL),
(8, 'Barnard', 'Tolley', 'btolley7@lycos.com', 'zT5`n8Ib<', 2, '2025-01-07', NULL),
(9, 'Tallou', 'Fleming', 'tfleming8@tripadvisor.com', 'sM8/G%Jr{', 1, '2024-11-23', NULL),
(10, 'Karolina', 'Golden of Ireland', 'kgoldenofireland9@oakley.com', 'yS7_bajkK8>YWlMY', 1, '2025-01-13', '2025-06-25'),
(13, 'Juan Carlos', 'Gonzalez', 'juan.gonzalez@email.com', 'nueva1234', 1, '0000-00-00', NULL),
(14, 'Juan Carlos', 'Gonzalez', 'juan.gonzalez@email.com', 'nueva1234', 1, '0000-00-00', NULL),
(15, 'Juan Carlos', 'Gonzalez', 'juan.gonzalez@email.com', 'nueva1234', 1, '2025-06-28', NULL),
(16, 'Juan Pablo', 'Gonzalez', 'jp.gonzalez@email.com', '1234nueva', 1, '2025-06-28', NULL);

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
  ADD PRIMARY KEY (`id_carrito`,`id_producto`),
  ADD KEY `id_producto` (`id_producto`);

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
  ADD KEY `fk_usuario_estado` (`id_estado`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `id_carrito` int(11) NOT NULL AUTO_INCREMENT;

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
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

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
  ADD CONSTRAINT `carrito_producto_ibfk_1` FOREIGN KEY (`id_carrito`) REFERENCES `carrito` (`id_carrito`) ON DELETE CASCADE,
  ADD CONSTRAINT `carrito_producto_ibfk_2` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `fk_estado_producto` FOREIGN KEY (`id_estado`) REFERENCES `estado_actividad` (`id`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `fk_usuario_estado` FOREIGN KEY (`id_estado`) REFERENCES `estado_actividad` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
