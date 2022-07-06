<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name =  $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

$conn = mysqli_connect("localhost", "root", "", "moodkit");
if (!$conn) {
die ("Error".mysqli_connect_error());
}
else {
    $sql = "INSERT INTO `info` (`name`, `email`, `phone`, `message`) VALUES ('$name', '$email', '$phone', '$message')";
    $result  = mysqli_query($conn, $sql);
    if ($result) {
        echo '<div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Success!</strong> Your form was submitted successfully.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>';
    } 
    else {
        echo '<div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Error!</strong> Your form was not submitted successfully.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>';
    }
}
}
?>