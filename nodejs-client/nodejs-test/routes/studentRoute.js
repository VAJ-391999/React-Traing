const Student = require("../models/StudentsModel");
const express = require("express");
const { requireAuth } = require('../middleware/authMiddleware');
const router = express.Router();

router.get("/student", requireAuth, async (req, res) => {
    try {
        const studentData = await Student.find({})
        res.json(studentData)
    } catch (err) {
        res.json(err)
    }
})

router.get("/student/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const studentData = await Student.findById(_id)

        if (!studentData) {
            res.status(404).send();
        } else {
            res.json(studentData)
        }
    }
    catch (err) {
        res.status(500).json({ err })
    }
})

router.delete("/student/:id", async (req, res) => {
    try {
        const id = req.params.id
        const studentData = await Student.findByIdAndDelete(id)

        if (!studentData) {
            res.status(400).send();
        }
        else {
            res.json(studentData)
        }
    }
    catch (err) {
        res.status(400).json({ err })
    }
})

router.patch("/student/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const studentData = await Student.findByIdAndUpdate(_id, req.body, {new : true})
        res.send(studentData)

        if (!studentData) {
            res.status(404).send(studentData);
        }
        else {
            res.send(studentData)
        }
    }
    catch (err) {
    res.status(400).json({ err })
}
})

router.post("/student", async (req, res) => {

    try {
        const student = new Student(req.body)
        const createStudent = await student.save();
        res.status(201).json({ msg: "Post request is success", createStudent })

    } catch (err) {
        res.status(400).json({ err })
    }

    /* const student = new Student(req.body)
    student.save()
    .then(() => {
        res.status(201).json({ msg : "Post request is success", student})
    })
    .catch((err) => {
        res.status(400).json({err})
    });*/
})



module.exports = router;