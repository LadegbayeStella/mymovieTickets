// business logic
function Cinema() {
  this.movies={};
  this.currentId = 0;
};
// constructor
function Movie(title, time, age,price,date) {
  this.title = title;
  this.time = time;
  this.age= age;
  this.price=price;
  this.date=date;
}
function customer(firstName,lastName,age,eMail, movieid){
this.firstName =firstName;
this.lastName =lastName;
this.age =age;
this.eMail = eMail;
this.Ticketsids [];
}

// method to assign id
Tickets.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

// method to add customers
Tickets.prototype.addCustomers =function(customers){
  customers.id = this.assignId();
 this.customers[customers.id] = customers;
}
addmovie

// method for getting price
Tickets.prototype.getPrice =function(customer){
  let price = this.movies[customer.movie]
}

