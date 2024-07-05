<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ingreso de Datos de Clientes</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Ingreso de Datos de Clientes</h1>
        <form id="clientForm">
            <label for="cedula">Cédula:</label>
            <input type="text" id="cedula" name="cedula" required>
            
            <label for="apellidos">Apellidos:</label>
            <input type="text" id="apellidos" name="apellidos" required>
            
            <label for="nombres">Nombres:</label>
            <input type="text" id="nombres" name="nombres" required>
            
            <label for="direccion">Dirección:</label>
            <input type="text" id="direccion" name="direccion" required>
            
            <label for="telefono">Teléfono:</label>
            <input type="text" id="telefono" name="telefono" required>
            
            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required>
            
            <button type="submit">Guardar</button>
        </form>
        <div id="message"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>
