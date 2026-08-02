
// create element.........

// var btn = document.querySelector('button')

// btn.addEventListener('click',function(){

//    var h1 = document.createElement('h1')

//     h1.innerHTML= 'Hell from JS'

//     console.log(h1);

// })

//creat element & appendchild...........

// var btn = document.createElement('h2')

//  btn.innerHTML='download'
//  btn.style.color='red'

//     var main = document.querySelector('main')

//       main.appendChild(btn)

//-----------------------------------------
// var btn = document.querySelector('button')

// var main = document.querySelector('main') 

// btn.addEventListener('click',function(){
//     var div = document.createElement('div')

//     var x =Math.random()*100
//     var y =Math.random()*100
//     var r =Math.random()*360
//     var c1 =Math.floor(Math.random()*256)
//     var c2 =Math.floor(Math.random()*256)
//     var c3 =Math.floor(Math.random()*256)

//     div.style.height='50px'
//     div.style.width='50px'
//     div.style.backgroundColor =`rgb(${c1},${c2},${c3})`
//     div.style.position='absolute'
//     div.style.left= x+ '%'
//     div.style.top= y+ '%'
//     div.style.rotate= r+ 'deg'
//     main.appendChild(div)
// })

//---------------------

// var btn = document.querySelector('button')
// var main = document.querySelector('main')

// btn.addEventListener('click',function(){
//     var div = document.createElement('div')
//     div.style.height= '50px'
//     div.style.width= '50px'
     
//     var x = Math.random()*100
//     var y = Math.random()*100
//     var c1 = Math.floor(Math.random()*200)
//     var c2 = Math.floor(Math.random()*200)
//     var c3 = Math.floor(Math.random()*200)

    

//     div.style.position= 'absolute'
//     div.style.top = y+'%'
//     div.style.left = x+'%'
//     div.style.backgroundColor= `rgb(${c1},${c2},${c3})`

//     main.appendChild(div)
// })
//---------------------------

var btn = document.querySelector('button')
var main = document.querySelector('main')
 
var arr =['Hay! I am Sarthak','Saethak is best','Anubhav is handsome','harsh bhaiya ki jay ho','JS is very good','Keep practicing guys...']
//var arr =['💫','🌟']

btn.addEventListener('click',function(){

    var h1 = document.createElement('h1')

    var x = Math.random()*80
    var y = Math.random()*80
    var rot = Math.random()*360
    var scl = Math.random()*2
    var a = Math.floor(Math.random()*arr.length)
  

    h1.innerHTML = arr[a]
    h1.style.position='absolute'
    
    h1.style.left = x+'%'
    h1.style.top = y+'%'
    h1.style.rotate = rot+'deg'
    h1.style.scale = scl

     main.appendChild(h1)
})