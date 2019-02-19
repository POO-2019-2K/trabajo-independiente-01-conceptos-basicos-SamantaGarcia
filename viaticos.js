export default class Gasto{
    constructor(name, lastName){
        this._name = name;
        this._lastName = lastName;
        this._saldoTotal = 0;
        this._deposito = 0;
        this._retiro = 0;
    }

    _showData(){
        console.log(`Cliente:
        Name: ${this._name},
        Lastname: ${this._lastName}`);
    }

    getSaldo(){
        return this._saldoTotal;
    }
    setSaldo(){
        this._saldoTotal = saldoTotal;
    }

    getDeposito(){
        return this._deposito;
    }
    setDeposito(){
        this._deposito = deposito;
    }

    getRetiro(){
        return this._retiro;
    }
    setRetiro(){
        this._retiro = retiro;
    }

    move1(){
        this._saldoTotal = this._saldoTotal + this._deposito;
    }
    move2(){
        this._saldoTotal = this._saldoTotal - this._retiro;
    }
}