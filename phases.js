const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const phaseToDo = {
    world: "Moon",
    number: 1,
    difficulty: difficulty
}

confirmbutton.addEventListener("click", function() {
    phasesselection.innerHTML = `
    <button id="phase101" class="phase"><strong>PHASE 1 MOON</strong></button>
    `;
    const phase101 = document.getElementById("phase101");
    phase101.addEventListener("click", function() {
    canvas.style.display = "block";
    phase101.style.display = "none";
});
});