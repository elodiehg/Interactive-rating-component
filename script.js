let score_1 = document.getElementById("score_1");
let score_2 = document.getElementById("score_2");
let score_3 = document.getElementById("score_3");
let score_4 = document.getElementById("score_4");
let score_5 = document.getElementById("score_5");

let score_1_value = document.getElementById("score_1").value;
let score_2_value = document.getElementById("score_2").value;
let score_3_value = document.getElementById("score_3").value;
let score_4_value = document.getElementById("score_4").value;
let score_5_value = document.getElementById("score_5").value;

let btn = document.getElementById("boutton");
let evaluation = document.querySelector(".container");
let thankyou = document.querySelector(".container_thanks");
let texte = document.querySelector(".paragraph_thanks");

function display_block() {
  evaluation.style.display = "none";
  thankyou.style.display = "block";
}

score_1.addEventListener("click", function () {
  btn.addEventListener("click", function () {
    display_block();
    texte.innerHTML = `
    <div class="final_note">
    You selected ${score_1_value} out of 5
    </div>
    `;
  });
});

score_2.addEventListener("click", function () {
  btn.addEventListener("click", function () {
    display_block();
    texte.innerHTML = `
    <div class="final_note">
    You selected ${score_1_value} out of 5
    </div>
    `;
  });
});

score_2.addEventListener("click", function () {
  btn.addEventListener("click", function () {
    display_block();
    texte.innerHTML = `
    <div class="final_note">
    You selected ${score_2_value} out of 5
    </div>
    `;
  });
});

score_3.addEventListener("click", function () {
  btn.addEventListener("click", function () {
    display_block();
    texte.innerHTML = `
    <div class="final_note">
    You selected ${score_3_value} out of 5
    </div>
    `;
  });
});

score_4.addEventListener("click", function () {
  btn.addEventListener("click", function () {
    display_block();
    texte.innerHTML = `
    <div class="final_note">
    You selected ${score_4_value} out of 5
    </div>
    `;
  });
});

score_5.addEventListener("click", function () {
  btn.addEventListener("click", function () {
    display_block();
    texte.innerHTML = `
    <div class="final_note">
    You selected ${score_5_value} out of 5
    </div>
    `;
  });
});
