var _Scene_Title_create = Scene_Title.prototype.create;
Scene_Title.prototype.create = function () {
    _Scene_Title_create.call(this);
    this._commandWindow.visible = false;//不显示原始的文本菜单
    this._commandWindow.x=Graphics.width;//移到画面外去，否则虽然不显示仍能点击
    var btnimgs=["CmdStartGame", "CmdContinueGame", "CmdOptions"];
    var clicks=[
        function(){this.commandNewGame(); SoundManager.playOk();},
        function(){this.commandContinue(); SoundManager.playOk();},
        function(){this.commandOptions(); SoundManager.playOk();},
            ];
   
 this._cmdButtons=[];//所有图片菜单
    for(var i=0;i<btnimgs.length;i++){
        var sprite=new Sprite_Button();
        sprite.width=200;
        sprite.height=76;
        sprite.bitmap=ImageManager.loadBitmap("img/mndtitle/",btnimgs[i]);
        sprite.x=Graphics.width/2-100;
        sprite.y=450+80*i;
        sprite.setClickHandler(clicks[i].bind(this));
        this._cmdButtons.push(sprite);
        this.addChild(sprite);
    }
    this._cmdSelect=new Sprite(ImageManager.loadBitmap("img/mndtitle/", "CmdSelect"));//选中菜单的指示器
    this._cmdSelect.anchor=new Point(1,0);//因为按钮的anchor是默认的(0,0),这个指示器要放在按钮左侧，所以让它的anchor为(1,0)更容易定位
    this.addChild(this._cmdSelect);
};

var _Scene_Title_update = Scene_Title.prototype.update;
Scene_Title.prototype.update = function() {
    _Scene_Title_update.call(this);

 var btnSelect = this._cmdButtons[this._commandWindow.index()];
    this._cmdSelect.x = btnSelect.x;
    this._cmdSelect.y = btnSelect.y;
};
