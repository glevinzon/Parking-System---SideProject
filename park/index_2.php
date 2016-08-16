<?php
if(isset($_GET['floor'])){
	$floor = $_GET['floor'];
	}
	else{
	$floor = "1";
	}
?>

<html>
<head>
<title>
Parking System
</title>
<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
<link rel='stylesheet prefetch' href='http://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.3/animate.min.css'>
<link rel='stylesheet prefetch' href='http://fonts.googleapis.com/css?family=Roboto:400italic,700italic,700,400'>
<link rel="stylesheet" href="css/style.css">
</head>
<body>

<div class="the-return">
<input type="hidden" name="postfloor" id="postfloor" value="<?php echo $floor; ?>"/>
<table>
<tbody>
<tr>
<td><img src="./img/ps_slant.png" /></td>
<td><img src="./img/ps_blank.png" /></td>
<td><img src="./img/ps_blank.png" /></td>
<td><img src="./img/ps_slant_left.png" /></td>
<td><img id="twentytwo1" src="./img/2_ps_twentytwo.png" class="grid"/>
	<img id="twentytwo" src="./img/1_ps_twentytwo.png" class="number" /></td>
<td><img id="twentyone1" src="./img/2_ps_twentyone.png" class="grid"/>
	<img id="twentyone" src="./img/1_ps_twentyone.png" class="number" /></td>
<td><img id="twenty1" src="./img/2_ps_twenty.png" class="grid"/>
	<img id="twenty" src="./img/1_ps_twenty.png" class="number" /></td>
<td><img id="nineteen1" src="./img/2_ps_nineteen.png" class="grid"/>
	<img id="nineteen" src="./img/1_ps_nineteen.png" class="number" /></td>
<!-- <td><img id="eighteen1" src="./img/2_ps_eighteen.png" class="grid"/>
	<img id="eighteen" src="./img/1_ps_eighteen.png" class="number" /></td>
 --></tr>
<tr>
<td><img src="./img/ps_blank_vertical.png" /></td>
<td><img id="twentyfour1" src="./img/2_ps_twentyfour.png" class="grid"/>
	<img id="twentyfour" src="./img/1_ps_twentyfour.png" class="number" /></td>
<td><img id="twentythree1" src="./img/2_ps_twentythree.png" class="grid"/>
	<img id="twentythree" src="./img/1_ps_twentythree.png" class="number" /></td>
<td><img src="./img/ps_blank_vertical.png" /></td>
<td><img src="./img/ps_blank.png" /></td>
<td><img src="./img/ps_blank.png" /></td>
<td><img src="./img/ps_blank.png" /></td>
<td><img src="./img/ps_blank.png" /></td>
<!-- <td><img src="./img/ps_blank_right.png" /></td>
 --></tr>
<tr>
<td><img src="./img/blank.png" /></td>
<td><img id="seventeen1" src="./img/2_ps_seventeen.png" class="grid"/>
	<img id="seventeen" src="./img/1_ps_seventeen.png" class="number" /></td>
<td><img id="sixteen1" src="./img/2_ps_sixteen_1.png" class="grid"/>
	<img id="sixteen" src="./img/1_ps_sixteen_1.png" class="number" /></td>
<td><img src="./img/ps_blank_vertical.png" /></td>
<td><img id="fifteen1" src="./img/2_ps_fifteen_1.png" class="grid"/>
	<img id="fifteen" src="./img/1_ps_fifteen_1.png" class="number" /></td>
<td><img id="fourteen1" src="./img/2_ps_fourteen.png" class="grid"/>
	<img id="fourteen" src="./img/1_ps_fourteen.png" class="number" /></td>
<td><img id="thirteen1" src="./img/2_ps_thirteen.png" class="grid"/>
	<img id="thirteen" src="./img/1_ps_thirteen.png" class="number" /></td>
<td><img id="twelve1" src="./img/2_ps_twelve.png" class="grid"/>
	<img id="twelve" src="./img/1_ps_twelve.png" class="number" /></td>
<!-- <td><img id="eleven1" src="./img/2_ps_eleven.png" class="grid"/>
	<img id="eleven" src="./img/1_ps_eleven.png" class="number" />
	<img id="eleven2" src="./img/ps_blank_right.png" class="number" /></td>
 --></tr>
<tr>
<td><img id="newtwelve1" src="./img/ps_blank_left.png" class="grid"/>
	<img id="newtwelve" src="./img/ps_blank_left.png" class="number" /></td>
<td><img src="./img/ps_blank_half1.png" /></td>
<td><img src="./img/ps_blank_bottomwhite.png" /></td>
<td><img src="./img/ps_slant_down.png" /></td>

<td><img id="ten1" src="./img/2_ps_ten.png" class="grid"/>
	<img id="ten" src="./img/1_ps_ten.png" class="number" /></td>
<td><img id="nine1" src="./img/2_ps_nine.png" class="grid"/>
	<img id="nine" src="./img/1_ps_nine.png" class="number" /></td>
<td><img id="eight1" src="./img/2_ps_eight.png" class="grid"/>
	<img id="eight" src="./img/1_ps_eight.png" class="number" /></td>
<td><img id="seven1" src="./img/2_ps_seven.png" class="grid"/>
	<img id="seven" src="./img/1_ps_seven.png" class="number" /></td>
<!-- <td><img id="six1" src="./img/2_ps_six_1.png" class="grid"/>
	<img id="six" src="./img/1_ps_six_1.png" class="number" />
	<img id="six2" src="./img/ps_blank_right.png" class="number" /></td>
 --></tr>
<tr>
<td><img id="neweleven1" src="./img/ps_blank_left.png" class="grid"/>
	<img id="neweleven" src="./img/ps_blank_left.png" class="number" /></td>
<td><img src="./img/ps_blank_half2.png" /></td>
<td><img src="./img/ps_blank.png" /></td>
<td><img src="./img/ps_blank.png" /></td>
<td><img src="./img/ps_blank.png" /></td>
<td><img src="./img/ps_blank.png" /></td>
<td><img src="./img/ps_blank.png" /></td>
<td><img src="./img/ps_blank.png" /></td>
<!-- <td><img src="./img/ps_blank_right.png" /></td>
 --></tr>
<tr>
<td><img src="./img/blank.png" /></td>
<td><img id="newsix1" src="./img/blank.png" class="grid"/>
	<img id="newsix" src="./img/blank.png" class="number" /></td>
<td><img id="five1" src="./img/2_ps_five.png" class="grid"/>
	<img id="five" src="./img/1_ps_five.png" class="number" /></td>
<td><img id="four1" src="./img/2_ps_four.png" class="grid"/>
	<img id="four" src="./img/1_ps_four.png" class="number" /></td>
<td><img id="three1" src="./img/2_ps_three.png" class="grid"/>
	<img id="three" src="./img/1_ps_three.png" class="number" /></td>
<td><img id="two1" src="./img/2_ps_two.png" class="grid"/>
	<img id="two" src="./img/1_ps_two.png" class="number" /></td>
<td><img id="one1" src="./img/2_ps_one.png" class="grid"/>
	<img id="one" src="./img/1_ps_one.png" class="number" /></td>
<td><img src="./img/blank.png" /></td>
<!-- <td><img src="./img/ps_blank_right.png" /></td>
 --></tr>
</tbody>
</table>
<table>
<tbody>
<tr>
	<td><img id="forty" src="./img/ic_action_40.png" style="height: 44%;"/></td>
</tr>
<tr>
	<td><img id="thirtynine" src="./img/ic_action_39.png" style="height: 44%;"/></td>
</tr>
<tr>
	<td><img id="thirtyeight" src="./img/ic_action_38.png" style="height: 44%;"/></td>
</tr>
<tr>
	<td><img id="thirtyseven" src="./img/ic_action_37.png" style="height: 44%;"/></td>
</tr>
<tr>
	<td><img id="thirtysix" src="./img/ic_action_36.png" style="height: 44%;"/></td>
</tr>
<tr>
	<td><img id="thirtyfive" src="./img/ic_action_35.png" style="height: 44%;"/></td>
</tr>
<tr>
	<td><img id="thirtyfour" src="./img/ic_action_34.png" style="height: 44%;"/></td>
</tr>
<tr>
	<td><img id="thirtythree" src="./img/ic_action_33.png" style="height: 44%;"/></td>
</tr>
<tr>
	<td><img id="thirtytwo" src="./img/ic_action_32.png" style="height: 44%;"/></td>
</tr>
	<td><img id="thirtyone" src="./img/ic_action_31.png" style="height: 44%;"/></td>
</tr>
<tr>
	<td><img id="thirty" src="./img/ic_action_30.png" style="height: 44%;"/></td>
</tr>
<tr>
	<td><img id="twentynine" src="./img/ic_action_29.png" style="height: 44%;"/></td>
</tr>
<tr>
	<td><img id="twentyeight" src="./img/ic_action_28.png" style="height: 44%;"/></td>
</tr>
<tr>
	<td><img id="twentyseven" src="./img/ic_action_27.png" style="height: 44%;"/></td>
</tr>
<tr>
	<td><img id="twentysix" src="./img/ic_action_26.png" style="height: 44%;"/></td>
</tr>
<tr>
	<td><img id="twentyfive" src="./img/ic_action_25.png" style="height: 44%;"/></td>
</tr>
</tbody>
</table>
<table>
<tbody>
<tr>
	<td><img id="grid" src="./img/ps_blank_left.png"/></td>
</tr>
<tr>
	<td><img id="grid" src="./img/ps_blank_left.png" /></td>
</tr>
<tr>
	<td><img id="grid" src="./img/ps_blank_left.png" /></td>
</tr>
<tr>
	<td><img id="grid" src="./img/ps_blank_left.png" /></td>
</tr>
<tr>
	<td><img id="grid" src="./img/ps_blank_left.png" /></td>
</tr>
<tr>
	<td><img id="grid" src="./img/ps_blank_left.png" /></td>
</tr>
</tbody>
</table>
</div>
    
	<script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
	<script src="js/index.js"></script>
	<script src="js/data2.js"></script>
	<footer><div class="backdrop"></div>
<div class="fab child" data-subitem="1"><a href='index.php?floor=1'><span>1</span></a></div>
<div class="fab child" data-subitem="2"><a href='index_2.php?floor=2'><span>2</span></a></div>
<div class="fab" id="masterfab"><span>+</span></div></footer>
</body>
</html>