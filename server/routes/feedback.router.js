const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post ('/', (req, res) => {
    let feedback = req.body;

    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                    VALUES ($1, $2, $3, $4);`

    let values = [feedback.feeling, feedback.understanding, feedback.support, feedback.comments]
    
    pool.query(queryText, values )
    .then(result => {
        res.sendStatus(201);
    }).catch(error => {
        console.log('Error adding feedback', error);
        res.sendStatus(500);
    })
})

module.exports = router;