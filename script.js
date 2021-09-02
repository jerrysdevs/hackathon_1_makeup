//parent div
var pdiv = document.createElement('div')
pdiv.setAttribute('class', 'box')

var cdiv1 = document.createElement('div')
cdiv1.setAttribute('class', 'container')

var cdiv2 = document.createElement('div')
cdiv2.setAttribute('class', 'row')

var parentcontentdiv = document.createElement('div')
parentcontentdiv.setAttribute('class', 'col-sm-4 col-md-4 col-lg-4 col-fluid')

var contentdiv = document.createElement('div')
contentdiv.setAttribute('class', 'box-center search text-center')

var p1 = document.createElement('p')
p1.innerHTML = "Brand Name"

var in1 = document.createElement('select')
in1.setAttribute('name', 'brand')
in1.setAttribute('id', 'in1')
in1.innerHTML ="select brand"

var bopt=document.createElement('option')
bopt.innerHTML = "Select the Brand"

var bopt1=document.createElement('option')
bopt1.setAttribute('value','covergirl')
bopt1.innerHTML="Covergirl"
var bopt2=document.createElement('option')
bopt2.setAttribute('value','maybelline')
bopt2.innerHTML="maybelline"
var bopt3=document.createElement('option')
bopt3.setAttribute('value','l%27oreal')
bopt3.innerHTML="Loreal"
var bopt4=document.createElement('option')
bopt4.setAttribute('value','annabelle')
bopt4.innerHTML="annabelle"
var bopt5=document.createElement('option')
bopt5.setAttribute('value','colourpop')
bopt5.innerHTML="colourpop"

in1.appendChild(bopt)
in1.appendChild(bopt1)
in1.appendChild(bopt2)
in1.appendChild(bopt3)
in1.appendChild(bopt4)
in1.appendChild(bopt5)

var p = document.createElement("p")
p.innerHTML = "Product Type"

var in2 = document.createElement('select')
in2.setAttribute('name', 'product')
in2.setAttribute('id', 'in2')

var popt=document.createElement('option')
popt.innerHTML = "Select the produuct"
var popt1=document.createElement('option')
popt1.setAttribute('value','Lipstick')
popt1.innerHTML="Lipstick"
var popt2=document.createElement('option')
popt2.setAttribute('value','Eyeliner')
popt2.innerHTML="Eyeliner"
var popt3=document.createElement('option')
popt3.setAttribute('value','Foundation')
popt3.innerHTML="Foundation"
var popt4=document.createElement('option')
popt4.setAttribute('value','Lip liner')
popt4.innerHTML="Lip liner"
var popt5=document.createElement('option')
popt5.setAttribute('value','Mascara')
popt5.innerHTML="Mascara"

in2.appendChild(popt)
in2.appendChild(popt1)
in2.appendChild(popt2)
in2.appendChild(popt3)
in2.appendChild(popt4)
in2.appendChild(popt5)


//creating button
var button = document.createElement('button')
button.setAttribute("type", "button")
button.setAttribute("class", "btn btn-primary")
button.setAttribute("onclick", "getdata()")
button.setAttribute("style", "margin-left :10px;")
button.innerHTML = "submit <br>"


var h1 = document.createElement('h1')
h1.innerHTML = " Makeup Search"

pdiv.append(h1)
contentdiv.append(p1)
contentdiv.append(in1)
contentdiv.append(p)
contentdiv.append(in2)
contentdiv.append(button)


parentcontentdiv.append(contentdiv)
cdiv2.append(parentcontentdiv)
cdiv1.append(cdiv2)
pdiv.append(cdiv1)


document.body.append(pdiv)




async function getdata() {
    var url = "http://makeup-api.herokuapp.com/api/v1/products.json?"
    var brand = document.getElementById('in1').value
    console.log(brand)
    var product = document.getElementById('in2').value
    console.log(product)
    var result = document.getElementById('result')
    
    result.innerHTML = '';
    try {
        // let read = await fetch(`${url}&brand=covergirl&product_type=lipstick`)
        let read = await fetch(`${url}&brand=${brand}&product_type=${product}`)
        let data = await read.json()
        for (i = 0; i < data.length; i++) {
           
            var pdiv = document.createElement('div')
            pdiv.setAttribute('class', 'box')

            var cdiv1 = document.createElement('div')
            cdiv1.setAttribute('class', 'container')

            var cdiv2 = document.createElement('div')
            cdiv2.setAttribute('class', 'row')

            var parentcontentdiv = document.createElement('div')
            parentcontentdiv.setAttribute('class', 'col-sm-12 col-md-12 col-lg-12 col-fluid')

            var contentdiv = document.createElement('div')
            contentdiv.setAttribute('class', 'box-center text-center')

            var image = document.createElement('img')
            image.setAttribute('src', `${data[i].image_link}`)
            image.setAttribute('alt', `product image`)

            var head = document.createElement('h3')
            head.innerHTML = data[i].brand

            var name = document.createElement('h6')
            name.innerHTML = data[i].name

            var a = document.createElement('a')
            a.setAttribute('class','btn btn-primary')
            a.setAttribute('role','button')
            a.setAttribute('target','_blank')
            a.setAttribute('href', `${data[i].product_link}`)
            a.innerHTML = "Buy me"

            var des = document.createElement('p')
            des.setAttribute('class','p1')
            des.innerHTML= data[i].description
           
            
            contentdiv.append(head)
            contentdiv.append(image)
            contentdiv.append(name)
            contentdiv.append(a)
            contentdiv.append(des)
            parentcontentdiv.append(contentdiv)
            cdiv2.append(parentcontentdiv)
            cdiv1.append(cdiv2)
            pdiv.append(cdiv1)


            document.getElementById('result').append(pdiv)

        }
    }
    catch (err) {
        console.log("Error")
    }
}

