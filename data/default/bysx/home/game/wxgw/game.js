
	
	function Resizable(wi, hi)
	{
		Sprite.call(this);
		
		this.w = wi;
		this.h = hi;
		this.margin = 30;
	}
	Resizable.prototype = new Sprite();
	
	Resizable.prototype.resize = function(wi, hi)
	{
		this.w = wi;
		this.h = hi;
	}

	function MarginCont(size, margin)
	{
		Resizable.call(this);
		
		this.size = size;
		this.MARGIN = margin;
		
		this.w = 1;
		this.h = 1;
		
		//	0 --- 1
		//  |     |
		//  2 --- 3
		
		this.items = [[], [], [], []];
		this.cont = new Sprite();
		this.addChild(this.cont);
	}
	MarginCont.prototype = new Resizable();
	
	MarginCont.prototype.resize = function(wi, hi)
	{
		this.w = wi;  this.h = hi;
		var min = Math.min(wi, hi);
		this.cont.scaleX = this.cont.scaleY = min / this.size;
		
		var cw = wi / this.cont.scaleX;
		var ch = hi / this.cont.scaleX;
		
		for(var i=0; i<this.items[0].length; i++)
		{
			var it = this.items[0][i];
			var pit = this.items[0][i-1];
			it.x = this.MARGIN;
			if(i==0) it.y = this.MARGIN;
			else it.y = pit.y + pit.height + this.MARGIN;
		}
		
		for(var i=0; i<this.items[1].length; i++)
		{
			var it = this.items[1][i];
			var pit = this.items[1][i-1];
			it.x = cw - it.width - this.MARGIN;
			if(i==0) it.y = this.MARGIN;
			else it.y = pit.y + pit.height + this.MARGIN;
		}
		
		for(var i=0; i<this.items[2].length; i++)
		{
			var it = this.items[2][i];
			var pit = this.items[2][i-1];
			it.x = this.MARGIN;
			if(i==0) it.y = ch - it.height - this.MARGIN;
			else  it.y = pit.y - it.height - this.MARGIN;
		}
		
		for(var i=0; i<this.items[3].length; i++)
		{
			var it = this.items[3][i];
			var pit = this.items[3][i-1];
			it.x = cw - it.width - this.MARGIN;
			if(i==0) it.y = ch - it.height - this.MARGIN;
			else  it.y = pit.y - it.height - this.MARGIN;
		}
	}
	
	MarginCont.prototype.add = function(item, pos)
	{
		this.items[pos].push(item);
		this.cont.addChild(item);
		this.resize(this.w, this.h);
	}
	
	MarginCont.prototype.remove = function(item, pos)
	{
		if(this.items[pos].indexOf(item)==-1) throw "no such item in container";
		this.items[pos].splice(this.items[pos].indexOf(item), 1);
		this.cont.removeChild(item);
		this.resize(this.w, this.h);
	}
	
	
	
	
	function RectCont(sizeX, sizeY, spread)
	{
		Resizable.call(this);
		
		this.sizeX = sizeX;
		this.sizeY = sizeY;
		this.spread = (spread==null?false:spread);
		
		this.cont = new Sprite();
		this.addChild(this.cont);
	}
	RectCont.prototype = new Resizable();
	
	RectCont.prototype.resize = function(wi, hi)
	{
		this.w = wi;  this.h = hi;
		//var min = Math.min(wi, hi);
		var comp = this.spread ? Math.max : Math.min;
		this.cont.scaleX = this.cont.scaleY = comp( wi/this.sizeX, hi/this.sizeY);
		
		this.cont.x = (wi-this.sizeX*this.cont.scaleX)/2;
		this.cont.y = (hi-this.sizeY*this.cont.scaleY)/2;
	}
	
	RectCont.prototype.add    = function(item)
	{
		this.cont.addChild(item);
	}
	RectCont.prototype.remove = function(item)
	{
		this.cont.removeChild(item);
	}
	
	
	
	
function MainMenu(wi, hi)
{
	Resizable.call(this, wi, hi);
}
MainMenu.prototype = new Resizable();

MainMenu.prototype.GoPlay = function()
{
	this.dispatchEvent(new Event("GoPlay", true));
}

	function LevelSelect(wi, hi)
	{
		Resizable.call(this, wi, hi);
		
		this.levelData = new Object();	// info about selected level
	}
	LevelSelect.prototype = new Resizable();
	
	LevelSelect.prototype.LevelDone = function(o){}
		
	LevelSelect.prototype.GoBack = function(o)
	{
		this.dispatchEvent(new Event("GoBack", true));
	}
		
	LevelSelect.prototype.LevelChosen = function(o)
	{
		this.dispatchEvent(new Event("LevelChosen", true));
	}
	function GameControl(wi, hi)
	{
		Resizable.call(this, wi, hi);
		
		this.result = {}; 		// result of the last gameplay
	}
	GameControl.prototype = new Resizable();
		
	GameControl.prototype.GameDone = function(o)
	{
		this.dispatchEvent(new Event("GameDone", true));
	}
	
	GameControl.prototype.Restart = function(o)
	{
		this.dispatchEvent(new Event("Restart", true));
	}
	
	GameControl.prototype.ExitGame = function(o)
	{
		this.dispatchEvent(new Event("ExitGame", true));
	}

	/*
		There are 3 states in the game
		
		
		1. MainMenu		2. LevelSelect		3.GameControl
													|
													Game
	*/
	function Main(wi, hi)
	{
		Resizable.call(this, wi, hi);
		this.mm;
		this.ls;
		this.gc;
		
		this.addEventListener2("GoPlay",		Main.GoPlay		 , this	);		// 1 -> 2
		this.addEventListener2("GoBack",		Main.GoBack		 , this	);		// 2 -> 1		
		this.addEventListener2("LevelChosen", 	Main.LevelChosen , this	);		// 2 -> 3
		this.addEventListener2("GameDone", 		Main.GameDone	 , this	);		// 3 -> 2 when finished
		this.addEventListener2("ExitGame",		Main.ExitGame	 , this	);		// 3 -> 2 when exiting a game
		
		this.addEventListener2(Event.ADDED_TO_STAGE, this.onATS, this);
	}	
	Main.prototype = new Resizable();
	
	Main.prototype.onATS = function(e)
	{
		this.stage.addEventListener2(Event.RESIZE, this.resize, this);
		this.resize(null);
	}

	Main.prototype.resize = function(e)
	{
		var wi = this.stage.stageWidth;
		var hi = this.stage.stageHeight;
		this.w = wi;  this.h = hi;
		if(this.mm) this.mm.resize(wi, hi);
		if(this.ls) this.ls.resize(wi, hi);
		if(this.gc) this.gc.resize(wi, hi);
	}
	
	Main.GoPlay = function(e)
	{
		this.removeChild(this.mm);
		this.addChild(this.ls);
	}
	
	Main.GoBack = function(e)
	{
		this.removeChild(this.ls);
		this.addChild(this.mm);
	}
	
	Main.LevelChosen = function(e)
	{
		this.removeChild(this.ls);
		this.addChild(this.gc);
		this.gc.StartLevel(this.ls.levelData);
	}
	
	Main.GameDone = function(e)
	{
		var th = e.target;
		this.removeChild(this.gc);
		this.addChild(this.ls);
		this.ls.LevelDone(this.gc.result);
	}
	
	Main.ExitGame = function(e)
	{
		var th = e.target;
		this.removeChild(this.gc);
		this.addChild(this.ls);
	}
	
	var BDFac = new EventDispatcher();
	
	BDFac._bds = {};
	BDFac._urls = {};
	BDFac._toload = 0;
	BDFac._loaded = 0;
	
	BDFac.load = function(key, url)
	{
		if(BDFac._urls[key]!=null) return;	// don't load same key - url pair for the second time
		if(BDFac._bds [key]!=null) throw "BitmapData with key \"" + key + "\" already exists!";
		
		var bd = new BitmapData(url);
		BDFac._bds[key] = bd;
		BDFac._urls[key] = url;
		bd.loader.addEventListener(Event.COMPLETE, BDFac._bdLoaded);
		BDFac._toload ++;
	}
	
	BDFac.get = function(key) {  if(BDFac._bds[key]==null) throw "No BitmapData with key \""+key+"\"!";  return BDFac._bds[key];  }
	
	BDFac._bdLoaded = function(e)
	{
		BDFac._loaded++;
		if(BDFac._toload == BDFac._loaded) BDFac.dispatchEvent(new Event(Event.COMPLETE));
	}