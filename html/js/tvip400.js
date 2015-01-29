function TVIP400 () {

	this.APIURLCONST = "PANTILTCONTROL.CGI?";
	this.STREAMURLCONST = "video.cgi?";
	this.SNAPSHOPURLCONST = "snapshot.cgi?";
	this.STOPDELAY = 1000;
	this.presetMap = {
		"1" : "31",
		"2" : "33",
		"3" : "35",
		"4" : "37",
		"5" : "39",
		"6" : "41",
		"7" : "43",
		"8" : "45"
		}
	
	this.getVideoStreamEndPoint = function() {
		return this.STREAMURLCONST;
		};
	
	this.getSnapshotEndPoint = function() {
		return this.SNAPSHOPURLCONST;
		};	
	
	this.left = function(baseURL, queryString) {
		this.makeAjaxRequest(baseURL, queryString, "3");
		this.afterCommandRequest(baseURL, queryString);
	};

	this.right = function(baseURL, queryString) {
		this.makeAjaxRequest(baseURL, queryString, "5");
		this.afterCommandRequest(baseURL, queryString);
	};
	
	this.up = function(baseURL, queryString) {
		this.makeAjaxRequest(baseURL, queryString, "1");
		this.afterCommandRequest(baseURL, queryString);
	};
	
	this.down = function(baseURL, queryString) {
		this.makeAjaxRequest(baseURL, queryString, "7");
		this.afterCommandRequest(baseURL, queryString);
	};
	
	
	this.up_left = function(baseURL, queryString) {
		this.makeAjaxRequest(baseURL, queryString, "0");
		this.afterCommandRequest(baseURL, queryString);
	};


	this.up_right = function(baseURL, queryString) {
		this.makeAjaxRequest(baseURL, queryString, "2");
		this.afterCommandRequest(baseURL, queryString);
	};
	
	this.down_left = function(baseURL, queryString) {
		this.makeAjaxRequest(baseURL, queryString, "6");
		this.afterCommandRequest(baseURL, queryString);
	};
	
	this.down_right = function(baseURL, queryString) {
		this.makeAjaxRequest(baseURL, queryString, "8");
		this.afterCommandRequest(baseURL, queryString);
	};

	
	this.stop =  function(baseURL,queryString) {

	};
	
	this.center = function(baseURL,queryString) {
		this.makeAjaxRequest(baseURL, queryString, "4");

	};
	
	this.afterCommandRequest = function(baseURL, queryString) {
		setTimeout($.proxy(this.stop, this, baseURL, queryString), this.STOPDELAY);
	}
	
	this.ir_on =  function(baseURL, queryString) {
		this.makeAjaxRequest(baseURL, queryString, "95");
	};
	
	this.ir_off =  function(baseURL, queryString) {
		this.makeAjaxRequest(baseURL, queryString, "94");
	};
	
	this.goto_preset =  function(baseURL, queryString, presetNumber) {
		if (presetNumber in this.presetMap) {
			this.makeAjaxRequest(baseURL, queryString, this.presetMap[presetNumber]);
			}
		
	};

	this.makeAjaxRequest = function(baseURL, queryString, commandNum) {
		data = {PanSingleMoveDegree: 1, TiltSingleMoveDegree: 1, PanTiltSingleMove: commandNum}
		$.ajax({
			type: "POST",
			url: baseURL + this.APIURLCONST + commandNum + "&" + queryString,
			data: data
		});
	};
	
}
