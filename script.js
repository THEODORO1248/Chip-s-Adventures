const start = document.getElementById("start");
const menu = document.getElementById("menu");
const infoaboutdificulties = document.getElementById("infoaboutdificulties");
const enbutton = document.getElementById("enbutton");
const ptbutton = document.getElementById("ptbutton");
const esbutton = document.getElementById("esbutton");
const confirmbutton = document.getElementById("confirmbutton");
const subtitle = document.getElementById("subtitle");

let lang = "en";

confirmbutton.style.display = "none";

ptbutton.addEventListener("click", function() {
  start.textContent = "COMEÇAR";
  subtitle.textContent = "selecione o idioma:"
  lang = "ptbr";
});

enbutton.addEventListener("click", function() {
  start.textContent = "START";
  subtitle.textContent = "Select language:";
  lang = "en";
});

esbutton.addEventListener("click", function() {
  start.textContent = "EMPEZAR";
  subtitle.textContent = "Selecciona el idioma:";
  lang = "es";
});

start.addEventListener("click", function () {
  if(lang === "en") {
    subtitle.textContent = "Select difficulty:";
  } else if(lang === "ptbr") {
    subtitle.textContent = "Selecione a dificuldade:";
  } else {
    subtitle.textContent = "Selecciona la dificultad:";
  }
  subtitle.textContent = "Select difficulty:";
  if(lang === "en") {
    menu.innerHTML = `
    <button id = "easy">EASY</button>
    <button id = "medium">MEDIUM</button>
    <button id = "hard">HARD</button>
    <button id = "impossible">IMPOSSIBLE</button>
    `
  } else if(lang === "ptbr") {
    menu.innerHTML = `
    <button id = "easy">FÁCIL</button>
    <button id = "medium">MÉDIO</button>
    <button id = "hard">DIFÍCIL</button>
    <button id = "impossible">IMPOSSÍVEL</button>
    `
  } else {
    menu.innerHTML = `
    <button id = "easy">FÁCIL</button>
    <button id = "medium">MEDIO</button>
    <button id = "hard">DIFÍCIL</button>
    <button id = "impossible">IMPOSIBLE</button>
    `
  }
  
  const easy = document.getElementById("easy");
  const medium = document.getElementById("medium");
  const hard = document.getElementById("hard");
  const impossible = document.getElementById("impossible");


  if(lang === "en") {
    confirmbutton.textContent = "CONFIRM";
  } else {
    confirmbutton.textContent = "CONFIRMAR";
  }

  easy.addEventListener("click", function() {
    if(lang === "en") {
      infoaboutdificulties.innerHTML = `
      Easier than the others. Perfect for learning how to play!
      `
    } else if(lang === "ptbr") {
      infoaboutdificulties.innerHTML = `
      Mais fácil que as outras. Perfeita para aprender a jogar!
      `
    } else {
      infoaboutdificulties.innerHTML = `
      Más fácil que las otras. ¡Perfecta para aprender a jugar!
      `
    }
    confirmbutton.style.display = "inline-block";
  });
  medium.addEventListener("click", function() {
    if(lang === "en") {
      infoaboutdificulties.innerHTML = `
      Not so easy, but perfect for people that know how to play but are not so good.
      `
    } else if(lang === "ptbr") {
      infoaboutdificulties.innerHTML = `
      Não tão fácil, mas perfeito para pessoas que sabem jogar mas não são tão boas assim.
      `
    } else {
      infoaboutdificulties.innerHTML = `
      No tan fácil, pero perfecto para personas que saben jugar pero no son tan buenas.
      `
    }
    confirmbutton.style.display = "inline-block";
  });
  hard.addEventListener("click", function() {
    if(lang === "en") {
      infoaboutdificulties.innerHTML = `
      Hard, but not so much.
      `
    } else if(lang === "ptbr") {
      infoaboutdificulties.innerHTML = `
      Difícil, mas não tanto.
      `
    } else {
      infoaboutdificulties.innerHTML = `
      Difícil, pero no tanto.
      `
    }
    confirmbutton.style.display = "inline-block";
  });
  impossible.addEventListener("click", function() {
    if(lang === "en") {
      infoaboutdificulties.innerHTML = `
      Very hard!
      `
    } else if(lang === "ptbr") {
      infoaboutdificulties.innerHTML = `
      Muito difícil!
      `
    } else {
      infoaboutdificulties.innerHTML = `
      ¡Muy difícil!
      `
    }
    confirmbutton.style.display = "inline-block";
  });
  confirmbutton.addEventListener("click", function() {
    infoaboutdificulties.innerHTML = ``;
  });
});