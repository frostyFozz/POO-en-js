/*Importación de clases*/
import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './cuentas/CuentaCorriente.js';
import {CuentaAhorro} from './cuentas/CuentaAhorro.js';
import { cuentaNomina } from './cuentas/cuentanomina.js';
import { Empleado } from './Empleados/empleado.js';
import { Gerente } from './Empleados/Gerente.js';
import { Director } from './Empleados/Director.js';
import { SistemaAutenticacion } from './Empleados/SistemaAutenticacion.js';

const cliente = new Cliente('Leonardo','13804050','123224');
cliente.asignaClave("11111")
const cliente2 = new Cliente('María','16979808','8989');

const empleado = new Empleado("Omar Perez", "123578866", 28000)
empleado.asignaClave("12345")
const gerente = new Gerente("Dannesa Betancourt", "123908577", 50000)
const directo = new Director("Corina Rodriguez", "123346789", 70000)


console.log(directo.verBonificacion());
console.log(gerente.verBonificacion());
console.log(empleado.verBonificacion());

console.log(SistemaAutenticacion.login(empleado, "12345"));
console.log(SistemaAutenticacion.login(cliente, "11111"));