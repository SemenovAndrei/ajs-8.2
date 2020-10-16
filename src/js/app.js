import Team from './team';
import charactersList from './characters/characterslist';

const team = new Team();

console.log(team);

team.addAll(charactersList);

console.log(team);
console.log(team.toArray());
