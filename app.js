const express = require("express")

const dotenv = require("dotenv")
const connectDB = require("./dataBase")
const morgan = require("morgan")
const cors = require("cors")
const app = express()
const path = require("path")
const moviesRouter = require("./api/movies/routes")
const notFound = require("./middleware/notFound")
const errorHandle = require("./middleware/errorHandle")
dotenv.config()


app.use(express.json())
app.use(morgan('dev'))
app.use(cors())



// routes
app.use('/media', express.static(path.join(__dirname, 'media')));
app.use('/api', moviesRouter)

app.use(notFound)
app.use(errorHandle)

connectDB()
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`the web is running on ${PORT}`)
})