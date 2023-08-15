const getElement = (selector) => {
  const element = document.querySelector(selector)

  if (element) return element
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  )
}

const links = getElement('.nav-list')
const navBtnDOM = getElement('.menu-btn')

navBtnDOM.addEventListener('click', () => {
  links.classList.toggle('show-links')
})
