var express = require('express');
var router = express.Router();

// DB models
var VandM = require('../models/VandM.model');

// 5a7995b2734d1d0828bcecf7
router.put('/v-and-m', (req,res, next)=>{
    VandM.findByIdAndUpdate({_id: '5a7c2fe4e3f85f9231ec989c'},  {
    $set: {
             "vision": req.body.vision,
             "mission": req.body.mission
            }
        }, {
            new: true
        },function(data,err){
            if (err) {
                res.send(err);
            }
            else {                
                VandM.find(function (err, data) {
                    if (err) {
                        res.send(err);
                    } else {
                        res.json(data);
                    }
                })
            }

    })

//     VandM.create({
//         vision: req.body.vision,
//         mission: req.body.mission

//   }, function(err , data){
//     if(err){
//       res.send(err);
//     }
//     else{
//       VandM.find(function(err, enquiries){
//         if(err){
//           res.send(err);
//         }
//         else{
//           console.log('logged to database');
          
//         }
//       });
//     }
//   });
})


router.get('/v-and-m', (req, res, next) => {
    VandM.find(function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.json(data);
        }
    })
})



module.exports = router;
