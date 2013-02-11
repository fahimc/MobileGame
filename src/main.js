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
		Event.addListener(TeaBreak, TeaBreak.event.PAGE_CHANGE, onPageChange);
	}

	function onReady() {
		var holder = document.getElementById('gameHolder');
		console.log(holder);
		
	}
	
	function onPageChange(index)
	{
		TicTac.onPageChange();
	}

	Main();
})(window);
