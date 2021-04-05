import { Connection, createConnection } from 'typeorm'
import app from './app'
require('dotenv').config({ "path": ".exemple.env" })

createConnection()


app.set('port', process.env.PORT)
app.listen(app.get('port'), () => console.log(`App is running at http://localhost:${app.get('port')}/`))