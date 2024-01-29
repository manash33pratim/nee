<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["Name"];
    $email = $_POST["Email"];
    $phone = $_POST["Phone"];
    $services = $_POST["Services"];
    $subSelection = $_POST["Sub selection"]; // Note: Adjust the name attribute in the HTML accordingly
    $message = $_POST["Message"];

    // Build email content
    $subject = "New Quote Request from $name";
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Phone: $phone\n";
    $body .= "Selected Services: $services\n";
    $body .= "Sub Selection: $subSelection\n";
    $body .= "Message:\n$message";

    // Send email
    $to = "info@northeastengineers.in";
    $headers = "From: $email";

    // You can use the mail() function to send the email
    mail($to, $subject, $body, $headers);

    // Optionally, you can redirect the user after successful submission
    header("Location: thank_you.html");
    exit();
}
?>
