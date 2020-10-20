// const { response } = require("express")

console.log('This is a javascript file')

fetch('http://puzzle.mead.io/puzzle').then((response) => {
  response.json().then((data) => {
    console.log(data)
  })
})

fetch('http://localhost:3000/weather?address=Eastbourne').then((response) => {
  response.json().then((data) => {
    if (data.error) {
      console.log(data.error)
    } else {
      console.log(data.location)
      console.log(data.forecast)
    }
  })
})
