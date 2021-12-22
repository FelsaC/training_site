export const validate = (input) => {
    const inputType = input.dataset.form;
    console.log(inputType);

    if(customValidation[inputType]){
        customValidation[inputType](input);
    } 


    if(input.validity.valid) {
        input.parentElement.classList.remove("invalid-input");
        input.parentElement.querySelector(".error-message").innerText = '';
    } else {
        input.parentElement.classList.add("invalid-input");
        input.parentElement.querySelector(".error-message").innerText = getErrorMessage(inputType, input);
    }

};

const customValidation= {
    checkPass: input => isTheSamePass(input),
}

const errorMessages = {
    user: {
        valueMissing: "O campo de usuário não pode estar vázio",
        patternMismatch: "O usuário deve ter entre 4 e 20 letras",
    },
    email: {
        valueMissing: "O campo de email não pode estar vázio",
        typeMismatch: "Email não valido",
    },
    phone: {
        patternMismatch: "Número de telefone não válido"
        
    },
    pass: {
        valueMissing: "O campo de senha não pode estar vázio",
        patternMismatch: "A senha deve conter de 6 a 20 caracteres, contando numeros, letras maisculas e minisculas, e os simbolos !, @, #, $, %, &, *, (, )"
    },
    checkPass: {
        valueMissing: "Favor repetir a senha neste campo",
        customError: "As senhas não batem",
    },
}

const errorTypes = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError',
]

const getErrorMessage = (inputType, input) => {
    let errorMessage = "";
    errorTypes.forEach((errorType) => {
        if(input.validity[errorType]) {
            errorMessage = errorMessages[inputType][errorType];
        }
    })

    return errorMessage;
}

const isTheSamePass = (input) => {
    console.log("hey");
    const password = input.parentElement.parentElement.querySelector("[data-form='pass']").value;

    if(input.value != password) {
        input.setCustomValidity("As senhas não batem");
    } else {
        input.setCustomValidity("");
    }

}