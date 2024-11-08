function Car(type, fuelType) {
    this.type = type;
    this.fuelType = fuelType;
}
function SetBrand(brand) {
    Car.apply(this, ['Convertible', 'Diesel']);
    this.brand = brand;
    console.log("Car details=", this);
}
function DefinePrice(price) {
    Car.apply(this, ['Convertble', 'Petrol Amphibious EV']);
    this.price = price;
    console.log("Define Price Details=", this);
}

const newBrand = new SetBrand("Jetta Volkswagon");
const newPrice = new DefinePrice(1002822828);
