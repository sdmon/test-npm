var validator = require("validator");

async function validate(){
    const isEmail = await validator.isEmail("ejemplo@ejemplo.com");
    if (isEmail) {
        console.log("Es un email");
    } else {
        console.log("No es un email")
    }
}

validate()
