var person = {
    name: "Suzie Wong",
    wishPer: function (thing) {
        console.log(this.name + " wishes hello " + thing);
    }
}
person.wishPer("Satish");
person.wishPer("Sirish");
person.wishPer("Sreedhar");
var aFunc = person.wishPer.bind({ name: "Sharma" });
aFunc("Satish");

var book = {
    name: "Adventures of tom sawyer",
    author: "Mark Twain",
    readBook: function (thing) {
        console.log(this.name + " " + this.author + " is a good read " + thing);
    }
}
book.readBook("Satish");
book.readBook("Mukesh");
book.readBook("Dharma");
const bFunc = book.readBook.bind({ name: "Ramayan", author: "Valmiki" });
bFunc("Satish");