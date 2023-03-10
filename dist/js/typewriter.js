/* Typewriter effect */

class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 8);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 250; /* Was 300. Increased speed of type and delete by amending to 250 */

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init On DOM Load
document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}
// ============================================
/* Set footer copyright year to current year */

const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

/* Time Zones */

// London
const getLondonTime = () => {
  document.querySelector(".london-time").innerHTML = new Date().toLocaleString(
    "en-GB",
    {
      timeZone: "Europe/London",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );
};
getLondonTime();
setInterval(getLondonTime, 1000);

//Rome
const getRomeTime = () => {
  document.querySelector(".rome-time").innerHTML = new Date().toLocaleString(
    "en-GB",
    {
      timeZone: "Europe/Rome",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );
};
getRomeTime();
setInterval(getRomeTime, 1000);

//Dubai
const getDubaiTime = () => {
  document.querySelector(".dubai-time").innerHTML = new Date().toLocaleString(
    "en-GB",
    {
      timeZone: "Asia/Dubai",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );
};
getDubaiTime();
setInterval(getDubaiTime, 1000);
