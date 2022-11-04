function createGame(team1, time, team2) {
  return `
  <li>
    <img src="./assets/country_icons/icon_${team1}.svg" alt="Bandeira ${team1}"/>
    <strong id="time">${time}</strong>
    <img src="./assets/country_icons/icon_${team2}.svg" alt="Bandeira ${team2}"/>
  </li>
  `
}
let delay = -0.3;
function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
    <div class="card" style="animation-delay:${delay}s">
      <h2>${date}<span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}
document.querySelector("#cards").innerHTML =
  createCard("20/11", "quinta", createGame("qatar", "13:00", "ecuador")) +
  createCard("21/11", "sexta", createGame("england", "10:00", "iran") + createGame("senegal", "13:00", "netherlands") + createGame("usa", "16:00", "wales"))