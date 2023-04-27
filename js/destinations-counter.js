const diversCounter = document.querySelector(".destination-counter");
let divers = 250;
const interval = setInterval(function () {
    divers++;
    diversCounter.textContent = divers;
    if (divers > 299) {
        divers = 250;
    }
}, 2000);