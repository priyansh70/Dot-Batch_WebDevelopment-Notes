let event = new Event("hello",{bubbles:true});
addEventListener("hello",function(){
    alert("Custom Event Dispatched");
});
document.dispatchEvent(event);