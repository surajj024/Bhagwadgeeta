
// Array of shloks with their arth
const shloks = [
  {
    shlok: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।<br>मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥",
    arth: "अर्थ: केवल कर्म करने में ही तुम्हारा अधिकार है, फलों में नहीं। इसलिए कर्मों के फल का कारण मत बनो, और न ही कर्म न करने में आसक्त हो।"
  },
  // Add more shloks here...
  {
    shlok: "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात् ।<br>स्वधर्मे निधनं श्रेयः परधर्मो भयावहः ॥",
    arth: "अर्थ: अपना धर्म (कर्म) गुणरहित होने पर भी दूसरे के सुव्यवस्थित धर्म से श्रेष्ठ है। अपने धर्म में मर जाना भी कल्याणकारक है, दूसरे का धर्म भय को देने वाला है।"
  },
  {
shlok: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय ।<br>सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते ॥",
arth: "अर्थ: हे धनंजय! आसक्ति को त्यागकर योग में स्थित होकर कर्म करो। सिद्धि और असिद्धि में समान बुद्धि वाला होना ही योग कहलाता है।"
},
{
shlok: "विहाय कामान्यः सर्वान्पुमांश्चरति निःस्पृहः ।<br>निर्ममो निरहंकारः स शान्तिमधिगच्छति ॥",
arth: "अर्थ: जो मनुष्य सभी कामनाओं को त्यागकर, बिना इच्छा के, ममता और अहंकार रहित होकर चलता है, वही शांति को प्राप्त होता है।"
},
// Add 12-15 more shloks here following the same format
{
shlok: "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात् ।<br>स्वधर्मे निधनं श्रेयः परधर्मो भयावहः ॥",
arth: "अर्थ: अपना धर्म (कर्म) गुणरहित होने पर भी दूसरे के सुव्यवस्थित धर्म से श्रेष्ठ है। अपने धर्म में मर जाना भी कल्याणकारक है, दूसरे का धर्म भय को देने वाला है।"
}
];

// Function to display random shlok
function displayRandomShlok() {
  const randomIndex = Math.floor(Math.random() * shloks.length);
  const randomShlok = shloks[randomIndex];
  
  document.querySelector('.shlok').innerHTML = randomShlok.shlok;
  document.querySelector('.arth').textContent = randomShlok.arth;
  document.querySelector('.arth').style.display = 'none';
  document.querySelector('.show-arth-btn').textContent = 'अर्थ देखें';
}

// Toggle arth visibility
function toggleArth() {
  const arthElement = document.querySelector('.arth');
  const button = document.querySelector('.show-arth-btn');
  
  if (arthElement.style.display === 'none') {
    arthElement.style.display = 'block';
    button.textContent = 'अर्थ छिपाएँ';
  } else {
    arthElement.style.display = 'none';
    button.textContent = 'अर्थ देखें';
  }
}

// Initialize and set interval
document.addEventListener('DOMContentLoaded', function() {
  displayRandomShlok();
  setInterval(displayRandomShlok, 10000); // Change every 15 seconds
  
  // Add click event to button only
  document.querySelector('.show-arth-btn').addEventListener('click', toggleArth);
});
