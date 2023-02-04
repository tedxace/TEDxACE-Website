/*  
    Why this code is preferred over the normal copy paste HTML?

    In this all you have to do is write a  template HTML once 
    and then use the same template to create multiple elements.
    
    Debugging is faster as this way instead of verifying multiple 
    lines of HTML code all you need to do is verify the data.

    Format for the array:
    image - The image path should be in consideration of where the linked HTML is.
    name - The name of the team member.
    position - The position of the team member.
    social - The first element is the social media icon and the second is the link.

    Its better to use a CDN to load images as it loads faster than loading from the GitHub server. Cloudinary can be used to store images in CDNs.
*/

const curator = [
  {
    image:
      "https://res.cloudinary.com/tedxace/image/upload/v1675337279/2023/Jeenal_Dhuri_hdjccf.jpg",
    name: "Jeenal D.",
    position: "Curator",
    social: [
      "fa fa-linkedin",
      "https://www.linkedin.com/in/jeenal-dhuri-5ba810206/",
    ],
  },
  {
    image:
      "https://res.cloudinary.com/tedxace/image/upload/v1675337279/2023/Aarnav_Sangekar_qsrf8b.jpg",
    name: "Aarnav S.",
    position: "Curator - Video Production",
    social: [
      "fa fa-linkedin",
      "https://www.linkedin.com/in/aarnav-sangekar-11228b217/",
    ],
  },
  {
    image:
      "https://res.cloudinary.com/tedxace/image/upload/v1675337280/2023/Nishit_Prabhu__msumbo.jpg",
    name: "Nishit P.",
    position: "Curator",
    social: [
      "fa fa-instagram",
      "https://instagram.com/nishitposting01",
    ],
  },
  {
    image:
      "https://res.cloudinary.com/tedxace/image/upload/v1675337278/2023/Soham_Rane_vr7fmc.jpg",
    name: "Soham R.",
    position: "Curator",
    social: [
      "fa fa-instagram",
      "https://instagram.com/fariha.shk",
    ],
  },
  {
    image:
      "https://res.cloudinary.com/tedxace/image/upload/v1675337278/2023/Shivam_ylypox.jpg",
    name: "Shivam W.",
    position: "Curator",
    social: [
      "fa fa-instagram",
      "https://instagram.com/fariha.shk",
    ],
  },

];

const designer = [
  {
    image:
      "https://res.cloudinary.com/tedxace/image/upload/v1675337279/2023/Sumeet_Bhimanpally__sgoxrb.jpg",
    name: "Sumeet B.",
    position: "Designer",
    social: [
      "fa fa-linkedin",
      "https://www.linkedin.com/in/sumeet-bhimanpally-9220a420a/",
    ],
  },
  {
    image:
      "https://res.cloudinary.com/tedxace/image/upload/v1675337280/2023/Agneya_d3azxa.jpg",
    name: "Agneya P.",
    position: "Designer",
    social: ["fa fa-linkedin", "http://www.linkedin.com/in/vedant-dandge-1010"],
  },
  {
    image:
      "https://res.cloudinary.com/tedxace/image/upload/v1675337277/2023/Dheeraj_Rapelli__lqqhdy.jpg",
    name: "Dheeraj R.",
    position: "Designer",
    social: ["fa fa-linkedin", "http://www.linkedin.com/in/vedant-dandge-1010"],
  },
];

const social = [
  {
    image:
      "https://res.cloudinary.com/tedxace/image/upload/v1675337280/2023/Rajas_Pofalkar_cbi6xe.jpg",
    name: "Rajas P.",
    position: "Social Media",
    social: ["fa fa-instagram", "https://www.instagram.com/__rajaass__/"],
  },
  {
    image:
      "https://res.cloudinary.com/tedxace/image/upload/v1675337277/2023/Om_Bhamare_wzvifg.jpg",
    name: "Om B.",
    position: "Social Media - Video Production",
    social: ["fa fa-instagram", "https://www.instagram.com/ombhamare99/"],
  },
  {
    image:
      "https://res.cloudinary.com/tedxace/image/upload/v1675337280/2023/Aarya_Jadhav_hncdks.jpg",
    name: "Aarya J.",
    position: "Social Media",
    social: ["fa fa-instagram", "https://instagram.com/simran_singh1391"],
  },
  {
    image:
      "https://res.cloudinary.com/tedxace/image/upload/v1675337278/2023/Om_Kulkarni_vskrp5.png",
    name: "Om K.",
    position: "Social Media",
    social: ["fa fa-instagram", "https://instagram.com/simran_singh1391"],
  },
];

const market = [
  {
    image:
      "https://res.cloudinary.com/tedxace/image/upload/v1675337277/2023/Om_Bhamare_wzvifg.jpg",
    name: "Om B.",
    position: "Marketing - Video Production",
    social: ["fa fa-instagram", "https://www.instagram.com/ombhamare99/"],
  },
  {
    image:
      "https://res.cloudinary.com/tedxace/image/upload/v1675337279/2023/yash_mathkar_gavyqn.jpg",
    name: "Yash M.",
    position: "Marketing - Video Production",
    social: ["fa fa-instagram", "http://instagram.com/_yash_pawar17"],
  },
  {
    image:
      "https://res.cloudinary.com/tedxace/image/upload/v1675339587/2023/Saakshi_ts9lvg.png",
    name: "Saakshi W.",
    position: "Marketing",
    social: ["fa fa-instagram", "https://instagram.com/aasya2468"],
  },
  {
    image:
      "https://res.cloudinary.com/tedxace/image/upload/v1675337280/2023/Suhaani_Bhansali_rgyii1.jpg",
    name: "Suhaani B.",
    position: "Marketing",
    social: ["fa fa-instagram", "https://instagram.com/amiitbhatt"],
  },
  {
    image:
      "https://res.cloudinary.com/tedxace/image/upload/v1675337277/2023/Jamil_Shaikh_xvaomb.png",
    name: "Jamil S.",
    position: "Marketing",
    social: ["fa fa-instagram", "https://www.instagram.com/khushi__kw009__"],
  },
  {
    image:
      "https://res.cloudinary.com/tedxace/image/upload/v1675337276/2023/Photo_Ahezam_Ahewar_Khan_kxqjld.jpg",
    name: "Ahezam",
    position: "Marketing",
    social: ["fa fa-instagram", "https://www.instagram.com/khushi__kw009__"],
  },
];

const decor = [
  {
    image:
      "https://res.cloudinary.com/tedxace/image/upload/v1675337280/2023/Rajas_Pofalkar_cbi6xe.jpg",
    name: "Rajas P.",
    position: "Social Media",
    social: ["fa fa-instagram", "https://www.instagram.com/__rajaass__/"],
  },
  {
    image:
      "https://res.cloudinary.com/tedxace/image/upload/v1675337277/2023/Samyukta_Vasaikar__ioqdgk.jpg",
    name: "Samyukta V.",
    position: "Decor",
    social: ["fa fa-linkedin", "https://www.linkedin.com/in/samyukta-vasaikar/"],
  },
  {
    image:
      "https://res.cloudinary.com/tedxace/image/upload/v1675337280/2023/Ashwini_Khambe_m0lugq.jpg",
    name: "Ashwini K.",
    position: "Decor",
    social: ["fa fa-globe", "https://anjannair.xyz"],
  },
  {
    image:
      "https://res.cloudinary.com/tedxace/image/upload/v1675337278/2023/Payal_Kheur_wk9jy7.jpg",
    name: "Payal K.",
    position: "Decor",
    social: ["fa fa-globe", "https://anjannair.xyz"],
  },
  {
    image:
      "https://res.cloudinary.com/tedxace/image/upload/v1675337277/2023/Ashvin_Dige_lzjlxe.jpg",
    name: "Ashvin D.",
    position: "Decor",
    social: ["fa fa-globe", "https://anjannair.xyz"],
  },
  {
    image:
      "https://res.cloudinary.com/tedxace/image/upload/v1675337277/2023/Ishika_Sanap__zgazx7.jpg",
    name: "Ishika S.",
    position: "Decor",
    social: ["fa fa-globe", "https://anjannair.xyz"],
  },
  {
    image:
      "https://res.cloudinary.com/tedxace/image/upload/v1675337278/2023/Riya_Shetty_rx2lid.jpg",
    name: "Riya S.",
    position: "Decor",
    social: ["fa fa-globe", "https://anjannair.xyz"],
  },
  {
    image:
      "https://res.cloudinary.com/tedxace/image/upload/v1638080932/2022/khushi.jpg",
    name: "Khushi K.",
    position: "Decor",
    social: ["fa fa-globe", "https://anjannair.xyz"],
  },
  {
    image:
      "https://res.cloudinary.com/tedxace/image/upload/v1675337278/2023/Manasi_Powar_jebjnc.jpg",
    name: "Manasi P.",
    position: "Decor",
    social: ["fa fa-globe", "https://anjannair.xyz"],
  },
  {
    image:
      "https://res.cloudinary.com/tedxace/image/upload/v1675337279/2023/Neha_Yadav_duwygx.png",
    name: "Neha Y.",
    position: "Decor",
    social: ["fa fa-globe", "https://anjannair.xyz"],
  },
];

const tech = [
  {
    image:
      "https://res.cloudinary.com/tedxace/image/upload/v1637913191/2022/gauravkonde.jpg",
    name: "Gaurav K.",
    position: "Web Developer",
    social: ["fa fa-instagram", "https://www.instagram.com/codegrammed/"],
  },
  {
    image:
      "https://res.cloudinary.com/tedxace/image/upload/v1675337277/2023/ANJAN_NAIR_zjrxgr.png",
    name: "Anjan N.",
    position: "Web Developer",
    social: ["fa fa-globe", "https://anjann.dev"],
  },
  {
    image:
      "https://res.cloudinary.com/tedxace/image/upload/v1675337280/2023/Vedant_urky7n.jpg",
    name: "Vedant D.",
    position: "Web Developer",
    social: ["fa fa-globe", "https://anjann.dev"],
  },
  {
    image:
      "https://res.cloudinary.com/tedxace/image/upload/v1675337277/2023/Jamil_Shaikh_xvaomb.png",
    name: "Jamil S.",
    position: "Web Developer",
    social: ["fa fa-globe", "https://anjann.dev"],
  },
  {
    image:
      "https://res.cloudinary.com/tedxace/image/upload/v1675337278/2023/Om_Kulkarni_vskrp5.png",
    name: "Om K.",
    position: "Web Developer",
    social: ["fa fa-globe", "https://anjann.dev"],
  },
  {
    image:
      "https://res.cloudinary.com/tedxace/image/upload/v1675337280/2023/Suhaani_Bhansali_rgyii1.jpg",
    name: "Suhaani B.",
    position: "Web Developer",
    social: ["fa fa-globe", "https://anjann.dev"],
  },
];

var wrapper = document.getElementById("teamWrite");

var finalTeam = "";

for (var i = 0; i < curator.length; i++) {
  finalTeam += `
  <div class="col-lg-3 col-6 p-3">
  <div class="team">
    <div class="team-img">
      <img src="${curator[i].image}" alt="${curator[i].name}">
    </div>
    <div class="team-content">
      <h2>${curator[i].name}</h2>
      <h3>${curator[i].position}</h3>
      <a href="${curator[i].social[1]}" class="${curator[i].social[0]}"></a>
    </div>
  </div>
  </div>`;
}

wrapper.innerHTML = finalTeam;

function writeCurators() {
  var finalTeam = "";

  for (var i = 0; i < curator.length; i++) {
    finalTeam += `
    <div class="col-lg-3 col-6 p-3">
    <div class="team">
      <div class="team-img">
        <img src="${curator[i].image}" alt="${curator[i].name}">
      </div>
      <div class="team-content">
        <h2>${curator[i].name}</h2>
        <h3>${curator[i].position}</h3>
        <a href="${curator[i].social[1]}" class="${curator[i].social[0]}"></a>
      </div>
    </div>
    </div>`;
  }

  wrapper.innerHTML = finalTeam;
}

function writeSocial() {
  var finalTeam = "";

  for (var i = 0; i < social.length; i++) {
    finalTeam += `
    <div class="col-lg-3 col-6 p-3">
    <div class="team">
      <div class="team-img">
        <img src="${social[i].image}" alt="${social[i].name}">
      </div>
      <div class="team-content">
        <h2>${social[i].name}</h2>
        <h3>${social[i].position}</h3>
        <a href="${social[i].social[1]}" class="${social[i].social[0]}"></a>
      </div>
    </div>
    </div>`;
  }

  wrapper.innerHTML = finalTeam;
}

function writeDesign() {
  var finalTeam = "";

  for (var i = 0; i < designer.length; i++) {
    finalTeam += `
    <div class="col-lg-3 col-6 p-3">
    <div class="team">
      <div class="team-img">
        <img src="${designer[i].image}" alt="${designer[i].name}">
      </div>
      <div class="team-content">
        <h2>${designer[i].name}</h2>
        <h3>${designer[i].position}</h3>
        <a href="${designer[i].social[1]}" class="${designer[i].social[0]}"></a>
      </div>
    </div>
    </div>`;
  }

  wrapper.innerHTML = finalTeam;
}

function writeMarket() {
  var finalTeam = "";

  for (var i = 0; i < market.length; i++) {
    finalTeam += `
    <div class="col-lg-3 col-6 p-3">
    <div class="team">
      <div class="team-img">
        <img src="${market[i].image}" alt="${market[i].name}">
      </div>
      <div class="team-content">
        <h2>${market[i].name}</h2>
        <h3>${market[i].position}</h3>
        <a href="${market[i].social[1]}" class="${market[i].social[0]}"></a>
      </div>
    </div>
    </div>`;
  }

  wrapper.innerHTML = finalTeam;
}

function writeDecor() {
  var finalTeam = "";

  for (var i = 0; i < decor.length; i++) {
    finalTeam += `
    <div class="col-lg-3 col-6 p-3">
    <div class="team">
      <div class="team-img">
        <img src="${decor[i].image}" alt="${decor[i].name}">
      </div>
      <div class="team-content">
        <h2>${decor[i].name}</h2>
        <h3>${decor[i].position}</h3>
        <a href="${decor[i].social[1]}" class="${decor[i].social[0]}"></a>
      </div>
    </div>
    </div>`;
  }

  wrapper.innerHTML = finalTeam;
}

function writeTech() {
  var finalTeam = "";

  for (var i = 0; i < tech.length; i++) {
    finalTeam += `
    <div class="col-lg-3 col-6 p-3">
    <div class="team">
      <div class="team-img">
        <img src="${tech[i].image}" alt="${tech[i].name}">
      </div>
      <div class="team-content">
        <h2>${tech[i].name}</h2>
        <h3>${tech[i].position}</h3>
        <a href="${tech[i].social[1]}" class="${tech[i].social[0]}"></a>
      </div>
    </div>
    </div>`;
  }

  wrapper.innerHTML = finalTeam;
}
