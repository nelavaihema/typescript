function checkStatus(isActive: boolean): void {
    if (isActive) {
        console.log("User is Active");
    } else {
        console.log("User is Not Active");
    }
}

checkStatus(true);
checkStatus(false);


function isEven(num: number): boolean {
    return num % 2 === 0;
}

let result = isEven(4);
console.log(result);   // true