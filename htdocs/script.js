let credit_menu = document.getElementById("credit_section");
let deposits_menu = document.getElementById("deposits_section");
let debit_menu = document.getElementById("debit_section");
let insurance_menu = document.getElementById("insurance_section");
let friends_menu = document.getElementById("friends_section");
let online_banking_menu = document.getElementById("online_banking_section");

let credit_foot = document.getElementById("credit_href");
let deposits_foot = document.getElementById("deposits_href");
let debit_foot = document.getElementById("debit_href");
let insurance_foot = document.getElementById("insurance_href");
let friends_foot = document.getElementById("friends_href");
let online_banking_foot = document.getElementById("online_banking_href");

let body = document.querySelector(".main");
let num1_set = document.getElementById("num1");
let slider1_set = document.getElementById("slider1");
let num2_set = document.getElementById("num2");
let slider2_set = document.getElementById("slider2");

deposits_menu.style.background = "#fd6a02";

function main(value) {
	if (value == "Кредитные карты") {
		credit_menu.style.background = "#fd6a02";
	    deposits_menu.style.background = "#000000";
	    debit_menu.style.background = "#000000";
	    insurance_menu.style.background = "#000000";
	    friends_menu.style.background = "#000000";
	    online_banking_menu.style.background = "#000000";

	    body.innerHTML = '<ul class="breadcrumb"> <li><a onclick=main("") href="#">Главная</a></li> <li>Кредитные карты</li></ul>';
	}
	if (value == "Вклады") {
		credit_menu.style.background = "#000000";
	  	deposits_menu.style.background = "#fd6a02";
	  	debit_menu.style.background = "#000000";
	  	insurance_menu.style.background = "#000000";
	 	friends_menu.style.background = "#000000";
	  	online_banking_menu.style.background = "#000000";

	  	body.innerHTML = '<ul class="breadcrumb"> <li><a onclick=main("") href="#">Главная</a></li> <li><a onclick=main("Вклады") href="#">Вклады</a></li> <li>Калькулятор</li></ul>';
		body.innerHTML += '<div class="calculator"> <form action="calc.php" method="POST"> <p id="calc_name">Калькулятор</p> <div class="date_of_registration_of_the_deposit"> <p>Дата оформления вклада</p> <input type="text" id="datepicker"> </div>';
		body.innerHTML += '<div class="deposit_amount"> <p>Сумма вклада</p> <input id="num1" type="number" min="1" name="sum"> <input id="slider1" type="range" min="1000" max="3000000" step="1" value="1000"> </div>';
		body.innerHTML += '<div class="deposit_term"> <p>Срок вклада</p> <select name="term"> <option>1 год</option> <option>2 года</option> <option>3 года</option> <option>4 года</option> <option>5 лет</option> </select> </div>';
		body.innerHTML += '<div class="deposit_replenishment"> <p>Пополнение вклада</p> <p><input name="top-up" type="radio" name="no"> Нет</p> <p><input name="top-up" type="radio" name="yes"> Да</p> </div>';
		body.innerHTML += '<div class="deposit_replenishment_amount"> <p>Сумма пополнения вклада</p> <input id="num2" type="number" min="1"> <input id="slider2" type="range" min="1000" max="3000000" step="1" value="1000"> </div>';
		body.innerHTML += '<div class="result"> <a href="#" class="btn" type="submit">Рассчитать</a> <p id="result_label">Результат: </p> <p id="result_score">100000 руб</p> </div> </form> </div>';
	}
	if (value == "Дебетовая карта") {
		credit_menu.style.background = "#000000";
	  	deposits_menu.style.background = "#000000";
	  	debit_menu.style.background = "#fd6a02";
	  	insurance_menu.style.background = "#000000";
	  	friends_menu.style.background = "#000000";
	 	online_banking_menu.style.background = "#000000";

	 	body.innerHTML = '<ul class="breadcrumb"> <li><a onclick=main("") href="#">Главная</a></li> <li>Дебетовая карта</li></ul>';
	}
	if (value == "Страхование") {
		credit_menu.style.background = "#000000";
	  	deposits_menu.style.background = "#000000";
	  	debit_menu.style.background = "#000000";
	  	insurance_menu.style.background = "#fd6a02";
	  	friends_menu.style.background = "#000000";
	  	online_banking_menu.style.background = "#000000";

	  	body.innerHTML = '<ul class="breadcrumb"> <li><a onclick=main("") href="#">Главная</a></li> <li>Страхование</li></ul>';
	}
	if (value == "Друзья") {
		credit_menu.style.background = "#000000";
	  	deposits_menu.style.background = "#000000";
	  	debit_menu.style.background = "#000000";
	  	insurance_menu.style.background = "#000000";
	  	friends_menu.style.background = "#fd6a02";
	  	online_banking_menu.style.background = "#000000";

	  	body.innerHTML = '<ul class="breadcrumb"> <li><a onclick=main("") href="#">Главная</a></li> <li>Друзья</li></ul>';
	}
	if (value == "Интернет-банк") {
		credit_menu.style.background = "#000000";
	  	deposits_menu.style.background = "#000000";
	  	debit_menu.style.background = "#000000";
	  	insurance_menu.style.background = "#000000";
	  	friends_menu.style.background = "#000000";
	  	online_banking_menu.style.background = "#fd6a02";

	  	body.innerHTML = '<ul class="breadcrumb"> <li><a onclick=main("") href="#">Интернет-банк</a></li> <li>Друзья</li></ul>';
	}

	if (value == "") {
		credit_menu.style.background = "#000000";
	  	deposits_menu.style.background = "#000000";
	  	debit_menu.style.background = "#000000";
	  	insurance_menu.style.background = "#000000";
	  	friends_menu.style.background = "#000000";
	  	online_banking_menu.style.background = "#000000";

	  	body.innerHTML = '';
	}
}

num1_set.onchange = function() {
	slider1_set.value = num1_set.value;
}
slider1_set.onchange = function() {
	num1_set.value = slider1_set.value;
}

num2_set.onchange = function() {
	slider2_set.value = num2_set.value;
}
slider2_set.onchange = function() {
	num2_set.value = slider2_set.value;
}

credit_menu.onclick = function() {
  	main(this.textContent);
};

deposits_menu.onclick = function() {
  	main(this.textContent);
};

debit_menu.onclick = function() {
  	main(this.textContent);
};

insurance_menu.onclick = function() {
  	main(this.textContent);
};

friends_menu.onclick = function() {
  	main(this.textContent);
};

online_banking_menu.onclick = function() {
	main(this.textContent);
};


credit_foot.onclick = function() {
  	main(this.textContent);
};

deposits_foot.onclick = function() {
  	main(this.textContent);
};

debit_foot.onclick = function() {
  	main(this.textContent);
};

insurance_foot.onclick = function() {
  	main(this.textContent);
};

friends_foot.onclick = function() {
  	main(this.textContent);
};

online_banking_foot.onclick = function() {
	main(this.textContent);
};

first.onclick = function() {
	main("");
};