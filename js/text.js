window.onscroll = event => {
    const letters = "โฒโงโฉ๐โฃโฆโโโขไท๊ชโฆฝโโฒไทดโใงโต๐๐ท๐๐ฑ๐ฌ๐๐๐";
    let interval = null;
    let iteration = 0;
    clearInterval(interval);
    
    interval = setInterval(() => {
      document.querySelector("h4").innerText = document.querySelector("h4").innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return document.querySelector("h4").dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
      
      if(iteration >= document.querySelector("h4").dataset.value.length){ 
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 40);
}; 
