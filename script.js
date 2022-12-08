async function listPlanets() {
  const planets = await fetch('https://swapi.dev/api/planets/?format=json');
  let { results } = await planets.json();

  console.log(results);
}

listPlanets();
