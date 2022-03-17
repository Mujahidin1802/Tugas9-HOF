var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

let pilot = personnel.map(function (item) {
  let data = document.write(`
    <br>
        ID : ${item.id} <br>
        Name : ${item.name} <br>
        Piloting Score : ${item.pilotingScore} <br>
        Shooting Score : ${item.shootingScore} <br>
        Is Force User : ${item.isForceUser} <br>
    `);
  if (item.isForceUser === true) {
    data = document.write(
      `<i><b>Total Score : ${
        item.pilotingScore + item.shootingScore
      } </b></i><br>`
    );
    return data;
  }
  return data;
});
document.write(pilot.join(" "), "<br>");

const forceUser = personnel.filter((pilot) => pilot.isForceUser === true);
const totalScoreForceUser = forceUser.reduce(
  (acc, pilot) => acc + pilot.pilotingScore + pilot.shootingScore,
  0
);

document.write(
  `<b>Total Score Force User (true) : ${totalScoreForceUser} </b><br>`
);

const notForceUser = personnel.filter((pilot) => pilot.isForceUser === false);
const totalScoreNotForceUser = notForceUser.reduce(
  (acc, pilot) => acc + pilot.pilotingScore + pilot.shootingScore,
  0
);

document.write(
  `<b>Total Score Not Force User (false) : ${totalScoreNotForceUser}</b> <br>`
);

document.write(
  `<b>Total Score Keseluruhan : ${
    totalScoreForceUser + totalScoreNotForceUser
  }</b>`
);
