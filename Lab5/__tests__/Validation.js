const required = (val) => {
    if (val && val.length) {
        return val;
    }
    else {
        return null;
    }
}

const maxLength = function (len, val) {
    if (!(val) || (val.length <= len)) {
        return true;
    }
    else {
        return val.length;
    }
}

const minLength = jest.fn((len, val) =>
    val && (val.length >= len)
);

const isNumber = jest.fn((val) => {
    if (!isNaN(Number(val))) {
        return val;
    }
    else {
        return NaN;
    }
});

const validEmail = jest.fn((val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val));

module.exports = [required, maxLength, minLength, isNumber, validEmail];

