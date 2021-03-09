import React from 'react';

import './styles.css'
import data from './data.json'
// import people from "./names.json"

// practic work, spinner (from class)
export class SpinnerClass extends React.Component {
  state = {
    value: true
  }
  revertValue = () => {this.state.value ? this.setState({value:  false}) : this.setState({value:  true})}

  render() { 
    return this.state.value ? 
      <button onClick = {this.revertValue}>load</button>
      :
      <div onClick = {this.revertValue} className = 'loader loader-animated' ></div>
  }
}

// practic work, spinner (from props)
export const SpinnerProps = (props) => !props.start ? 
      <button>load</button>
      :
      <div className = 'loader loader-animated' ></div> 

// practic work, list of ingridients
export class Menu extends React.Component {
    state = {
      value: false
    }
    openMenu = () =>  this.setState({value:  !this.state.value})

    render () {
        return this.state.value ?
          <div>
            <button onClick = {this.openMenu}>Закртыть</button>
            <Ingridients />
          </div>
          :
          <button onClick = {this.openMenu}>Ингридиенты</button>
    }
}

export class NumberIngr extends React.Component {
    state ={
        number: 0
      }
      plus = () => {
        this.setState({ number: this.state.number + 1})
      }
      minus = () => {
        this.setState({number: this.state.number - 1})
    }
    render () {
        return (
        <span>
          <button onClick = {this.minus}>-</button>
          {this.state.number}
          <button onClick = {this.plus}>+</button>
        </span>
        )
      }
}


export class Ingridients extends React.Component {
    state = {
        ingridients: ['яблоко', 'банан', 'апельсин', 'киви', 'ананас', 'помидор', 'огурец']
      }
      render () {
        return <ul>
            {this.state.ingridients.map ((item) => {return <li>{item} <NumberIngr/></li>})}
        </ul>
    }
}

// homework, task 1, add userlist from json file
export class UserList extends React.Component {

  render () {
    return (
      <div>
        { data.map((element, i) => {
          return <div key = {element._id} className = 'user'>
            <h3>{element.name.first}</h3>
            <h4>{element.name.last}</h4>
          </div>
        })}
      </div>
    )
  }
}

// homework, task 2, user sign in
export class UserSignIn extends React.Component {
  state = {
    isSignedIn: false
  }
  changeIsSignedInState = () => this.setState ({isSignedIn: !this.state.isSignedIn})

  handleClick = (e) => {
    setTimeout(this.changeIsSignedInState, 3000) 
  }
  
  render () {
    return this.state.isSignedIn ?
      <span>Hello User</span>
      :
      <button onClick = {this.handleClick} >Sign In</button>
  }
}

// homework, task 3, plus minus from props
class Button extends React.Component {
  render () {
    return <button onClick = {this.props.click}>{this.props.label}</button>
  }
}

export class ButtonPlusMinusProps extends React.Component {
  state = {
    number: 0
  }
  plus = () => {
    this.setState({ number: this.state.number + 1})
  }
  minus = () => {
    this.setState({number: this.state.number - 1})
  }

  render () {
    return (
    <div style = {{border: '4px solid black', width: '300px', height: '40px'}}>
      <Button label = 'plus' click = {this.plus}/>
      {this.state.number}
      <Button label = 'minus' click = {this.minus}/>
    </div>
    )
  }
}

// export class PeopleList extends React.Component {
//   state = {
//     people: ['Jhon', 'Mary', 'Angel']
//   }
//   newPeople = [...this.state.people, oneMoreName]

//   render () {

//   }
// }