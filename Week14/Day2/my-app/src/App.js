import './App.css';
import UserFavoriteColors from "./UserFavoriteColors";
import "./App.css";
import Exercise4 from "./Exercise4";
const myelement = <h1>I Love JSX!</h1>;
const sum = 5 + 5;
const user = {
  first_name: 'Bob',
  last_name: 'Dylan',
  fav_animals : ['Horse','Turtle','Elephant','Monkey']
};
function App() {
  return (
    <div className="App">
      <h1>Hello world. this is with the jsx</h1>
      {myelement}
      <h2>react is {sum} better with jsx</h2>
      <h3>{user.first_name}  {user.last_name}</h3>
      <ul style={{ listStyleType: "circle", listStylePosition: "inside" }}>
        <UserFavoriteColors favAnimals={user.fav_animals} />
      </ul>
      <Exercise4 />
    </div>
  );
}

export default App;
