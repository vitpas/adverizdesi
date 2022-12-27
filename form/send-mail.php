<?php

  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require "PHPMailer/src/PHPMailer.php";
  require "PHPMailer/src/Exception.php";

  $mail = new PHPMailer(true);
  $mail->CharSet = "UTF-8";

  $name = $_POST['name'];
  $tel = $_POST["tel"];
  $adds = $_POST["adds"];
  $time = $_POST["time"];

  $body = $name . ' ' . $tel . ' ' . $adds . ' ' . $time;
  $theme = ["Заявка на обратный звонок с сайта!"];

  $mail->addAddress("paslavsckiy@gmail.com");

  $mail->Subject = $theme;
  $mail->Body = $body;

  $mail->Send();