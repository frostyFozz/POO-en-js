import { Cuenta } from "./cuenta.js";



export class CuentaCorriente extends Cuenta
{   
    static cantidadCuentas = 0;
    
    constructor(cliente, numero, agencia) {
        super(cliente, numero, agencia, 0)
        CuentaCorriente.cantidadCuentas++;
    }
    retiroEnCuenta(valor) {
        valor = valor * 1.05;
        super.retiroEnCuenta(valor);
    }
}
