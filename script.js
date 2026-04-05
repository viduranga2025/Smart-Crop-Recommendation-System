function recommendCrop() {
    const ph = parseFloat(document.getElementById('phLevel').value);
    const region = document.getElementById('region').value;
    const resultBox = document.getElementById('resultBox');
    const recText = document.getElementById('recommendationText');
    const advice = document.getElementById('adviceText');

    if (isNaN(ph) || ph < 0 || ph > 14) {
        alert("Karunakara hariyata pH gaana (0-14) danna macho!");
        return;
    }

    let crop = "";
    let tip = "";

    // Recommendation Logic for Sri Lanka
    if (region === "up-country") {
        if (ph < 5.5) {
            crop = "☕ Tea (The) / 🍓 Strawberry";
            tip = "Pas wala amila gathiya (Acidity) wadiyi. The wagawata supiri.";
        } else {
            crop = "🥦 Cabbage / 🥕 Carrot / 🥔 Potato";
            tip = "Kanda rata elawalu walata hoda pH mattamak.";
        }
    } else if (region === "dry-zone") {
        if (ph >= 6.0 && ph <= 7.5) {
            crop = "🌾 Paddy (Wee) / 🌽 Maize (Bada-iringu)";
            tip = "Wayamba saha uthuru palath walata supirima aswanna.";
        } else {
            crop = "🍉 Watermelon / 🧅 Onion";
            tip = "Salu pas (Sandy soil) thiyena idamata hodayi.";
        }
    } else { // Low Country
        if (ph < 6.5) {
            crop = "🥥 Coconut / 🌳 Rubber";
            tip = "Pahatha rata theth kalapayata supirima boga.";
        } else {
            crop = "🍌 Banana / 🍍 Pineapple";
            tip = "Wathura randeema adu idame hitawanna.";
        }
    }

    // Display Result
    recText.innerText = crop;
    advice.innerText = tip;
    resultBox.style.display = "block";
}