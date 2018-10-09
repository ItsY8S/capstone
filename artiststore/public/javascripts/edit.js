const productTitle = document.querySelector('.product-title')
const productPrice = document.querySelector('.product-price')
const productHero = document.querySelector('.product-hero img')
const productDescription = document.querySelector('.product-description p')

productTitle.addEventListener('dblclick', event => {
  const value = productTitle.innerText
  console.log(value)
  const productTitleInput = document.createElement('input')
  productTitleInput.setAttribute('class', 'live-input product-title')
  productTitleInput.setAttribute('type', 'text')
  productTitleInput.setAttribute('name', 'product-title')
  productTitleInput.setAttribute('value', value)
  productTitle.parentNode.replaceChild(productTitleInput, productTitle)
})

productPrice.addEventListener('dblclick', event => {
  const value = productPrice.innerText
  console.log(value)
  const productPriceInput = document.createElement('input')
  productPriceInput.setAttribute('class', 'live-input product-price bold')
  productPriceInput.setAttribute('type', 'text')
  productPriceInput.setAttribute('name', 'product-price')
  productPriceInput.setAttribute('value', value)
  productPrice.parentNode.replaceChild(productPriceInput, productPrice)
})

productDescription.addEventListener('dblclick', event => {
  const value = productDescription.innerText
  console.log('value', value)
  const productDescriptionInput = document.createElement('textarea')
  productDescriptionInput.setAttribute('class', 'live-input')
  // productDescriptionInput.setAttribute('type', 'text')
  productDescriptionInput.setAttribute('name', 'product')
  productDescriptionInput.value = value
  productDescriptionInput.setAttribute(
    'style',
    'width: 100%; height: 250px; resize: none; font-size: 16px; letter-spacing: 0px'
  )
  productDescription.parentNode.replaceChild(
    productDescriptionInput,
    productDescription
  )
})

productHero.addEventListener('dblclick', event => {
  const itExists = document.querySelector('.exists')
  console.log(itExists)
  if (itExists == null) {
    const productHeroInput = document.createElement('input')
    productHeroInput.setAttribute('class', 'live-input exists product-hero')
    productHeroInput.setAttribute('type', 'file')
    productHeroInput.setAttribute('name', 'product-title')
    productHeroInput.setAttribute('style', 'display: none')
    productHero.parentNode.appendChild(productHeroInput)
    productHeroInput.click()
  } else {
    console.log('Still click it doe.')
    const productHeroInput = document.querySelector('.live-input')
    productHeroInput.click()
  }
})
