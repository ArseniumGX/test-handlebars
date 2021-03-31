import app from './app'
require('dotenv').config({ "path": ".exemple.env" })

app.set('port', process.env.PORT)

app.listen(app.get('port'), () => console.log(`App is running at http://localhost:${app.get('port')}/`))