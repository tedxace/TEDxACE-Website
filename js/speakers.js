const speakers = [
  {
    name: "Mr. Akshay Bhosale",
    position: "Dancer and Choreographer",
    image: "./img/speakers/speakers-2020/akshay.JPG",
    href: "./speakers/speakers-2020/akshay-bhosale",
  },
  {
    name: "Ms. Haimanti Sen",
    position: "Founder of Junoon- an NGO",
    image: "./img/speakers/speakers-2020/haimanti.jpg",
    href: "./speakers/speakers-2020/haimanti-sen",
  },
  {
    name: "Mr. Mitch Altman",
    position: "Hacker & Inventor",
    image: "./img/speakers/speakers-2020/mitch.jpg",
    href: "./speakers/speakers-2020/mitch-altman",
  },
  {
    name: "Ms. Sonal Jain",
    position: "Menstrual Health Advocate",
    image: "./img/speakers/speakers-2020/sonal.jpeg",
    href: "./speakers/speakers-2020/sonal-jain",
  },
  {
    name: "Mr. Ravindra Desai",
    position: "Director, River Rejuvenation Projects, AOL",
    image: "./img/speakers/speakers-2020/Ravindra.jpeg",
    href: "./speakers/speakers-2020/ravindra-desai",
  },
];

let writer = document.getElementById("speaker-details");

let finalSpeaker = "";

for (i = 0; i < speakers.length; i++) {
  finalSpeaker += `
    <div class="col-lg-4 col-md-6">
            <a href="${speakers[i]['href']}">
              <div class="speaker">
                <img src="${speakers[i]['image']}" alt="${speakers[i]['name']}" class="img-fluid imgbwcol">
                <div class="details">
                  <h3><a>${speakers[i]['name']}</a></h3>
                  <p>${speakers[i]['position']}</p>
                </div>
              </div>
            </a>
          </div>
    `;
}

writer.innerHTML = finalSpeaker;