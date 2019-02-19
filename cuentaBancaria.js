export default class Movimiento{
    constructor(name, lastName, job, age, address, telephone, email){
        this._name = name;
        this._lastName = lastName;
        this._job = job;
        this._age = age;
        this._address = address;
        this._telephone = telephone;
        this._email = email;
        this._saldoTotal = 0;
        this._deposito = 0;
        this._retiro = 0;
    }

    _showData(){
        console.log(`Cuenta bancaria:
        Name: ${this._name},
        Lastname: ${this._lastName},
        Job: ${this._job},
        Age: ${this._age},
        Address: ${this._address},
        Telephone: ${this._telephone},
        Email: ${this._email}`);
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