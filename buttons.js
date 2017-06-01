function Button(settings) = document.addEventListener('click', function(event){

var targetName = event.target;
switch(targetName.id): {
	case reset: window.refresh();
		//reset the game
		break;
	case pause: window.pauseAnimationFrame(requestId);
       requestId = undefined;
		//pause the game
		break;
	case play: window.requestAnimationFrame(loop);
		//continue the game
		break;
	default:
		break;
}
