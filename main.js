/* 
function hide(a) {
	for(var i = a; i < menuLink.length; i++) {
		menuLink[i].classList.remove('act');
		menuLink[i].classList.add('hide');
	}
}

hide(1);

function show(b) {
	if(menuLink[b].classList.contains('hide')) {
		hide(0);
		menuLink[b].classList.remove('hide');
		menuLink[b].classList.add('act');
	}
}

 menu.addEventListener('click', (event) => {
	var target = event.target;
	for(var i = 0; i < menuLink.length; i++) {
		if(target == menuLink[i]) {
			show(i);
		}
	}
}); 
*/




/* 
var menu = document.querySelector('.tab-menu'),
		menuBtn = document.getElementsByClassName('tab-menu__button');



function hide(a) {
	for(var i = a; i < menuBtn.length; i++) {
		menuBtn[i].classList.remove('act');
		menuBtn[i].classList.add('hide');
	}
}


function show(b) {
	if(menuBtn[b].classList.contains('hide')) {
		hide(0);
		menuBtn[b].classList.remove('hide');
		menuBtn[b].classList.add('act');
	}
}



hide(1);


menu.addEventListener('click', (event) => {
	var target = event.target;
	for(var i = 0; i < menuBtn.length; i++) {
		if(target == menuBtn[i]) {
				show(i);
				break;
		}
	}
});
 */



/* var menu 				= document.querySelector('.tab-menu'),
		menuBtn 		= document.getElementsByClassName('tab-menu__button'),
		contentInfo = document.getElementsByClassName('tab-text');
	
function hide(a) {
	for(var i = a; i < menuBtn.length; i++) {
		menuBtn[i].classList.remove('active-btn');
		menuBtn[i].classList.add('hiden-btn');

		contentInfo[i].classList.remove('act-content');
		contentInfo[i].classList.add('hide-content');
	}
}

hide(1);


function show(b) {
	if(menuBtn[b].classList.contains('hiden-btn')) {
		hide(0);
		menuBtn[b].classList.remove('hiden-btn');
		menuBtn[b].classList.add('active-btn');

		contentInfo[b].classList.remove('hide-content');
		contentInfo[b].classList.add('act-content');
	}
}

menu.addEventListener('click', (event) => {

	var target = event.target;
	for(var i = 0; i < menuBtn.length; i++) {
		if(target == menuBtn[i]) {
			show(i);
			break;
		}
	}

});
 */



/* var menu = document.querySelector('.tab-menu'),
		menuLink = document.getElementsByClassName('tab-menu__button'),
		tabInfo = document.getElementsByClassName('tab-text');



function hide(a) {
	for(var i = a; i < menuLink.length; i++) {
		menuLink[i].classList.remove('active-btn');
		menuLink[i].classList.add('hiden-btn');

		tabInfo[i].classList.remove('act-content');
		tabInfo[i].classList.add('hide-content');
	}
}

hide(1);

function show(b) {
	if(menuLink[b].classList.contains('hiden-btn')) {
		hide(0);
		menuLink[b].classList.remove('hiden-btn');
		menuLink[b].classList.add('active-btn');

		tabInfo[b].classList.remove('hide-content');
		tabInfo[b].classList.add('act-content');
	}
}

menu.addEventListener('click', (event) => {


	var target = event.target;
	for(var i = 0; i < menuLink.length; i++) {
		if(target == menuLink[i]) {
			show(i);
			break;
		}
	}
});  */


/* var menu = document.querySelector('.tab-menu'),
		menuLink = document.getElementsByClassName('tab-menu__button'),
		tabInfo = document.getElementsByClassName('tab-text');



function hide(a) {
	for(var i = a; i < menuLink.length; i++) {
		menuLink[i].classList.remove('active-btn');
		menuLink[i].classList.add('hiden-btn');
		
		tabInfo[i].classList.remove('act-content');
		tabInfo[i].classList.add('hide-content');
	}
}

hide(1);

function show(b) {
	if(menuLink[b].classList.contains('hiden-btn')) {
		hide(0);
		menuLink[b].classList.remove('hiden-btn');
		menuLink[b].classList.add('active-btn');

		tabInfo[b].classList.remove('hide-content');
		tabInfo[b].classList.add('act-content');
	}
}

menu.addEventListener('click', (event) => {
	var target = event.target;
	for(var i = 0; i < menuLink.length; i++) {
		if(target == menuLink[i]) {
			show(i);
			break;
		}
	}
});
 */




 // 1. Необходимо найти элементы
var menu    = document.querySelector('.tab-menu'), // Нашли родителя где хранятся кнопки
		menuBtn = document.getElementsByClassName('tab-menu__button'), // Получили в виде массива, коллекции сами ссылки
		tabInfo = document.getElementsByClassName('tab-text'); // Получили в виде коллекции табы с контентом




function hide(a) {   // Функция скрытия элементов

	for(var i = a; i < menuBtn.length; i++) {
		menuBtn[i].classList.remove('active-btn'); // Удаляем класс act у кнопки
		menuBtn[i].classList.add('hiden-btn'); // Добавляем класс hide для кнопки

		tabInfo[i].classList.remove('act-content'); // Удаляем класс act табов
		tabInfo[i].classList.add('hide-content'); // Добавляем класс hide для таба
	}

}

hide(1); // По умолчанию активным отображается 1 элемент




function show(b) { // Функция показа элементов

	if(menuBtn[b].classList.contains('hiden-btn')) {	//Проверка есть ли класс hiden-btn, и если да, то выполняем...
		hide(0);			// первая кнопка больше не активна 
		menuBtn[b].classList.remove('hiden-btn'); // Удаляем класс hide у кнопки
		menuBtn[b].classList.add('active-btn'); // Добавляем класс act для кнопки

		tabInfo[b].classList.remove('hide-content'); // Удаляем класс hide у таба
		tabInfo[b].classList.add('act-content'); // Добавляем класс act для таба

	}

}









menu.addEventListener('click', (event) => {   // По клику на menu будем отыскивать детей 

	var target = event.target;
	for(var i = 0; i < menuBtn.length; i++) { //Счётчик 
		if(target == menuBtn[i]) {              // Отлавливаем нужное нажатие
			show(i);
			break;
		}
	}

});

