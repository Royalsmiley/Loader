var link = document.createElement( "link" );
link.href = "https://rawgit.com/Royalsmiley/Loader/v1.0.0/loader.css";
link.type = "text/css";
link.rel = "stylesheet";
document.getElementsByTagName( "head" )[0].appendChild( link ); 


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
    
    function delete(){
        
    }
}

var loader = new loader();
//class red blue green (css) ,  class    SEt finished delete inc(+10%) 

// start before set error thingy
//"" in de html, verkorten code