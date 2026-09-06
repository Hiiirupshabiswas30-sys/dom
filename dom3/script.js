// //setTimeout --- delay

// setTimeout(function() {
//     console.log("Hello World 3");
// }, 5000);

// setTimeout(function() {
//     console.log("Hello World 1");
// }, 2000);
// setTimeout(function() {
//     console.log("Hello World 2");
// }, 4000);



// var btn = document.querySelector('button')
// var h1 = document.querySelector('h1')

// btn.addEventListener('click',function(){
//     h1.innerHTML ='Changing User...' 

//     setTimeout(function() {
//        h1.innerHTML = 'Hello i am Harsh'
//     }, 2000);
// })

// //setINterval----------

// setInterval(function() {
//     console.log("Hello World");
// },100)

// var a = 0

// setInterval(function() {
//     a++
//     console.log(a);
// },500)
//................

// var a = 0

// var int = setInterval(() =>{
//     a++
//     console.log(a);
// },50);

// setTimeout(() => {
//     clearInterval(int)
// }, 10000);

//---------------

 var img = document.querySelector('img')
 var love = document.querySelector('#love')

img.addEventListener('dblclick',function(){

     love.style.opacity = 1
     love.style.transform = 'translate(-50%,-50%) scale(1) rotate(-0deg)'
     
       setTimeout(function(){
        love.style.transform = 'translate(-50%,-450%) scale(1) rotate(-0deg)'
      },800)

      setTimeout(function(){
         love.style.opacity = 0
      },1000)

     setTimeout(function(){
         love.style.transform = 'translate(-50%,-50%) scale(1) rotate(-0deg)'
      },1200)
    
})

