<?php

if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $emailFrom = $_POST['email'];
  $phoneNumber = $_POST['phoneNumber'];
  $roomView = $_POST['roomView'];
  $message = $_POST['text'];

  $mailTo = "info@vittoriahotel.eu";
  $headers = "E-mail da: " . $emailFrom;
  $txt = "Hai ricevuto un e-mail da " . $name . ".\n\n" .
    "Numero di telefono: " . $phoneNumber . ".\n\n" .
    "Camera richiesta: " . $roomView . ".\n\n" .
    $message;

  mail($mailTo, $headers, $txt);
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-151580552-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'UA-151580552-1');
  </script>

  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

  <link href="https://fonts.googleapis.com/css?family=Advent+Pro:100,400" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Spectral" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Old+Standard+TT:400,400i,700" rel="stylesheet">

  <link rel='stylesheet' href='../stylesheets/main.css'>
  <link rel='stylesheet' href='../stylesheets/contact.css'>

  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">
  <link rel="icon" href="../images/logo.png" type="image/png">
  <title>Hotel Vittoria</title>
</head>

<body>

  <div class="container">
    <nav id="mainNavbar" class="navbar navbar-expand-md navbar-dark py-0 fixed-top" style='color:yellow'>
      <a class="navbar-brand" href="../index.html">★ ★ ★
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navLinks" aria-label="toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navLinks">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link" href="../index.html">HOME</a></li>
          <li class="nav-item"><a class="nav-link" href="index-rooms.html">CAMERE</a></li>
          <li class="nav-item"><a class="nav-link" href="prices.html">PREZZI</a></li>
          <li class="nav-item"><a class="nav-link" href="contact.php">CONTATTI</a></li>
        </ul>
      </div>
    </nav>
  </div>

  <div class="half__logo">
    <img src="../images/half-logoHD.jpg" alt="half logo">
  </div>

  <div id="topBtn">
    <a href="#languages">
      <i class="fas fa-chevron-up"></i>
    </a>
  </div>

  <section id='contacts'>
    <div class='container text-center'>
      <h2>Contatti</h2>
      <p>Compila il modulo, indicando esattamente le date di arrivo e partenza da te gradite, specificando la tipologia di alloggio preferita (vedi pagina camere). Grazie.</p>
    </div>
    <div class='contact-section'>
      <form class='contact-form' action="<?php echo $_SERVER['PHP_SELF']; ?>" method='post'>
        <input type="text" name="name" placeholder='Il tuo nome e cognome' class='contact-form-text' required>
        <input type="email" name="email" placeholder='La tua email' class='contact-form-text' required>
        <input type="text" name="phoneNumber" placeholder='Il tuo numero di telefono' class='contact-form-text' required>
        <input type="text" name="roomView" placeholder='Tipo di camera gradita' class='contact-form-text'>
        <textarea name="text" placeholder='Scrivi qui la tua richiesta' class='contact-form-text' required></textarea>
        <input type="submit" name="submit" class='contact-form-btn' value="Invia">
      </form>
    </div>
  </section>

  <section id='info-contacts'>
    <h2>Contatti</h2>
    <div class="address">
      <div class='info-contact'>
        <i class="fas fa-phone-square"></i>
        <h5>Hotel Vittoria</h5>
        <p>0365 641320</p>
      </div>
      <div class='info-contact'>
        <i class="fas fa-mobile-alt"></i>
        <h5>Direttore Sig. Tononi Luca</h5>
        <p>+39 329 3103384</p>
      </div>
      <div class="info-contact">
        <i class="fas fa-map-marker-alt"></i></br>
        Toscolano Maderno (BS)</br>
        Via benamati 118</br>
        Lago di Garda</br>
      </div>
      <div class="info-contact">
        <div class="item__social__contact">
          <a class='social-btn' target="_blank" href="https://www.facebook.com/LaVittoriadiMaderno/"><i class="fab fa-facebook-f"></i>
          </a>
          <a class='social-btn' target="_blank" href="https://www.google.com/maps/place/Hotel+Vittoria/@45.638064,10.6006863,17z/data=!3m1!4b1!4m7!3m6!1s0x0:0xdfe1e097a1faebc6!5m1!1s2018-04-16!8m2!3d45.638064!4d10.602875?hl=it&shorturl=1"><i class="fab fa-google"></i>
          </a>
          <a class='social-btn' target="_blank" href="https://www.tripadvisor.it/Hotel_Review-g950408-d2557915-Reviews-Hotel_Vittoria-Toscolano_Maderno_Province_of_Brescia_Lombardy.html"><i class="fab fa-tripadvisor"></i>
          </a>
          <a class='social-btn' href="mailto:info@vittoriahotel.eu">
            <i class="far fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
    </div>
  </section>

  <section id='map'>
    <h2>Dove siamo</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2789.635214791765!2d10.600686315563266!3d45.638063979103386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdfe1e097a1faebc6!2sHotel+Vittoria!5e0!3m2!1sit!2sit!4v1545842760573" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
  </section>

  <section id='agriturismo'>
    <div class='text__title__agriturismo'>
      <h2>Agriturismo San Lorenzo di Persegno</h2>
      <em>La nostra alternativa per gli amanti della montagna</em>
      <p class='text__desc__agriturismo'><span>Clicca</span> sull’immagine per scoprire la nostra struttura montana. L’agriturismo si trova a 7 km dal paese di Toscolano Maderno. Gli appartamenti sono <span>completamente arredati e forniti di ogni accessorio.</span> Nella struttura è presente un solarium e a un km di distanza si trova un <span>meraviglioso fiume</span> dove poter fare il bagno. </p>
    </div>
    <div class="img__agriturismo">
      <a target='_blank' href="https://sanlorenzodipersegno.it/"><img src="../images/agriturismo.png" alt="First slide">
      </a>
    </div>
  </section>

  <footer>
    <div class="left-footer">
      <p class="powered-by">Copyright © 2019 <br> Powered by <a target='_blank' href="https://tonmediadesign.com">TON Media Design</a></p>
    </div>

    <div class="central-footer">
      <img src="/images/logoHD.jpeg" alt="logo hotel">
    </div>

    <div class="right__footer">
      <ul>
        <li>
          <h5>Info
          </h5>
        </li>
        <li>info@vittoriahotel.eu</li>
        <li>tel. 0365 641320</li>
        <li>P.iva 01558810980</li>
      </ul>
    </div>
  </footer>


  <!-- Optional JavaScript -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
  <script src="../javascript/app.js"></script>
</body>

</html>