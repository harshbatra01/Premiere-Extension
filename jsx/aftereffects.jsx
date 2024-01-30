// function getLayerNames() {
//     var layerNames = [];
//     var comp = app.project.activeItem;
//     for(var i = 1; i <= comp.numLayers; i++) {  
//         layerNames.push(comp.layer(i).name);
//     }
//     return JSON.stringify(layerNames);
// }

// function osCheck() {
//         var os = $.os;
//         var match = os.indexOf("Windows");
//         if(match != (-1)) {
//                 var userOS = "PC";
//             } else {
//                  var userOS = "MAC";
//                 }
//             return userOS;
//     }

// function getLayerNames(args){
//     // var layerNames = [];
//     // var comp = app.project.activItem;
//     // for(var i=0;i < comp.numLayers;i++){
//     //     layerNames.push(comp.layer(i).name);
//     // }
//     // return JSON.stringify(layerNames);
//     var layerNames = h;
//     return layerNames;
// }

// function addFiles(){
//     var time;
//     var name= "a";
//     var filePath ="/Users/harshbatra/Downloads/" + name +"".gif"; 
//     var importCompleted = app.project.importFiles([filePath], false);

//     if(importCompleted) {
//         var importedItem = app.project.rootItem.children[(app.project.rootItem.children.length - 1)];
//         var sequence = app.project.activeSequence;
  
//         sequence.videoTracks[0].insertClip(importedItem, time);
//     }
//     app.project.rootItem.children[(app.project.rootItem.children.length - 1)]
//     sequence.videoTracks[0].insertClip(importedItem, time)
// }

// function getClipName(){
//   var clipName = app.project.sequence[0].videoTracks[0].clips[0].name;
// }


$._PPP_={
  
  
addFiles : function (a){ 
  alert("hi" + a );
// for (var i = 0; i < .length; i++) {
      //     var element = elements[i];
      //     var time = element.timestamp;
      //     var name = element.asset;
      //     var filePath = "/Users/harshbatra/Downloads/Animated Icons/" + name + ".gif"; 
      //     var importCompleted = app.project.importFiles([filePath], false);
      
      //     if (importCompleted) {
      //         var importedItem = app.project.rootItem.children[(app.project.rootItem.children.length - 1)];
      //         var sequence = app.project.activeSequence;
      
      //         sequence.videoTracks[1].insertClip(importedItem, time);
      //     }
      // }
      var elements = [
            {
              "asset": "computer-display",
              "timestamp": 4
            },
            {
              "asset": "right arrow",
              "timestamp": 18
            },
            {
              "asset": "clock-time",
              "timestamp": 24
            },
            {
              "asset": "videocam",
              "timestamp": 29
            }
          ];
      var elem = {
        index: 0,
        message: {
          role: 'assistant',
          content: [{"asset": "document", "timestamp": 0}]
        },
        logprobs: null,
        finish_reason: 'stop'
      }

      // var elements = elem.message.content;
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var time = element.timestamp;
        var name = element.asset;
        var filePath = "/Users/harshbatra/Downloads/Animated Icons/" + name + ".gif"; 
        var importCompleted = app.project.importFiles([filePath], false);
    
        if (importCompleted) {
            var importedItem = app.project.rootItem.children[(app.project.rootItem.children.length - 1)];
            var sequence = app.project.activeSequence;
            sequence.videoTracks[1].insertClip(importedItem, time);
        }
      }
      
}
// alert('hi')
// addFiles();
}