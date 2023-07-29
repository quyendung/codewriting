inputString = "172.316.254.1";

solution = (inputString) => {
    let newString = inputString.split(".");

    for (let i = 0; i < newString.length; i++) {
        if (newString[i] === "" || newString.length !== 4) {
            return false;
        }
    }

    let numNew = Number(newString[i]);

    if (numNew < 0 || newString > 255) {
        return false;
    }

    return true;
};
console.log(solution(inputString));
