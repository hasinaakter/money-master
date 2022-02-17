// common function for all input value
function getInputValue(inputId) {
    const inputValue = document.getElementById(inputId).value;
    const InputFloat = parseFloat(inputValue);
    return InputFloat;
}

document.getElementById('calculate-btn').addEventListener('click', function () {

    // Get all input value    
    const incomeValue = getInputValue('income-id');
    const foodValue = getInputValue('food-id');
    const rentValue = getInputValue('rent-id');
    const clothesValue = getInputValue('clothes-id');
        // get error massage for invaild input
    if (incomeValue < 0 || isNaN(incomeValue)) {
        alert("Invalid Income field amount!");
    }
    else if (foodValue < 0 || isNaN(foodValue)) {
        alert("Invalid  Food field amount!");
    }
    else if (rentValue < 0 || isNaN(rentValue)) {
        alert("Invalid Rent field amount");
    }
    else if (clothesValue < 0 || isNaN(clothesValue)) {
        alert("Invalid Clothes field amount");
    }
    else {
        // Add total expenses 
        const expense = document.getElementById('expense-id');
        const expenseValue = expense.innerText;
        const totalExpense = foodValue + rentValue + clothesValue;
        if (totalExpense > incomeValue) {
            alert('Please reduce your expenses.');
        }
        else {
            // calculate  balance 
            const balance = document.getElementById('balance-id');
            const newBalance = incomeValue - totalExpense;

            expense.innerText = foodValue + rentValue + clothesValue;
            balance.innerText = newBalance;
        }
    }
})

document.getElementById('save-btn').addEventListener('click', function () {
    // get income Value
    const incomeValue = getInputValue('income-id');
    //get  Save value
    const saveValue = getInputValue('save-id');

    if (saveValue < 0 || isNaN(saveValue)) {
        alert("Enter a valid Save value !");
    }
    // savings calculations
    else {
        const saveFraction = saveValue / 100;
        const newSavingAmount = incomeValue * saveFraction;
        const savingAmount = document.getElementById('saving-amount');
        savingAmount.innerText = newSavingAmount;
        const remaining = document.getElementById('remaining');
        const balance = document.getElementById('balance-id').innerText;
        if (balance < newSavingAmount) {
            alert(saveValue + '% savings is not possible.');
        }
        else {
            const remainingBalance = balance - newSavingAmount;
            remaining.innerText = remainingBalance;
        }
    }
})