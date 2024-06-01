<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if all form fields are set and not empty
    if (isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["message"]) &&
        !empty($_POST["name"]) && !empty($_POST["email"]) && !empty($_POST["message"])) {
        
        // Sanitize form input to prevent injection
        $name = htmlspecialchars($_POST["name"]);
        $email = htmlspecialchars($_POST["email"]);
        $message = htmlspecialchars($_POST["message"]);

        // Set recipient email address
        $to = "reemaworkmail@gmail.com";

        // Set email subject
        $subject = "New message from $name";

        // Compose email message
        $email_message = "Name: $name\n";
        $email_message .= "Email: $email\n";
        $email_message .= "Message:\n$message";

        // Set additional headers
        $headers = "From: $name <$email>\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-type: text/plain; charset=UTF-8\r\n";

        // Send email
        if (mail($to, $subject, $email_message, $headers)) {
            echo "success";
        } else {
            echo "error";
        }
    } else {
        echo "error";
    }
} else {
    echo "error";
}
?>