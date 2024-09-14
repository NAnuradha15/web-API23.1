const router = require('express').Router();
const train = require('../models/train');



router.route("/").get(async (req,res) =>{
   await train.find().then((data) =>{
        res.status(200).send({status :"Data Recieved",data : data});
    }).catch((err)=>{
        res.status(400).send({status :err}) 
    })
})




router.route("/add").post(async(req,res) =>{
    const { name,
        Route_name,
        Status,
        longi,
        lati,} = req.body;

    const newtrain = new train({
        name,
        Route_name,
        Status,
        longi,
        lati,

    })

    await newtrain.save().then(() =>{
        res.status(200).send({state:"train Added!!"})
    }).catch((e)=>{
        res.status(400).send({state : e})
    })
})

router.route("/update").put(async(req,res) =>{
    const {Status,longi,lati} = req.body;
    const id =  req.body.id

    const newData = {
        Status,longi,lati
    }

    await train.findByIdAndUpdate(id,newData) .then(() =>{
        res.status(200).send({state : 'Updated'})
    }).catch(e =>{
        res.status(400).send({state : e})
    })
})


router.route("/delete").delete(async (req,res) =>{
    const {id} = req.body;
    
    train.findByIdAndDelete(id).then(() =>{
        res.status(200).send({state : 'Deleted'})
    }).catch(e =>{
        res.status(400).send({state : e})
    })
})




module.exports = router;