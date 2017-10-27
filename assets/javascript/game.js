var yourGuess = 0;
var wins = 0;
var losses = 0;
var crystals = [5, 1, 7, 10]

$(document).ready(function() {

    numberToGuess = Math.floor(Math.random()*81)+19;
    $('#match').text(numberToGuess);

	$('#crystal1').click(function(){
		yourGuess += crystals[0];	
		$("#totalScore").text(yourGuess);
		checkYourGuess(yourGuess);
	});	

	$('#crystal2').click(function(){
		yourGuess += crystals[1];	
		$("#totalScore").text(yourGuess);
		checkYourGuess(yourGuess);
	});	

	$('#crystal3').click(function(){
		yourGuess += crystals[2];	
		$("#totalScore").text(yourGuess);
		checkYourGuess(yourGuess);
	});	

	$('#crystal4').click(function(){
		yourGuess += crystals[3];	
		$("#totalScore").text(yourGuess);
		checkYourGuess(yourGuess);
	});	

	function checkYourGuess(currentYourGuess) {
		if (currentYourGuess == numberToGuess) {
			$("#wins").text(wins += 1 );
			alert("YOU WON!");
			resetGuess();	
			initializeComputerGuess();
		} else if (currentYourGuess >= numberToGuess){
			$("#losses").text(losses += 1 );
			alert("YOU LOSE!");
			resetGuess();
			initializeComputerGuess();
		}
	}

	function resetGuess(){
		yourGuess = 0;
		$('#totalScore').text(yourGuess);
		checkYourGuess;
	}

	function initializeComputerGuess() {
		numberToGuess = 0;
		numberToGuess = Math.floor(Math.random()*81)+19;
		$('#match').text(numberToGuess);
	}

});
	

