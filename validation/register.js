const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};

    //Convert empty fields to an empty string to use validator functions
    data.partyName = !isEmpty(data.partyName) ? data.partyName : "";
    data.partySize = !isEmpty(data.partySize) ? data.partySize : "";
    data.partyAddress = !isEmpty(data.partyAddress) ? data.partyAddress : "";
    data.partyEmail = !isEmpty(data.partyEmail) ? data.partyEmail : "";
    data.partyTime = !isEmpty(data.partyTime) ? data.partyTime : "";

    //Name check
    if (Validator.isEmpty(data.partyName)) {
        errors.partyName = "Enter your name";
        errors.partyNameSpanish = "Ingrese su nombre"
    }

    //Size checks
    if (Validator.isEmpty(data.partySize)) {
        errors.partySize = "Enter group size";
        errors.partySizeSpanish = "Ingrese tamaño del grupo"
    }

    //Address check
    if (Validator.isEmpty(data.partyAddress)) {
        errors.partyAddress = "Enter your mailing address";
        errors.partyAddressSpanish = "Ingrese su dirección postal";
    }

    if (data.partyAddress.includes("@")) {
        errors.partyAddress = "Please enter your mailing address, not your email address";
        errors.partyAddressSpanish = "Ingrese su dirección postal, no su dirección de correo electrónico";
    }

    //Email check
    if (Validator.isEmpty(data.partyEmail)) {
        errors.partyEmail = "Enter your email address";
        errors.partyEmailSpanish = "Ingrese su correo electrónico";
    }

    if (!data.partyEmail.includes("@")) {
        errors.partyEmail = "Enter a valid email address";
        errors.partyEmailSpanish = "Ingrese una dirección de correo electrónico válida";
    }

    //Time check
    if (Validator.isEmpty(data.partyTime)) {
        errors.partyTime = "Choose a time frame";
        errors.partyTimeSpanish = "Elija un periodo de tiempo";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};