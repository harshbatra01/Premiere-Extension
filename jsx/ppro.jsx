// function getClipName(){
//   var clipName = app.project.sequence[0].videoTracks[0].clips[0].name;
// }

function addFiles() {

      // var elem = {
      //   index: 0,
      //   message: {
      //     role: "assistant",
      //     content: [{ asset: "document", timestamp: 0 }]
      //   },
      //   logprobs: null,
      //   finish_reason: "stop"
      // };
     
      // var elements = elem.message.content;

      // var elements = [
      //   { asset: "computer-display", timestamp: 4 },
      //   { asset: "right arrow", timestamp: 18 },
      //   { asset: "clock-time", timestamp: 24 },
      //   { asset: "videocam", timestamp: 29 }
      // ];

      var elements = [
        {
            asset: "Community Support Crowd.mov",
            timestamp: 0
        },
        {
            asset: "Growth Grow Increase.mov",
            timestamp: 0
        },
        {
            asset: "Document File Paper.mov",
            timestamp: 2.75
        },
        {
            asset: "People Friends Group.mov",
            timestamp: 7.6
        },
        {
            asset: "Write Pen Pencil Highlight.mov",
            timestamp: 12.5
        },
        {
            asset: "Network Computing LAN.mov",
            timestamp: 16.1
        },
        {
            asset: "Alert Warning Caution.mov",
            timestamp: 21.7
        }
    ];
    
    
    
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var time = element.timestamp;
        var name = element.asset;
        var filePath = "/Users/harshbatra/Downloads/Animated Icons/animated-icons-2/" + name;     
        var importCompleted = app.project.importFiles([filePath], false);

        var j,k,importedItem2,importedItem3;

        for( j=0; j<app.project.rootItem.children.length; j++){
          if(app.project.rootItem.children[j].name == "SCH - Click - 2.mp3"){
            importedItem2 = app.project.rootItem.children[j];
            break;
          }
        }

        for( k=0; k<app.project.rootItem.children.length; k++){
          if(app.project.rootItem.children[k].name == "Synthwave.mp3"){
            importedItem3 = app.project.rootItem.children[k];
            break;
          }
        }

        if (importCompleted) {
          var importedItem = app.project.rootItem.children[app.project.rootItem.children.length - 1];
          if (importedItem) {
            var sequence = app.project.activeSequence;
    
            // Check for active sequence  
            if (sequence) {
              try {
                sequence.videoTracks[1].insertClip(importedItem, time);
                sequence.audioTracks[2].insertClip(importedItem2, time);
                sequence.audioTracks[1].insertClip(importedItem3, 0);
              } catch (error) {
                alert("Error inserting clip:");
              }
            } else {
              alert("Active sequence not found.");
            }
          } else {
            alert("Imported item not found.");
          }
        }
      }
}
addFiles();
