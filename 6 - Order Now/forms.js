if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

//buttons

//modified start
//fr
    var addToCartButtons = document.getElementsByClassName('fr1a')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    var addToCartButtons = document.getElementsByClassName('fr2a')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    var addToCartButtons = document.getElementsByClassName('fr3a')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    var addToCartButtons = document.getElementsByClassName('fr4a')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

//fr large
    var addToCartButtons = document.getElementsByClassName('fr1b')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartLargeClicked)
    }

    var addToCartButtons = document.getElementsByClassName('fr2b')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartLargeClicked)
    }

    var addToCartButtons = document.getElementsByClassName('fr3b')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartLargeClicked)
    }

    var addToCartButtons = document.getElementsByClassName('fr4b')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartLargeClicked)
    }

//milo
    var addToCartButtons = document.getElementsByClassName('m1a')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    var addToCartButtons = document.getElementsByClassName('m2a')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    var addToCartButtons = document.getElementsByClassName('m3a')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    var addToCartButtons = document.getElementsByClassName('m4a')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

//milo large
    var addToCartButtons = document.getElementsByClassName('m1b')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartLargeClicked)
    }

    var addToCartButtons = document.getElementsByClassName('m2b')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartLargeClicked)
    }

    var addToCartButtons = document.getElementsByClassName('m3b')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartLargeClicked)
    }

    var addToCartButtons = document.getElementsByClassName('m4b')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartLargeClicked)
    }

//iced coffee
    var addToCartButtons = document.getElementsByClassName('ic1')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }    

    var addToCartButtons = document.getElementsByClassName('ic2')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    } 

    var addToCartButtons = document.getElementsByClassName('ic3')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    } 

    var addToCartButtons = document.getElementsByClassName('ic4')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    } 

    var addToCartButtons = document.getElementsByClassName('ic5')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    } 

    var addToCartButtons = document.getElementsByClassName('ic6')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    } 

//ice scramble
    var addToCartButtons = document.getElementsByClassName('is1')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    var addToCartButtons = document.getElementsByClassName('is2')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    var addToCartButtons = document.getElementsByClassName('is3')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    var addToCartButtons = document.getElementsByClassName('is4')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

//milktea
    var addToCartButtons = document.getElementsByClassName('mt1a')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
    var addToCartButtons = document.getElementsByClassName('mt2a')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
    var addToCartButtons = document.getElementsByClassName('mt3a')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
    var addToCartButtons = document.getElementsByClassName('mt4a')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
    var addToCartButtons = document.getElementsByClassName('mt5a')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
    var addToCartButtons = document.getElementsByClassName('mt6a')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
    var addToCartButtons = document.getElementsByClassName('mt7a')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
    var addToCartButtons = document.getElementsByClassName('mt8a')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
    var addToCartButtons = document.getElementsByClassName('mt9a')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
    var addToCartButtons = document.getElementsByClassName('mt10a')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
    var addToCartButtons = document.getElementsByClassName('mt11a')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
    var addToCartButtons = document.getElementsByClassName('mt12a')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

//milktea large
    var addToCartButtons = document.getElementsByClassName('mt1b')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartLargeClicked)
    }
    var addToCartButtons = document.getElementsByClassName('mt2b')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartLargeClicked)
    }
    var addToCartButtons = document.getElementsByClassName('mt3b')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartLargeClicked)
    }
    var addToCartButtons = document.getElementsByClassName('mt4b')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartLargeClicked)
    }
    var addToCartButtons = document.getElementsByClassName('mt5b')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartLargeClicked)
    }
    var addToCartButtons = document.getElementsByClassName('mt6b')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartLargeClicked)
    }
    var addToCartButtons = document.getElementsByClassName('mt7b')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartLargeClicked)
    }
    var addToCartButtons = document.getElementsByClassName('mt8b')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartLargeClicked)
    }
    var addToCartButtons = document.getElementsByClassName('mt9b')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartLargeClicked)
    }
    var addToCartButtons = document.getElementsByClassName('mt10b')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartLargeClicked)
    }
    var addToCartButtons = document.getElementsByClassName('mt11b')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartLargeClicked)
    }
    var addToCartButtons = document.getElementsByClassName('mt12b')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartLargeClicked)
    }

//brown sugar
    var addToCartButtons = document.getElementsByClassName('bs1a')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
    var addToCartButtons = document.getElementsByClassName('bs2a')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
    var addToCartButtons = document.getElementsByClassName('bs3a')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

//brown sugar large
    var addToCartButtons = document.getElementsByClassName('bs1b')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartLargeClicked)
    }
    var addToCartButtons = document.getElementsByClassName('bs2b')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartLargeClicked)
    }
    var addToCartButtons = document.getElementsByClassName('bs3b')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartLargeClicked)
    }

//oreo
    var addToCartButtons = document.getElementsByClassName('o1')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

//sparkling series
    var addToCartButtons = document.getElementsByClassName('ss1a')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
    var addToCartButtons = document.getElementsByClassName('ss2a')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
    var addToCartButtons = document.getElementsByClassName('ss3a')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
    var addToCartButtons = document.getElementsByClassName('ss4a')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

//sparkling series large
    var addToCartButtons = document.getElementsByClassName('ss1b')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartLargeClicked)
    }
    var addToCartButtons = document.getElementsByClassName('ss2b')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartLargeClicked)
    }
    var addToCartButtons = document.getElementsByClassName('ss3b')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartLargeClicked)
    }
    var addToCartButtons = document.getElementsByClassName('ss4b')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartLargeClicked)
    }

//fruit tea
    var addToCartButtons = document.getElementsByClassName('ft1a')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
    var addToCartButtons = document.getElementsByClassName('ft2a')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
    var addToCartButtons = document.getElementsByClassName('ft3a')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
    var addToCartButtons = document.getElementsByClassName('ft4a')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

//fruit tea large
    var addToCartButtons = document.getElementsByClassName('ft1b')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartLargeClicked)
    }
    var addToCartButtons = document.getElementsByClassName('ft2b')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartLargeClicked)
    }
    var addToCartButtons = document.getElementsByClassName('ft3b')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartLargeClicked)
    }
    var addToCartButtons = document.getElementsByClassName('ft4b')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartLargeClicked)
    }

//snacks
    var addToCartButtons = document.getElementsByClassName('nachos')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartSnackClicked)
    }

    var addToCartButtons = document.getElementsByClassName('fries')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartSnackClicked)
    }

    var addToCartButtons = document.getElementsByClassName('chicken')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartSnackClicked)
    }

    var addToCartButtons = document.getElementsByClassName('hashb')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartSnackClicked)
    }
//second variation
    var addToCartButtons = document.getElementsByClassName('fries-nachos')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartSnack2Clicked)
    }

    var addToCartButtons = document.getElementsByClassName('tuna')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartSnack2Clicked)
    }

//modified end

/*    var addToCartButtons = document.getElementsByClassName('medsize')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }


    var addToCartButtons = document.getElementsByClassName('lrgsize')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartLargeClicked)
    }
*/

//buttons end

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}



function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

/*
function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('product-name')[0].innerText
    var price = shopItem.getElementsByClassName('medsize')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('product-img')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}
*/

//modified
function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement
    var title = shopItem.getElementsByClassName('product-name')[0].innerText
    var price = shopItem.getElementsByClassName('medsize')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('product-img')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}
//modified end

function addToCartLargeClicked(event) {
    var button = event.target
    var shopItem = button.parentElement//modified
    var title = shopItem.getElementsByClassName('product-name')[0].innerText
    var price = shopItem.getElementsByClassName('lrgsize')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('product-img')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

//snacks java
function addToCartSnackClicked(event) {
    var button = event.target
    var shopItem = button.parentElement//modified
    var title = shopItem.getElementsByClassName('product-name')[0].innerText
    var price = shopItem.getElementsByClassName('medsize')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('product-img')[0].src
    addItemSnackToCart(title, price, imageSrc)
    updateCartTotal()
}

function addToCartSnack2Clicked(event) {
    var button = event.target
    var shopItem = button.parentElement//modified
    var title = shopItem.getElementsByClassName('product-name')[0].innerText
    var price = shopItem.getElementsByClassName('lrgsize')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('product-img')[0].src
    addItemSnackToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemSnackToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
    console.log(title + price)
}

//end snacks java

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <!-- 
        <select class="cart-sug-level cart-column">
            <option value ="full">100%</option>
            <option value ="less">75%</option>
            <option value ="half">50%</option>
            <option value ="qrtr">25%</option>
            <option value ="zero">0%</option>
        </select>
        <select class="cart-add-on cart-column">
            <option value ="none">None</option>
            <option value ="pearl">Pearl</option>
            <option value ="nata">Nata</option>
            <option value ="cream cheese">Cream Cheese</option>
            <option value ="choco chips">Choco Chips</option>
            <option value ="oreo">Oreo</option>
        </select>
        -->
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('P', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = 'P' + total
}