<?php

if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $emailFrom = $_POST['email'];
  $phoneNumber = $_POST['phoneNumber'];
  $roomView = $_POST['roomView'];
  $message = $_POST['text'];

  $mailTo = "info@vittoriahotel.eu";
  $headers = "E-mail da: ".$emailFrom;
  $txt = "Hai ricevuto un e-mail da ".$name."\n Numero di telefono: ".$phoneNumber."\n Camera richiesta: ".$roomView."..\n\n".$message;

  mail($mailTo, $txt, $headers);
  header("Location: index.php?mailsend");
}