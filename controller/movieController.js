const movieRepository = require('../repository/movieRepository');

exports.list = (req, res) => {
    movieRepository.list((err, movies) => {
        if (err) {
            console.log(err)
            return res.status(500).json({ "error:": "Database Error" })
        }
        else {
            console.log(movies);
            return res.json(movies)
        }
    });
}