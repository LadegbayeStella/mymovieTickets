function Cinema() {
    this.customers = {};
    this.currentId = 0;
  }
  Cinema.prototype.assignId = function () {
    this.currentId += 1;
    return this.currentId;
  };
  Cinema.prototype.addContact = function (customer) {
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
    Object.keys(cinemaToDisplay.customers).forEach(function(key) {
      const customer = cinemaToDisplay.findCustomer(key);
      htmlForCustomertInfo += "<li id=" + customer.id + ">" + customer.Name + " " + customer. movieSection +  " " +customer. age + " "+customer.showTime "</li>";
    });
    customersList.html(htmlForCustomerInfo);
  }
  
  function attachCustomerListeners() {
    $("ticket-total").on("click", "li", function() {
      showCustomer (this.id);
    });
    $("#buttons").on("click", "button", function() {
      addressBook.deleteCustomer(this.id);
      $("#show-contact").hide();
      displayCustomerDetails(addressBook);
    });
  }
  
  function showContact(contactId) {
    const customer = addressBook.findContact(contactId);
    $("#show-contact").show();
    $(".first-name").html(contact.firstName);
    $(".last-name").html(contact.lastName);
    $(".phone-number").html(contact.phoneNumber);
    let buttons = $("#buttons");
    buttons.empty();
    buttons.append("<button class='btn btn-danger' id=" +  + customer.id + ">Delete</button>");
  }
  // User Interface Logic ---------
  let cineama = new Cinema();
  
  $(document).ready(function() {
    attachCustomerListeners();
    $("#movie-ticket").submit(function(event) {
      event.preventDefault();
      const inputtedFirstName = $("#movie-selection").val();
      const inputtedLastName = $("showtime-selection").val();
      const inputtedPhoneNumber = $("#age-selection").val();
      const inputttedName =$("#input3").val();
  
      // The next three lines are new:
      $("#movie-selection").val();
      $("showtime-selection").val();
       $("#age-selection").val();
       $("#input3").val();
       
      let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
      addressBook.addContact(newContact);
      displayContactDetails(addressBook);
    });
  });
  