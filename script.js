// Seleciona o elemento do DOM com o ID 'team' onde será exibido o nome do time
const teamName = document.getElementById("team");

// Seleciona o elemento do DOM com o ID 'sport' onde será exibido o tipo de esporte
const typeOfSport = document.getElementById("sport");

// Seleciona o elemento do DOM com o ID 'year' onde será exibido o ano da Copa do Mundo
const worldCupYear = document.getElementById("year");

// Seleciona o elemento do DOM com o ID 'head-coach' onde será exibido o nome do técnico
const headCoach = document.getElementById("head-coach");

// Seleciona o elemento do DOM onde os cartões dos jogadores serão exibidos
const playerCards = document.getElementById("player-cards");

// Seleciona o elemento do DOM com o ID 'players' que contém a lista suspensa de jogadores
const playersDropdownList = document.getElementById("players");

// Define um objeto que representa o time de futebol favorito
const myFavoriteFutebolTeam = {
  team: "Argentina", // Nome do time
  sport: "Futebol", // Tipo de esporte
  year: 1986, // Ano da Copa do Mundo
  isWorldCupWinner: true, // Indica se o time é campeão da Copa do Mundo
  headCoach: {
    // Objeto que contém informações sobre o técnico
    coachName: "Carlos Bilardo", // Nome do técnico
    matches: 7, // Número de partidas dirigidas
  },
  players: [
    // Lista de jogadores do time
    {
      name: "Sergio Almirón", // Nome do jogador
      Posição: "Atacante", // Posição do jogador
      Número: 1, // Número da camisa do jogador
      isCaptain: false, // Indica se o jogador é capitão
      Apelido: null, // Apelido do jogador (pode ser nulo)
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
    {
      name: "Claudio Borghi",
      Posição: "Meio-campo",
      Número: 4,
      isCaptain: false,
      Apelido: "Bichi",
    },
    {
      name: "José Luis Brown",
      Posição: "Zagueiro",
      Número: 5,
      isCaptain: false,
      Apelido: "Tata",
    },
    {
      name: "Daniel Passarella",
      Posição: "Zagueiro",
      Número: 6,
      isCaptain: false,
      Apelido: "El Gran Capitán",
    },
    {
      name: "Jorge Burruchaga",
      Posição: "Atacante",
      Número: 7,
      isCaptain: false,
      Apelido: "Burru",
    },
    {
      name: "Néstor Clausen",
      Posição: "Zagueiro",
      Número: 8,
      isCaptain: false,
      Apelido: null,
    },
    {
      name: "José Luis Cuciuffo",
      Posição: "Zagueiro",
      Número: 9,
      isCaptain: false,
      Apelido: "El Cuchu",
    },
    {
      name: "Diego Maradona",
      Posição: "Meio-campo",
      Número: 10,
      isCaptain: true, // Diego Maradona é o capitão
      Apelido: "El Pibe de Oro",
    },
    {
      name: "Jorge Valdano",
      Posição: "Atacante",
      Número: 11,
      isCaptain: false,
      Apelido: "The Philosopher of Futebol",
    },
    {
      name: "Héctor Enrique",
      Posição: "Meio-campo",
      Número: 12,
      isCaptain: false,
      Apelido: null,
    },
    {
      name: "Oscar Garré",
      Posição: "Zagueiro",
      Número: 13,
      isCaptain: false,
      Apelido: null,
    },
    {
      name: "Ricardo Giusti",
      Posição: "Meio-campo",
      Número: 14,
      isCaptain: false,
      Apelido: null,
    },
    {
      name: "Luis Islas",
      Posição: "Goleiro",
      Número: 15,
      isCaptain: false,
      Apelido: "El loco",
    },
    {
      name: "Julio Olarticoechea",
      Posição: "Zagueiro",
      Número: 16,
      isCaptain: false,
      Apelido: null,
    },
    {
      name: "Pedro Pasculli",
      Posição: "Atacante",
      Número: 17,
      isCaptain: false,
      Apelido: null,
    },
    {
      name: "Nery Pumpido",
      Posição: "Goleiro",
      Número: 18,
      isCaptain: false,
      Apelido: null,
    },
    {
      name: "Oscar Ruggeri",
      Posição: "Zagueiro",
      Número: 19,
      isCaptain: false,
      Apelido: "El Cabezón",
    },
    {
      name: "Carlos Tapia",
      Posição: "Meio-campo",
      Número: 20,
      isCaptain: false,
      Apelido: null,
    },
    {
      name: "Marcelo Trobbiani",
      Posição: "Meio-campo",
      Número: 21,
      isCaptain: false,
      Apelido: "Calesita",
    },
    {
      name: "Héctor Zelada",
      Posição: "Goleiro",
      Número: 22,
      isCaptain: false,
      Apelido: null,
    },
  ],
};

// Congela o objeto myFavoriteFutebolTeam para impedir modificações
Object.freeze(myFavoriteFutebolTeam);

// Desestrutura os dados do time e do técnico do objeto myFavoriteFutebolTeam
const { sport, team, year, players } = myFavoriteFutebolTeam;
const { coachName } = myFavoriteFutebolTeam.headCoach;

// Atualiza o conteúdo dos elementos HTML com os dados do time
typeOfSport.textContent = sport; // Define o tipo de esporte
teamName.textContent = team; // Define o nome do time
worldCupYear.textContent = year; // Define o ano da Copa do Mundo
headCoach.textContent = coachName; // Define o nome do técnico

// Função para definir os cartões dos jogadores
const setPlayerCards = (arr = players) => {
  // Adiciona os cartões dos jogadores ao elemento playerCards
  playerCards.innerHTML += arr
    .map(
      // Mapeia os jogadores para criar os cartões
      ({ name, Posição, Número, isCaptain, Apelido }) =>
        `
        <div class="player-card"> <!-- Cria um cartão para cada jogador -->
          <h2>${name} ${
          isCaptain ? "(Captain)" : ""
        }</h2> <!-- Exibe o nome do jogador e se é capitão -->
          <p>Posição: ${Posição}</p> <!-- Exibe a posição do jogador -->
          <p>Número: ${Número}</p> <!-- Exibe o número da camisa do jogador -->
          <p>Apelido: ${
            Apelido !== null ? Apelido : "N/A"
          }</p> <!-- Exibe o apelido do jogador, ou "N/A" se não houver -->
        </div>
      `
    )
    .join(""); // Junta todos os cartões em uma string
};

// Adiciona um ouvinte de eventos para quando a lista de jogadores for alterada
playersDropdownList.addEventListener("change", (e) => {
  playerCards.innerHTML = ""; // Limpa os cartões existentes

  // Filtra os jogadores com base na opção selecionada na lista suspensa
  switch (e.target.value) {
    case "Apelido":
      // Exibe apenas jogadores com apelido
      setPlayerCards(players.filter((player) => player.Apelido !== null));
      break;
    case "Atacante":
      // Exibe apenas jogadores que são atacantes
      setPlayerCards(players.filter((player) => player.Posição === "Atacante"));
      break;
    case "Meio-campo":
      // Exibe apenas jogadores que são meio-campistas
      setPlayerCards(
        players.filter((player) => player.Posição === "Meio-campo")
      );
      break;
    case "Zagueiro":
      // Exibe apenas jogadores que são zagueiros
      setPlayerCards(players.filter((player) => player.Posição === "Zagueiro"));
      break;
    case "Goleiro":
      // Exibe apenas jogadores que são goleiros
      setPlayerCards(players.filter((player) => player.Posição === "Goleiro"));
      break;

    default:
      // Exibe todos os jogadores se nenhuma opção corresponder
      setPlayerCards();
      break;
  }
});
