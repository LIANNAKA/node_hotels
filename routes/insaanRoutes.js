//  insaan related all endpoints are here
const express = require('express');
const router = express.Router();
const insaan = require('../models/insaan');


router.post('/', async (req,res)=>{
    try{
    const data = req.body // assuming the request body contains the person data

    //create a new insaan document using mogoose model
    const newInsaan = new insaan(data);
    
    // save the new insaan to the database
   const response = await newInsaan.save();
   console.log('data saved');
   res.status(200).json(response);
}
catch(err){
    console.log(err);
    res.status(500).json({error: 'internal servers error'});
}
})

// GET method to get the insaan
router.get('/', async (req,res)=>{
    try{
        const data = await insaan.find();
        console.log('data fetched');
   res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'internal servers error'});
    }
})

router.get('/:work', async (req,res)=>{ //parameterized api calls
    try{
        const work = req.params.work; // extract the work type from the url parameter
        if(work == 'chef'|| work == 'manager'|| work == 'waiter'){
            const response = await insaan.find({work: work});
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

router.put('/:id', async (req,res)=>{
    try{
        const insaanId = req.params.id; // extract the id from the url parameter
        const updatedInsaanId = req.body;  // updated data for the person

        const response = await insaan.findByIdAndUpdate(insaanId, updatedInsaanId,{
            new: true, // return the updated document
            runValidators:true // run mongoose validation
        })

        if(!response){
            return res.status(404).json({error: 'insaan not found'});
        }


        console.log('data updated');
        res.status(200).json(response);
        
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'internal servers error'});
    }
})


router.delete('/:id', async(req,res)=>{
    try{
        const insaanId = req.params.id;

        const response = await insaan.findByIdAndDelete(insaanId);
    if(!response){
    return res.status(404).json({error: 'insaan not found'});
    }
    
        console.log('data deleted');
        res.status(200).json({message: 'person deleted successfully'});
        
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'internal servers error'});
    }
})
module.exports = router;