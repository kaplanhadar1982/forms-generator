var myModule = (function () {

  function Car( model, year, miles ) {
    this.model = model;
    this.year = year;
    this.miles = miles;
  }

  Car.prototype.toString = function () {
    return this.model + " has done " + this.miles + " miles";
  };
 
  return {
        Car
  };
 
})();

// let c1 = new myModule.Car(35,"subaru");
// let c2 = new myModule.Car(100,"mazda");


// c1.printSpeed();
// c1.printModel();

// c2.printSpeed();
// c2.printModel();

var civic = new myModule.Car( "Honda Civic", 2009, 20000 );
var mondeo = new myModule.Car( "Ford Mondeo", 2010, 5000 );

console.log( civic.toString() );
console.log( mondeo.toString() );