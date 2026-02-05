
// Tony Phan
// Handles cheesecake ordering form and month selection

// Helper function for order button click
function handleOrderClick() {
    const instructions = $("#instructions").val().toLowerCase();

    if (instructions.includes("vegan")) {
        alert("Warning: Cheesecake contains dairy.");
        return;
    }

    const amount = $("#amount").val();
    const topping = $("input[name='choice']:checked").val();

    $("form").replaceWith(`
        <h2>Thank you! Your order has been placed</h2>
        <p><strong>Quantity: </strong>${amount}</p>
        <p><strong>Topping: </strong>${topping}</p>
        <p><strong>Instructions: </strong>${instructions}</p>
    `);
}

// Helper function for month selection
function handleMonthClick() {
    const month = $(this).text();
    $(".month_current").text(month);
}

// Initialize event handlers when DOM is ready
$(document).ready(function() {
    $("#order").click(handleOrderClick);
    $(".month_select li").click(handleMonthClick);
});
