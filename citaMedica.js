export default class Cita{
    constructor(name, lastName, age, telephone, day, hour){
        this._name = name;
        this._lastName = lastName;
        this._age = age;
        this._telephone = telephone;
        this._day = day;
        this._hour = hour;

    }

    getName(){
        return this._name;
    }
    setName(){
        this._name = name;
    }

    getLastName(){
        return this._lastName;
    }
    setLastName(){
        this._lastName = lastName;
    }

    getAge(){
        return this._age;
    }
    setAge(){
        this._age = age;
    }

    getTel(){
        return this._telephone;
    }
    setTel(){
        this._telephone = telephone;
    }

    getday(){
        return this._day;
    }
    set(){
        this._day = day;
    }

    getHour(){
        return this._hour;
    }
    setHour(){
        this._hour = hour;
    }

    showData(){
        console.log(`medical appointment:
        Name: ${this._name} ${this._lastName}
        Age: ${this._age}
        Telephone: ${this._telephone}
        appointment date: ${this._day}, ${this._hour} `);
    }
}