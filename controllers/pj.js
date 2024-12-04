const Pj = require('../models/pj');
const fs = require('fs');

exports.getPj = (request, response, next) => {
    Pj.find()
        .then(pjs => response.status(200).json(pjs))
        .catch(error => response.status(400).json({ error }))
};

exports.getOnePj = (request, response, next) => {
    Pj.findOne({ _id: request.params.id })
        .then(pjs => response.status(200).json(pjs))
        .catch(error => response.status(400).json({ error }))
};

exports.updatePj = (request, response, next) => {
    if (request.file) {
        Pj.findOne({ _id: request.params.id })
            .then(pj => {
                const filename = pj.imageUrl.split('/images/')[1];
                fs.unlink(`images/${filename}`, () => {
                    const pjObject = {
                        ...JSON.parse(request.body.pj),
                        imageUrl: `${request.protocol}://${request.get('host')}/images/${request.file.filename}`
                    }
                    Pj.updateOne({ _id: request.params.id }, { ...pjObject, _id: request.params.id })
                        .then(() => response.status(200).json({ message: 'Pj modifiée' }))
                        .catch(error => response.status(400).json({ error }))
                })
            })
            .catch(error => response.status(500).json({ error }));
    }
    else {
        const pjObject = { ...request.body };
        Pj.updateOne({ _id: request.params.id }, { ...pjObject, _id: request.params.id })
            .then(() => response.status(200).json({ message: 'Pj modifiée!' }))
            .catch(error => response.status(400).json({ error }));
    }
};

exports.deletePj = (request, response, next) => {
    Pj.findOne({ _id: request.params.id })
        .then(pj => {
            const filename = pj.imageUrl.split('/images/')[1];
            fs.unlink(`images/${filename}`, () => {
                Pj.deleteOne({ _id: request.params.id })
                    .then(() => response.status(200).json({ message: 'Pj supprimée !' }))
                    .catch(error => response.status(400).json({ error }));
            })
        })
        .catch(error => res.status(500).json({ error }));
};

exports.postPj = (request, response, next) => {
    const pjObject = JSON.parse(request.body.pj);
    delete pjObject._id;
    const pj = new Pj({
        ...pjObject,
        imageUrl: `${request.protocol}://${request.get('host')}/images/${request.file.filename}`,
    });
    pj.save()
        .then(() => response.status(201).json({ message: 'Objet enregistré !' }))
        .catch(error => response.status(400).json({ error }));
};
