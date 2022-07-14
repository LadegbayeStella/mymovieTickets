
 
// Bussiness logic
let myMovieDob =newMovie;


function Cineama() {
  this.Movies = {};
  this.currentId = 0;
}
// contructor for movie
function Movies( firstName, lastName,title, time, age, price, date) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
  this.time = time;
  this.age = age;
  this.price = price;
  this.date = date;
}

// add method to assignId
Movies.prototype.assignId =function(){
  this .currentId =this.currentId+1
  return this.currentId;
}
// method to add customer
Movies.prototype.addMovies = function () {
Movies.id = this.assignId();
this.Movies[customers.id] = customers;
}
