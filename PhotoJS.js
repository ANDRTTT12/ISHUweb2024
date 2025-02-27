$(document).ready(function () {
  $(".photo-item").click(function () {
    var imageSrc = $(this).data("image");
    var description = $(this).data("description");

    $("#modal-image").attr("src", imageSrc);
    $("#modal-description").text(description);
    $("#photo-modal").fadeIn(); // Show the modal

    event.stopPropagation();
  });

  $(".close-button").click(function () {
    $("#photo-modal").fadeOut(); // Hide the modal
    event.stopPropagation();
  });

  // Close the modal when clicking outside the content
  $(window).click(function (event) {
    if (event.target.id === "photo-modal") {
      $("#photo-modal").fadeOut(); // Hide the modal
      event.stopPropagation();
    }
  });
});
