var Person = function(name, age){
    this.name=name;
    this.age=age;
    this.describe = function(){
        return this.name + ", " + this.age + " years old";
    }
}
var John = new Person("John", 19);
var Bibata = new Person("Bibata", 35);
console.log(jack.describe());
console.log(jill.describe());
