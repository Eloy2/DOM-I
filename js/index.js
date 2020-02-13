const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//ADDED CHILD TO FRONT AND BACK
let nav = document.querySelector("nav");

//declaration of appended child
let bnav = document.createElement("a"); 
bnav.textContent = "Back"
bnav.href = "#";
nav.appendChild(bnav);

let fnav = document.createElement("a");
fnav.textContent = "Front";
fnav.href = "#";
nav.prepend(fnav);


//NAV
let link = document.querySelectorAll("a");

link[1].textContent = siteContent["nav"]["nav-item-1"];
link[2].textContent = siteContent["nav"]["nav-item-2"];
link[3].textContent = siteContent["nav"]["nav-item-3"];
link[4].textContent = siteContent["nav"]["nav-item-4"];
link[5].textContent = siteContent["nav"]["nav-item-5"];
link[6].textContent = siteContent["nav"]["nav-item-6"];

//LOOP
// link.forEach((e, i) =>{
//   i = 1;
//   return function() {
//     if (i < 7) {
//       e.textContent = siteContent["nav"][`nav-item-${i+1}`];
//     }
//   }
// });


//NAV COLOR CHANGED TO GREEN
link.forEach(i => {
  i.style.color = "green";
} );


//HEADER TEXT H1
let ctaText = document.querySelector("h1");
ctaText.innerHTML = "DOM<br> Is<br> Awesome";
//ctaText.textContent = siteContent["cta"]["h1"];


//HEADER IMG
let ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent["cta"]["img-src"];


//HEADER BUTTON
let ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent["cta"]["button"];


//ALL H4 TAGS
let h4s = document.querySelectorAll("h4");
h4s[0].textContent = siteContent["main-content"]["features-h4"];
h4s[1].textContent = siteContent["main-content"]["about-h4"];
h4s[2].textContent = siteContent["main-content"]["services-h4"];
h4s[3].textContent = siteContent["main-content"]["product-h4"];
h4s[4].textContent = siteContent["main-content"]["vision-h4"];
h4s[5].textContent = siteContent["contact"]["contact-h4"];


//ALL P TAGS IN TEXT-CONTENT
let pText = document.querySelectorAll(".text-content p");
pText[0].textContent = siteContent["main-content"]["features-content"];
pText[1].textContent = siteContent["main-content"]["about-content"];
pText[2].textContent = siteContent["main-content"]["services-content"];
pText[3].textContent = siteContent["main-content"]["product-content"];
pText[4].textContent = siteContent["main-content"]["vision-content"];


//MIDDLE IMG
let midImg = document.querySelector("#middle-img");
midImg.src = siteContent["main-content"]["middle-img-src"];


//CONTACT SECTION
//h4 declared on line 69
let pContact = document.querySelectorAll(".contact p");
pContact[0].innerHTML = "123 Way 456 Street<br>Somewhere, USA";
//pContact[0].textContent = siteContent["contact"]["address"];
pContact[1].textContent = siteContent["contact"]["phone"];
pContact[2].textContent = siteContent["contact"]["email"];


//FOOTER
let foot = document.querySelector("footer p");
foot.textContent = siteContent["footer"]["copyright"];
