const mongoose = require('mongoose');
require('../model/group');

const Group = mongoose.model('groups');

module.exports = app => {
    app.post('/api/add_groups', async (req, res) => {
        const group = new Group({
            groupName: req.body.groupName,
            subGroup: req.body.subGroup
        });
        try {
            await group.save();
            res.send(group);
        } catch (err){
            res.status(422).send(err);
        }
    });

    app.get('/api/get_groups', (req, res) => {
        Group.find({})
            .then(groups => {
                res.send({
                    groups
                })
            });
    });

    app.put('/api/edit_group/:id', (req, res) => {
        Group.findById({
            _id: req.params.id
        }).then( group => {
            group.groupName = req.body.groupName || group.groupName,
            group.subGroup = req.body.subGroup || group.subGroup
            group.save()
                then(group => {
                    res.send(group)
                });
        });
    });

    app.delete('/api/remove_group/:id', (req, res) => {
        Group.findOneAndRemove({
            _id: req.params.id
        }).then(() => {
            res.send(req.params.id)
        });
    });
};