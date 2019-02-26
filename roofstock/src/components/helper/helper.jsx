export function getPrice(property, comma = false, fractions = 2) {
    const price = property.financial;
    if (!!price && comma) {
        const listedPrice = price.listPrice;
        return `$${toLocaleFixed(listedPrice, fractions)}`;
    } else if (!!price) {
        const listedPrice = price.listPrice;
        return listedPrice;
    }
}

export function getRent(property, comma = false, fractions = 2){ 
    const rent = property.financial;
    if (!!rent && comma) {
        return `$${toLocaleFixed(rent.monthlyRent, fractions)}`;
    } else if (!!rent) {
        return rent.monthlyRent.toFixed(2);
    }
}

export function getGrossYield(property){
    if (getRent(property) && getPrice(property)) {
        return `${((getRent(property) * 12 / getPrice(property)) * 100).toFixed(2)}%`;
    }
}

export function getYear(property) {
    const physical = property.physical;
    return !!physical && physical.yearBuilt;
}

function toLocaleFixed(helper, fractions) {
    return helper.toLocaleString(undefined, {
        minimumFractionDigits: fractions,
        maximumFractionDigits: fractions
    })
}
