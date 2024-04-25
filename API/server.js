const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRouter.js');
const rolesRoutes = require('./routes/rolesRouter.js');

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Rutas de autenticación
app.use('/api/auth', authRoutes);
// Rutas de roles
app.use('/api/roles', rolesRoutes);



// port
const PORT = process.env.PORT || 8080;

// server
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});