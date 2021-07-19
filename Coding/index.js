/* http://192.168.0.106:5500/ftweb10/Week-14/Day-1/Coding/products.html */

let productPage = document.getElementById("main-container");

let productList = [
  {
    name: "Yellow Gold Earring",
    price: 24000,
    brand: "Tanishq",
    category: "Earring",
    img1: "https://images-na.ssl-images-amazon.com/images/I/71TeyiSoivL._UL1500_.jpg",
    img2: "https://images-na.ssl-images-amazon.com/images/I/7198kjsp8kL._UY500_.jpg",
  },
  {
    name: "Diamond earring",
    price: 19000,
    brand: "Giva",
    category: "Earring",
    img1: "https://images-na.ssl-images-amazon.com/images/I/71MoHLTj1sL._UY500_.jpg",
    img2: "https://images-na.ssl-images-amazon.com/images/I/515iqkWsAxL._UL1000_.jpg",
    },
  {
    name: "Gold ring",
    price: 41000,
    brand: "Tanishq",
    category: "Ring",
    img1: "https://staticimg.titan.co.in/Tanishq/Catalog/510895FLAAA00_1.jpg?impolicy=pqmed&imwidth=640",
    img2: "https://5.imimg.com/data5/VL/LR/DH/GLADMIN-25241601/510895flaaa00-1-500x500.jpg",
    },
  {
    name: "Diamond ring",
    price: 1000,
    brand: "Giva",
    category: "Ring",
    img1: "https://staticimg.titan.co.in/Tanishq/Catalog/501054FATAB02_2.jpg",
    img2: "https://staticimg.titan.co.in/Tanishq/Catalog/500030FQAAA02_1.jpg?impolicy=pqmed&imwidth=640",
    },
  {
    name: "Stone ring",
    price: 13000,
    brand: "Giva",
    category: "Earring",
    img1: "https://staticimg.titan.co.in/Tanishq/Catalog/512318FAIAA18_2.jpg",
    img2: "https://staticimg.titan.co.in/Tanishq/Catalog/512318FAIAA18_2.jpg",
    },
  {
    name: "Heart Necklace",
    price: 19000,
    brand: "Tanishq",
    category: "Necklace",
    img1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_3.0,f_auto,w_500/5518865_png/swarovski-infinity-heart-necklace--white--mixed-metal-finish-swarovski-5518865.png",
    img2: "https://dynamic.zacdn.com/nXaE977PwftbTG5HdloOTS1r4X0=/fit-in/346x500/filters:quality(95):fill(ffffff)/http://static.sg.zalora.net/p/swarovski-2649-1085231-1.jpg",
  }
];

localStorage.setItem('products', JSON.stringify(productList));

var prodArr = JSON.parse(localStorage.getItem('products'));

//console.log(prodArr)

for (let i = 0; i < productList.length; i++) {
    var prod_div = document.createElement('div');

    var p_name = document.createElement('p');
    p_name.append(productList[i].name);  

    var p_price = document.createElement('p');
    p_price.append(productList[i].price);

    var p_brand = document.createElement('p');
    p_brand.append(productList[i].brand);

    var p_category = document.createElement('p');
    p_category.append(productList[i].category);

    var p_img = document.createElement('img');
    p_img.src = productList[i].img1;// .append(productList[i].img);

    var cart_btn = document.createElement('button');
    cart_btn.innerText = "Add to Cart";
    cart_btn.className = "cart-class";

    prod_div.append(p_img, p_name, p_price, p_brand, p_category, cart_btn)
    productPage.append(prod_div);
}

var a = document.getElementById('sort_lh');
a.addEventListener('click', p_sort_lh); 

function p_sort_lh() {

    var p_array = productList.sort(function (a, b) {
        return a.price - b.price;
    })

    console.log(p_array)

    productPage.innerHTML = null;
    prod_div.innerHTML = null;

    showProd(p_array);
}

var a = document.getElementById('sort_hl');
a.addEventListener('click', p_sort_hl); 

function p_sort_hl() {

    var p_array = productList.sort(function (a, b) {
        return b.price - a.price;
    })

    console.log(p_array);

    productPage.innerHTML = null;
    prod_div.innerHTML = null;
    
    showProd(p_array);
}


function showProd(p_array) {
    for (let i = 0; i < p_array.length; i++) {
        
        //console.log(p_array[i]);

        var p_name = document.createElement('p');
        p_name.append(p_array[i].name);

        var p_price = document.createElement('p');
        p_price.append(p_array[i].price);

        var p_brand = document.createElement('p');
        p_brand.append(p_array[i].brand);

        var p_category = document.createElement('p');
        p_category.append(p_array[i].category);

        var p_img = document.createElement('img');
        p_img.src = p_array[i].img1;

        var cart_btn = document.createElement('button');
        cart_btn.innerText = "Add to Cart";
        cart_btn.className = "cart-class";

        prod_div.append(p_img, p_name, p_price, p_brand, p_category, cart_btn)
        productPage.append(prod_div);

        console.log("Done")
    }
}



/*
var user_promo = document.getElementById("promo").value;
var total = document.getElementsByTagName('span').value;

var b = document.getElementById('done');
b.addEventListener('click', p_done); 
console.log("here")
function p_done() {
    console.log("here")
    if (user_promo == 'masai30') {

        console.log(total - total * 0.30);
    }
}*/