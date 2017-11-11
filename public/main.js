const $meetTheTeam = document.querySelector('#header-text')

const $brook = document.querySelector('#brook')
const $jake = document.querySelector('#jake')
const $allef = document.querySelector('#allef')

const $brookSide = document.querySelector('#brook-side')
const $jakeSide = document.querySelector('#jake-side')
const $allefSide = document.querySelector('#allef-side')

const $brookImg = document.querySelector('#brook-img')
const $jakeImg = document.querySelector('#jake-img')
const $allefImg = document.querySelector('#allef-img')
const $brookSideImg = document.querySelector('#brook-img-side')
const $jakeSideImg = document.querySelector('#jake-img-side')
const $allefSideImg = document.querySelector('#allef-img-side')

const $brookTitle = document.querySelector('#brook-title')
const $jakeTitle = document.querySelector('#jake-title')
const $allefTitle = document.querySelector('#allef-title')

const $brookSideTitle = document.querySelector('#brook-title-side')
const $jakeSideTitle = document.querySelector('#jake-title-side')
const $allefSideTitle = document.querySelector('#allef-title-side')

const $allefText = document.querySelector('#allef-text')
const $allefSideText = document.querySelector('#allef-text-side')

$meetTheTeam.textContent = 'Meet The Team'

const employee = {
  first_name: null,
  last_name: null,
  title: null,
  description: null,
  image: 'https://techi.envivent.com/employees/' + null
}

const getData = () => {
  Promise.all([
    fetch('https://techi.envivent.com/description.json')
      .then(res => res.json())
      .then(result => result.employees)
      .then(data => {
        $brookTitle.textContent = data[1].title.toLowerCase()
        $brookSideTitle.textContent = data[1].title.toLowerCase()
        $jakeTitle.textContent = data[4].title.toLowerCase()
        $jakeSideTitle.textContent = data[4].title.toLowerCase()
        $allefTitle.textContent = data[0].title.toLowerCase()
        $allefSideTitle.textContent = data[0].title.toLowerCase()
        $allefText.textContent = data[0].description
        $allefSideText.textContent = data[0].description
      }),
    fetch('https://techi.envivent.com/images.json')
      .then(res => res.json())
      .then(result => result.employees)
      .then(data => {
        const url = 'https://techi.envivent.com/employees/'
        $brookImg.src = url + data[1].full
        $jakeImg.src = url + data[4].full
        $allefImg.src = url + data[0].full
        $brookSideImg.src = url + data[1].full
        $jakeSideImg.src = url + data[4].full
        $allefSideImg.src = url + data[0].full
      }),
    fetch('https://techi.envivent.com/names.json')
      .then(res => res.json())
      .then(result => result.employees)
      .then(data => {
        $brook.textContent = data[1].first_name.toUpperCase() + ' ' + data[1].last_name.toUpperCase()
        $brookSide.textContent = data[1].first_name.toUpperCase() + ' ' + data[1].last_name.toUpperCase()
        $jake.textContent = data[4].first_name.toUpperCase() + ' ' + data[4].last_name.toUpperCase()
        $jakeSide.textContent = data[4].first_name.toUpperCase() + ' ' + data[4].last_name.toUpperCase()
        $allef.textContent = data[0].first_name.toUpperCase() + ' ' + data[0].last_name.toUpperCase()
        $allefSide.textContent = data[0].first_name.toUpperCase() + ' ' + data[0].last_name.toUpperCase()
      })
  ])
  // .then(res => {
  //   const result = [].concat.apply([], res)
  //   console.log(result);
  // })
}

getData()
