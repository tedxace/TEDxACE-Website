const speakers = [
    {
        name: "Mr. Vedant Harlalka",
        position: "Young Innovator and Change Maker",
        image: "./img/speakers/speakers-2021/vedant.jpeg",
        href: "./speakers/speakers-2021/vedant-harlalka",
    },
    {
        name: "Mr. Sadakat Khan",
        position: "The Harmonium Ustad",
        image: "./img/speakers/speakers-2021/sadakat.jpg",
        href: "./speakers/speakers-2021/sadakat-khan",
    },
    {
        name: "Ms. Sumedha Chopra",
        position: "Former Indian Air Force Officer",
        image: "./img/speakers/speakers-2021/sumedha.jpeg",
        href: "./speakers/speakers-2021/sumedha-chopra",
    },
    {
        name: "Mr. Mukesh Pandey",
        position: "Entrepreneur and Visionary Educational Leader",
        image: "./img/speakers/speakers-2021/mukesh.jpg",
        href: "./speakers/speakers-2021/mukesh-pandey",
    },
    {
        name: "Mr. Subhajit Mukherjee",
        position: "Founder of Mission Green Mumbai",
        image: "./img/speakers/speakers-2021/subhajit.jpg",
        href: "./speakers/speakers-2021/subhajit-mukherjee",
    },
];

let writer = document.getElementById("speaker-details");

let finalSpeaker = "";

for (i = 0; i < speakers.length; i++) {
    finalSpeaker += `
      <div class="col-lg-4 col-md-6">
              <a href="${speakers[i]["href"]}">
                <div class="speaker">
                  <img src="${speakers[i]["image"]}" alt="${speakers[i]["name"]}" class="img-fluid imgbwcol">
                  <div class="details">
                    <h3><a>${speakers[i]["name"]}</a></h3>
                    <p>${speakers[i]["position"]}</p>
                  </div>
                </div>
              </a>
            </div>
      `;
}

writer.innerHTML = finalSpeaker;
