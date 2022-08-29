//append header
$('body').prepend(` 
<header class="header">
  <div class="header-container">
  <div class="header__logo">
  <img src="../assets/img/logo.png" alt="Logo" />
  <p>
    smk negeri 1 <br />
    purwosari
  </p>
</div>

<div class="header__dropdown">
<ion-icon class="btn-show-navbar-phone" name="menu-outline"></ion-icon>
</div>

<div class="header__list">
  <a href="./home.html" class="header__list--item home-link">Beranda</a>
  <a href="./about.html" class="header__list--item about-link">Tentang</a>
  <a href="#" class="header__list--item btn-join">Join Us &rarr;</a>
</div>
</div>
</header>

<header class="header-phone">
<div class="header-phone-container">
  <div class="header-phone-top">
    <div class="header-phone-top__logo">
      <img src="../assets/img/logo.png" alt="Logo" />
      <p>
        smk negeri 1 <br />
        purwosari
      </p>
    </div>

    <div class="header-phone-top__btn">
      <ion-icon class="btn-close-navbar-phone" name="close-outline"></ion-icon>
    </div>
  </div>

  <div class="header-phone-list">
    <a href="./home.html" class="header-phone-list-item home-link">Beranda</a>
    <a href="./about.html" class="header-phone-list-item about-link">Tentang</a>
    <a href="#" class="header-phone-list-item btn-join">Join Us &rarr;</a>
  </div>
</div>
</header>
`);

$('body').append(`
<footer class="footer">
<div class="footer-container">
 
<div class="footer__wrapper">
  <div class="footer__wrapper--left">
  <div class="footer-logo-container">
    <div class="footer__wrapper--left__logo">
      <img src="../assets/img/logo.png" alt="" />
      <p>
        smk negeri 1 <br />
        purwosari
      </p>
    </div>
    <div class="footer__wrapper--left__desc">
      Transform the way companies manage <br />
      payments electronically without the high <br />
      payment fees.
    </div>
    </div>

    <div class="footer__wrapper--left__box">
    <div class="footer__wrapper--left__box--item">Home</div>
    <div class="footer__wrapper--left__box--item">About</div>
    <div class="footer__wrapper--left__box--item">Gallery</div>
    <div class="footer__wrapper--left__box--item">Contact</div>
    <div class="footer__wrapper--left__box--item">Siswa</div>
    <div class="footer__wrapper--left__box--item">Guru</div>
    <div class="footer__wrapper--left__box--item">Profile</div>
    <div class="footer__wrapper--left__box--item">Prestasi</div>
    <div class="footer__wrapper--left__box--item">Privacy Police</div>
    <div class="footer__wrapper--left__box--item">Terms Of Service</div>
    <div class="footer__wrapper--left__box--item">Company</div>
  </div>
   
  </div>
  <div class="footer__wrapper--right">
    <div class="footer__wrapper--right__medsos">
    <div class="footer__wrapper--right__medsos--box"><ion-icon name="logo-instagram"></ion-icon></div>
    <div class="footer__wrapper--right__medsos--box"><ion-icon name="logo-linkedin"></ion-icon></div>
    <div class="footer__wrapper--right__medsos--box"><ion-icon name="logo-facebook"></ion-icon></div>
    <div class="footer__wrapper--right__medsos--box"><ion-icon name="logo-youtube"></ion-icon></div>
    <div class="footer__wrapper--right__medsos--box"><ion-icon name="logo-twitter"></ion-icon></div>
  </div>
  
    <div class="footer__wrapper--right__cr">Copyright SMKN 1 Purwosari 2022 © All rights reserved.</div>
  </div>
</div>

<hr />
<div class="footer__bottom">
  <div class="footer__bottom--left">
    <div class="footer__bottom--left__phone">
      <p><ion-icon name="call"></ion-icon></p>
      <p>(0343) 613747</p>
    </div>
    <div class="footer__bottom--left__alamat">
      <p><ion-icon name="location"></ion-icon></p>
      <p>
        Jl. Raya Purwosari No. 1, Kec Purwosari, <br />
        Kab Pasuruan, Jawa Timur 67162
      </p>
    </div>
    <div class="footer__bottom--left__email">
    <p><ion-icon name="mail"></ion-icon></p>
      <p>purwosarismkn1@yahoo.co.id</p>
    </div>
  </div>
</div>
</div>
</footer>`);

// looping html element
for (let i = 0; i < 7; i++) {
  $('.home__berita--wrapper__left--scroll').append(`<div class="berita-box">
  <div class="berita-box__left"></div>
  <div class="berita-box__right">
    <div class="berita-box__right--title">Kegiatan Pembelajaran Daring</div>
    <div class="berita-box__right--desc">Lorem ipsum dolor sit amet adipcing ipsum dolor sit amet adipcing aqua lorem ipsum.</div>
    <div class="berita-box__right--bottom">
    <p>20 Juni</p>
    <p><ion-icon name="arrow-forward-circle-outline"></ion-icon></p>
    </div>
    </div>
    </div>`);
}

for (let i = 0; i < 6; i++) {
  $('.fasilitas__wrapper--content__container').append(`
    <div class="fasilitas__wrapper--content__container--box">
      <div class="fasilitas-box">
        <div class="fasilitas-box__info">
          <div class="fasilitas-box__info--img"></div>
          <div class="fasilitas-box__info--title">Teknologi dan Rekayasa</div>
          <div class="fasilitas-box__info--swipe">
            <div class="fasilitas-box__info--swipe__wrapper">
              <div class="fasilitas-box__info--swipe__wrapper__btn btn-swipe"><ion-icon name="chevron-up-outline"></ion-icon> <p>Show Detail</p> </div>
              <div class="fasilitas-box__info--swipe__wrapper__container">
                <p class="fasilitas-box__info--swipe__wrapper__container--info"><ion-icon name="construct-outline"></ion-icon>Detail Fasilitas</p>
                <p class="fasilitas-box__info--swipe__wrapper__container--title">Teknologi dan Rekayasa</p>
                <p class="fasilitas-box__info--swipe__wrapper__container--desc">
                  Melbourne based Illustrator & Designer Ken Taylor works primarily within the music industry and is predominantly well known for his striking rock posters. Ken started in Perth Western Australia doing posters and album
                  artwork for local bands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div`);
}

// leaflet maps
if (window.location.href.indexOf('home') > -1) {
  var map = L.map('map', {
    zoomControl: false,
  }).setView([-7.76764, 112.74839], 13);
  var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 12,
    maxZoom: 17,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  var marker = L.marker([-7.76764, 112.74839]).addTo(map).bindPopup('<b>SMKN 1 Purwosari, Pasuruan</b>').openPopup();

  var circle = L.circle([-7.76764, 112.74839], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 100,
  })
    .addTo(map)
    .bindPopup('Linkungan SMKN 1 PURWOSARI');
}
