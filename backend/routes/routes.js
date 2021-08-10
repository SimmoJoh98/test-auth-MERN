const express = require('express');
const router = require('express').Router();
const signUpTemplateTemp = require('../models/signUpModels');
const bcrypt = require('bcrypt');

router.post('/signup', async (req, res) => {
    const saltPassword = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(req.body.Password, saltPassword)

    const signUpUser = new signUpTemplateTemp({
        FullName: req.body.FullName,
        Username: req.body.Username,
        Email: req.body.Email,
        Password: securePassword
    })

    signUpUser.save().then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = router;