// script.js

//INICIO CALCULO SALARIO
document.addEventListener("DOMContentLoaded", function () {
    const salaryForm = document.getElementById("salary-form");
    const netSalarySpan = document.getElementById("net-salary");

    salaryForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const salary = parseFloat(document.getElementById("salary").value);
        const deductions = parseFloat(document.getElementById("deductions").value);

        // Cálculo do INSS (2023)
        let inss = 0;
        if (salary <= 751.97) {
            inss = salary * 0.075;
        } else if (salary <= 1283.91) {
            inss = salary * 0.09;
        } else if (salary <= 2512.08) {
            inss = salary * 0.12;
        } else {
            inss = 2512.08 * 0.12; // Para salários acima do teto de contribuição
        }

        // Cálculo do IR (2023)
        let ir = 0;
        const baseCalculo = salary - deductions - inss;
        if (baseCalculo <= 1903.98) {
            ir = 0;
        } else if (baseCalculo <= 2826.65) {
            ir = (baseCalculo * 0.075) - 142.8;
        } else if (baseCalculo <= 3751.05) {
            ir = (baseCalculo * 0.15) - 354.8;
        } else if (baseCalculo <= 4664.68) {
            ir = (baseCalculo * 0.225) - 636.13;
        } else {
            ir = (baseCalculo * 0.275) - 869.36;
        }

        const netSalary = salary - deductions - inss - ir;
        netSalarySpan.textContent = netSalary.toFixed(2);
    });
});
//FINAL CALCULO SALARIO

//INICIO CALCULO FERIAS
document.addEventListener("DOMContentLoaded", function () {
    const feriasForm = document.getElementById("ferias-form");
    const valorFeriasSpan = document.getElementById("valor-ferias");

    feriasForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const salario = parseFloat(document.getElementById("salario").value);
        const diasFerias = parseInt(document.getElementById("dias-ferias").value);

        // Cálculo do valor das férias
        const valorFerias = (salario / 30) * diasFerias;

        valorFeriasSpan.textContent = `R$ ${valorFerias.toFixed(2)}`;
    });
});
//FINAL CALCULO FERIAS 

//INICIO CALCULO RECISAO
document.addEventListener("DOMContentLoaded", function () {
    const rescisaoForm = document.getElementById("rescisao-form");
    const valorRescisaoSpan = document.getElementById("valor-rescisao");

    rescisaoForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const salario = parseFloat(document.getElementById("salario").value);
        const diasTrabalhados = parseFloat(document.getElementById("dias-trabalhados").value);

        const valorRescisao = (salario / 30) * diasTrabalhados;
        valorRescisaoSpan.textContent = valorRescisao.toFixed(2);
    });
});
//FINAL CALCULO RECISAO