--
-- Base de datos: `api_node_mysql`
--

CREATE DATABASE IF NO EXISTS api_node_mysql;


-- --------------------------------------------------------


--
-- Estructura de tabla para la tabla `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updateAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `code` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `reference` varchar(255) NOT NULL,
  `locationStorage` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB;

--
-- Volcado de datos para la tabla `product`
--

INSERT INTO `product` (`id`, `createdAt`, `updateAt`, `code`, `name`, `description`, `reference`, `locationStorage`, `image`) VALUES
(5, '2020-11-07 08:37:27.749549', '2020-11-08 09:26:18.000000', '11001', 'jabon', 'de baño', '12652', 'Monteria', 'http://localhost:3000/uploads/image-1604845578827.jpg'),
(9, '2020-11-08 08:28:12.086111', '2020-11-08 09:20:57.000000', '1100190', 'jabon', 'de baño', '12652', 'Bogota', 'http://localhost:3000/uploads/image-1604845257605.png'),
(10, '2020-11-08 08:33:30.307229', '2020-11-08 09:21:08.000000', '1001101', 'Panela', 'De caña', '12345', 'Cali', 'http://localhost:3000/uploads/image-1604845268576.jpg'),
(11, '2020-11-08 09:25:42.575715', '2020-11-08 09:25:42.575715', '12736625', 'Flores', 'Del campo', '165252', 'Monteria', 'http://localhost:3000/uploads/image-1604845542557.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updateAt` datetime(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `createdAt`, `updateAt`) VALUES
(1, 'username@mail.com', '$2a$10$rkChbk1ZkQDZpM6o5fpLwOfRSNeZnEesNRWHu2qEVBBExZv09B2U6', '2020-11-06 11:26:20.257064', '2020-11-06 19:24:25.000000');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_99c39b067cfa73c783f0fc49a6` (`code`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_78a916df40e02a9deb1c4b75ed` (`username`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

