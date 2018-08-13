// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devour-burger").on("click", function(event) {
    var id = $(this).data("id");
    var newDevourer = $(this).data("newDevourer");

    var newDevourerState = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/" + id, {
      type: "PUT",
      data: newDevourerState
    }).then(
      function() {
        console.log("Changed devourer to", newDevourer);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
    };

    // Send the POST request.
    $.ajax("/", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("Created new burger!");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
