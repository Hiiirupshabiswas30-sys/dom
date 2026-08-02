var arr =[
    {
        team:'CSK',
        Primary:'yellow',
        secondary:'#2705A2',
        trophies:'Trophies: 5 FullName: Chennai Super Kings',
    },
    {
        team:'RCB',
        Primary:'red',
        secondary:'black',
        trophies:'Trophies: 2 FullName: Royal Challengers Bengalur',

    },
    {
        team:'RR',
        Primary:'rgb(230, 35, 142)',
        secondary:'blue',
        trophies:'Trophies: 0 FullName: Rajasthan Royals',
    },
     {
        team:'GT',
        Primary:'darkblue',
        secondary:'white',
        trophies:'Trophies: 1 FullName: Gujarat Titans',
     },
     {
        team:'MI',
        Primary:'blue',
        secondary:'gold',
        trophies:'Trophies: 5 FullName: Mumbai Indians',
     },
     {
        team:'KKR',
        Primary:'purple',
        secondary:'gold',
        trophies: 'Trophies: 3 FullName: Kolkata Knight Riders' ,
     },
     
     
]

var btn = document.querySelector('button')
var h1 = document.querySelector('h1')
var about = document.querySelector('#about')
var main = document.querySelector('main')

btn.addEventListener('click',function(){

   var winner =arr[Math.floor(Math.random()*arr.length)]
    
   h1.innerHTML= winner.team
   h1.style.backgroundColor = winner.secondary
   main.style.backgroundColor = winner.Primary
   about.innerHTML= winner.trophies
   
})