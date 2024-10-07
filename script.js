const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");
/* Seleciona elementos HTML que serão preenchidos ou manipulados dinamicamente */

const myFavoriteFutebolTeam = {
  team: "Argentina",
  sport: "Futebol",
  year: 1986,
  isWorldCupWinner: true,
  headCoach: {
    coachName: "Carlos Bilardo",
    matches: 7,
  },
  players: [
    {
      name: "Sergio Almirón",
      Posição: "Atacante",
      Número: 1,
      isCaptain: false,
      Apelido: null,
    },
    {
      name: "Sergio Batista",
      Posição: "Meio-campo",
      Número: 2,
      isCaptain: false,
      Apelido: null,
    },
    {
      name: "Ricardo Bochini",
      Posição: "Meio-campo",
      Número: 3,
      isCaptain: false,
      Apelido: "El Bocha",
    },
    /* ... Mais jogadores listados aqui ... */
  ],
};
/* Objeto que armazena as informações do time e dos jogadores */

Object.freeze(myFavoriteFutebolTeam);
/* Impede que o objeto seja modificado */

const { sport, team, year, players } = myFavoriteFutebolTeam;
const { coachName } = myFavoriteFutebolTeam.headCoach;
/* Desestruturação do objeto para acessar valores específicos */

typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;
/* Preenche os campos de estatísticas do time no HTML */

const setPlayerCards = (arr = players) => {
  playerCards.innerHTML += arr
    .map(
      ({ name, Posição, Número, isCaptain, Apelido }) =>
        `
        <div class="player-card">
          <h2>${name} ${isCaptain ? "(Captain)" : ""}</h2>
          <p>Posição: ${Posição}</p>
          <p>Número: ${Número}</p>
          <p>Apelido: ${Apelido !== null ? Apelido : "N/A"}</p>
        </div>
      `
    )
    .join("");
};
/* Função que cria dinamicamente as cartas de jogador com base em um array de jogadores */

playersDropdownList.addEventListener("change", (e) => {
  playerCards.innerHTML = "";
  switch (e.target.value) {
    case "Apelido":
      setPlayerCards(players.filter((player) => player.Apelido !== null));
      break;
    case "Atacante":
      setPlayerCards(players.filter((player) => player.Posição === "Atacante"));
      break;
    /* ... Outras opções de filtro ... */
    default:
      setPlayerCards();
      break;
  }
});
/* Adiciona um ouvinte de evento para o menu suspenso de filtro de jogadores, atualizando as cartas com base no critério selecionado */
