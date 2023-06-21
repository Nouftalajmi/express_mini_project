const express = require("express")
const Movie = require('../../db/models/Movie')
const router = express.Router()
const { getMovies, createMovie, updateMovie, getMovieById, deleteMovie } = require("../../api/movies/controllers")

router.param('movieId', async (req, res, next, movieId) => {
    try {
        const foundMovie = await Movie.findById(movieId)
        if (!foundMovie) return res.status(404).json({ message: "Movie not found" })
        req.movie = foundMovie
        next()

    } catch (error) {
        return next(error)

    }
})
const uploader = require("../../middleware/uploader")
router.get("/movies", getMovies)
router.post("/movies", uploader.single('posterImage'), createMovie)
router.put("/movies/:movieId", updateMovie)
router.get("/movies/:movieId", getMovieById)
router.delete("/movies/:movieId", deleteMovie)

module.exports = router