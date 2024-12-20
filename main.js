$(document).ready(function () {
    $(".tab-button").on("click", function () {
        // Remove the active class from all buttons
        $(".tab-button").removeClass("active");
        // Add the active class to the clicked button
        $(this).addClass("active");

        // Get the category to show
        const category = $(this).data("category");

        // Hide all menu content and show the selected category
        $(".menu-content").hide();
        $("#" + category).fadeIn();
    });
});
