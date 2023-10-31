const URL = 'https://rickandmortyapi.com/api';
const containerChar = document.querySelector('.characters');
const pagination = document.querySelector('.pagination');
const modalTitle = document.querySelector('.modal-title');
const modalBody = document.querySelector('.modal-body');

function createPag(){
  let buttons = ``;
  for(let i = 1; i<= 42; i++){
    buttons += `
    <li class="page-item">
      <a class="page-link" href="#" data-id="${ i }">${ i }</a>
    </li>`;
  }
  pagination.innerHTML = buttons;
}

createPag();

const fetchApi = (url) => fetch(url).then(response => response.json());

function getCharacters(page=1){
  fetchApi(`${ URL }/character/?page=${ page }`)
      .then(data => {
          const characters = data.results;
          showCharaters(characters);
      });
}

function getCharactesById(id){
  fetchApi(`${ URL }/character/${ id }`)
      .then(data => {
          const character = data;
          //console.log(character);
          modalTitle.innerHTML = character.name;
          modalBody.innerHTML = '';
          modalBody.appendChild(createCardModal(character));
      });
}

getCharacters();

function createCard(character){
    const card = document.createElement('div');
    card.classList.add('card', 'mt-3', 'bg-secondary-subtle');
    card.style.width = '18rem';
    const htmlCard = `
    <img src="${ character.image }" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${ character.name }</h5>
      <p class="card-text">${ character.status }</p>
      <p class="card-text">${ character.origin.name }</p>
      <a href="#" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${ character.id }">Ver más</a>
    </div>`;
    card.innerHTML = htmlCard;
    return card;
}

function createCardModal(character){
    const card = document.createElement('div');
    card.classList.add('card', 'mt-3', 'bg-secondary-subtle');
    card.style.width = '80%';
    card.style.margin = '0 auto';
    const htmlCard = `
    <img src="${ character.image }" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${ character.status }</p>
      <p class="card-text">${ character.origin.name }</p>
      <p class="card-text">${ character.location.name }</p>
    </div>`;
    card.innerHTML = htmlCard;
    return card;
}

function showCharaters(characters){
    containerChar.innerHTML = '';
    characters.forEach(character => {
        containerChar.appendChild(createCard(character));
    })
}

function getPag(e){
  e.preventDefault();
  if(e.target.classList.contains('page-link')){
    const page = e.target.getAttribute('data-id');
    getCharacters(page);
  }
}

function getbuttonCard(e){
  e.preventDefault();
  if(e.target.classList.contains('btn')){
    const id = e.target.getAttribute('data-id');
    getCharactesById(id);
  }
}

pagination.addEventListener('click', getPag);
containerChar.addEventListener('click', getbuttonCard);