class user{
    
    constructor(){
        this.name = 'Juan';
        this.lastname = 'Perez';
    }

    getFullName(){
        return this.name + ' ' + this.lastname;
    }

    getAge(){
        return 20;
    }

    getMayorDeEdad(){
        return this.getAge() >= 18;
    }

    getGender(){
        return 'Masculino';
    }

    getSexo(){
        return this.getGender() == 'Masculino' ? 'Masculino' : 'Femenino';
    }
}