const error = document.getElementById("error");
const username = document.getElementById("username");
const password = document.getElementById("password");
const form = document.getElementById("login-form");

function containLowerCase(str) {
    let lowerCaseCount = 0;
    for (let s of str) {
        if (s === s.toLowerCase()) {
            lowerCaseCount++;
        }
    }
    return lowerCaseCount;
}

function containUpperCase(str) {
    let upperCaseCount = 0;
    for (let s of str) {
        if (s === s.toUpperCase()) {
            upperCaseCount++;
        }
    }
    return upperCaseCount;
}

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function containDigit(str) {
    let digitCount = 0;
    for (let s of str) {
        if (digits.includes(Number(s))) {
            digitCount++;
        }
    }
    return digitCount;
}

const userNameValidator = (username) => {
    const lowerCaseTest = containLowerCase(username.value);
    const upperCaseTest = containUpperCase(username.value);
    const digitTest = containDigit(username.value);

    if (!lowerCaseTest || !upperCaseTest || !digitTest) {
        const lowercase = lowerCaseTest ? "" : "Lowercase";
        const uppercase = upperCaseTest ? "" : "Uppercase";
        const digit = digitTest ? "" : "Digit";

        error.innerText = `Username must be a ${uppercase + ","} ${lowercase + ","
            } ${digit}`;

        setTimeout(() => {
            error.innerText = "";
        }, 3000);
    }
    else {
        return true;
    }
};

const passwordValidator = (password) => {
    const lowerCaseTest = containLowerCase(password.value);
    const upperCaseTest = containUpperCase(password.value);
    const digitTest = containDigit(password.value);

    if (!lowerCaseTest || !upperCaseTest || !digitTest) {
        const lowercase = lowerCaseTest ? "" : "Lowercase";

        const uppercase = upperCaseTest ? "" : "Uppercase";

        const digit = digitTest ? "" : "Digit";

        const length = password.value.length <= 8 ? "Length More than 8" : "";

        error.innerText = `password must be a ${uppercase + ","} ${lowercase + ","} ${digit + ","} ${length}`;

        setTimeout(() => {
            error.innerText = "";
        }, 3000);
    }
    else {
        return true;
    }
};

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Validate UserName
    // Criteria Must Include - upper and lowecase and number

    if (userNameValidator(username) && passwordValidator(password)) {
        username.value = "";
        email.value = "";
        password.value = "";
        alert("Form Submitted");
    }
});
