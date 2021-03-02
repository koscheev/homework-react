// import logo from './logo.svg';
import {Text} from './components/Hw2' 
import {Revert} from './components/Hw2' 
import {Change} from './components/Hw2'
import {Square} from './components/Hw2'  

import {SpinnerClass} from './components/Hw3'
import {SpinnerProps} from './components/Hw3'
import {Menu} from './components/Hw3'
import {UserSignIn} from './components/Hw3'
// import{NumberIngr} from './components/Hw3'
// import {Ingridients} from './components/Hw3'
import {UserList} from './components/Hw3'
import './App.css';

function App() {
  return (
    <div>
      {/* text properties */}
      <div>
        <Text name = "Regular text" fontSize = '10' color = "red" /> 
        <Text name = "Huge header" fontSize = '50'color = "green"/>
        <Text name = "Underlined text" fontSize = '70' color = "blue" textDecoration = 'underline' />
      </div>

      <div>
        <Revert />
      </div>

      <div>
        <Change />
      </div>

      <div>
        <Square className = 'square-big' label = 'Square-big' />
        <Square className = 'square-middle' label = 'Square-middle' />
        <Square className = 'square-small' label = 'Square-small'/> 
      </div>

      {/* spinner */}
      <div>
        <SpinnerClass />
        <SpinnerProps start = {true}/>
      </div>

        {/* Ingridients */}
      <div>
        <Menu />
      </div>

      {/* UserList */}
      <div>
        <UserList />
      </div>

      {/* button sign in */}
      <div>
        <UserSignIn />
      </div>
    </div>
  );
}

export default App;
