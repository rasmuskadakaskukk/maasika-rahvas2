# Pere kodutööd – oma koopia GitHubis ja tasuta hostimine

See on pere kodutööde leht: majakulud jagatakse pereliikmete vahel, tehtud töö eest saab tunnitasu, tööd ja pildid kirjutab igaüks oma telefonis üles, adminid panevad ülesandeid graafikusse.

Leht on tavaline veebileht (`index.html`), mis hoiab andmeid **tasuta Firebase'i andmebaasis (Firestore)**. Serverit ega kuutasu pole vaja. Seadistus võtab umbes 20–30 minutit. Soovitan teha seda arvutis, aga enamik samme õnnestub ka telefonis.

**Sul on vaja:** Google'i kontot (Firebase) ja GitHubi kontot. Mõlemad on tasuta.

## Mis kaustas on

| Fail | Milleks |
|---|---|
| `index.html` | Leht ise. Seda ei pea muutma. |
| `firebase-config.js` | **Ainus fail, mida täidad.** Siia lähevad sinu Firebase'i seaded ja algandmed (nimed, summad). |
| `firestore.rules` | Andmebaasi reeglid. Kleebid need Firebase'i (samm 3). |
| `README.md` | See juhend. |

## Kuidas see töötab

- Leht asub GitHub Pages'is (tasuta) ja andmed on Firebase'is (tasuta).
- Sisse logimist pole. Igal perel on pikk juhuslik **pere kood**, mis on lingi lõpus: `https://…/#k=abcde-fghjk-mnpqr-stuvw`. Kes lingi saab, pääseb perre ja valib lehel oma nime.
- Andmed on Firebase'is aadressi `f/<pere kood>/…` all. Ilma koodita neid üles ei leia.
- Kui internet kaob, töötab leht edasi ja saadab muudatused hiljem. Seni on lehel hoiatus „Mõni muudatus ootab ühendust".

---

## Samm 1. Firebase'i projekt

1. Ava <https://console.firebase.google.com> ja logi sisse oma Google'i kontoga.
2. Vajuta **Create a project** (või **Add project**). Anna nimi, näiteks `pere-kodutood`. Google Analyticsit pole vaja, lülita see välja. Vajuta **Create project**.
3. Kui projekt on valmis, vajuta projekti avalehel veebirakenduse ikoonil **`</>`** (Web). Anna rakendusele nimi (näiteks `pere`). **Firebase Hostingut ei ole vaja**, jäta see märkimata. Vajuta **Register app**.
4. Ekraanile ilmub kood, kus on `firebaseConfig` kuue väärtusega (`apiKey`, `authDomain`, `projectId`, `storageBucket`, `messagingSenderId`, `appId`). Hoia see aken lahti, neid väärtusi läheb järgmises sammus vaja.
   Hiljem leiad need uuesti: hammasratas → **Project settings** → **Your apps** → **SDK setup and configuration** → **Config**.

## Samm 2. Täida `firebase-config.js`

Ava fail tekstiredaktoris (Notepad, TextEdit lihttekstina, VS Code). Võid teha seda ka GitHubis pärast üleslaadimist (samm 4), pliiatsi ikooniga. **Ära kasuta Wordi ega Google Docsi**, need rikuvad jutumärgid.

Asenda iga `KLEBI-SIIA` vastava väärtusega Firebase'ist. Jutumärgid jäta alles:

```js
firebase: {
  apiKey: "AIza…",
  authDomain: "pere-kodutood.firebaseapp.com",
  projectId: "pere-kodutood",
  storageBucket: "pere-kodutood.firebasestorage.app",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
},
```

Kopeeri väärtused täpselt nii, nagu Firebase need näitab. Näide on ainult kuju jaoks. Lisarida `measurementId` pole vaja.

Ploki `seed` all on algandmed (2000 € kuus, 10 € tunnis, pereliikmete nimed, adminid Rasmus ja Margus). Neid kasutatakse ainult uue pere loomisel ja seal saad neid veel muuta.

## Samm 3. Firestore'i andmebaas ja reeglid

1. Firebase'i konsooli vasakul menüüs ava **Build** → **Firestore Database** (uuemas menüüs **Databases & Storage** → **Firestore**) ja vajuta **Create database**.
2. Vali **Standard edition**. Database ID jäta `(default)`. Asukoht: vali Euroopa asukoht (näiteks `eur3`). Asukohta ei saa hiljem muuta. Vajuta **Next**.
3. Kui küsitakse reegleid, vali **Production mode** ja vajuta **Create**.
4. Kui andmebaas on valmis, ava ülal sakk **Rules**. Kustuta seal olev tekst, kopeeri sisse kogu failist `firestore.rules` ja vajuta **Publish**.

Kui reegleid ei avalda, ei saa leht midagi lugeda ega salvestada ning näitab teadet „Firebase ei luba seda teha".

## Samm 4. Pane failid GitHubi

1. Tee konto aadressil <https://github.com> ja logi sisse.
2. Üleval paremal **+** → **New repository**. Nimeks sobib `kodutood`. Vali **Public** (tasuta GitHub Pages töötab ainult avaliku repoga, vt allpool „Privaatne repo?"). Vajuta **Create repository**.
3. Vajuta **uploading an existing file** (või **Add file** → **Upload files**). Vali **neli faili** (mitte kausta ega ZIP-i, GitHub ei paki ZIP-i lahti) ja vajuta **Commit changes**.
4. Kontrolli: repo avalehel on `index.html`, `firebase-config.js`, `firestore.rules` ja `README.md`. Failid peavad olema repo **juurkaustas**, mitte alamkaustas.

Kui kasutad gitti käsurealt:

```
git init
git add .
git commit -m "Pere kodutööd"
git branch -M main
git remote add origin https://github.com/KASUTAJA/kodutood.git
git push -u origin main
```

## Samm 5. Lülita sisse GitHub Pages

1. Repos: **Settings** → vasakul **Pages**.
2. **Build and deployment** → **Source**: **Deploy from a branch**.
3. **Branch**: `main`, kaust: **/ (root)**. Vajuta **Save**.
4. Oota 1–3 minutit ja värskenda lehte. Üles ilmub aadress kujul `https://KASUTAJA.github.io/kodutood/`. See on sinu lehe aadress.

## Samm 6. Loo pere ja kutsu pereliikmed

1. Ava `https://KASUTAJA.github.io/kodutood/#uus` (aadressi lõppu lisa `#uus`).
2. Vajuta **Loo uus pere**. Vaata üle summad, nimed ja adminid, siis vajuta **Loo pere**. Leht teeb pere koodi ise ning paneb andmebaasi 10 tavalist tööd ja pereliikmed.
3. Ilmub **Pere link**. Vajuta **Kopeeri link** ja saada see pereliikmetele (näiteks WhatsAppis). Sama link on hiljem lehel **Seaded** → **Pere link**.
4. Iga pereliige avab lingi oma telefonis ja valib küsimisel oma nime. Nimi jääb selle telefoni meelde. Sisse logida pole vaja.
5. **Avaekraanile:** iPhone'is Safaris **Jaga** → **Lisa avaekraanile**, Androidis Chrome'is ⋮ → **Lisa avalehele**. Tee seda lehelt, mille aadressi lõpus on `#k=…`. Leht hoiab koodi aadressis, nii et ikoon avab pere kohe. Kui ikoon siiski koodi küsib, kleebi lahtrisse pere link (**Seaded** → **Pere link** → **Kopeeri**).

**WhatsAppi märkus:** WhatsApp avab lingi sageli oma sisseehitatud brauseris, millel on oma mälu. Ava link päris brauseris (otsi menüüst valikut, mis avab lehe Safaris või Chrome'is) ja lisa avaekraanile sealt.

---

## Teised tasuta hostid

Leht on lihtne staatiline veebileht, seega sobib see igale staatiliste lehtede hostile. Firebase'i osa (sammud 1–3) on igal juhul sama.

Andmed on Firebase'is, seega hosti vahetamisel need ei kao. Kui peres on juba andmeid, võta pere kood (**Seaded** → **Pere link**), pane uue aadressi lõppu `#k=` ja kood ning saada pereliikmetele uus link. Täitsa uue pere loomiseks lisa aadressi lõppu `#uus`.

**Netlify Drop** (kõige lihtsam, kui GitHubi ei taha)
1. Ava <https://app.netlify.com/drop>.
2. Lohista sinna kaust, kus on `index.html` ja täidetud `firebase-config.js` (või kaustast tehtud ZIP). See vajab arvutit, telefonis lohistada ei saa.
3. Saad aadressi kujul `…netlify.app`. Uuendamiseks lohista uuendatud kaust uuesti oma saidi lehele.

**Cloudflare Pages** (võtab lehe GitHubi repost ja uueneb ise)
1. Ava <https://dash.cloudflare.com> → **Workers & Pages** → **Create application** → **Pages** → **Import an existing Git repository** ja vali oma repo.
2. **Build command** jäta tühjaks, väljundi kaust jäta tühjaks (või `/`). Vajuta **Save and Deploy**.
3. Saad aadressi kujul `….pages.dev`. Iga GitHubi muudatus uuendab lehe ise. Cloudflare muudab menüüsid aeg-ajalt, kui nimed on teised, otsi „Pages" ja „Connect to Git".

**Privaatne repo?** Tasuta GitHub Pages töötab ainult avaliku repoga. Kui tahad repo privaatsena hoida, kasuta Netlify't või Cloudflare Pages'i. Lehe enda aadress on aga alati avalik: igaüks, kes aadressi teab, saab alla laadida ka `firebase-config.js`, sest brauser vajab seda. Seetõttu ära pane sinna midagi salajast. Kui ei taha pereliikmete nimesid avalikku faili, kustuta need plokist `seed` (`members: []`, `admins: []`) ja kirjuta nimed uue pere loomise aknas.

---

## Uuendamine hiljem

Kui saad uue `index.html`:

1. GitHubis ava repo → **Add file** → **Upload files** → vali uus `index.html` → **Commit changes**. Sama nimega fail asendub.
2. **Ära asenda `firebase-config.js`-i**, seal on sinu seaded.
3. Muudatus jõuab lehele mõne minutiga. Kui näed vana lehte, sule leht ja ava uuesti.

Pere andmed ei kao, need on Firebase'is.

`firebase-config.js` muutmiseks ava fail GitHubis ja vajuta pliiatsi ikooni.

## Tasuta kvoot

Firebase'i tasuta plaan (Spark) annab Firestore'ile päevas 50 000 lugemist, 20 000 kirjutamist ja 20 000 kustutamist, lisaks 1 GiB andmeid ja 10 GiB väljuvat liiklust kuus. Päevane kvoot nullitakse umbes keskööl Vaikse ookeani aja järgi. Projektis on üks tasuta andmebaas.

Kaheksa inimese pere jääb sellest tavaliselt kaugele alla: leht loeb avamisel mõnikümmend kuni paar sada kirjet. Pildid tehakse enne salvestamist väiksemaks (kuni umbes 90 kB tükk) ja hoitakse samas andmebaasis, 1 GiB-sse mahub neid mitu tuhat. Kui päevane limiit siiski täis saab, näitab leht teadet „Firebase'i tasuta päevane limiit sai täis". Andmed ei kao ja järgmisel päeval töötab kõik jälle.

## Turvalisus (ausalt)

- **Pere kood on võti.** See on 20 juhuslikku märki, mida ei saa ära arvata. Kes lingi saab, näeb ja saab muuta kõiki pere andmeid. Ära pane linki avalikku kohta. Koodi vahetamist ilma andmeid kaotamata praegu pole. Kui link satub valedesse kätesse, tuleb luua uus pere.
- **Adminiõigus on usalduse peal.** Admin on see, kelle nime telefonis valiti. Pereliige võiks valida ka admini nime. Päris kaitse on pere kood. Pere sees see tavaliselt sobib. Kui tahad rangemat (igaühel oma parool), on vaja Firebase'i sisselogimist, seda saab hiljem lisada.
- **Firebase'i `apiKey` pole parool.** See on lehe tunnus ja võib olla avalikus koodis, kaitse tuleb reeglitest ja pere koodist. GitHub või Google võib siiski saata hoiatuse „avalik API võti", see on selle seadistuse puhul ootuspärane.
- **Soovitus: lukusta reegel oma koodile.** Praegu lubab reegel igat 16–40-märgilist koodi. Võõras, kes näeb sinu Firebase'i seadeid (need on avalikus failis `firebase-config.js`), saaks seega oma andmeid sinu projekti kirjutada ja sinu päevast kvooti kulutada. Sinu pere andmetele see ligi ei pääse. Pärast pere loomist ava Firebase'is **Rules** ja asenda rida
  `allow read, write: if code.size() >= 16 && code.size() <= 40;`
  reaga
  `allow read, write: if code == 'SINU-KOOD';`
  (kood on pere lingis `#k=` järel, ka lehel **Seaded** → **Pere link**) ja vajuta **Publish**. Pärast seda ei saa samas projektis uut peret luua enne, kui reegli tagasi muudad. Sama on kirjas faili `firestore.rules` lõpus.
- **Kui kood kaob:** ava leht mõne pereliikme telefonis ja vaata **Seaded** → **Pere link**. Või ava Firebase'is **Firestore Database** → **Data** → kollektsioon `f`: dokumendi ID on pere kood.

## Tõrkeotsing

| Mida näed | Põhjus ja lahendus |
|---|---|
| „Firebase on seadistamata" | `firebase-config.js` sisaldab veel `KLEBI-SIIA` või fail pole `index.html`-iga samas kaustas või on nimi vale (peab olema täpselt `firebase-config.js`). |
| Tühi leht või 404 | GitHub Pages pole veel valmis (oota paar minutit), või **Pages** pole sisse lülitatud, või `index.html` pole repo juurkaustas. |
| „Firebase ei luba seda teha…" | Reeglid pole **Publish**'itud (samm 3), või pere kood on vale. |
| „Selle pere koodiga pole andmeid…" | Link või kood on vale. Kasuta õiget linki või vajuta **Vaheta pere**. |
| „Firebase'i skripti ei saanud laadida" | Telefonil pole internetti, või reklaamiblokeerija blokeerib Google'i skriptid (`gstatic.com`). |
| „Firebase'i seadistus ei klapi…" | Viga `firebase-config.js` väärtustes (samm 2) või Firestore'i andmebaasi pole loodud (samm 3). |
| „Firebase'i tasuta päevane limiit sai täis" | Tasuta päevane kvoot sai täis. Proovi homme uuesti. |
| „Mõni muudatus ootab ühendust" | Internet on aeglane või puudub. Hoia leht lahti, muudatus saadetakse ise ära. |
| Avaekraani ikoon küsib koodi | Kleebi lahtrisse pere link (**Seaded** → **Pere link** → **Kopeeri**). |

## Viited

- Firestore'i tasuta kvoot: <https://firebase.google.com/docs/firestore/pricing>
- GitHub Pages, avaldamise allika seadistamine: <https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site>
- Netlify Drop: <https://docs.netlify.com/start/get-started-with-drop/>
