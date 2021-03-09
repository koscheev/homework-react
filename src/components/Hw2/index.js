import React from 'react';

import './styles.css'

// Practical work
// Task 1
export const Text = (props) => {
    return <div style = {{fontSize: props.fontSize + 'px', color: props.color, textDecoration: props.textDecoration}}>
        {props.name}
        </div>
}
  
// Task 2
// по клику меняет символ на другой символ
export class Revert extends React.Component {
    state ={
      symbol: 'X'
    }
    
    revertSymbol = () => this.state.symbol === 'X' ? this.setState({symbol:  'Y'}) : this.setState({symbol:  'X'})
  
    render() {
      return (
      <div>
        <button onClick = {this.revertSymbol}>{this.state.symbol}</button>
      </div>
      )
    }
}
  
// Task 1
// По клику на текст он становится курсивом, по клику еще раз, становится нормальным
export class Change extends React.Component {
    state ={
      italic: false
    }
  
    changeStyle = () =>  this.setState( this.state.italic ? { italic: false} : { italic: true})
  
    render() {
      let revertClassName = '';
      if(this.state.italic) {
        revertClassName = 'revert'
      } else {
        revertClassName = ''
      }
  
      return (
      <div>
        <p className = {revertClassName} onClick = {this.changeStyle}>lorem ipsum</p>
      </div>
      )
    }
}
  
// Task 2
// Создать компонент квадрат (Square), внутри это может быть любой html-элемент-контейнер, div например.
export class Square extends React.Component {
    render() {
      return <div className = {this.props.className}>{this.props.label}</div>
    }
}

// Practical Worker, player switch
const images = ['aaa', 'bbb', 'ccc']
export class PlayerButton extends React.Component {

  state = {
    currentImage: 0
  }

  render () {
    return (
      <div>{images[this.state.currentImage]}</div>
    )
  }
}
  
  
  
  