// 🌼 Bhagavad Gita Website JS Functionalities 🌼

// 📌 Function to Load Shlokas from JSON File
function loadShlokas(jsonFilePath) {
  fetch(jsonFilePath)
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("shlokas");

      data.shlokas.forEach((shloka) => {
        // 🔸 Create Shloka Card
        const card = document.createElement("div");
        card.className = "shloka-card";
        card.id = `shloka-${shloka.number}`; // Unique ID for each shloka

        // 🔸 Add Shloka Content
        card.innerHTML = `
          <h2>Shloka ${shloka.number}</h2>
          <p class="sanskrit">${shloka.sanskrit}</p>
          <p class="hindi">${shloka.hindi_meaning}</p>
          <p class="explanation">${shloka.explanation}</p>
        `;

        // 🔸 Append to Container
        container.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("❌ Error loading JSON file:", error);
    });
}

// 🔍 Function to Search and Highlight a Specific Shloka
function searchShloka() {
  const shlokaNumber = document.getElementById("shlokaNumber").value;
  const shlokaCard = document.getElementById(`shloka-${shlokaNumber}`);

  if (shlokaCard) {
    // ✨ Remove previous highlights
    document.querySelectorAll(".highlighted").forEach((el) => {
      el.classList.remove("highlighted");
    });

    // 🎯 Scroll to the shloka and highlight it
    shlokaCard.scrollIntoView({ behavior: "smooth", block: "center" });
    shlokaCard.classList.add("highlighted");

    // ⏳ Remove highlight after 3 seconds
    setTimeout(() => {
      shlokaCard.classList.remove("highlighted");
    }, 3000);
  } else {
    alert("⚠️ Shloka nahi mila! Kripya sahi number daalein.");
  }
}

// ⬆️ Back to Top Button Functionalities
const backToTopBtn = document.getElementById("backToTopBtn");

// 👀 Show/hide button on scroll
window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

// 🧭 Scroll to top on button click
backToTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener('DOMContentLoaded', function() {
  const dropdown = document.querySelector('.dropdown');
  const dropbtn = document.querySelector('.dropbtn');
  
  // Toggle dropdown on click
  dropbtn.addEventListener('click', function(e) {
      e.stopPropagation();
      dropdown.classList.toggle('active');
  });
  
  // Close dropdown when clicking outside
  document.addEventListener('click', function() {
      dropdown.classList.remove('active');
  });
});