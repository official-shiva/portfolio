const express = require("express");
const router = express.Router();

require("../db/conn");
const User = require("../models/User");

router.post("/contact", async (req, res) => {
    const { name, email, gender, phone, address, message } = req.body;

    try {
        const userDocs = new User({
            name, email, gender, phone, address, message,
        })

        await userDocs.save();
        res.status(200).json({ message: `${userDocs} \n\nregistered successfully!!` });
    } catch (e) {
        res.status(400).json({ error: "Couldn't uploaded documents" })
    }
})

module.exports = router;