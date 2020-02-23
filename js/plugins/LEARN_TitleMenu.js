    Scene_Title.prototype.createForeground = function() {
    if ($dataSystem.optDrawTitle) {
        var gameLogo = ImageManager.loadBitmap("img/mndtitle/", "GameLogo");
        this._gameTitleSprite = new Sprite(gameLogo);
        this._gameTitleSprite.anchor = new Point(0.5, 0);
        this._gameTitleSprite.x = Graphics.width / 2;
        this._gameTitleSprite.y = 10;
        this.addChild(this._gameTitleSprite);
    }
};