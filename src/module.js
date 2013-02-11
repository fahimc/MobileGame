Module.game = function(node, view) {
	var div = document.createElement('div');
	var blockHolder;
	var block;
	var img;
	for (var a = 0; a < 9; a++) {
		blockHolder = document.createElement('div');
		blockHolder.className = "blockHolder";
		div.appendChild(blockHolder);
		
		block = document.createElement('div');
		block.setAttribute("index",a);
		block.className = "block";
		block.id = "block-"+a;
		blockHolder.appendChild(block);
		
		img = new Image();
		img.src="resource/image/x.png";
		img.id="x-"+a;
		img.className="x";
		block.appendChild(img);
		
		img = new Image();
		img.src="resource/image/0.png";
		img.id="o-"+a;
		img.className="o";
		block.appendChild(img);
		
		Spider.event.addListener(block.id, 'click',TicTac.onClick);
	}
	child = document.createElement('div');
	child.className = "clear";
	div.appendChild(child);
	Module.setup(node, div);
	return div;
}
var TicTac=
{
	currentType:"x",
	onClick:function(obj,event)
	{
		var element = event.srcElement|| event.target;
		var index =element.id.split("-")[1];
		var holder = document.getElementById("block-"+index);
		if(holder.className.indexOf('selected')>=0)return;
		holder.className+=" selected";	
		var obj;
		if(TicTac.currentType=="x")
		{
			obj = document.getElementById("x-"+index);	
			TicTac.currentType="o";		
		}else{
			obj = document.getElementById("o-"+index);	
			TicTac.currentType="x";	
		}
		TicTac.setOpacity(obj,1);
		
	},
	setOpacity:function(obj,value)
	{
		if(obj.style['-ms-filter'])obj.style['-ms-filter'] = "progid:DXImageTransform.Microsoft.Alpha(Opacity="+(value*100)+")";
		obj.style['filter'] = "alpha(opacity="+(value*100)+")";
		obj.style['-moz-opacity'] = value;
		obj.style['-khtml-opacity'] = value;
		obj.style['opacity'] = value;
	},
	destroy:function()
	{
		for (var a = 0; a < 9; a++) {
			var holder = document.getElementById("block-"+a);
			holder.className = holder.className.replace(" selected","");
			var x = document.getElementById("x-"+a);	
			var o = document.getElementById("o-"+a);	
			TicTac.setOpacity(x,0);
			TicTac.setOpacity(o,0);
		}
	},
	onPageChange:function(index)
	{
		console.log(Spider.controller.currentIndex);
		switch(Number(Spider.controller.currentIndex))
		{
			case 0:
			console.log("here");
				TicTac.destroy();
			break;
		}
	}
}
