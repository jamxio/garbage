var _logoData, _splashScreenData, _linkProperties;
var	__load = new Array();


var __bg = {

	initGame: function(){
		console.log("initGame")
	},

	pauseGame: function(){
		if(stopTicker)
			stopTicker()
		if(__stageGame)
			__stageGame.mouseChildren = false
	},

	resumeGame: function(){
		if(startTicker)
			startTicker()
		if(__stageGame)
			__stageGame.mouseChildren = true
	},

	splashScreen: function(call){
        if(_splashScreenData.show && _splashScreenData.action) {
            // var splashScreen = document.getElementById('splash-screen');
			initLocations();
            var splash = choiseLocation("splash");

            var mglist = new createjs.Shape();
		 	mglist.graphics.beginFill("#ff0000").drawRect(0, 0, 640, 960);
		 	splash.hitArea = mglist;
            splash.addEventListener('click', _splashScreenData.action);//
            // splashScreen.classList.remove('gone');

            window.setTimeout(function() {
                // splashScreen.classList.add('gone');
                call();
            }, 2000);
        } else {
            call();
        }
	},

	logo: function(){
		var mg = new createjs.Bitmap(images["logo"])
		var sc = (200/__koefDisplay) / mg.getBounds().width
		mg.scaleX = mg.scaleY = sc
		setCoor(mg, 46, 677);
		var mglist = new createjs.Shape();
	 	mglist.graphics.beginFill("#ff0000").drawRect(0, 0, 200/__koefDisplay, 200/__koefDisplay);
	 	mg.hitArea = mglist;
		mg.addEventListener("click", function(){
													_logoData.action()
											});

		return mg
		
	},

	moreGames: function(){
        game_login();
        return;
		//_linkProperties.action()
	}

}

GameAPI.loadAPI(function (apiInstance) {
        //console.log('GameAPI version ' + apiInstance.version + ' loaded!');
        _logoData = apiInstance.Branding.getLogo();
        _splashScreenData = apiInstance.Branding.getSplashScreen();
        _linkProperties = apiInstance.Branding.getLink('more_games');

        GameAPI.Game.on('pause',__bg.pauseGame)
        GameAPI.Game.on('resume', __bg.resumeGame)

        if(_logoData.image){
        	__load.push({id:"logo", src:_logoData.image, type: createjs.LoadQueue.IMAGE})
        }
    });
