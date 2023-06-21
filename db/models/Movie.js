const { model, Schema } = require("mongoose")
const movieSchema = new Schema(
    {
        title: { type: String, required: true },
        genre: { type: String, required: true },
        releaseDate: { type: Date, required: true },
        posterImage: { type: String, required: true },
        rating: { type: Number, default: 0 }
    },
)

module.exports = model('movie', movieSchema)