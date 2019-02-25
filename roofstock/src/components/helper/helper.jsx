export function getPrice(item) {
    const price = item.financial;
    if(price !== null) {
        const listedPrice = price.listPrice.toFixed(2);
        return listedPrice;
    }
}

export function getRent(item){ 
    const rent = item.financial;
    return rent !== null && rent.monthlyRent.toFixed(2);
}

export function getGrossYield(item){
    if (getRent(item) && getPrice(item)) {
        return `${((getRent(item) * 12 / getPrice(item)) * 100).toFixed(2)}%`;
    }
}

export function getYear(item) {
    const physical = item.physical;
    return physical !== null && physical.yearBuilt;
}
