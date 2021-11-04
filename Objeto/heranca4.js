function MeuObject() {}
console.log(MeuObject.prototype)

const obj1 = new MeuObject();
const obj2 = new MeuObject();

console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObject.prototype === obj1.__proto__)


MeuObject.prototype.nome = 'Anonimo'
MeuObject.prototype.falar = function () {
    console.log(`Olá meu nome é ${this.nome}`)
}

obj1.nome = 'Arthur'
obj1.falar();

const obj3 = {}
obj3.__proto__ = MeuObject.prototype
obj3.nome = 'Julia'
obj3.falar();

