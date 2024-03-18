// function getClipName(){
//   var clipName = app.project.sequence[0].videoTracks[0].clips[0].name;
// }
app.enableQE();

function addFiles() {

        
        var data = {
                index: 0,
                message: {
                  role: 'assistant',
                  content: '{\n' +
                    '  1: {\n' +
                    '    asset: "Growth Grow Increase.mov",\n' +
                    '    timestamp: 0\n' +
                    '  },\n' +
                    '  2: {\n' +
                    '    asset: "Mind Thinking Thought.mov",\n' +
                    '    timestamp: 2.86\n' +
                    '  },\n' +
                    '  3: {\n' +
                    '    asset: "Community Support Crowd.mov",\n' +
                    '    timestamp: 4.14\n' +
                    '  },\n' +
                    '  4: {\n' +
                    '    asset: "Document File Paper.mov",\n' +
                    '    timestamp: 8.46\n' +
                    '  },\n' +
                    '  5: {\n' +
                    '    asset: "People Friends Group.mov",\n' +
                    '    timestamp: 13.58\n' +
                    '  },\n' +
                    '  6: {\n' +
                    '    asset: "Suitcase business job.mov",\n' +
                    '    timestamp: 17.139\n' +
                    '  },\n' +
                    '  7: {\n' +
                    '    asset: "Vision Eyes Eyeinhand.mov",\n' +
                    '    timestamp: 22.1\n' +
                    '  },\n' +
                    '  8: {\n' +
                    '    asset: "wrong No avoid.mov",\n' +
                    '    timestamp: 24.98\n' +
                    '  }\n' +
                    '}'
                },
                logprobs: null,
                finish_reason: 'stop'
              }
        const elements = JSON.parse(data);


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
//   addFiles();

function mogrtTesting() {
        var sequence = app.project.activeSequence;
        var videoT = sequence.videoTracks[0];
      
        // Replace "/Users/Downloads/mgt/Devin.mogrt" with your actual MOGRT file path
        var mogrtFile = new File("/Users/Downloads/mgt/Devin.mogrt");
      
        try {
          sequence.importMGT(mogrtFile.fsname, 0, videoT, sequence.audioTracks[0]);
          alert("MOGRT imported successfully!");
        } catch (error) {
          alert("Error importing MOGRT:" + error);
          // Handle errors appropriately
        }
      }
      
      // Example usage:
function mogrtTest2(){
        // Assuming you have the sequence index and track offsets defined
var pathToMOGRT = "/Users/harshbatra/Downloads/mgt/Devin.mogrt"; // Replace with the actual path to your MOGRT file
var timeToInsert = "2"; // Replace with the time at which you want to insert the MOGRT
var vidTrackOffset = 0; // Replace with the video track offset
var audTrackOffset = 0; // Replace with the audio track offset

app.project.activeSequence.importMGT(pathToMOGRT, timeToInsert, vidTrackOffset, audTrackOffset);

}

function addEffects() {
  var sequence = app.project.activeSequence;
  var tracks = sequence.videoTracks;
  var mainTrack = tracks[0];
  var clips = mainTrack.clips;
  var mainClip = clips[0];
  var effect = mainClip.components;
  var sequence = qe.project.getActiveSequence();
    // var clip = sequence.getVideoTrackAt(0).getItemAt(0);
    // clip.addVideoEffect(qe.project.getVideoEffectByName("Tint"));

  if(effect){
    for(var i=0;i<effect.numItems;i++){
      
      if(effect[i].displayName === 'Tint'){
        
        effect[i].properties[2].setValue(50, true);
      }
      
    }
  }
  else{
    alert("error");
  }
  
  // clip.addVideoEffect(qe.project.getVideoEffectByName("Color Balance (RGB)"));

  // // Set property of the effect using QE DOM
  // var components = clip.components;
  // var effect;
  // if (components) {
  //   for (var i = 0; i < components.numItems; i++) {
  //     if (components[i] && components[i].displayName === "Color Balance (RGB)") {
  //        effect = components[i];
  //        break; 
  //      }
  //    }
   
  //    if (effect) {
  //      // Adjust the Red, Green, and Blue properties
  //      effect.properties[0].setValue(0.5, true); // Example: Setting the Red property to 0.5
  //      effect.properties[1].setValue(0.7, true); // Example: Setting the Green property to 0.7
  //      effect.properties[2].setValue(0.8, true); // Example: Setting the Blue property to 0.8
  //    } else {
  //      alert("Color Balance (RGB) effect not found in the components.");
  //    }
  // } else {
  //   alert("Components not found.")
  // }
}



addEffects();