const movieRepository = require('../repository/movieRepository');

exports.list = (req, res) => {
    movieRepository.list((err, movies) => {
        if (err) {
            res.status(500).json({ "error:": "Database Error" })
            console.log(err)
        }
        else {
            res.json(movies)
            console.log(movies);
            console.log(res.json(movies));
        }
    });
}