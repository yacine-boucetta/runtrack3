document.addEventListener("DOMContentLoaded", function loaded() {
      const textAreaInput = document.getElementById("keylogger");
      let record = "";
    
      document.addEventListener("keydown", (e) => {
        record = record.concat(e.key); // s'écrit aussi record += e.key;
        textAreaInput.textContent = record;
      });
    });
    