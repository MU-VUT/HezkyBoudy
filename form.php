

<!DOCTYPE html>
<html lang="cs">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hezký boudy</title>
    <link rel="icon" type="image/x-icon" href="/res/icons/logo-dark.svg">
    <link rel="stylesheet" href="./styles/style.css">
</head>

<body>
    <main>
        <section id="form-sent">
        <?php

$errors = [];
$errorMessage = '';

if (!empty($_POST)) {
    $name = $_POST['name'];
    $email = $_POST['mail'];
    $subject = $_POST['subject'];
    $subjectText = $_POST['subjectText'];

    if (empty($name)) {
        $errors[] = 'Vyplňte jméno';
    }

    if (empty($email)) {
        $errors[] = 'Vyplňte email';
    } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Email není ve správném formátu';
    }

    if (empty($subject)) {
        $errors[] = 'Vyplňte předmět';
    }


    if (empty($errors)) {
        // $toEmail = 'web.michalurbanek@gmail.com';
        $toEmail = 'info@hezkyboudy.cz';
        $emailSubject = $subject;
        $headers = ['From' => $email, 'Reply-To' => $email, 'Content-type' => 'text/html; charset=iso-8859-1'];

        // $bodyParagraphs = ["Name: {$name}", "Email: {$email}", "Message:", $subjectText];
        // $body = join(PHP_EOL, $bodyParagraphs);

        $body = "
        <div>
            <p><strong>Jméno:</strong> {$name}</p>
            <p><strong>E-mail:</strong> {$email}</p>
            <p><strong>Předmět:</strong> {$emailSubject}</p>
            <p><strong>Poznámka:</strong> {$subjectText}</p>
        </div>
        ";

        if (mail($toEmail, $emailSubject, $body, $headers)) {
            $thankText = "
            <div class='highlights-heading holder'>
                <h1>Vaše zpráva byla úspěšně odeslána</h1>
                <div class='divider'>
                    <img src='./res/icons/divider.svg'>
                </div>
            </div>
            <div class='row holder'>
                <div class='col-6 center center-top'>
                    <div class='highlights-box'>
                        <div class='image svg-dark'>
                            <img src='./res/icons/circle-check-regular.svg'>
                        </div>
                        <div class='text'>
                            <h2>Děkujeme za zájem</h2>
                            <p style='font-family: Nunito, sans-serif;'>
                                Ozveme se Vám co nejdříve to bude možné!
                                <br>
                                <br>
                                <strong>Pokud nenaleznete potvrzení objednávky v e-mailu, zkontrolujte si prosím SPAM!</strong>
                                <br>
                                <br>
                                Stránka Vás automaticky přesměruje zpět.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            ";
            echo($thankText);
            $emailSubject2 = "Potvrzení přijetí zprávy | Hezký Boudy";
            $body2 = "
            <div>
                <h3>Děkujeme za zájem!</h3>
                <p>Potvrzujeme přijetí zprávy z našeho kontaktního formuláře, ozveme se Vám co nejdříve<p>
                <p>Níže jsou uvedeny Vaše vyplněné informace</p>
                <p><strong>Jméno:</strong> {$name}</p>
                <p><strong>E-mail:</strong> {$email}</p>
                <p><strong>Předmět:</strong> {$emailSubject}</p>
                <p><strong>Poznámka:</strong> {$subjectText}</p>
            </div>
            ";
            $headers2 = ['From' => $toEmail, 'Reply-To' => $toEmail, 'Content-type' => 'text/html; charset=iso-8859-1'];
            mail($email, $emailSubject2, $body2, $headers2);
            echo("<script>setTimeout(function(){window.location.href='kontakt.php';}, 3000);</script>");
        } else {
            $errorMessage = 'Oops, něco se nepovedlo. Zopakujte akci později.';
        }
    } else {
        $allErrors = join('<br/>', $errors);
        $errorMessage = "<p style='color: red;'>{$allErrors}</p>";
        echo((!empty($errorMessage)) ? $errorMessage : '');
    }
}

?>
        </section>

        <!-- <section id="site-map"></section> -->
    </main>

    <script src="script.js"></script>

</body>

</html>