//DOM-- Document object model (frontend ki JS)

//DOM 4 Pillars --
// - Selection of an Element
//- Changing HTML
//- Changing CSS
// -Event listeners

// var h1 = document.querySelector('h1')

// h1.innerHTML = 'I am Batman'
// h1.style.color = 'yellow'
// h1.style.backgroundColor = 'red'

// var box = document.querySelector('#box')
// box.innerHTML='hay hay'
// box.style.backgroundColor = 'orange'

// var h1 = document.querySelector('h1')
// h1.innerHTML = 'changed'
// h1.style.color='gold'
// h1.addEventListener('click',function (){
//     console.log('hello');
// })

//    var h1 = document.querySelector('h1')
//    var btn = document.querySelector('button')
//     btn.addEventListener('click', function(){
//     h1.innerHTML ='Iam Batman!'
//     h1.style.color = 'red'
//     h1.style.fontSize = '60px'
//     })

// var h1 = document.getElementById('hero')
//  console.log(h1);

// var h1 = document.getElementsByClassName('elem')
// console.log(h1);

// var h1 = document.querySelectorAll('h1')

// h1.innerHTML = 'change'

// var inc = document.querySelector('#inc')
// var dec = document.querySelector('#dec')
// var h2 = document.querySelector('h2')
// var a = 0

// inc.addEventListener('click', function(){
//     a++
//     h2.innerHTML = a
// })

// dec.addEventListener('click', function(){
//     a--
//     h2.innerHTML = a
// })

// var a = Math.random()*100

// var b = Math.floor(a)

// console.log(b);

// var a = Math.floor(Math.random()*100)
//                     // in singel line
// console.log(a)

// var r = Math.floor(Math.random()*100)

// console.log(r)

// color change--
// var btn = document.querySelector('button')
// var box = document.querySelector('#box')

// btn .addEventListener('click',function(){
//     var c1 =Math.floor(Math.random()*256)    
//     var c2 =Math.floor(Math.random()*256)    
//     var c3 =Math.floor(Math.random()*256)    

    
//     box.style.backgroundColor=`rgb(${c1},${c2},${c3})`
//     box.innerHTML=`rgb(${c1},${c2},${c3})`
// })

//var arr = ['vedant', 'abhi','soukiv','suit','ankit','satwik']

// var btn = document.querySelector('button')

// btn.addEventListener('click',function(){

//     var a = Math.floor(Math.random()*arr.length)

//     console.log(arr[a]);
// })

var arr =[
    {
        team:'CSK',
        Primary:'yellow',
        secondary:'blue'

    },
    {
        team:'RCB',
        Primary:'red',
        secondary:'black'

    },
    {
        team:'RR',
        Primary:'rgb(230, 35, 142)',
        secondary:'blue'
    },
     {
        team:'GT',
        Primary:'darkblue',
        secondary:'white'
     },
     {
        team:'MI',
        Primary:'blue',
        secondary:'gold'
     },
     {
        team:'KKR',
        Primary:'purple',
        secondary:'gold'
     },
     
     
]


// var a = Math.floor(Math.random()*arr.length)
// console.log(arr[a]);

var btn = document.querySelector('button')
var h1 = document.querySelector('h1')
var main = document.querySelector('main')

btn.addEventListener('click',function(){

   var winner =arr[Math.floor(Math.random()*arr.length)]
    
   h1.innerHTML= winner.team
   h1.style.backgroundColor = winner.secondary
   main.style.backgroundColor = winner.Primary
})