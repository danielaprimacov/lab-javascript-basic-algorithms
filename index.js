// Iteration 1: Names and Input

//creating a variable with the driver's name
let hacker1 = "Daniela";
//printing the driver's name
console.log(`The driver's name is ${hacker1}`);
//creating a variable with the navigator's name
let hacker2 = "Samuel";
//printing the navigator's name
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

// depending on the name's length
// creating 2 variables that are the name's length
let hacker1Length = hacker1.length;
let hacker2Length = hacker2.length;
// writing the conditional
if (hacker1Length > hacker2Length) {
  console.log(
    `The driver has the longest name, it has ${hacker1Length} characters.`
  );
} else if (hacker2Length > hacker1Length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker1Length} characters.`
  );
} else {
  console.log(
    "Wow, you both have equally long names, ${hacker1Length} characters!"
  );
}

// Iteration 3: Loops

//printing the characters of the driver's name, separated by space
let nameWithSpace = "";
for (let i = 0; i < hacker1Length; i++) {
  nameWithSpace += hacker1[i].toUpperCase();
  if (i < hacker1Length - 1) {
    nameWithSpace += " ";
  }
}
console.log(nameWithSpace);

//printing all the characters of the navigato's name in reverse order
let reversedName = "";
for (let i = hacker2Length - 1; i >= 0; i--) {
  reversedName += hacker2[i];
}
console.log(reversedName);

//depending on the lexicographic order of the strings
for (let i = 0; i < Math.min(hacker1.length, hacker2.length); i++) {
  if (hacker1[i] < hacker2[i]) {
    console.log("The driver's name goes first.");
    break;
  } else if (hacker1[i] > hacker2[i]) {
    console.log("Yo, the navigator goes first, definitely");
    break;
  }
  // when the strings are the same
  if (hacker1Length < hacker2Length) {
    console.log("The driver's name goes first.");
    break;
  } else if (hacker1Length > hacker2Length) {
    console.log("Yo, the navigator goes first, definitely");
    break;
  } else {
    console.log("What?! You both the same name?");
    break;
  }
}

// Bonus 1
// generate 3 paragraphs of the lorem ipsum and store the text in a variable
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat tincidunt ex at pharetra. Vivamus ut bibendum lectus. Sed tristique rutrum accumsan. Aenean lobortis finibus urna eu lobortis. Pellentesque sollicitudin tortor sit amet condimentum auctor. Praesent eu libero leo. Proin pretium nulla at mollis iaculis. Nullam sollicitudin, mauris eu varius ornare, quam massa tincidunt tellus, id facilisis mi ex quis ex. Aliquam sit amet dictum felis. Nullam lectus mi, suscipit eu metus a, porta molestie purus. Integer pulvinar pharetra justo vitae tincidunt. Nunc at nisl consectetur, ultricies sapien et, maximus lectus. In erat sapien, vestibulum et gravida fermentum, pulvinar sit amet libero. Quisque ut sollicitudin risus. Pellentesque luctus dolor sit amet sollicitudin vestibulum. Maecenas ultricies, enim vitae commodo placerat, nisi turpis congue ipsum, et tincidunt ante arcu ut ipsum.

Sed pharetra lacus ut eros luctus vehicula. Fusce hendrerit nunc dolor, ullamcorper rutrum dolor venenatis nec. Sed interdum pharetra tortor sed dignissim. Nullam eros nisl, commodo in mi sed, auctor rhoncus turpis. Nunc maximus, augue nec congue malesuada, elit tortor fermentum sem, at eleifend turpis mauris ac elit. Maecenas ultricies quam quis nisl congue suscipit. Aliquam vestibulum suscipit erat nec ultrices. Vestibulum laoreet vehicula mauris, eu aliquet velit condimentum vel.

Morbi semper tellus in luctus sodales.Morbi eu sem eu justo ornare auctor.Aenean maximus nunc in mollis laoreet.Proin eu dui euismod, scelerisque mi ut, convallis sapien.Phasellus a interdum sapien, at imperdiet velit.Vestibulum vel ornare mauris.Sed bibendum magna at felis tincidunt, convallis hendrerit lorem sagittis.Proin ac dapibus nisi.Phasellus rutrum blandit mattis.Ut dignissim diam sit amet velit auctor elementum.Sed viverra ultrices neque, id blandit augue venenatis et.`;

// count the number of words in the string
let countWords = 0;
// split the string at any occurrence of one or more consecutive whitespace
let words = longText.split(/\s+/);
for (let i = 0; i < words.length; i++) {
  if (words[i].trim() != "") countWords++;
}

console.log(countWords);

// count the number of times the Latin word 'et' appears
let etAppearence = 0;
for (let i = 0; i < words.length; i++) {
  // removing the punctuation of the words
  let wordsWithoutPunctuation = words[i].replace(/[^\w\s]/g, "").toLowerCase();
  if (wordsWithoutPunctuation == "et") {
    etAppearence++;
  }
}
console.log(etAppearence);

// BONUS 2
//creating a new variable
let phraseToCheck = "A man, a plan, a canal, Panama!";
// Lowercase the phrase and remove unwanted characters from it
let cleanedPhrase = phraseToCheck.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
// calculating the phrase length
let phraseLength = cleanedPhrase.length;

//As long as the characters from each part match
// Both parth are strictly equal
let check = true;
for (let i = 0; i < phraseLength / 2; i++) {
  // if characters dont match anymore
  if (cleanedPhrase[i] !== cleanedPhrase[phraseLength - 1 - i]) {
    check = false;
  }
}

if (check) {
  console.log("It's Palindrome.");
} else if (!check) {
  console.log("It's not Palindrome.");
}
