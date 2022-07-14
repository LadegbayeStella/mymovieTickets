
 
// Bussiness logic
let myMovieDob =newMovie;


function Movies() {
  this.Movie = {};
  this.currentId = 0
}
// contructor for movie
function Movie(title, time, age, price, date) {
  this.title = title;
  this.time = time;
  this.age = age;
  this.price = price;
  this.date = date;
}
// constructor for customer
function Customers(firstName, lastName, age, eMail, movieid) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eMail = eMail;
  this.Ticketsids;
}
// add method to assignId
Movies.prototype.assignId =function(){
  this .currentId =this.currentId+1
  return this.currentId;
}
// method to add customer
Movies.prototype.addCustomers = function (customers) {
  customers.id = this.assignId();
  this.customers[customers.id] = customers;
}
let stella = new Customer ("stella","ladegbaye","doctorStrange", 12 ,"eMail");
myMovieDob.addStudent(stella)