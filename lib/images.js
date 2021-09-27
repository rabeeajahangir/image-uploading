const request = require('supertest');
const express = require('express');
const fs = require('fs')
const app = express();

app.post('/user', function(req, res) {
    // capture the encoded form data
    req.on('data', (data) => {
        console.log(data.toString());
    });

    // send a response when finished reading
    // the encoded form data
    req.on('end', () => {
        res.status(200).json({ name: 'tobi' });
    });

});

testImage = './package.json'

resp = request(app)
    .post('/user')

    resp.set('Authorization', `Bearer Test`)
    resp.attach("file", testImage)
    resp.expect(200)
    .then(response => {
        console.log("response",response);
    }).catch((err) => {
        console.log(err)
    })