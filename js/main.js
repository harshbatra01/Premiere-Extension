// (function () {
//  'use strict';
//  var path, slash;
//  path = location.href;
// 	if(getOS() == "MAC") {
// 		slash = "/";
// 		path = path.substring(0, path.length - 11);
// 	}
// 	if(getOS() == "WIN") {
// 		slash = "/";
// 		path = path.substring(8, path.length - 11);
// 	}

//  }());

function getOS() {
 		var userAgent = window.navigator.userAgent,
 		platform = window.navigator.platform,
 		macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
 		windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
 		os = null;

 		if(macosPlatforms.indexOf(platform) != -1) {
 			os = "MAC";
 		} else if(windowsPlatforms.indexOf(platform) != -1) {
 			os = "WIN";
 		}
 		return os;
 	}

function goIntoJSX(){
	var args = "Test Text";
	var layerNames = undefined;
	var csinterface = new CSInterface();
	csinterface.evalScript('getLayerNames("' + args + '")',function(res){
	layerNames = JSON.parse(res);
});

}

function addFilesJS(){
	alert("hi");
	var csinterface = new CSInterface();
	csinterface.evalScript("$._PPP_.addFiles()",function(){
		// interface.evalScript('af()',function(res){
})}






