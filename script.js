function judge() {
  const price = Number(document.getElementById("price").value);
  const usage = Number(document.getElementById("usage").value);
  const replace = document.getElementById("replace").checked;

  let result = "";

  if (!price || !usage) {
    result = "값을 모두 입력하세요";
  } else if (usage === 0) {
    result = "사지 마라";
  } else if (price / usage > 10000 && replace) {
    result = "중고로만 사라";
  } else {
    result = "지금 사면 합리적";
  }

  document.getElementById("result").innerText = result;
}