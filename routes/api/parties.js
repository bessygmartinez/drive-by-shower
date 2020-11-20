const express = require("express");
const router = express.Router();
const partiesController = require("../../controllers/partiesController");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const nodemailer = require("nodemailer");
const Hogan = require("hogan.js");
const fs = require("fs");

//Get HTML files for emails
const confirmationTemplate = fs.readFileSync("./views/confirmationEmail.hjs", "utf-8");
const sorryTemplate = fs.readFileSync("./views/sorryEmail.hjs", "utf-8");

//Compile template
const compiledConfTemplate = Hogan.compile(confirmationTemplate);
const compiledSorryTemplate = Hogan.compile(sorryTemplate);

const oauth2Client = new OAuth2(
  process.env.GMAIL_CLIENTID, // ClientID
  process.env.GMAIL_CLIENTSECRET, // Client Secret
  "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
  refresh_token: process.env.GMAIL_REFRESHTOKEN,
});

const accessToken = oauth2Client.getAccessToken();

// Load input validation
const validateRegisterInput = require("../../validation/register");

// Load Parties model
const Party = require("../../models/Party");

// @route POST api/users/register
// @desc Register user
// @ access Public
router.post("/register", (req, res) => {
  //Form validation

  const { errors, isValid } = validateRegisterInput(req.body);

  //Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  } else {
    Party.find({ partyTime: "11:00am - 12:00pm" })
      .then((parties) => {
        let partySizes = [];

        for (let i = 0; i < parties.length; i++) {
          partySizes.push(parseInt(parties[i].partySize));
        }
        total11 = partySizes.reduce(function (a, b) {
          return a + b;
        }, 0);
      })
      .then(
        Party.find({ partyTime: "12:15pm - 01:15pm" })
          .then((parties) => {
            let partySizes = [];

            for (let i = 0; i < parties.length; i++) {
              partySizes.push(parseInt(parties[i].partySize));
            }
            total12 = partySizes.reduce(function (a, b) {
              return a + b;
            }, 0);
          })
          .then(
            Party.find({ partyTime: "01:30pm - 02:30pm" })
              .then((parties) => {
                let partySizes = [];

                for (let i = 0; i < parties.length; i++) {
                  partySizes.push(parseInt(parties[i].partySize));
                }
                total13 = partySizes.reduce(function (a, b) {
                  return a + b;
                }, 0);
              })
              .then(
                Party.find({ partyTime: "02:45pm - 03:45pm" })
                  .then((parties) => {
                    let partySizes = [];

                    for (let i = 0; i < parties.length; i++) {
                      partySizes.push(parseInt(parties[i].partySize));
                    }
                    total14 = partySizes.reduce(function (a, b) {
                      return a + b;
                    }, 0);
                  })
                  .then(
                    Party.find({ partyTime: "04:00pm - 05:00pm" })
                      .then((parties) => {
                        let partySizes = [];

                        for (let i = 0; i < parties.length; i++) {
                          partySizes.push(parseInt(parties[i].partySize));
                        }
                        total15 = partySizes.reduce(function (a, b) {
                          return a + b;
                        }, 0);
                      })
                      .then(
                        Party.find({ partyTime: "05:15pm - 06:15pm" }).then((parties) => {
                          let partySizes = [];

                          for (let i = 0; i < parties.length; i++) {
                            partySizes.push(parseInt(parties[i].partySize));
                          }
                          total16 = partySizes.reduce(function (a, b) {
                            return a + b;
                          }, 0);

                          if (
                            (parseInt(req.body.partySize) + parseInt(total11) > 15 &&
                              req.body.partyTime === "11:00am - 12:00pm") ||
                            (parseInt(req.body.partySize) + parseInt(total12) > 15 &&
                              req.body.partyTime === "12:15pm - 01:15pm") ||
                            (parseInt(req.body.partySize) + parseInt(total13) > 15 &&
                              req.body.partyTime === "01:30pm - 02:30pm") ||
                            (parseInt(req.body.partySize) + parseInt(total14) > 15 &&
                              req.body.partyTime === "02:45pm - 03:45pm") ||
                            (parseInt(req.body.partySize) + parseInt(total15) > 15 &&
                              req.body.partyTime === "04:00pm - 05:00pm") ||
                            (parseInt(req.body.partySize) + parseInt(total16) > 15 &&
                              req.body.partyTime === "05:15pm - 06:15pm")
                          ) {
                            return res.status(400).json({
                              partyTime:
                                "Your party size exceeds the availability for that hour. Please choose another time or lower your party size.",
                            });
                          } else {
                            const newParty = new Party({
                              partyName: req.body.partyName,
                              partySize: req.body.partySize,
                              partyAddress: req.body.partyAddress,
                              partyEmail: req.body.partyEmail,
                              partyTime: req.body.partyTime,
                            });
                            newParty
                              .save()
                              .then((party) => {
                                  let transporter = nodemailer.createTransport({
                                  service: "Gmail",
                                  tls: {
                                    rejectUnauthorized: false,
                                  },
                                  auth: {
                                    type: "OAuth2",
                                    user: "bessygmartinez83@gmail.com",
                                    clientId: process.env.GMAIL_CLIENTID,
                                    clientSecret: process.env.GMAIL_CLIENTSECRET,
                                    refreshToken: process.env.GMAIL_REFRESHTOKEN,
                                    accessToken: accessToken,
                                  },
                                });

                                transporter.verify((error, success) => {
                                  if (error) {
                                    console.log(error);
                                  } else {
                                    console.log("Server is ready to take messages");
                                  }
                                });

                                let mailOptions = {
                                  from: "bessygmartinez83@gmail.com",
                                  to: party.partyEmail,
                                  replyTo: "bessygmartinez83@gmail.com",
                                  subject:
                                    "🌈Bessy & Andre's Drive-By Baby Shower⛈️",
                                  text: `You have selected to arrive between ${party.partyTime}.`,
                                  html: party.partyTime !== "Can't Make It" ? compiledConfTemplate.render({
                                    partyName: party.partyName,
                                    partySize: party.partySize,
                                    partyAddress: party.partyAddress,
                                    partyTime: party.partyTime
                                  }) :
                                  compiledSorryTemplate.render({
                                    partyName: party.partyName,
                                  })
                                };

                                transporter.sendMail(mailOptions, (err, data) => {
                                  if (err) {
                                    console.log(err);
                                    return res.status(400).json({
                                      msg: "fail",
                                      err: err,
                                    });
                                  } else {
                                    console.log("successful");
                                    return res.status(200).json({
                                      msg: "success",
                                    });
                                  }
                                });
                                transporter.close();
                              })
                              .catch((err) => console.log(err));
                          }
                        })
                      )
                  )
              )
          )
      );
  }
});

// Matches with "/api/parties"
router.route("/").get(partiesController.findAll).post(partiesController.create);

// Matches with "/api/parties/:id"
router
  .route("/:id")
  .get(partiesController.findById)
  .put(partiesController.update)
  .delete(partiesController.remove);

module.exports = router;
