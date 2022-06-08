const form = document.querySelector(".quizz");
let tableauResultats = [];
const reponse = ["1", "1", "3", "2"];
const emojis = ["✔️", "👀", "✨", "😭", "👎🏻"];
const titreResultat = document.querySelector(".resultats h2");
const noteresultat = document.querySelector(".note");
const aideResultat = document.querySelector(".aide");
const toutesLesQuestions = document.querySelectorAll(".form-quizz");
let verifTableau = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  for (let i = 1; i < 5; i++) {
    tableauResultats.push(
      document.querySelector(`input[name="q${i}"]:checked`).value
    );
  }
  //   console.log(tableauResultats); permet de verifier le retour des reponses
  verifFunc(tableauResultats);
  tableauResultats = [];
});

//   console.log(document.querySelector('input[name="q1"]:checked').value);

function verifFunc(tabResultats) {
  for (let a = 0; a < 5; a++) {
    if (tabResultats[a] === reponse[a]) {
      verifTableau.push(true);
    } else {
      verifTableau.push(false);
    }
  }
  //   console.log(verifTableau);
  afficherResultat(verifTableau);
  couleursFonction(verifTableau);
  verifTableau = [];
}

function afficherResultat(tabCheck) {
  const nbDeFautes = tabCheck.filter((el) => el !== true).length;

  switch (nbDeFautes) {
    case 0:
      titreResultat.innerText = `${emojis[0]}Bravo${emojis[0]}`;
      aideResultat.innerText = "";
      noteresultat.innerText = "";
      break;

    case 1:
      titreResultat.innerText = `${emojis[1]} 1 faute, c'est pas mal ! ${emojis[2]}`;
      aideResultat.innerText = "";
      noteresultat.innerText = "";
      break;

    case 2:
      titreResultat.innerText = `${emojis[2]} 50% de reussite ! C'est moyen ${emojis[3]}`;
      aideResultat.innerText = "";
      noteresultat.innerText = "";

      break;

    case 3:
      titreResultat.innerText = `${emojis[3]} Les bases sont à revoir ${emojis[4]}`;
      aideResultat.innerText = "";
      noteresultat.innerText = "";
      break;
    default:
      "whouauu";
  }
}

function couleursFonction(tabValBool) {
  for (let j = 0; j < tabValBool.length; j++) {
    if (tabValBool[j] === true) {
      toutesLesQuestions[j].style.background = "green";
    } else {
      toutesLesQuestions[j].style.background = "#ffb8b8";
      toutesLesQuestions[j].classList.add("echec");

      setTimeout(() => {
        toutesLesQuestions[j].classList.remove("echec");
      }, 1000);
    }
  }
}
toutesLesQuestions.forEach((item) => {
  item.addEventListener("click", () => {
    item.getElementsByClassName.background = "white";
  });
});
