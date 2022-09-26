function dealer (price) {
    return `The price of the property is ${price}`
}
console.log(dealer(10000));

const addTwo = (one, two) => {
    if(one === two) {
        return true;
    } else {
        return false;
    }
};
console.log(addTwo(1, 2));