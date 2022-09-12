function Cinema() {
  this.customers = {};
  this.currentId = 0;
}
Cinema.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};
Cinema.prototype.addCustomer = function (customer) {
  customer.id = this.assignId();
  this.customers[customer.id] = customer;
}
Cinema.prototype.findCustomer = function (id) {
  if (this.customers[id] != undefined) {
    return this.customers[id];
  }
  return false;
};

Cinema.prototype.deleteCustomer = function (id) {
  if (this.customers[id] === undefined) {
    return false;
  }
  delete this.customers[id];
  return true;
};

function customer(name, movieSection, age, showTime) {
  this.Name = name;
  this.MovieSection = movieSection;
  this.Age = age;
  this.ShowTime = showTime;
  this.TicketPrice = 35;
}
this.TicketPrice = ticketPrice(customer);



function displayCustomerDetails(cinemaToDisplay) {
  let customersList = $("#Information");
  let htmlForCustomerInfo = "";
  Object.keys(cinemaToDisplay.customers).forEach(function (key) {
    const customer = cinemaToDisplay.findCustomer(key);
    htmlForCustomerInfo += "<li id=" + customer.id + ">" + customer.Name  +"</li>";
  });
  customersList.html(htmlForCustomerInfo);
}

function ticketPrice(customer){
if (customer.Age === "Adult (18-64)") {
 customer.TicketPrice += 10;
}

}

function attachCustomerListeners() {
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
  attachCustomerListeners();
  $("#movie-ticket").submit(function (event) {
    event.preventDefault();
    const inputtedMovie = $("#movie-selection").val();
    const inputtedtime = $("#showtime-selection").val();
    const inputtedAge = $("#age-selection").val();
    const inputttedName = $("#input3").val();

    // The next three lines are new:
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

