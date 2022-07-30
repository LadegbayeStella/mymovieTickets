

// // Bussiness logic
// // let myMovieDob = newMovies;


// function Cineama() {
//   this.Movies = {};
//   this.currentId = 0;
// }
// // contructor for movie
// function Movies(firstName, lastName, title, time, age, price, date) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.title = title;
//   this.time = time;
//   this.age = age;
//   this.price = price;
//   this.date = date;
// }

// // add method to assignId
// Movies.prototype.assignId = function () {
//   this.currentId = this.currentId + 1
//   return this.currentId;
// }
// // method to add customer
// Movies.prototype.addMovies = function () {
//   Movies.id = this.assignId();
//   this.Movies[Movies.id] = Movies;
// }
// Movies.prototype.fullTicket = function () {
//   return this.firstName + "," + this.lastName + "," + this.movie + ", " + this.time + ", " + this.age;
// }

// $(document).ready(function () {
//   $("#movie-ticket").submit(function (event) {
//     event.preventDefault();
//     let movie = $("movie-title").val();
//     let time = $("#time").val();
//     let age = $("#age").val();
//     $("#output").show();
//     // let ticketInfo = new Movies(firstName, lastName, movie, time, age);
//     // const ticketDisplay = ticketInfo.fullTicket();
//     // const ticketCost = ticketInfo.calculateCost();
//     // $("#output").text(ticketDisplay);
//     // $("#cost").text(ticketCost);
//   })

// });

function Ticket(title, showtime, age) {
  this.title = title;
  this.showtime = showtime;
  this.age = age;
}
Ticket.prototype.ticketPrice = function() {
  return this.title + this.showtime + this.age;
}

$(document).ready(function() {
  $("#movie-ticket").submit(function(event) {
    event.preventDefault();
    const intMovie = $('#movie-selection').val();
    const intShowtime = $('#showtime-selection').val();
    const intAge = $('#age-selection').val();
    // const intMovie = inputtedMovie;
    // const intShowtime = inputtedShowtime;
    // const intAge = inputtedAge;
    let ticketRequest = new Ticket(intMovie, intShowtime, intAge);
    let price = ticketRequest.ticketPrice();
    $("#ticket-total").show();
    $("#cost").html(price);
  });
});