export class Cuenta {   
    #cliente;
    #saldo;
   
    static cantidadCuentas = 0;

    constructor( cliente, numero, agencia, saldo) {
        this.numero = numero;
        this.agencia = agencia;
        this.#cliente = cliente;
        this.#saldo = saldo;
    }   

    set Cliente(valor) {
        if(valor instanceof Cliente)
            this.#cliente = valor;

    }
    get Cliente(){
        return this.#cliente;
    }
    
    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }

    retiroEnCuenta(valor) {
        if(valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;
    } 

    verSaldo() {
        return this.#saldo;
    }
    transferenciaCuenta(valor, cuentaDestino) {
        this.retiroEnCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }
   
}