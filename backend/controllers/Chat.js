const bent = require("bent");
const getBuffer = bent("buffer");

module.exports = (req, res, next) => {
    let statusCode = req.params.code;
    console.log("test");
    getBuffer("https://http.cat/" + statusCode)
        .then((response) => {
            res.set({
                "Content-Type": "image/jpeg",
            });
            res.status(200).send(response);
        })
        .catch((err) => {
            next({ ...err, statusCode: 500, message: "Unknown Error !" });
        });
};
