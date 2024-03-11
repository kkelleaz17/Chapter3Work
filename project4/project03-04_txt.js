

let reviewers = ["WillHa85", "GoldFry26", "Mittens41", "Tompkins8"];
let reviewType = ["P", "N", "", ""]
let stars = [5, 2, 1, 4];
let reviewDates = ["11/18/2024", "11/17/2024", "11/15/2024", "11/10/2024"];
let reviews = [
   "I've owned all of the Dance Off games from the beginning. I have lost 6 pounds since I started playing.",
   "A so-so release of this well-established game. Where this release fails is in the choreography. Many of the moves follow predictable patterns. I hope the next release improves the choreography .",
   "The installation was buggy and kept crashing my gaming console. I spent several hours on tech support with no solution to my problem. I finally returned it and got my money back. I wish I could give it a zero star rating.",
   "The latest version of Dance Off improves upon the 8th Edition only slightly; still is one of the best dance-style games on the market.",
];
let reviewTitles = ["My Favorite Workout Game", "Poor Choreography", "Buggy with Poor Tech Support", "Nice Improvement"];


// Generate star images based on the rating
function starImages(rating) {
      let imageText = "";
      for (let i = 1; i <= rating; i++) {
         imageText += "<img src='star.png' alt=''>";
      }
      return imageText;
   }
   
   // Create a string to append to innerHtml, its bad but it works
   for (let i = 0; i < reviewers.length; i++) {
      let reviewCode = "";
      if (reviewType[i] === "P") {
         reviewCode = "<table class='prime'>";
      } else if (reviewType[i] === "N") {
         reviewCode = "<table class='new'>";
      } else {
         reviewCode = "<table>";
      }
   
      // Adding HTML code to reviewCode variable
      reviewCode = 
      `
         <caption>${reviewTitles[i]}</caption>
         <tr><th>By</th><td>${reviewers[i]}</td></tr>"
         <tr><th>Review Date</th><td>${reviewDates[i]}</td></tr>
         <tr><td colspan='2'>${reviews[i]}</td></tr>;
         </table>
      `
   
      // Inserting reviewCode into the first <article> tag in the document
      document.getElementsByTagName("article")[0].insertAdjacentHTML('beforeend', reviewCode);
   }
