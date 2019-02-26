export function getPrice(item) {
    const price = item.financial;
    if(!!price) {
        const listedPrice = price.listPrice;
        // console.log(addComma(listedPrice))
        return addComma(listedPrice);
    }
}

export function getRent(item){ 
    const rent = item.financial;
    return !!rent && addComma(rent.monthlyRent);
}

export function getGrossYield(item){
    if (getRent(item) && getPrice(item)) {
        return `${(parseInt(getRent(item)) * 12 / parseInt((getPrice(item))) / 10).toFixed(2)}%`;
    }
}

export function getYear(item) {
    const physical = item.physical;
    return !!physical && physical.yearBuilt;
}

export function addComma(number) {
    return `${Number(number.toFixed(0)).toLocaleString().split(/\s/).join(',')}.00`;
}
