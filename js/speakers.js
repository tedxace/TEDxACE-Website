const speakers = [
  {
    name: "Mr. Aayu Kharbanda",
    position: "Product Leader",
    image:
      "./img/speakers/speakers-2023/aayu.jpg",
    href: "./speakers/speakers-2023/aayu-kharbanda"
  },
  {
    name: "Mrs. Sajitha Nair",
    position: "Environmentalist",
    image:
      "./img/speakers/speakers-2023/sajitha.jpg",
    href: "./speakers/speakers-2023/sajitha-nair"
  },
  {
    name: "Mr. Shibin Harinadh",
    position: "Hypontist & Mentalist",
    image:
      "./img/speakers/speakers-2023/shibin.jpg",
    href: "./speakers/speakers-2023/shibin-harinadh"
  },
  {
    name: "Mr. Gaurav Verma",
    position: "Entrepreneur",
    image:
      "./img/speakers/speakers-2023/gaurav.jpg",
    href: "./speakers/speakers-2023/gaurav-verma"
  },
  {
    name: "Ms. Gauri Karkhanis",
    position: "Clinical Psychologist",
    image:
      "./img/speakers/speakers-2023/gauri.jpg",
    href: "./speakers/speakers-2023/gauri-k"
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
