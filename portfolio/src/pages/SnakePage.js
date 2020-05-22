import React from 'react';

import Snake from '../components/Snake';
import Food from '../components/Food';


const getRandomCoordinates = () => {
 let min = 1;
 let max = 98;
 let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
 let y = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
 return [x,y]
}

const initialState = {
 food: getRandomCoordinates(),
  speed: 200,
  direction: 'RIGHT',
  paused: true,
  snakeDots: [
   [0, 0],
   [2, 0]
  ]
}

class SnakePage extends React.Component {

 state = initialState;

 speed() {
  clearInterval(this.interval);
  this.interval = setInterval(this.moveSnake, this.state.speed);
}


 componentDidMount() {
  this.speed();
  document.onkeydown = this.onKeyDown;
 }

 componentDidUpdate() {
  this.checkIfOutOfBounds();
  this.checkIfCrashedWithItself();
  this.checkIfEatFood();
  this.speed();
  console.log(this.state.speed);
  
 }

 onKeyDown = (e) => {
  e = e || window.event;
  switch (e.keyCode) {
   case 38:
    this.setState({direction: 'UP'})
    break;
   case 40:
    this.setState({direction: 'DOWN'})
    break;
   case 37:
    this.setState({direction: 'LEFT'})
    break;
   case 39:
    this.setState({direction: 'RIGHT'})
    break;
   case 13:
     this.setState({paused: !this.state.paused})
     break;

  }
 }

 moveSnake = () => {
  let dots = [...this.state.snakeDots];
  let head = dots[dots.length - 1];

  if(!this.state.paused) {
    switch (this.state.direction) {
      case 'RIGHT':
       head = [head[0] + 2, head[1]];
       break;
      case 'LEFT':
       head = [head[0] - 2, head[1]];
       break;
      case 'DOWN':
       head = [head[0], head[1] + 2];
       break;
      case 'UP':
       head = [head[0], head[1] - 2];
       break;
     }

     dots.push(head);
     dots.shift();
     this.setState({
      snakeDots: dots
     })
  }
 }

 checkIfOutOfBounds = () => {
  let head = this.state.snakeDots[this.state.snakeDots.length - 1];
  if(head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
   this.onGameOver();
  }
 }

 checkIfCrashedWithItself() {
  let snake = [...this.state.snakeDots];
  let head = snake[snake.length - 1];
  snake.pop();
  snake.pop();
  snake.forEach(dot => {
   if(head[0] == dot[0] && head[1] == dot[1]) {
    this.onGameOver();
   }
  })
 }

 checkIfEatFood() {
  let head = this.state.snakeDots[this.state.snakeDots.length - 1];
  let food = this.state.food;
  if(head[0] == food[0] && head[1] == food[1]) {
   this.setState({
    food: getRandomCoordinates()
   })
   this.enlargeSnake();
   this.increaseSpeed();
  }
 }

 enlargeSnake() {
  let newSnake = [...this.state.snakeDots];
  newSnake.unshift([]);
  this.setState({
   snakeDots: newSnake
  })
 }



 increaseSpeed() {
  if(this.state.speed > 75) {
   this.setState({
    speed: this.state.speed - 10
   })
  }
  else if(this.state.speed > 50) {
    this.setState({
     speed: this.state.speed - 5
    })
   }
  else if(this.state.speed > 25) {
    this.setState({
     speed: this.state.speed - 3
    })
   }
 }

 onGameOver() {
  alert(`Game Over. Snake length is ${this.state.snakeDots.length}`);
  this.setState(initialState);
 }

 render() {

  return (
   <div className="snake-game-container">
    <div className="snake-text">
      <h1>Press the 'enter' key at any time </h1>
      <h1>to Start/Pause the game !</h1>
      <div className="snake-text-bubble">
        <p>This game is called Catplar, short for Caterpillar, because unlike Snakes, Caterpillars can't go through walls. So avoid them for now.
        </p>
        <p>
        I apologize to all you mobile users, because unless you have a 1997 Nokia, you will be unable to play this game.
        </p>
      </div>
    </div>
    <div className="game-area">
      <Snake snakeDots={this.state.snakeDots} />
      <Food dot={this.state.food} />
    </div>
   </div>

  )
 }



}

export default SnakePage;