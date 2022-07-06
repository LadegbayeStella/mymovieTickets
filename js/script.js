// business logic
function Tickets() {
  this.customers
};
// method to assign id
Tickets.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

// method to add customers
Tickets.prototype.addCustomers =function(customers){
  customers.id = this.assignId();
 this.customers[customer.id] = customer;
}

