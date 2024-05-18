// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const jokeEndpoint = 'https://v2.jokeapi.dev/joke/Any';

const getRequest = () => new Promise((resolve, reject) => {
  fetch(jokeEndpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const htmlStructure = () => {
  document.querySelector('#app').innerHTML = `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Joke Generator</h5>
    <p id="joke-setup"></p>
    <button class="btn btn-warning" id="get-joke">GET JOKE</button>
  </div>
</div>
   
   `;
};

const events = () => {
  document.querySelector('#get-joke').addEventListener('click', () => {
    getRequest().then(console.warn);
  });
};

const startApp = () => {
  htmlStructure();
  events();
};
startApp();
