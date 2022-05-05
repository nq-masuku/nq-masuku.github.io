(function() {
    "use strict";
    
    window.onload = function() {
        const DEFAULT_INTERVAL = 250;
    
        
        let speed = DEFAULT_INTERVAL;
        let frameLength = 0;
        let index = 0;
        let startInterval = null;
        let isRunning = false;
        let firstFrame = null;
        let frame = null;
    
     
       
        let startBtn = document.getElementById("start");
        let stopBtn = document.getElementById("stop");
        let speedBox = document.getElementById("turbo");
        let fontSize = document.getElementById("fontsize");
        let animation = document.getElementById("animation");
        let textArea = document.getElementById("text-area");
    
        
        function changeAnimation() {
            let allFrames = ANIMATIONS[animation.value];
            frame = allFrames.split("=====\n");
            frameLength = frame.length;
            firstFrame = frame[0];
            textArea.value = firstFrame;
            index = 0;
        }
    
      
        function changeSpeed() {
            speed = speedBox.checked ? 50 : DEFAULT_INTERVAL;
            if (isRunning) {
                startAnimation();
            }
        }
    
       
        function changeSize() {
            switch(fontSize.value) {
                case "Tiny":
                    textArea.className = "tiny";
                    break;
                case "Small": 
                    textArea.className = "small";
                    break;
                case "Large":
                    textArea.className = "large";
                    break;
                case "Extra Large":
                    textArea.className = "xl";
                    break;
                case "XXL":
                    textArea.className = "xxl";
                    break;
                default:
                    textArea.className = "medium";
                    break;
            }
        }
    
      
        function startAnimation() {
            if (startInterval) {
                clearInterval(startInterval);
            }
            if (frame === "" || frame === null) {
                firstFrame = null;
                frame = null;
                return;
            }
            startInterval = setInterval(function() {
                textArea.value = frame[index++];
                if (index === frameLength) {
                    index = 0;
                }
            }, speed);
            isRunning = true;
        }

               
        function onStart() {
            startBtn.disabled = true;
            stopBtn.disabled = false;
            startAnimation();
        }
      
        function stopAnimation() {
            if (!startInterval) {
                return;
            }
            clearInterval(startInterval);
            textArea.value = firstFrame;
            isRunning = false;
        }
        
        function onStop() {
            startBtn.disabled = false;
            stopBtn.disabled = true;
            index = 0;
            stopAnimation();
        }
    
        startBtn.onclick = onStart;
        stopBtn.onclick = onStop;
        animation.onchange = changeAnimation;
        speedBox.onchange = changeSpeed;
        fontSize.onchange = changeSize;
        
    };
    
    })();