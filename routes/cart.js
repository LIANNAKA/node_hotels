const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/slug', (req, res)=>{
    // res.sendFile(path.join(__dirname,'../server.js'))
    var customized_tab = {
        colour: 'red',
        stationary_item: 'pen',
        type: 'gel'
    }
    res.send(customized_tab)
})

module.exports = router 