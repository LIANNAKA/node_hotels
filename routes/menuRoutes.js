const express = require('express');
const router = express.Router();
const menu = require('../models/menu');

router.post('/', async (req,res)=>{
    try{
    const data = req.body // assuming the request body contains the person data

    //create a new insaan document using mogoose model
    const newMenu = new menu(data);
    
    // save the new insaan to the database
   const response = await newMenu.save();
   console.log('data saved');
   res.status(200).json(response);
}
catch(err){
    console.log(err);
    res.status(500).json({error: 'internal servers error'});
}
})

// GET method to get the menu
router.get('/', async (req,res)=>{
    try{
        const data = await menu.find();
        console.log('data fetched');
   res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'internal servers error'});
    }
})


router.get('/:taste', async (req,res)=>{ //parameterized api calls
    try{
        const taste = req.params.taste; // extract the work type from the url parameter
        if(taste == 'spicy'|| taste == 'sour'|| taste == 'sweet'){
            const response = await menu.find({taste: taste});
            console.log("response fetched");
            res.status(200).json(response);
        }else{
            res.status(404).json({error: 'invalid work type'});
        }
        
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'internal servers error'});
    }
})

module.exports = router;