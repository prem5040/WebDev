const input = document.getElementById("words");
const container = document.querySelector(".container");

const generateword = (n) => {
  let text = "";
  const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < n; i++) {
    const random = (Math.random() * (letter.length - 1)).toFixed(0);
    text = text + letter[random];
  }
  return text;
};

let words;

const generate = () => {
  words = Number(input.value);
  const para = document.createElement("p");

  let data = "";
  for (let i = 0; i < words; ++i) {
    const randomno = (Math.random() * 10).toFixed(0);
    data += generateword(randomno);
    data += " ";
  }
  console.log(data);

  para.setAttribute("class", "para");
  para.innerText = data;

  para.setAttribute("class", "para");
  container.append(para);
};
