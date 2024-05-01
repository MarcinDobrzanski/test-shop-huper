const input = require('sync-input');

// We have imported the 'sync-input' package for you.
// This package allows you to get user input.
// Like so:
// let name = input("Type your name: ");
// let age = Number(input("Type your age: "));
// You will need it in later stages.

const textPrice = 'Earned amount: ';
const textIncome ='Income: ';
const questionStaff = 'Staff expenses: ';
const questionOther = 'Other expenses: ';
const resultText = 'Net income: ';


let income = 0;
const product = {
    'Bubblegum': 202,
    'Toffee': 118,
    'Ice cream': 2250,
    'Milk chocolate': 1680,
    'Doughnut': 1075,
    'Pancake': 80
}

function calculateTotalIncome(product) {
    let income = 0;
    Object.entries(product).forEach(([key, value]) => {
        income += value;
        console.log(`${key}: $${value}`);
    });
    return income;
}

function calculateExpenses(income) {

    console.log(questionStaff);
    const staffIncome = parseInt(input());
    console.log(questionOther);
    const otherIncome = parseInt(input());
    let result = income - (staffIncome + otherIncome);
    console.log(`${resultText}$${result}`);

}

// showProduct(product, income);
// calculateExpenses(income);
console.log(textPrice);
const totalIncome = calculateTotalIncome(product);
console.log(`\n${textIncome}$${totalIncome}`);
calculateExpenses(totalIncome);
