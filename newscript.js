function Cinema() {
  this.customers = {};
  this.currentId = 0;
}
//  a method to assign id
Cinema.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};
//  it will create  a method to add customer by their id
Cinema.prototype.addCustomer = function (customer) {
  customer.id = this.assignId();
  this.customers[customer.id] = customer;
}
// it will create  a method to find customer by their id
Cinema.prototype.findCustomer = function (id) {
  if (this.customers[id] != undefined) {
    return this.customers[id];
  }
  return false;
};
// it will  create a method to delete customer by their id 
Cinema.prototype.deleteCustomer = function (id) {
  if (this.customers[id] === undefined) {
    return false;
  }
  delete this.customers[id];
  return true;
};
// a constructor for customer
function customer(name, movieSection, age, showTime) {
  this.Name = name;
  this.MovieSection = movieSection;
  this.Age = age;
  this.ShowTime = showTime;
  this.TicketPrice = 35;
}


// it will create method to display Customer Details
function displayCustomerDetails(cinemaToDisplay) {
  let customersList = $("#Information");
  let htmlForCustomerInfo = "";
  Object.keys(cinemaToDisplay.customers).forEach(function (key) {
    const customer = cinemaToDisplay.findCustomer(key);
    htmlForCustomerInfo += "<li id=" + customer.id + ">" + customer.Name  +"</li>";
  });
  customersList.html(htmlForCustomerInfo);
}
//  it will create a ticketPrice function
function ticketPrice(customer){
if (customer.Age === "Adult (18-64)") {
 customer.TicketPrice += 15;
}
if(customer.Age === "Senior (65+)"){
  customer.TicketPrice += 20;
}
if(customer.Age === "Teen (13-17)"){
  customer.TicketPrice += 10;
}

if(customer.Age === "Child (0-12)"){
  customer.TicketPrice += 5;
}
}


function attachEventListeners() {
  $("#Information").on("click", "li", function () {
    showCustomer(this.id);
  });
  $("#buttons").on("click", "button", function () {
    cinema.deleteCustomer(this.id);
    $("#show-Ticket").hide();
    displayCustomerDetails(cinema);
  });
}

function showCustomer(contactId) {
  const customer = cinema.findCustomer(contactId);
  $("#show-Ticket").show();
  $(".name").html(customer.Name);
  $(".movie").html(customer.MovieSection);
  $(".time").html(customer.ShowTime);
  $(".age").html(customer.Age);
  $(".price").html("$" + customer.TicketPrice);
  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='btn btn-danger' id=" + + customer.id + ">Delete</button>");
}
// User Interface Logic ---------
let cinema = new Cinema();

$(document).ready(function () {
  attachEventListeners();
  $("#movie-ticket").submit(function (event) {
    event.preventDefault();
    const inputtedMovie = $("#movie-selection").val();
    const inputtedtime = $("#showtime-selection").val();
    const inputtedAge = $("#age-selection").val();
    const inputttedName = $("#input3").val();

    // The next three lines are empty the place after user input:
    $("#movie-selection").val("");
    $("showtime-selection").val("");
    $("#age-selection").val("");
    $("#input3").val("");

    let newCustomer = new customer(inputttedName, inputtedMovie,  inputtedAge, inputtedtime);
    ticketPrice(newCustomer);
    cinema.addCustomer(newCustomer);
    displayCustomerDetails(cinema);
  });
});

