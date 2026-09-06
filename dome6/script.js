// var allH1 = document.querySelectorAll('h1')

// var arr = [10,20,30]

// allH1.push(99)

// console.log(arr);

// var h1 = document.querySelectorAll('h1')

// h1[2].innerHTML = 'Bay Bay'
//................................

// var outer = document.querySelector('#outer')
// console.log(outer.childNodes);

//-------------------------------

// var allElem = document.querySelectorAll('.elem')

// allElem.forEach(function(elem){
//     console.log(elem.childNodes)
// }
// )
//---------------------------

// var allElems = document.querySelectorAll('.elem')

// allElems.forEach(function(elem){
//     elem.childNodes[1].addEventListener('click',function(){
//         console.log('hello')
//     })
// })
//or

var allBtn = document.querySelectorAll('button')

allBtn.forEach(function(elem){
    elem.addEventListener('click',function(){
     
        if(elem.innerHTML == 'Add Friend'){
             elem.innerHTML = 'Removed Friend'
        }else{
            elem.innerHTML ='Add Friend'
        }
    })

})

//event bubbling