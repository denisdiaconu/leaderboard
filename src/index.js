import './style.css';
import { callapi, addScoreToApi, getScoresList } from './api.js';

let gameid;
callapi().then((response) => {
  const res = response.result.split(' ')[3];
  gameid = res;
});
const addScore = document.getElementById('addScore');
if (addScore) {
  addScore.addEventListener('click', () => {
    const name = document.getElementById('name');
    const score = document.getElementById('score');
    const data = {
      user: name.value,
      score: score.value,
    };
    addScoreToApi(gameid, data);
    name.value = '';
    score.value = 0;
  });
}
const displayScoreToDom = (scores) => {
  const ScoreList = document.getElementById('scoreList');
  const ul = document.createElement('ul');
  scores.forEach((score) => {
    const li = document.createElement('li');
    li.innerText = `name: ${score.user}  | score: ${score.score}`;
    ul.appendChild(li);
  });
  ScoreList.innerHTML = '';
  ScoreList.appendChild(ul);
};
const scoreListBtn = document.getElementById('getScoreListBtn');
if (scoreListBtn) {
  scoreListBtn.addEventListener('click', () => {
    getScoresList(gameid).then((data) => displayScoreToDom(data.result));
  });
}