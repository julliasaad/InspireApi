const inspired = require("../models/inspired")

const InspiredController = {

    listInspireds(req, res) {
        inspired.find().exec()
            .then(function (inspires) {
                    res.json(inspires);
                },
                function (erro) {
                    console.error(erro);
                    res.status(500).json(erro);
                });
    },
    getInspired (req, res) {
        var _id = req.params.id;
        inspired.findById(_id).exec()
            .then(
                function (inspired) {
                    if (!inspired) throw new Error("inspired não encontrada");
                    res.json(inspired)
                },
                function (erro) {
                    console.log(erro);
                    res.status(404).json(erro);
                }
            );
    },
    removeInspired (req, res) {
        var _id = req.params.id;
        inspired.remove({
                "_id": _id
            }).exec()
            .then(
                function () {
                    res.end();
                },
                function (erro) {
                    return console.erro(erro);
                }
            );
    },
    saveInspired (req, res) {
        /*Update*/
        var _id = req.body._id;
        if (_id) {
            inspired.findByIdAndUpdate(_id, req.body).exec()
                .then(
                    function (inspired) {
                        res.json(inspired);
                    },
                    function (erro) {
                        console.error(erro);
                        res.status(500).json(erro);
                    }
                );
        } else {
            inspired.create(req.body)
                .then(
                    function (inspired) {
                        res.status(201).json(inspired);
                    },
                    function (erro) {
                        console.log(erro);
                        res.status(500).json(erro);
                    }
                );
        }
    }
}
module.exports = InspiredController;