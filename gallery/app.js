const total = 108;
const gallery = document.querySelector("#gallery");
const template = document.querySelector("#card-template");
const columns = document.querySelector("#columns");

for (let index = 1; index <= total; index += 1) {
  const file = String(index).padStart(3, "0");
  const href = `../emotes/${file}.png`;
  const card = template.content.cloneNode(true);
  const imageLink = card.querySelector(".image-link");
  const image = card.querySelector("img");
  const save = card.querySelector(".save");

  imageLink.href = href;
  imageLink.download = `${file}.png`;
  image.src = href;
  image.alt = `杜宾犬透明表情 ${file}`;
  card.querySelector(".number").textContent = `#${file}`;
  save.href = href;
  save.download = `${file}.png`;
  gallery.appendChild(card);
}

columns.addEventListener("change", () => {
  gallery.style.setProperty("--columns", columns.value);
});

