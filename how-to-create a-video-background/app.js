const btn = document.querySelector(".switch-btn"); // HTML belgesindeki .switch-btn sınıfına sahip ilk düğmeyi seç
const video = document.querySelector(".video-container"); // HTML belgesindeki .video-container sınıfına sahip ilk video bileşenini seç

btn.addEventListener("click", function () { // Düğmeye tıklama olayı dinleyicisi ekleyin. Bununla btn üzerinde bir tıklama olayı dinleyicisi eklenir. Kullanıcı düğmeye tıkladığında, içerideki fonksiyon çalıştırılır.
    if (!btn.classList.contains("slide")) {  // Eğer düğme .slide sınıfını içermiyorsa, yani düğme henüz kaydırılmamışsa, btn.classList.add("slide") ile düğme üzerine "slide" sınıfı eklenir.
        btn.classList.add("slide"); // Düğme üzerine .slide sınıfını ekle
        video.pause(); // Videoyu durdur
    }
    else {
        btn.classList.remove("slide"); // Eğer düğme .slide sınıfını içeriyorsa, sınıfı kaldır
        video.play(); // Videoyu oynat
    }
});

// Preloader

const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
    preloader.classList.add("hide-preloader");
})