let head = document.querySelector('#head');
head.addEventListener('click',function(event){
    alert("target = " + event.target.tagName + ", this=" + this.tagName);
},{capture:true});

head.parentNode.addEventListener('click',function(event){
    alert("target = " + event.target.tagName + ", this=" + this.tagName);
    head.parentNode.parentNode.style.backgroundColor = 'aliceblue';
},{capture:true});

head.parentNode.parentNode.addEventListener('click',function(event){
    alert("target = " + event.target.tagName + ", this=" + this.tagName);
},{capture:true});

// Sequence - div,  h1, span