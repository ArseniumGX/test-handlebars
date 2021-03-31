import express from 'express'
import routes from './routes'
import exphbs from 'express-handlebars'
import './database'

const app = express()

const template = exphbs.create({
    extname: '.hbs',
    defaultLayout: false,
    partialsDir: `${__dirname}/views/partials`
})

app.use(express.json())
app.use(routes)

app.engine('hbs', template.engine)
app.set('view engine', 'hbs')
app.set('views', `${__dirname}/views`)

export default app