

// Bussiness logic
let myMovieDob = newMovies;


function Cineama() {
  this.Movies = {};
  this.currentId = 0;
}
// contructor for movie
function Movies(firstName, lastName, title, time, age, price, date) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
  this.time = time;
  this.age = age;
  this.price = price;
  this.date = date;
}

// add method to assignId
Movies.prototype.assignId = function () {
  this.currentId = this.currentId + 1
  return this.currentId;
}
// method to add customer
Movies.prototype.addMovies = function () {
  Movies.id = this.assignId();
  this.Movies[Movies.id] = Movies;
}
Movies.prototype.fullTicket = function () {
  return this.firstName +","+ this.lastName +"," +this.movie + ", " + this.time + ", " + this.age;
}

$(document).ready(function () {
  $("#movie-ticket").submit(function (event) {
    event.preventDefault();
    let movie = $("movie-title").val();
    let time = $("#time").val();
    let age = $("#age").val();
    $("#output").show();
    // let ticketInfo = new Movies(firstName, lastName, movie, time, age);
    // const ticketDisplay = ticketInfo.fullTicket();
    // const ticketCost = ticketInfo.calculateCost();
    // $("#output").text(ticketDisplay);
    // $("#cost").text(ticketCost);
  })

});