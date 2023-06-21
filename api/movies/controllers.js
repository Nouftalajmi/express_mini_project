const Movie = require("../../db/models/Movie")
const getMovies = async (req, res, next) => {
    try {
        const movies = await Movie.find()
        return res.status(200).json(movies)
    } catch (error) {
        next(error)
    }
}
const createMovie = async (req, res, next) => {
    try {
        if (req.file) {
            req.body.posterImage = `${req.file.path}`
        }
        const movie = await Movie.create(req.body)
        return res.status(201).json(movie)
    } catch (error) {
        next(error)
    }
}
const updateMovie = async (req, res, next) => {
    try {
        await req.movie.updateOne(req.body)
        return res.status(200).json(req.movie)
    } catch (error) {
        next(error)
    }
}
const getMovieById = async (req, res, next) => {
    try {
        res.status(200).json(req.movie)
    } catch (error) {
        next(error)
    }
}
const deleteMovie = async (req, res, next) => {
    try {
        await req.movie.deleteOne()
        return res.status(204).end()
    } catch (error) {
        next(error)
    }
}

module.exports = { getMovies, createMovie, getMovieById, updateMovie, deleteMovie }