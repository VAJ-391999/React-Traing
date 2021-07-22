const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const members = require('../../public/Members');

router.get('/', (req, res) => {
    res.json(members)
});

//Get single member
router.get('/:id', (req, res) => {

    const found = members.some(member => member.id === parseInt(req.params.id))

    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    }
    else {
        res.status(400).json({msg: "Member not found"});
    }
})

//Create member 
router.post('/', (req, res) => {
    const newMember = {
        id : uuid.v4(),
        name: req.body.name,
        email : req.body.email
    }
    if (!newMember.name || !newMember.email) {
        return res.status(400).json({ msg : "Please include name and email"})
    }
    members.push(newMember);
    //res.json(members);
    res.redirect('/')
})

//Update Member
router.put('/:id', (req, res) => {

    const found = members.some(member => member.id === parseInt(req.params.id))

    if (found) {
        const updMember = req.body;
        members.forEach(member => {
            if (member.id === parseInt(req.params.id)) {
                member.name = updMember.name ? updMember.name : member.name,
                member.email = updMember.email ? updMember.email : member.email
            }
            res.status(200)
            res.json({ msg : "Member is updated", member})
            res.end();
        })
    }
    else {
        res.status(400).json({msg: "Member not found"});
    }
})

//Delete member
router.delete('/:id', (req, res) => {

    const found = members.some(member => member.id === parseInt(req.params.id))

    if (found) {
        res.json({ msg: "Member Deleted", members : members.filter(member => member.id !== parseInt(req.params.id)) });
    }
    else {
        res.status(400).json({msg: "Member not found"});
    }
})

module.exports = router;