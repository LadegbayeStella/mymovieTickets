

// // // Bussiness logic
// //  let myMovieDob = newMovies;


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

// // $(document).ready(function () {
// //   $("#movie-ticket").submit(function (event) {
// //     event.preventDefault();
// //     let movie = $("movie-title").val();
// //     let time = $("#time").val();
// //     let age = $("#age").val();
// //     $("#output").show();
// //     let ticketInfo = new Movies(firstName, lastName, movie, time, age);
// //     const ticketDisplay = ticketInfo.fullTicket();
// //     const ticketCost = ticketInfo.calculateCost();
// //     $("#output").text(ticketDisplay);
// //     $("#cost").text(ticketCost);
// //   })

// // });

// // function Ticket(title, showtime, age) {
// //   this.title = title;
// //   this.showtime = showtime;
// //   this.age = age;
// // }
// Ticket.prototype.ticketPrice = function () {
//   return this.title + this.showtime + this.age;
// }

// // $(document).ready(function () {
// //   $("#movie-ticket").submit(function (event) {
// //     event.preventDefault();
// //     const intMovie = $('#movie-selection').val();
// //     const intShowtime = $('#showtime-selection').val();
// //     const intAge = $('#age-selection').val();
// //     // const intMovie = inputtedMovie;
// //     // const intShowtime = inputtedShowtime;
// //     // const intAge = inputtedAge;
// //     let ticketRequest = new Ticket(intMovie, intShowtime, intAge);
// //     let price = ticketRequest.ticketPrice();
// //     $("#ticket-total").show();
// //     $("#cost").html(price);
// //   });
// // });






// /// Business Logic for AddressBook ---------
// function Cineama() {
//   this.movies = {};
//   this.currentId = 0;
// }
// Cineama.prototype.assignId = function () {
//   this.currentId += 1;
//   return this.currentId;
// };
// Cineama.prototype.addUser = function (movie) {
//   movie.id = this.assignId();
//   this.movies[movie.id] = movie;
// }
// Cineama.prototype.findMovie = function (id) {
//   if (this.movies[id] != undefined) {
//     return this.movies[id];
//   }
//   return false;
// };

// Cineama.prototype.deleteMovie = function (id) {
//   if (this.movies[id] === undefined) {
//     return false;
//   }
//   delete this.movies[id];
//   return true;
// };


// function Tickets(name, showtime, age) {
//   this.name = name;
//   this.showtime = showtime;
//   this.age = age;
// } 


// function displaMovietDetails(movieToDisplay) {
//   let contactsList = $("ul#contacts");
//   let htmlForContactInfo = "";
//   Object.keys(movieToDisplay.movies).forEach(function(key) {
//     const movie = movieToDisplay.findMovie(key);
//     htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
//   });
//   contactsList.html(htmlForContactInfo);
// }

// function attachContactListeners() {
//   $("ul#contacts").on("click", "li", function() {
//     showContact (this.id);
//   });
//   $("#buttons").on("click", "button", function() {
//     addressBook.deleteContact(this.id);
//     $("#show-contact").hide();
//     displayContactDetails(addressBook);
//   });
// }

// function showContact(contactId) {
//   const contact = addressBook.findContact(contactId);
//   $("#show-contact").show();
//   $(".first-name").html(contact.firstName);
//   $(".last-name").html(contact.lastName);
//   $(".phone-number").html(contact.phoneNumber);
//   let buttons = $("#buttons");
//   buttons.empty();
//   buttons.append("<button class='btn btn-danger' id=" +  + contact.id + ">Delete</button>");
// }
// // User Interface Logic ---------
// let addressBook = new AddressBook();

// $(document).ready(function() {
//   attachContactListeners();
//   $("form#new-contact").submit(function(event) {
//     event.preventDefault();
//     const inputtedFirstName = $("input#new-first-name").val();
//     const inputtedLastName = $("input#new-last-name").val();
//     const inputtedPhoneNumber = $("input#new-phone-number").val();

//     // The next three lines are new:
//     $("input#new-first-name").val("");
//     $("input#new-last-name").val("");
//     $("input#new-phone-number").val("");

//     let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
//     addressBook.addContact(newContact);
//     displayContactDetails(addressBook);
//   });
// });

// // function Movie() {
// //   this.movies = {};
// //   this.currentId = 0;
// // }
// // this.assignId = function () {
// //   this.currentId += 1;
// //   return this.currentId;
// // };
// // this.addMovie = function (movie) {
// //   movie.id = this.assignId();
// //   this.movies[movie.id] = movie;
// // }
// // this.findMovie = function (id) {
// //   if (this.movies[id] != undefined) {
// //     return this.movies[id];
// //   }
// //   return false;
// // };

// // this.deleteMovie = function (id) {
// //   if (this.movies[id] === undefined) {
// //     return false;
// //   }
// //   delete this.movies[id];
// //   return true;
// // };


// // function MovieDetails(Name, movieSection, age, showTime) {
// //   this.Name = Name;
// //   this.movieSection = movieSection;
// //   this.age = age;
// //   this.showTime = showTime;
// // }

// // function displayMovieDetails(movieStoreToDisplay) {
// //   let moviesList = $("#ticket-total");
// //   let htmlForMovieInfo = "";
// //   Object.keys(movieStoreToDisplay.movies).forEach(function (key) {
// //     const movie = movieStoreToDisplay.findMovie(key);
// //     htmlForMovieInfo += "<li id=" + movie.id + ">" + movie.movieSection + " " + movie.age + "</li>";
// //   });
// //   moviesList.html(htmlForMovieInfo);
// // }

// // function attachMovieListeners() {
// //   $("ul#movies").on("click", "li", function () {
// //     showMovie(this.id);
// //   });
// //   $("#buttons").on("click", "button", function () {
// //     movieStore.deleteMovie(this.id);
// //     $("#show-movie").hide();
// //     displayMovieDetails(movieStore);
// //   });
// // }

// // function showMovie(movieId) {
// //   const movie = movieStore.findMovie(movieId);
// //   $("#show-movie").show();
// //   $("#movie-selection").html(movie.movie - selection);
// //   $("#showtime-selection").html(movie.showtime - selection);
// //   $("#age-selection").html(movie.age - selection);
// //   let buttons = $("#buttons");
// //   buttons.empty();
// //   buttons.append("<button class='btn btn-danger' id=" + + movie.id + ">Delete</button>");
// // }
// // // User Interface Logic ---------
// // let movieStore = new Movie();

// // $(document).ready(function () {
// //   attachMovieListeners();
// //   $("#movie-ticket").submit(function (event) {
// //     event.preventDefault();
// //     const Name = $("#input3").val();
// //     const movieSelection = $("#movie-selection").val();
// //     const showSelection = $("#showtime-selection").val();
// //     const ageSection = $("#age-selection").val();


// //     // The next three lines are new:
// //     $("#input3").val();
// //     $("#movie-selection").val();
// //     $("#showtime-selection").val();
// //     $("#age-selection").val();
// //     let newMovie = new MovieDetails(Name, movieSelection, showSelection, ageSection);
// //     movieStore.addMovie(newMovie);
// //     displayMovieDetails(movieStore);
// //   });
// // });











