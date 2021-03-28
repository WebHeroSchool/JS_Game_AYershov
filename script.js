//создание карты
const createCard = () => {
	const card = document.createElement('div');
  card.className = 'card';
  document.querySelector('.field').append(card);
  card.addEventListener('click', flipCard);
}

//переворот любой из карт

let click=0;

const flipCard = (e) => {
	e.target.className = 'flip-card-game_over';
	click++;
	if (click > 1) window.location.reload();
}

//создание игрового поля
document.querySelector('.main__button').onclick = () => {
	const level = document.querySelector('input[name="choice"]:checked').value;
	document.querySelector('.body').innerHTML = '<div class="field"></div>';
	const bags = Math.floor(Math.random()*level);
	for(let i = 0; i < level; i++) {
    createCard(bags);
  }
	const cardBag = document.querySelectorAll('.card')[bags];
	cardBag.onclick = () => {
		cardBag.style.background = 'url(images/card-bag.png)'
	}
  if (level == 3) {
    document.querySelector('.field').style.width = '100%';
    document.querySelector('.field').style.paddingTop = '15%';
  } else if (level == 6) {
    document.querySelector('.field').style.width = '50%';
    document.querySelector('.field').style.paddingTop = '1%';
  }
}
