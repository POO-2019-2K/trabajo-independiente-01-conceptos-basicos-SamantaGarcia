import Empleados from "./ejercicio1.js";
import Reservar from "./reservar.js";
import Movimiento from "./cuentaBancaria.js";
import Cita from "./citaMedica.js";
import Gasto from "./viaticos.js";

let empleado1 = new Empleados("Samanta", "Rubio", "Boss", "18", "calle Rosales #13", "3414105678", "sam@hola.com");

empleado1.optionOne();

//reservaciones en restaurant

let res1 = new Reservar();
res1._name = "Samanta";
res1._lastName = "Rubio";
res1._age = "18 años";
res1._telephone = "3414116444";
res1._day = "19/02/19";
res1._hour = "21:00 hrs";
res1.showData();

//Cuenta bancaria
let cuenta1 = new Movimiento("Samanta", "Rubio", "Fullstack", "18", "calle Rosales #13", "3414105678", "sam@hola.com");
cuenta1._showData();
cuenta1._saldoTotal = 10;
cuenta1._deposito = 100;

cuenta1.move1();
console.log(`Your total money are ${cuenta1._saldoTotal} pesos`);
cuenta1._retiro = 1;
cuenta1.move2();
console.log(`Your total money are ${cuenta1._saldoTotal} pesos`);

//Cita al médico
let cita1 = new Cita();
cita1._name = "Samanta";
cita1._lastName = "Rubio";
cita1._age = "18 años";
cita1._telephone = "3414116444";
cita1._day = "19/02/19";
cita1._hour = "21:00 hrs";
cita1.showData();

//Gastos
let people1 = new Gasto("Samanta", "Rubio");
people1._showData();
people1._saldoTotal = 10;
people1._deposito = 20;

people1.move1();
console.log(`Your total save money are ${people1._saldoTotal} pesos`);
people1._retiro = 1;
people1.move2();
console.log(`Your total money for expenditure are ${people1._saldoTotal} pesos`);