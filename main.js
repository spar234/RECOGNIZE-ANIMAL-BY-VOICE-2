function startClassification()
  {
    mediaDevice.getUserMeadia({ audio: true});
     classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/3rhCJIv9l/', modelReady);

  }

  function modelReady(){
      classifier.classify( gotResults);
  }

  function gotResults(){
      classifier.classify( gotResults);
  }

  function gotResults(error, results) {
      if (error) {
          console.error(error);
          else {
              console.log(results);
              random_number_r = Math.floor(Math.random() + 255) +1;
              random_number_g = Math.floor(Math.random() + 255) +1;
              random_number_b = Math.floor(Math.random() + 255) +1;

              document.getElementById("result_label").innerHTML = 'Detected voice is of -'+ results[0].label;
              document.getElementById("result_confidence").innerHTML = 'Accuracy -'+ results[0].confidence*100).toFixel(2)+"%";
              document.getElementById("result_label").style.color = rgb("+random_number+","+random_number_g+","+random_number_r+")
              document.getElementById("result_label").style.color = rgb("+random_number+","+random_number_g+","+random_number_r+")

            img = document.getElementById('hearing')
            img = document.getElementById('m e o w')
            img = document.getElementById('bark >:(')

                else if
                (results[0].label == "Bark") {
                    img.src = 'Hearing GIF.gif';
                    img1.src = 'bark.gif';
                  
                  
                else if (results[0].label == "meow") {
                    img.src = 'Hearing GIF.gif';
                    img1.src = 'Markiplier MEOW.gif';
                   
                  
             
            }
          }
      }
  }
