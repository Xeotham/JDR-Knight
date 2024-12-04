const Gear = require('../models/gears');
const fs = require('fs');

exports.getGear = (request, response, next) => {
    Gear.find()
        .then(gears => response.status(200).json(gears))
        .catch(error => response.status(400).json({ error }))
};

exports.getOneGear = (request, response, next) => {
    Gear.findOne({ _id: request.params.id })
        .then(gears => response.status(200).json(gears))
        .catch(error => response.status(400).json({ error }))
};

exports.postGear = (request, response, next) => {
    const gearObject = JSON.parse(request.body.gear);
    delete gearObject._id;
    const Gear = new Gear({
        ...gearObject,
        imageUrl: `${request.protocol}://${request.get('host')}/images/${request.file.filename}`,
    });
    gear.save()
        .then(() => response.status(201).json({ message: 'Gear enregistré !' }))
        .catch(error => response.status(400).json({ error }));
};

exports.updateGear = (request, response, next) => {
    if (request.file) {
        Gear.findOne({ _id: request.params.id })
            .then(gear => {
                const filename = gear.imageUrl.split('/images/')[1];
                fs.unlink(`images/${filename}`, () => {
                    const gearObject = {
                        ...JSON.parse(request.body.gear),
                        imageUrl: `${request.protocol}://${request.get('host')}/images/${request.file.filename}`
                    }
                    Gear.updateOne({ _id: request.params.id }, { ...gearObject, _id: request.params.id })
                        .then(() => response.status(200).json({ message: 'Gear modifiée' }))
                        .catch(error => response.status(400).json({ error }))
                })
            })
            .catch(error => response.status(500).json({ error }));
    }
    else {
        const gearObject = { ...request.body };
        Gear.updateOne({ _id: request.params.id }, { ...gearObject, _id: request.params.id })
            .then(() => response.status(200).json({ message: 'Gear modifiée!' }))
            .catch(error => response.status(400).json({ error }));
    }
};

exports.deleteGear = (request, response, next) => {
    Gear.findOne({ _id: request.params.id })
        .then(gear => {
            const filename = gear.imageUrl.split('/images/')[1];
            fs.unlink(`images/${filename}`, () => {
                Gear.deleteOne({ _id: request.params.id })
                    .then(() => response.status(200).json({ message: 'Gear supprimée !' }))
                    .catch(error => response.status(400).json({ error }));
            })
        })
        .catch(error => res.status(500).json({ error }));
};
