document.getElementById("yes-btn").addEventListener("click", function() {
    document.getElementById("message").innerText = "Hadi girek!";
    document.getElementById("main-image").src = "happycat.gif"; // Yeni resim
});

document.getElementById("no-btn").addEventListener("click", function() {
    document.getElementById("message").innerText = "Tekrar düşün...";
    document.getElementById("no-btn").classList.add("small");
    document.getElementById("yes-btn").classList.add("large");
});