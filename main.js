const output = document.querySelector('.output')
let newElement = document.createElement('h2')

// document.querySelector('#seven')
document.addEventListener('click', function (event){
    let newEntry = document.createTextNode(event.target.innerHTML)
    newElement.appendChild(newEntry)
    output.appendChild(newElement)
    console.log(event.target.innerHTML)
})

// document.querySelector('#seven').addEventListener('click', function (event) {
//     console.log('You clicked: ' event.target.innerText)
//     output.innerText += event.target.innerText
// })

document.querySelector('#clear').addEventListener('click', function (event) {
    location.reload()
})

document.querySelector('#equals').addEventListener('click', function (event) {
    console.log(eval(output.innerText))
    
  })
// How could I get this to show up on the page?

//   document.querySelector('#equals').addEventListener('click', function (event) {
//     // output = ""
//     let equals = document.createTextNode(eval(output.innerText))
//     document.getElementById("output").innerHTML = ""
//     newElement.appendChild(equals)
//     output.appendChild(newElement)
// })
