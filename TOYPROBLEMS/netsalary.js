function show(value){
    console.log(value);
}


// input = Basic salary 30,000
// input = Benefits 4,200 

let basicSalary = 30000;
let benefit = 4200;


// output = tax

function tax(incomeSalary){
    let taxed = 0;
    let grossTax = 0;
    let rated = 0;
if(incomeSalary >= 0 && incomeSalary <= 24000){

    grossTax = (incomeSalary*0.10);

    taxed = incomeSalary - grossTax

}else if (incomeSalary >= 24001 && incomeSalary <= 32333){
    rated = (incomeSalary - 24000) * 0.25;
    grossTax = 2400 + rated
    taxed = incomeSalary - grossTax;


}else if (incomeSalary >= 32334 && incomeSalary <= 500000){
    rated = (incomeSalary - 32333)*0.30;
    grossTax = 2400 + 2083.25 + rated
    taxed = incomeSalary-grossTax;
}else if (incomeSalary >= 500001 && incomeSalary <= 800000){
    rated = (incomeSalary - 500000)*0.325
    grossTax = 2400 + 2083.25 + 140300.1 + rated
    taxed = incomeSalary-grossTax;
}else if (incomeSalary > 800000){
    rated = (incomeSalary - 800000)*0.35;
    grossTax = 2400 + 2083.25 + 140300.1 + 97500 + rated
    
}
paye = (grossTax - personalRelief);
netSalary = (taxableIncome - paye);
return {paye,netSalary}
    }
    show(tax(75000))
// output = NHIFDeductions




// output = NSSFDeductions


// output = Gross salary


// output = Net salary

grossSalary = 75000

nssf = (75000*0.06) = 4500
nhif = 1400//(1400*0.15) = 210*75000 - (nssf + nhif)5900//69100
let payee = tax(taxableIncome).paye
let  netSalary = tax(taxableIncome).netSalary

NSSFDeductions = 4500
NHIFDeductions = 1400
payee(i.e.Tax) = 51186.65//tax.paye
grossSalary = 75000
netSalary = 17913.35//tax.netsalary


