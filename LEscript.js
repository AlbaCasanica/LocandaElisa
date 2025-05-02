document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".menu-toggle");
    const links = document.querySelector(".navbar-links");
  
    toggle.addEventListener("click", () => {
        toggle.classList.toggle("aperto");
        if (links.classList.contains("attivo")) {
        // Chiudi: resetta altezza prima di togliere classe
        links.style.height = links.scrollHeight + "px"; // imposta altezza attuale
        requestAnimationFrame(() => {
          links.style.height = "0px";
          links.classList.remove("attivo");
        });
      } else {
        // Apri: misura, aggiungi classe, e lascia espandere
        links.classList.add("attivo");
        const height = links.scrollHeight;
        links.style.height = "0px";
        requestAnimationFrame(() => {
          links.style.height = height + "px";
        });
      }
    });
  
    // Dopo la transizione, togli inline height se chiuso
    links.addEventListener("transitionend", () => {
      if (!links.classList.contains("attivo")) {
        links.style.height = "";
      }
    });
  });
  