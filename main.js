onload = () => {
    const c = setTimeout(() => {
      setTimeout(alert("Espero que as proximas possam ser de verdade :) "), 1000)
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000 );
};
