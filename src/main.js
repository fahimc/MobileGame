(function(window) {
	
	function Main() {
		if (window.addEventListener) {
			window.addEventListener("load", onLoad);

		} else {
			window.attachEvent("onload", onLoad);
		}
		
		
		
	}

	function onLoad() {

		Event.addListener(TeaBreak, TeaBreak.event.COMPLETE, onReady);
	}

	function onReady() {
		var holder = document.getElementById('gameHolder');
		console.log(holder);
		
	}

	Main();
})(window);
