/* Pere kodutööd: seaded. Muuda ainult seda faili (index.html-i ei pea puutuma).
   Täpne juhend on failis README.md. */
window.KT_CONFIG = {

  /* 1) FIREBASE'I SEADED
     Firebase'i konsoolis: hammasratas > Project settings > Your apps > SDK setup and configuration > Config.
     Asenda iga KLEBI-SIIA vastava väärtusega. Jutumärgid jäta alles. */
  firebase: {
    apiKey: "KLEBI-SIIA",
    authDomain: "KLEBI-SIIA",
    projectId: "KLEBI-SIIA",
    storageBucket: "KLEBI-SIIA",
    messagingSenderId: "KLEBI-SIIA",
    appId: "KLEBI-SIIA"
  },

  /* 2) ALGANDMED (kasutatakse ainult uue pere loomisel, saad seal ka muuta).
     Kui repo on avalik, on need nimed kõigile nähtavad. Soovi korral kustuta nimed siit ja kirjuta need
     hiljem uue pere loomise aknas. */
  seed: {
    monthlyCost: 2000,
    hourlyRate: 10,
    members: ["Jan", "Kädi", "Lisandra", "Elise", "Rasmus", "Ron Robin", "Margus", "Kristel"],
    admins: ["Rasmus", "Margus"]
  }
};
