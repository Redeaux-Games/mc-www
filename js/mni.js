const triggerRandomText = () => {
    const letters = "䷊☲䷴☱䷣☷䷞☵䷁☶䷨⚍䷮䷀䷚䷉䷄䷱䷍⚎";
    let interval = null;
    let iteration = 0;
    clearInterval(interval);
    
    interval = setInterval(() => {
      document.querySelector("h5").innerText = document.querySelector("h5").innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return document.querySelector("h5").dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 20)];
        })
        .join("");
      
      if(iteration >= document.querySelector("h5").dataset.value.length){ 
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 80);

    setTimeout(() => {
        clearInterval(interval);
    }, 2000);
};