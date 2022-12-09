let fetchedPlanets;

async function getPlanets() {
  if (fetchedPlanets == undefined) {
    const planets = await fetch('https://swapi.dev/api/planets/?format=json');
    fetchedPlanets = await planets.json();
  }
  return fetchedPlanets.results;
}

async function printPlanetListToConsole() {
  console.log(await getPlanets());
}

async function createPlanetButtons() {
  const planets = await getPlanets();
  planets.forEach((planet) => {
    let button = document.createElement('button');
    button.innerText = planet.name;
    document.getElementById('planets-menu').appendChild(button);
  });
}

async function runner() {
  await printPlanetListToConsole(); // atividade 1
  await createPlanetButtons(); // atividade 2
}

runner();
