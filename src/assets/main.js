const url = "https://dragonball-api.com/api/characters/";

const content = document.getElementById("content");

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

async function getCharacters() {
  const response = await fetch(url, options);
  const data = await response.json();
  return data.items;
}

(async () => {
  try {
    const characters = await getCharacters();
    let view = characters.map((character) => 
       `
      <div class="character-card">
        <div class="character-img">
            <img src="${character.image}" alt="${character.name}" />
        </div>
        <div class="character-info">
            <h3>${character.name}</h3>
            <p>${character.ki}</p>
            <p>${character.race}</p>
        </div>
      </div>
      `
    ).join("");
    content.innerHTML = view;
  } catch (error) {
    console.error(error);
  }
})();
