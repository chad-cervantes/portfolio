<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Make form input variables
  $first_name = htmlspecialchars($_POST['first_name']);
  $last_name = htmlspecialchars($_POST['last_name']);
  $email_address = htmlspecialchars($_POST['email_address']);
  $message = htmlspecialchars($_POST['message']);

  //Validate email address
  if (!filter_var($email_address, FILTER_VALIDATE_EMAIL)) {
    echo "Invalid email format.";
    exit;
  }

  // Ensure all fields are filled
  if (empty($first_name) || empty($last_name) || empty($email_address) || empty($message)) {
    echo "All fields are required.";
    exit;
  }

  //Configure the email
  $to = "chad-daniel.cervantes@outlook.com";
  $subject = "Contact Form Submission from $first_name $last_name";
  $headers = "From: $email_address\r\n" .
             "Reply-To: $email_address\r\n" .
             "X-Mailer: PHP/" . phpversion();
  
  $email_message = "First Name: $first_name\n";
  $email_message .= "Last Name: $last_name\n"; 
  $email_message .= "Email Address: $email_address\n\n";
  $email_message .= "Message: \n$message\n";

  // Send email
  if (mail($to, $subject, $email_message, $headers)) {
    echo "Message sent successfully!";
  } else {
    echo "Failed to send message.";
  }
} else {
  echo "Invalid request method.";
}

?>