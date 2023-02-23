// CallBack Function
// Example 1 - When Click Button is clicked
let btn = document.getElementById('btn');


const callback = () =>{
    console.log("Button clicked");
}

btn.addEventListener('click',callback)


// Example 2 

function loadScript(src, callback) {
    let script = document.createElement('script');  
    script.src = src;

    script.onload = function() {
        console.log("Script loaded with Source: " + src);
        callback(null,src);
    }

    script.onerror = function() {
        console.log("Error Comes : " + src);
        callback(new Error("Error came : " + src));
    }

    document.body.appendChild(script);
}


let script = "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js";

function status(error,src){
    if(error)
    {
        console.log("Error: " + error);
        return;
    }
    console.log("Script Loaded : "+src);
}

loadScript(script,status);

