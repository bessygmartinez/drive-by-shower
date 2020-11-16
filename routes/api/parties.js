const express = require("express");
const router = express.Router();
const partiesController = require("../../controllers/partiesController");

// Load input validation
const validateRegisterInput = require("../../validation/register");

// Load Parties model
const Party = require("../../models/Party");

// @route POST api/users/register
// @desc Register user
// @ access Public
router.post ("/register", (req, res) => {
    //Form validation

    const { errors, isValid } = validateRegisterInput(req.body);

    //Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    // Party.findOne({ partyName: req.body.partyName }).then(party => {
    //     if (party) {
    //         return res.status(400).json({ partyName: "This party has already reserved their time!" });
    //     }
    // });

    else { Party.find({ partyTime: "11:00am - 12:00pm"}).then(parties => {
            let partySizes = [];
        
            for (let i=0; i < parties.length; i++) {
                partySizes.push(parseInt(parties[i].partySize))
            }
            total11 = partySizes.reduce(function (a, b) {
                return a + b;
            }, 0)
    })
    .then (
    Party.find({ partyTime: "12:15pm - 01:15pm"}).then(parties => {
            let partySizes = [];
            
            for (let i=0; i < parties.length; i++) {
                partySizes.push(parseInt(parties[i].partySize)) 
            }
            total12 = partySizes.reduce(function (a, b) {
                return a + b;
            }, 0)
    })
    .then (
        Party.find({ partyTime: "01:30pm - 02:30pm"}).then(parties => {
            let partySizes = [];
            
            for (let i=0; i < parties.length; i++) {
                partySizes.push(parseInt(parties[i].partySize)) 
            }
            total13 = partySizes.reduce(function (a, b) {
                return a + b;
            }, 0)
    })
    .then (
        Party.find({ partyTime: "02:45pm - 03:45pm"}).then(parties => {
            let partySizes = [];
            
            for (let i=0; i < parties.length; i++) {
                partySizes.push(parseInt(parties[i].partySize)) 
            }
            total14 = partySizes.reduce(function (a, b) {
                return a + b;
            }, 0)
    })
    .then (
        Party.find({ partyTime: "04:00pm - 05:00pm"}).then(parties => {
            let partySizes = [];
            
            for (let i=0; i < parties.length; i++) {
                partySizes.push(parseInt(parties[i].partySize)) 
            }
            total15 = partySizes.reduce(function (a, b) {
                return a + b;
            }, 0)     
    })
    .then (
        Party.find({ partyTime: "05:15pm - 06:15pm"}).then(parties => {
            let partySizes = [];
            
            for (let i=0; i < parties.length; i++) {
                partySizes.push(parseInt(parties[i].partySize)) 
            }
            total16 = partySizes.reduce(function (a, b) {
                return a + b;
            }, 0)

            console.log(parseInt(req.body.partySize) + parseInt(total11))
   if ( parseInt(req.body.partySize) + parseInt(total11) > 15 && req.body.partyTime === "11:00am - 12:00pm" ||
        parseInt(req.body.partySize) + parseInt(total12) > 15 && req.body.partyTime === "12:15pm - 01:15pm" ||
        parseInt(req.body.partySize) + parseInt(total13) > 15 && req.body.partyTime === "01:30pm - 02:30pm" ||
        parseInt(req.body.partySize) + parseInt(total14) > 15 && req.body.partyTime === "02:45pm - 03:45pm" ||
        parseInt(req.body.partySize) + parseInt(total15) > 15 && req.body.partyTime === "04:00pm - 05:00pm" ||
        parseInt(req.body.partySize) + parseInt(total16) > 15 && req.body.partyTime === "05:15pm - 06:15pm" ) {
    return res.status(400).json({ partyTime: "Sorry! Time frame is already full. Please choose another."})
    }
    else {
        const newParty = new Party({
            partyName: req.body.partyName,
            partySize: req.body.partySize,
            partyAddress: req.body.partyAddress,
            partyTime: req.body.partyTime
        });
        newParty
            .save()
            .then(party => res.json(party))
            .catch(err => console.log(err))
    }

    })
    )
    )
    )
    )
    )
}
});
    

// Matches with "/api/parties"
router.route("/")
  .get(partiesController.findAll)
  .post(partiesController.create);

// Matches with "/api/parties/:id"
router.route("/:id")
  .get(partiesController.findById)
  .put(partiesController.update)
  .delete(partiesController.remove);

module.exports = router;