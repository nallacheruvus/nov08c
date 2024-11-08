function Customer(first, last, status) {
    this.first = first;
    this.last = last;
    this.status = status;
    this.dets = function () {
        console.log(`Full Name:${this.first} ${this.last}\t Status:${this.status}`);
    }
}

function CustomerPrototype(proto) {
    this.proto = proto;
    this.clone = function () {
        var customer = new Customer();
        customer.first = proto.first;
        customer.last = proto.last;
        customer.status = proto.status;
        return customer;
    }
}

var proto = new Customer("Sunidhi", "Chouhan", "Regular");
var prototype = new CustomerPrototype(proto);
var cus = prototype.clone();
cus.first = "Mahesh";
cus.last = "Sahil";
cus.status = "Occasional";
cus.dets();