<!DOCTYPE html>
<html lang="cs">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Hezký boudy</title>
  <meta name="description" content="Hezký boudy | Zakázková výroba dřevostaveb, tinyhousů a zahradních domků ">
    <meta name="keywords" content="Hezký boudy, HB, tinyhouse, tiny house, bydlení, chaty, lesní školky">
    <meta name="author" content="Michal Urbánek">
  <link rel="icon" type="image/x-icon" href="/res/icons/logo-dark.svg">
  <link rel="stylesheet" href="./styles/style.css" />
  <link rel="stylesheet" href="/src/cookieconsent.css" media="print" onload="this.media='all'">
  <script src="https://www.google.com/recaptcha/api.js"></script>
  <script>
   function onSubmit(token) {
     document.getElementById("contact-form").submit();
   }
 </script>
</head>

<body>


  <main>
    <header class="hero-pattern">
      <div class="hero-pattern-inner">
        <div class="hero-pattern-text">
          <h1>Kontakt</h1>
          <hr class="hr-small" />
        </div>
      </div>
    </header>

    <section id="contact">
      <!-- 3grid blocky -->
      <div class="holder">
        <div class="contact-container">
          <div class="con-col">
            <div class="contact-box">
              <div class="text">
                <h2>Kontaktní osoba</h2>
                <p>
                <ul>
                  <li><b>Ing. Jakub Horák</b></li>
                  <li>info@hezkyboudy.cz</li>
                  <li>+420 775 659 758</li>
                  <li>IČO: 07924364</li>
                </ul>
                </p>
              </div>
            </div>
          </div>
          <div class="con-col">
            <div class="contact-box ">
              <div class="text">
                <h2>Sídlo</h2>
                <p>
                <ul>
                  <li>Staňkova 376/25</li>
                  <li>Brno</li>
                  <li>602 00</li>
                </ul>
                </p>
              </div>
            </div>
          </div>
          <div class="con-col">
            <div class="contact-box">
              <div class="text">
                <h2>Výroba</h2>
                <p>
                <ul>
                  <li>Žatčany u Brna</li>
                  <li>Areál Dipro</li>
                </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="form-holder">
      <div class="offer-heading mt2">
        <h1>Kontaktujte nás</h1>
        <div class="divider">
          <img src="./res/icons/divider.svg">
        </div>
      </div>
      <!-- simple form -->
      <div class="holder holder-sm">
        <form method="POST" action="form.php" id="contact-form">
          <label for="name" class="required">Jméno</label>
          <input type="text" id="name" name="name" placeholder="Jméno Příjmení" required>
          <label for="mail" class="required">E-mail</label>
          <input type="text" id="mail" name="mail" placeholder="jan.novak@email.cz"  required>
          <label for="subject" class="required">Předmět</label>
          <input type="text" id="subject" name="subject" placeholder="Stavba TinyHouse Brno"  required>
          <label for="subjectText">Poznámka</label>
          <textarea id="subjectText" name="subjectText" placeholder="Zde můžete popsat konkrétní požadavky.."
            style="height:200px"></textarea>
            <input type="checkbox" name="agree" id="agree" required>
            <label for="agree" class="required">Souhlasím se zpracováním <a href="gdpr.html" target="_blank">osobních údajů</a>.</label>
          <input type="submit" class="btn btn-outline g-recaptcha" value="Odeslat" data-sitekey="6LfF3QAhAAAAAFu50-HarfxhuJzqW1sb0nQEWC3U" data-callback="onSubmit">
        </form>
      </div>
    </section>

    <section id="map">
      <div class="map">
        <iframe style="border:none" src="https://frame.mapy.cz/s/kevetokosu" width="100%" height="100%"
          frameborder="0"></iframe>
      </div>
    </section>


    <!-- <section id="site-map"></section> -->
  </main>


  <script src="script.js"></script>
  <script defer src="src/cookieconsent.js"></script>
  <script defer src="src/cookieconcest-init.js"></script>
</body>

</html>