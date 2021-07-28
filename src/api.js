export const callapi = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api'.concat('/games/'), {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ name: 'MY First Game' }),
  });
  const result = await response.json();
  return result;
};
export const addScoreToApi = async (gameid, data) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/'.concat(gameid).concat('/scores/'), {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
};
export const getScoresList = async (gameid) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/'.concat(gameid).concat('/scores/'), {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-type': 'application/json',
    },
  });
  const result = await response.json();
  return result;
};