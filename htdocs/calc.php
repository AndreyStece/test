<?php
	$summn = 0;
	$summadd = 0;
	$daysn = 0;
	$percent = 10;
	$daysy = 365; 

	if(isset($_POST["no"])){
    	if($_POST["no"] == 1) {
    		$summadd = 0;
    	}
    	else {
    		$summadd = 0;
    	}
	}

	//$summn = $summn-1 + ($summn-1 + $summadd)daysn($percent / $daysy);
	session_start();
  	$_SESSION['calc'] = $summn;
?>