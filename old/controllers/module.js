const Module = require('../models/modules');
const fs = require('fs');

exports.getModule = (request, response, next) => {
    Module.find()
        .then(modules => response.status(200).json(modules))
        .catch(error => response.status(400).json({ error }))
};

exports.getOneModule = (request, response, next) => {
    Modules.findOne({ _id: request.params.id })
        .then(modules => response.status(200).json(modules))
        .catch(error => response.status(400).json({ error }))
};

exports.postModule = (request, response, next) => {
    const moduleObject = JSON.parse(request.body.module);
    delete moduleObject._id;
    const Module = new Module({
        ...moduleObject,
        imageUrl: `${request.protocol}://${request.get('host')}/images/${request.file.filename}`,
    });
    module.save()
        .then(() => response.status(201).json({ message: 'Module enregistré !' }))
        .catch(error => response.status(400).json({ error }));
};

exports.updateModule = (request, response, next) => {
    if (request.file) {
        Module.findOne({ _id: request.params.id })
            .then(module => {
                const filename = module.imageUrl.split('/images/')[1];
                fs.unlink(`images/${filename}`, () => {
                    const moduleObject = {
                        ...JSON.parse(request.body.module),
                        imageUrl: `${request.protocol}://${request.get('host')}/images/${request.file.filename}`
                    }
                    Module.updateOne({ _id: request.params.id }, { ...gearObject, _id: request.params.id })
                        .then(() => response.status(200).json({ message: 'Gear modifiée' }))
                        .catch(error => response.status(400).json({ error }))
                })
            })
            .catch(error => response.status(500).json({ error }));
    }
    else {
        const moduleObject = { ...request.body };
        Module.updateOne({ _id: request.params.id }, { ...moduleObject, _id: request.params.id })
            .then(() => response.status(200).json({ message: 'Module modifiée!' }))
            .catch(error => response.status(400).json({ error }));
    }
};

exports.deleteModule = (request, response, next) => {
    Module.findOne({ _id: request.params.id })
        .then(module => {
            const filename = module.imageUrl.split('/images/')[1];
            fs.unlink(`images/${filename}`, () => {
                Module.deleteOne({ _id: request.params.id })
                    .then(() => response.status(200).json({ message: 'Module supprimée !' }))
                    .catch(error => response.status(400).json({ error }));
            })
        })
        .catch(error => res.status(500).json({ error }));
};
