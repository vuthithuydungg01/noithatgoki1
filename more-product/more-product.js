const clickProduct = document.querySelector('.js-product')
const newProduct = document.querySelector('.js-new-product')
const newProductClose = document.querySelector('.js-new-product')
const productContainer = document.querySelector('.prouct-portfolio')

function showProduct() {
    newProduct.classList.add('open') //thêm class open vào new-product
}

function hideProduct() {
    newProduct.classList.remove('open') //gỡ class open của new-product
}

clickProduct.addEventListener('click', showProduct) //nghe hành vi click vào js-sign-in

newProductClose.addEventListener('click', hideProduct)

productContainer.addEventListener('click', function(event) {
    event.stopPropagation()
})