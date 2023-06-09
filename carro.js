class carro{
    constructor(marca, modelo, color, kilometraje,pais){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.kilometraje = kilometraje;
        this.pais = pais;
    }

    mostrar(){
        return `Hola, soy un ${this.marca} ${this.modelo} ${this.color} y tengo ${this.kilometraje} kms`;
    }

    avanzar(kms){
        this.kilometraje += kms;
    }

    retroceder(kms){
        this.kilometraje -= kms;
    }

    getKilometraje(){
        return this.kilometraje;
    }
    getModelo(){
        return this.modelo;
    }

    getColor(){
        return this.color;
    }

    getMarca(){
        return this.marca;
    }
    getPais(){
        return this.pais;
    }

}