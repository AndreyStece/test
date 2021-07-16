<!DOCTYPE html>
<html lang="ru">
	<head>
		<meta charset="utf-8">
		<title>Тестовое задание</title>
		<link rel="stylesheet" href="style.css">
		<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  		<link rel="stylesheet" href="/resources/demos/style.css">
		<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
		<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
		<script>
			$( function() {
			  $( "#datepicker" ).datepicker();
			} );
		</script>
		<img class="logo" src="img/world-bankj-.png">
		<dev class="phones">
			<p>8-800-100-5005</p>
			<p>+7(3452)522-000</p>
		</dev>
		<ul class="menu">
			<li><a id="credit_section" href="#">Кредитные карты</a></li>
			<li><a id="deposits_section" href="#">Вклады</a></li>
			<li><a id="debit_section" href="#">Дебетовая карта</a></li>
			<li><a id="insurance_section" href="#">Страхование</a></li>
			<li><a id="friends_section" href="#">Друзья</a></li>
			<li><a id="online_banking_section" href="#">Интернет-банк</a></li>
		</ul>
		</dev>
	</head>
	<body>
		<div class="main">
			<ul class="breadcrumb"> 
				<li><a onclick=main("") href="#">Главная</a></li> 
				<li><a onclick=main("Вклады") href="#">Вклады</a></li> 
				<li>Калькулятор</li>
			</ul>
			<div class="calculator">
				<form action="calc.php" method="POST">
					<p id="calc_name">Калькулятор</p>
					<div class="date_of_registration_of_the_deposit">
						<p>Дата оформления вклада</p>
						<input type="text" id="datepicker">
					</div>
					<div class="deposit_amount">	
						<p>Сумма вклада</p>
						<input id="num1" type="number" min="1" name="sum">
						<input id="slider1" type="range" min="1000" max="3000000" step="1" value="1000"> 
					</div>
					<div class="deposit_term">
						<p>Срок вклада</p>
						<select name="term">
						  <option>1 год</option>
						  <option>2 года</option>
						  <option>3 года</option>
						  <option>4 года</option>
						  <option>5 лет</option>
						</select>
					</div>
					<div class="deposit_replenishment">
						<p>Пополнение вклада</p>
						<p><input name="top-up" type="radio" name="no"> Нет</p>
						<p><input name="top-up" type="radio" name="yes"> Да</p>
					</div>
					<div class="deposit_replenishment_amount">
						<p>Сумма пополнения вклада</p>
						<input id="num2" type="number" min="1">
						<input id="slider2" type="range" min="1000" max="3000000" step="1" value="1000">
					</div>
					<div class="result">
						<a href="#" class="btn" type="submit">Рассчитать</a>
						<p id="result_label">Результат: </p>
						<p id="result_score">10000 руб</p>
					</div>
				</form>
			</div>
		</div>
		<footer>
			<div class="foot">
				<a id="credit_href" href="#"><u>Кредитные карты</u></a>
				<a id="deposits_href" href="#"><u>Вклады</u></a>
				<a id="debit_href" href="#"><u>Дебетовая карта</u></a>
				<a id="insurance_href" href="#"><u>Страхование</u></a>
				<a id="friends_href" href="#"><u>Друзья</u></a>
				<a id="online_banking_href" href="#"><u>Интернет-банк</u></a>
			</div>
			<script src="script.js"></script>
		</footer>
	</body>
</html>
