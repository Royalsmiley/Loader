function loader() {
    
    this.init = function(x){
        var loaderdiv = document.createElement("div");
        loaderdiv.className = "loadercontainer";
        loaderdiv.innerHTML = '<div class="slider">' + x + '</div>';
        document.body.appendChild(loaderdiv);
    }
    
    this.start = function() {
        document.getElementsByClassName('slider')[0].style.width = "0%";
    }
    
    this.set = function(width){

        if(!sliderExists()){
            
        }
        else if (width == ""){
           console.log("There is no slider value");
        }
        else {
        document.getElementsByClassName('slider')[0].style.width = width;}
        }
    
    
    function sliderExists(){
        if (!document.getElementsByClassName("loadercontainer")[0]){
            console.log("There is no slider");
            return false;
        }else return true;
    }
    
    
}

var loader = new loader();
//class red blue green (css) ,  class    SEt finished delete inc(+10%) 

// start before set error thingy
//"" in de html, verkorten code