//Module 2 Assignment 2 - ES6 Modern JavaScript - vpgajula

var loanInfo = [];

var loanAcct1 = {
        "id": 0,
        "customerName": "Sarah Miller",
        "phoneNumber": "954-123-7890",
        "address": "123, Main St, Coral Springs, FL 33067",
        "loanAmount": 2000.00,
        "interest": 0.75,
        "loanTermYears": 10,
        "loanType": "Auto",
        "description": "Auto loan for Sarah",
        "calculatedLoanAmount": function(){
            return (this.loanAmount * this.interest * this.loanTermYears);
        }
    }

var loanAcct2 = {
        "id": 1,
        "customerName": "Raj Kumar",
        "phoneNumber": "201-562-7998",
        "address": "13456, Park Ave, Cranston, MA 02910",
        "loanAmount": 10000.00,
        "interest": 1.75,
        "loanTermYears": 30,
        "loanType": "Mortgage",
        "description": "Mortgage loan for Raj",
        "calculatedLoanAmount": function(){
           return (this.loanAmount * this.interest * this.loanTermYears);
        }
    }

var loanAcct3 = {
        "id": 2,
        "customerName": "Sam Smith",
        "phoneNumber": "831-678-9987",
        "address": "72, Coldstone Dr, Aspen, CO 54628",
        "loanAmount": 5000.00,
        "interest": 2.50,
        "loanTermYears": 5,
        "loanType": "Auto",
        "description": "Auto loan for Sam",
        "calculatedLoanAmount": function(){
           return (this.loanAmount * this.interest * this.loanTermYears);
        }
    }

var loanAcct4 = {
        "id": 3,
        "customerName": "Kelly Clarkson",
        "phoneNumber": "354-575-2738",
        "address": "419, Apt 2B, Parkside Dr, Deerfield, FL 64737",
        "loanAmount": 3000.00,
        "interest": 2.00,
        "loanTermYears": 7,
        "loanType": "Personal",
        "description": "Personal loan for Kelly",
        "calculatedLoanAmount": function(){
            return (this.loanAmount * this.interest * this.loanTermYears);
        }
    }

var loanAcct5 = {
        "id": 4,
        "customerName": "William McKinsley",
        "phoneNumber": "787-998-2233",
        "address": "6789, Newton St, Mountain View, CA 98989",
        "loanAmount": 40000.00,
        "interest": 1.50,
        "loanTermYears": 15,
        "loanType": "Home",
        "description": "Home loan for William",
        "calculatedLoanAmount": function(){
           return (this.loanAmount * this.interest * this.loanTermYears);
        }
    }  

//push the objects into loanInfo array
loanInfo.push(loanAcct1);
loanInfo.push(loanAcct2);
loanInfo.push(loanAcct3);
loanInfo.push(loanAcct4);
loanInfo.push(loanAcct5);

//display the objects in the array
console.log(loanInfo);

/* const newArrayOfLoans = loanInfo.map((item) => {
    const loanAmountToPay = item.calculatedLoanAmount();
    const newObject = [...item,amountToPay:loanAmountToPay];
    return newObject;
}); */

//calculate the calculatedLoanAmount for each loan account and display
loanInfo.forEach((item) => console.log(`Calculated loan amount for ${item.customerName} is:`, 
            Intl.NumberFormat("en-US", { style: "currency", "currency":"USD" }).format(item.calculatedLoanAmount())));

//calcuate the Grand Total of all loan accounts in the loanInfo array
let grandTotal = 0;

for (let acct in loanInfo){
    grandTotal += loanInfo[acct].calculatedLoanAmount();
}

console.log('The Grand Total of all Loans is: ', 
                Intl.NumberFormat("en-US", { style: "currency", "currency":"USD" }).format(grandTotal));
