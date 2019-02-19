export default class Empleados{
    constructor(name, lastName, position, age, address, telephone, email){
        this._name = name;
        this._lastName = lastName;
        this._position = position;
        this._age = age;
        this._address = address;
        this._telephone = telephone;
        this._email = email;

    }

    _showData(){
        console.log(`Age: ${this._age}, Address: ${this._address}, Telephone: ${this._telephone}, Email: ${this._email}`);
    }

    _showPosition(){
        console.log(`The position of ${this._name} ${this._lastName} is ${this._position}`);
    }

    optionOne(){
        this._showPosition();
        this._showData();
    }

    optionTwo(){
        this._showPosition();
    }
}