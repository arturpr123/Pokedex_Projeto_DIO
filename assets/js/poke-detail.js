const pokemonDetail = document.getElementById("pokemonDetail");
const loadDetail = document.getElementById("loadDetail");
const loadMore = document.getElementById("loadMore");

const maxRecords1 = 1100;
const limit1 = 50;
let offset1 = 0;

function convertPokemonDetail(pokemon) {
  return `<section id="pokemonDetail" class="contentDetail ${pokemon.type}">
                <div class="headerDetail">
                    <div id="pokemonName">
                        <a href="index.html">
                            <img id="backArrow"src="right-arrow.png" alt="backArrow">
                        </a>
                        <span class="nameDetail">${pokemon.name}</span>
                    </div>

                    <p>
                        <span class="numberDetail">#${pokemon.id}</span>
                    </p>
                </div>

                <div class="pokemonSprite">

                    <span class="arrow">
                        
                    </span>

                    <img src="${pokemon.img}" alt="${pokemon.name}">

                    <span class="arrow">
                        
                    </span>                

                </div>
                <div class="pokemonStats ${pokemon.type}">
                    <table class="typeColor types">
                    ${pokemon.types
                      .map(
                        (type) => `
                      <tr>                        
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                                              
                        <td class="type ${type}">${type}</td>
                        
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>`
                      )
                      .join("")}                        
                    </table>
                    <p class="info types">Base Status</p>
                    <table class="stats typeColor types">
                        <tr class="typeColor types">
                            <th class="typeColor types">HP</th>
                            <td>${pokemon.stats[0]}</td>
                            <td class="progressBar">
                              <div class="${pokemon.type}" style="width: ${pokemon.stats[0]}px"></div>
                            </td>
                        </tr>
                        <tr class="typeColor types">
                            <th class="typeColor types">ATK</th>
                            <td>${pokemon.stats[1]}</td>
                            <td class="progressBar">
                              <div class="${pokemon.type} "style="width: ${pokemon.stats[1]}px"></div>
                            </td>
                        </tr>
                        <tr class="typeColor types">
                            <th>DEF</th>
                            <td>${pokemon.stats[2]}</td>
                            <td class="progressBar">
                              <div class="${pokemon.type}" style="width: ${pokemon.stats[2]}px"></div>
                            </td>
                        </tr>
                        <tr class="typeColor types">
                            <th>SP-ATK</th>
                            <td>${pokemon.stats[3]}</td>
                            <td class="progressBar">
                              <div class="${pokemon.type}" style="width: ${pokemon.stats[3]}px"></div>
                            </td>
                        </tr>
                        <tr class="typeColor types">
                            <th>SP-DEF</th>
                            <td>${pokemon.stats[4]}</td>
                            <td class="progressBar">
                            <div class="${pokemon.type} "style="width: ${pokemon.stats[4]}px;"></div>
                            </td>
                        </tr>
                        <tr>
                            <th>SPD</th>
                            <td>${pokemon.stats[5]}</td>
                            <td class="progressBar">
                              <div class="${pokemon.type}" style="width: ${pokemon.stats[5]}px"></div>
                            </td>
                        </tr>
                    </table>
                </div>

                            

            </section>`;
}

function loadPokemonDetail(id) {
  pokeApi.getPokemons(id - 1, 1).then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonDetail).join("");
    pokemonDetail.innerHTML += newHtml;
  });

  pokemonList.style.display = "none";
  loadMoreButton.style.display = "none";
}
loadPokemonDetail();
pokemonDetail.addEventListener("click", () => {
  loadPokemonDetail();
});

loadMore.addEventListener("click", () => {
  offset1 += limit1;
  const qtdRecordsWithNexPage = offset1 + limit1;

  if (qtdRecordsWithNexPage >= maxRecords1) {
    const newLimit = maxRecords1 - offset1;
    loadPokemonDetail(offset1, newLimit);
  } else {
    loadPokemonDetail(offset1, limit1);
  }
});
