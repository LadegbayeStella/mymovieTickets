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

function MovieDetails(Name, movieSection, age, showTime) {
  this.Name = Name;
  this.movieSection = movieSection;
  this.age = age;
  this.showTime = showTime;
}


function displayCustomerDetails(cinemaToDisplay) {
  let customersList = $("ticket-total");
  let htmlForCustomerInfo = "";
  Object.keys(cinemaToDisplay.customers).forEach(function (key) {
    const customer = cinemaToDisplay.findCustomer(key);
    htmlForCustomertInfo += "<li id=" + customer.id + ">" + customer.Name + " " + customer.movieSection + " " + customer.age + " " + customer.showTime +"</li>";
  });
  customersList.html(htmlForCustomerInfo);
}

function attachCustomerListeners() {
  $("#Information").on("click", "li", function () {
    showCustomer(this.id);
  });
  $("#buttons").on("click", "button", function () {
    cinemak.deleteCustomer(this.id);
    $("#show-Ticket").hide();
    displayCustomerDetails(cineama);
  });
}

function showContact(contactId) {
  const customer = cinema.findCustomer(contactId);
  $("#show-Ticket").show();
  $(".name").html(customer.name);
  $(".movie").html(customer.movie);
  $(".time").html(customer.time);
  $(".age").html(customer.age);
  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='btn btn-danger' id=" + + customer.id + ">Delete</button>");
}
// User Interface Logic ---------
let cineama = new Cinema();

$(document).ready(function () {
  attachCustomerListeners();
  $("#movie-ticket").submit(function (event) {
    event.preventDefault();
    const inputtedMovie = $("#movie-selection").val();
    const inputtedtime = $("showtime-selection").val();
    const inputtedAge = $("#age-selection").val();
    const inputttedName = $("#input3").val();

    // The next three lines are new:
    $("#movie-selection").val("");
    $("showtime-selection").val("");
    $("#age-selection").val("");
    $("#input3").val("");

    let newCustomer = new customer(inputtedMovie, inputtedtime, inputtedAge, inputttedName);
    cinema.addCustomert(newCustomer);
    displayCustomerDetails(cinema);
  });
});

