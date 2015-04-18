
var $itemsPI = $('#items-PI');
var $t_itemPI = $('#title-item-PI');
var $itemsMI = $('#items-MI');
var $t_itemMI = $('#title-item-MI');
var $itemsSI = $('#items-SI');
var $t_itemSI = $('#title-item-SI');
var $user = $('#user');
var $userOptions = $('#userOptions')
var $specific = $('#specific')
var $searchMach = $('#searchMach')

function seeItemsPI(){
	$itemsPI.slideToggle();
}

function seeItemsMI(){
	$itemsMI.slideToggle();
}

function seeItemsSI(){
	$itemsSI.slideToggle();
}

function seeOptionsUser(){
	$userOptions.slideToggle();
}

function seeForm(){
	$searchMach.slideToggle();
}


$t_itemPI.click (seeItemsPI);
$t_itemMI.click (seeItemsMI);
$t_itemSI.click (seeItemsSI);
$user.click (seeOptionsUser);
$specific.click (seeForm);

