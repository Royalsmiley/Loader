-- Loader.js --

------------------
I. Synopsis
------------------
Loader.js is a simple javascript library used for adding a loading bar to your website, the variables are adjustable. You are able to customize the loadingbar and youre able to adjust the speed to your wishes.

------------------
II. Code Example
------------------
Zou je iets anders willen vervangen dan opmaak kan je hieronder zien je de code die er voor zorgt dat de balk wordt aangemaakt.
As example you see the code snippet below. This snippet is used for making the actual loading bar, the x in this fuction is used for putting text in the loading bar, this text is easily edited. 

	    this.init = function(x){
        var loaderdiv = document.createElement("div");
        loaderdiv.className = "loadercontainer";
        loaderdiv.innerHTML = '<div class="slider">' + x + '</div>';
        document.body.appendChild(loaderdiv);
    }
    
If you'd like to use the buttons you can insert it here:

    <button id="knop" onClick="loader.init(' Insert your text here ')">Start</button>




------------------
III. Motivation
------------------
The reason for making this library was that i wanted to produce something not too difficult, but still a challenge. From there on i could keep improving it and make it as difficult as i like.


------------------
IV. File list
------------------
Only the loader.js is a definite must, using the index is optional. 

index.html		
loader.js			

------------------
V. Demo
------------------
View the live demo here: 

https://rvandewiel.com/Loader/


------------------
VII. Support
------------------
For questions or if anything is unclear, youre always welcome to send your question to:

	- rwh.wiel@gmail.com


VIII. License
------------------
Made by Riley van de Wiel, 2017
