function Car(type, fuelType) {
    this.type = type;
    this.fuelType = fuelType;
}
function SetBrand(brand) {
    Car.call(this, "Convertible", "Diesel");/** */
    this.brand = brand;
    console.log("Car details=", this);
}
function DefinePrice(price) {
    Car.call(this, "Convertible", "Diesel");
    this.price = price;
    console.log("Price Details=", this);
}

const newBrand = new SetBrand("Skoda Octavio Sports");
const newCarPrice = new DefinePrice(10000283);
