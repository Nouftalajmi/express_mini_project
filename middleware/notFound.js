const notFound = (req, res, next) => {
    return res.status(404).json({ message: "path not found" })
}
module.exports = notFound