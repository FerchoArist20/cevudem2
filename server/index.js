import { PORT } from './config.js'
import express from 'express'
import cors from 'cors'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

import usuariosRoutes from './routes/usuarios.routes.js'
import personasRoutes from './routes/personas.routes.js'
import reservasRoutes from './routes/reservas.routes.js'
import eventosRoutes from './routes/eventos.routes.js'
import solicitudesRoutes from './routes/solicitudes.routes.js'
import contratosRoutes from './routes/contratos.routes.js'
import habitacionesRoutes from './routes/habitaciones.routes.js'

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(cors())

app.use(express.json())

app.use(usuariosRoutes)
app.use(personasRoutes)
app.use(reservasRoutes)
app.use(eventosRoutes)
app.use(solicitudesRoutes)
app.use(contratosRoutes)
app.use(habitacionesRoutes)

app.use(express.static(join(__dirname, '../client/dist')))

app.listen(PORT), ()=>{
    console.log("app", app)
    console.log(`Server is running on http://localhost:${PORT}`)
}