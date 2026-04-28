const zodiac = [
  "牡羊座","牡牛座","双子座","蟹座","獅子座","乙女座",
  "天秤座","蠍座","射手座","山羊座","水瓶座","魚座"
];

const planets = [
  "太陽","月","水星","金星","火星","木星","土星",
  "天王星" , "海王星" , "冥王星" , "ドラゴンヘッド（☊）" , "ドラゴンテイル（☋）"
];

function copyResult() {
  const text = document.getElementById("result").textContent;
  navigator.clipboard.writeText(text).then(() => {
    alert("コピーしたよ");
  });
}

function rollAstroDice() {
  const sign = zodiac[Math.floor(Math.random() * zodiac.length)];
  const house = Math.floor(Math.random() * 12) + 1;
  const planet = planets[Math.floor(Math.random() * planets.length)];

  return { planet, sign, house };
}

function drawAstro() {
  const button = document.getElementById("drawBtn");
  button.disabled = true;

  const result = rollAstroDice();

  const output =
    `${result.planet} × ${result.sign} × ${result.house}ハウス`;

  document.getElementById("result").textContent = output;

  setTimeout(() => {
    button.disabled = false;
  }, 2500);
}
