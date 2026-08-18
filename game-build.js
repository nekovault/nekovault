/* =========================
   DEFAULT FITUR
========================= */

const options = {

    paid: true,

    free: true,

    android: true,

    windows: true,

    showCredit: true,

    featured: true,

    screenshots: true

};


/* =========================
   YES / NO
========================= */

function setOption(name, value, button) {

    options[name] = value;

    const parent = button.parentElement;

    const buttons = parent.querySelectorAll("button");

    buttons.forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");
}


/* =========================
   GENERATE GAME.JS
========================= */

function generateGameJS() {

    /* =========================
       INFORMASI DASAR
    ========================== */

    const title =
        document.getElementById("title").value.trim();

    const developer =
        document.getElementById("developer").value.trim();

    const version =
        document.getElementById("version").value.trim();

    const engine =
        document.getElementById("engine").value.trim();

    const gameStatus =
        document.getElementById("status").value.trim();

    const badge =
        document.getElementById("badge").value.trim();

    const contentRating =
        document.getElementById("contentRating").value.trim();

    const released =
        document.getElementById("released").value.trim();

    const updated =
        document.getElementById("updated").value.trim();
    
    const size =
    document.getElementById("size").value.trim();

    const languagesInput =
        document.getElementById("languages").value.trim();

    const folder =
        document.getElementById("folder").value.trim();


    /* =========================
       TAG
    ========================== */

    const genres =
        document.getElementById("genres").value.trim();

    const synopsis =
        document.getElementById("synopsis").value.trim();


    /* =========================
       LINK DOWNLOAD
    ========================== */

    const paidLink =
        document.getElementById("paidLink").value.trim();

    const freeLink =
        document.getElementById("freeLink").value.trim();


    /* =========================
       VALIDASI
    ========================== */

    if (!title) {
        alert("Judul game belum diisi!");
        return;
    }

    if (!developer) {
        alert("Developer belum diisi!");
        return;
    }

    if (!version) {
        alert("Version belum diisi!");
        return;
    }

    if (!engine) {
        alert("Engine belum diisi!");
        return;
    }

    if (!gameStatus) {
        alert("Status game belum diisi!");
        return;
    }

    if (!contentRating) {
        alert("Content Rating belum diisi!");
        return;
    }


    /* =========================
       LANGUAGE
    ========================== */

    const languages = languagesInput
        .split(",")
        .map(language => language.trim())
        .filter(language => language !== "");


    const languageCode = languages
        .map(language => `         ${JSON.stringify(language)},`)
        .join("\n");


    /* =========================
       SCREENSHOT
    ========================== */

    let screenshotsCode;

    if (options.screenshots) {

        screenshotsCode = `    screenshots: [
        "img/preview1.jpg",
        "img/preview2.jpg",
        "img/preview3.jpg",
        "img/preview4.jpg"
    ],`;

    } else {

        screenshotsCode = `    screenshots: [],`;

    }


    /* =========================
       HASIL GAME.JS
    ========================== */

    const gameJS = `window.game = {

    // =========================
    // INFORMASI DASAR
    // =========================

    title: ${JSON.stringify(title)},

    developer: ${JSON.stringify(developer)},

    version: ${JSON.stringify(version)},

    engine: ${JSON.stringify(engine)},
    
    status: ${JSON.stringify(gameStatus)},
    badge: ${JSON.stringify(badge)},

    released: ${JSON.stringify(released)},

    updated: ${JSON.stringify(updated)},

    languages: [
${languageCode}
    ],
    
    showCredit: ${options.showCredit},

    featured: ${options.featured},
    
    folder: ${JSON.stringify(folder)},

    // =========================
    // PLATFORM
    // =========================
    
    contentRating: ${JSON.stringify(contentRating)},

    android: ${options.android},

    windows: ${options.windows},
    
    size: ${JSON.stringify(size)},

    linux: false,

    mac: false,

    // =========================
    // GAMBAR
    // =========================

    cover: "img/cover.jpg",

    banner: "img/banner.jpg",
    
${screenshotsCode}

    // =========================
    // TAG
    // =========================

    genres: ${JSON.stringify(genres)},
    
    synopsis: ${JSON.stringify(synopsis)},


    
    download: {
    paid: ${options.paid},
    free: ${options.free},

    paidLink: ${JSON.stringify(paidLink)},
    freeLink: ${JSON.stringify(freeLink)}
},

};`;


    /* =========================
       DOWNLOAD GAME.JS
    ========================== */

    const blob = new Blob(
        [gameJS],
        { type: "text/javascript" }
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "game.js";

    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);

    URL.revokeObjectURL(url);


    /* =========================
       PESAN BERHASIL
    ========================== */

    alert("✅ game.js berhasil dibuat!");
}