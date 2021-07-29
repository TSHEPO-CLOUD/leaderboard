import './style.css';

const addForm = document.querySelector('form');
const nameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score');
const refresh = document.querySelector('button');
const list = document.querySelector('.score-list');


let gameId;
const startGame = () => {
  leaderboard
    .startGame('Term Project')
    .then((response) => response.result.split(' '))
    .then((res) => {
      [gameId] = [res[3]];
    });
};

const addToUI = (arr) => {
  list.innerHTML = '';
  arr.forEach((el) => {
    list.innerHTML += `
    <li class="item">${el.user} : ${el.score}</li>
    `;
  });
};

const getScores = () => {
  leaderboard.getScores(gameId).then((response) => addToUI(response.result));
};

const postScore = (e) => {
  leaderboard.postScore(gameId, nameInput.value, scoreInput.value);

  nameInput.value = '';
  scoreInput.value = '';
  e.preventDefault();
};

