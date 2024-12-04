import express, { response } from 'express'
import dotenv from 'dotenv'
import sequelize from './config/database.js'
import cors from 'cors'
import caravanaRoutes from './modules/Caravana/caravana.routes.js'
import CaravanaConfig from './modules/Caravana/caravana.model.js'
import Feedback from './modules/Feedback/feedback.model.js'
import userRoutes from './modules/Users/user.routes.js'
import session from 'express-session'
import feedbackRoutes from './modules/Feedback/feedback.routes.js'

dotenv.config()
const app = express()

app.use(
  session({
    secret: 'super_secret',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: process.env.SAFE_COOKIE, maxAge: 4 * 60 * 60 * 1000 },
  })
)

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
)
app.use(express.json())

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`)
})

//routes
caravanaRoutes(app)
userRoutes(app)
feedbackRoutes(app)

sequelize
  .authenticate()
  .then(() => console.log('Database connected'))
  .catch((error) => console.error('Unable to connect to the database: ', error))

sequelize
  .sync()
  .then(() => {
    console.log('Tables created successfully')
  })
  .catch((error) => {
    console.error('Error creating tables:', error)
  })
