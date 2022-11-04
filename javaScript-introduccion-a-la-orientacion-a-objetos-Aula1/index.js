
import {Cliente} from "./cliente.js";
import { cuentaAhorro } from "./cuentaAhorro.js";
import { CuentaCorriente } from "./cuentaCorriente.js";

import { CuentaCorriente } from "./cuentaCorriente.js";


const cliente = new Cliente("Edwin", "12356789", "1235u84865");
const cliente2 = new Cliente("Dannesa", "766583864", "9887734");

const cuentaCorrienteEdwin = new CuentaCorriente(cliente, "001", "1");
const cuentaCorrienteDannesa = new CuentaCorriente(cliente2, "002", "2");

const cuentaAhorroedwin = new cuentaAhorro(cliente, "9999", "001", 0)


cuentaCorrienteEdwin.depositoEnCuenta(200);
console.log(cuentaCorrienteEdwin.verSaldo())
cuentaCorrienteEdwin.retiroEnCuenta(80);
console.log(cuentaCorrienteEdwin.verSaldo());
