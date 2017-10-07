const inspire = require("../models/inspirer")

const InspireController = {

    listInspirers(req, res) {
        inspire.find().exec()
            .then(function (inspires) {
                    res.json(inspires);
                },
                function (erro) {
                    console.error(erro);
                    res.status(500).json(erro);
                });
    },
    getInspirer (req, res) {
        var _id = req.params.id;
        inspire.findById(_id).exec()
            .then(
                function (inspire) {
                    if (!inspire) throw new Error("Inspire não encontrada");
                    res.json(inspire)
                },
                function (erro) {
                    console.log(erro);
                    res.status(404).json(erro);
                }
            );
    },
    removeInspirer (req, res) {
        var _id = req.params.id;
        inspire.remove({
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
    saveInspirer (req, res) {
        /*Update*/
        var _id = req.body._id;
        if (_id) {
            Inspire.findByIdAndUpdate(_id, req.body).exec()
                .then(
                    function (inspire) {
                        res.json(inspire);
                    },
                    function (erro) {
                        console.error(erro);
                        res.status(500).json(erro);
                    }
                );
        } else {
            inspire.create(req.body)
                .then(
                    function (inspire) {
                        res.status(201).json(inspire);
                    },
                    function (erro) {
                        console.log(erro);
                        res.status(500).json(erro);
                    }
                );
        }
    }
}
module.exports = InspireController;




