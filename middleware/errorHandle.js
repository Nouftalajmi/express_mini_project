const errorHandle = (error, req, res, next) => {
    return res.status(error.status || 500).json({
        message: error.message || "something went wrong!"
    })
}
module.exports = errorHandle