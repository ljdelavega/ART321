(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.basketball = function() {
	this.spriteSheet = ss["Art321Animation_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hoop = function() {
	this.spriteSheet = ss["Art321Animation_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.basketball_symbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.basketball();
	this.instance.setTransform(0,0,0.167,0.167);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50.1,50.1);


// stage content:
(lib.Art321Animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.basketball_symbol();
	this.instance.setTransform(55.6,345.6,1,1,0,0,0,25.1,25.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:25,regY:25,x:67.7,y:342},0).wait(1).to({x:79.6,y:338.6},0).wait(1).to({x:91.1,y:335.1},0).wait(1).to({x:102.3,y:331.7},0).wait(1).to({x:113.1,y:328.3},0).wait(1).to({x:123.6,y:324.8},0).wait(1).to({x:133.7,y:321.4},0).wait(1).to({x:143.6,y:317.9},0).wait(1).to({x:153.1,y:314.5},0).wait(1).to({x:162.3,y:311.1},0).wait(1).to({x:171.3,y:307.6},0).wait(1).to({x:179.9,y:304.2},0).wait(1).to({x:188.3,y:300.7},0).wait(1).to({x:196.4,y:297.3},0).wait(1).to({x:204.3,y:293.9},0).wait(1).to({x:211.9,y:290.4},0).wait(1).to({x:219.2,y:287},0).wait(1).to({x:226.4,y:283.5},0).wait(1).to({x:233.3,y:280.1},0).wait(1).to({x:240,y:276.7},0).wait(1).to({x:246.4,y:273.2},0).wait(1).to({x:252.7,y:269.8},0).wait(1).to({x:258.8,y:266.3},0).wait(1).to({x:264.7,y:262.9},0).wait(1).to({x:270.4,y:259.5},0).wait(1).to({x:275.9,y:256},0).wait(1).to({x:281.3,y:252.6},0).wait(1).to({x:286.4,y:249.1},0).wait(1).to({x:291.5,y:245.7},0).wait(1).to({x:296.4,y:242.3},0).wait(1).to({x:301.1,y:238.8},0).wait(1).to({x:305.7,y:235.4},0).wait(1).to({x:310.2,y:231.9},0).wait(1).to({x:314.5,y:228.5},0).wait(1).to({x:318.7,y:225.1},0).wait(1).to({x:322.8,y:221.6},0).wait(1).to({x:326.8,y:218.2},0).wait(1).to({x:330.7,y:214.7},0).wait(1).to({x:334.5,y:211.3},0).wait(1).to({x:338.2,y:207.9},0).wait(1).to({x:341.7,y:204.4},0).wait(1).to({x:345.3,y:201},0).wait(1).to({x:348.7,y:197.5},0).wait(1).to({x:352,y:194.1},0).wait(1).to({x:355.3,y:190.7},0).wait(1).to({x:358.5,y:187.2},0).wait(1).to({x:361.7,y:183.8},0).wait(1).to({x:364.7,y:180.3},0).wait(1).to({x:367.8,y:176.9},0).wait(1).to({x:370.7,y:173.5},0).wait(1).to({x:373.7,y:170},0).wait(1).to({x:376.6,y:166.6},0).wait(1).to({x:379.4,y:163.1},0).wait(1).to({x:382.2,y:159.7},0).wait(1).to({x:384.9,y:156.3},0).wait(1).to({x:387.7,y:152.8},0).wait(1).to({x:390.4,y:149.4},0).wait(1).to({x:393,y:145.9},0).wait(1).to({x:395.7,y:142.5},0).wait(1).to({x:398.3,y:139.1},0).wait(1).to({x:400.9,y:135.6},0).wait(1).to({x:403.5,y:132.2},0).wait(1).to({x:406.1,y:128.7},0).wait(1).to({x:408.6,y:125.3},0).wait(1).to({x:411.1,y:121.9},0).wait(1).to({x:413.7,y:118.4},0).wait(1).to({x:416.2,y:115},0).wait(1).to({x:418.7,y:111.5},0).wait(1).to({x:421.2,y:108.1},0).wait(1).to({x:423.7,y:104.7},0).wait(1).to({x:426.2,y:101.2},0).wait(1).to({x:428.7,y:97.8},0).wait(1).to({x:431.2,y:94.3},0).wait(1).to({x:433.7,y:90.9},0).wait(1).to({x:436.2,y:87.5},0).wait(1).to({x:438.7,y:84},0).wait(1).to({x:441.2,y:80.6},0).wait(1).to({x:443.7,y:77.2},0).to({_off:true},1).wait(1));

	// Layer 1
	this.instance_1 = new lib.hoop();
	this.instance_1.setTransform(740,13.2,0.797,0.683,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(305.5,213.2,709.6,409.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;