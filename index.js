"use strict";
const totalPrice = (data) => {
    const { price, discount, isInstallment, months } = data;
    let result = 0;
    result = isInstallment
        ? (price * (100 - discount)) / 100 / months
        : price / months;
    return result;
};
console.log(totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 }));
