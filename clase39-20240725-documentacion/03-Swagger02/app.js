import express from 'express'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const app = express();

// Configuración de opciones para swagger-jsdoc
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de ejemplo',
      version: '1.0.0',
      description: 'Documentación de la API de ejemplo',
    },
    // servers: [
    //   {
    //     url: 'http://localhost:3000',
    //   },
    // ],
  },
  apis: ['./*.js'], // Rutas de tus archivos de rutas a documentar
};

// Inicializar swagger-jsdoc
const specs = swaggerJsdoc(options);

// Middleware para servir la documentación Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Rutas de ejemplo
/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obtener lista de usuarios de la base de datos - 123
 *     tags:
 *       - Users
 *     responses:
 *        200:
 *          description: Los usuarios fueron obtenidos OK desde la DB
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#components/schemas/User'
 */
app.get('/api/users', (req, res) => {
  res.json({ message: 'Lista de usuarios obtenida exitosamente' });
});

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Crear un usuario
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Usuario creado exitosamente
 */
app.post('/api/users', (req, res) => {
  res.json({ message: 'Usuario creado exitosamente' });
});

// Puerto de escucha
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});



/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         _id:
 *           type: ObjectId
 *           description: Id autogenerado de mongo
 *         first_name:
 *           type: string
 *           description: Nombre del usuario
 *         last_name:
 *           type: string
 *           description: Apellido...    
 *         email:
 *           type: string
 *           description: Correo electronico
 *         password: 
 *           type: string
 *           description: contraseña de acceso  
 *       example:
 *         _id: ObjectId("60acc54545c8e82e0475f73a")
 *         first_name: Diego
 *         last_name: Polverelli
 *         email: diegopolverelli@hotmail.com
 *         password: 123
 */
