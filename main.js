//Funciones



let hamburguer = document.querySelector('#hamburguer')
let closeMenu = document.querySelector('#close')
let navMobile = document.querySelector('.header__nav__container')

// Menu Mobile
const modalItems = document.querySelectorAll('.header__links')
let subMenuProduct = document.querySelector('.product__link')
let subMenuCompany = document.querySelector('.company__link')
let subMenuConnect = document.querySelector('.connect__link')
let subMenu = document.querySelectorAll('.links')
// Arrows
let arrow = document.querySelectorAll('#arrow')

// Menu desktop
const itemsDesktop = document.querySelectorAll('.navbar__desktop__title')
let productDesktop = document.querySelector('.navbar__product__items')
let companyDesktop = document.querySelector('.navbar__company__items')
let connectDesktop = document.querySelector('.navbar__connect__items')





let arrowIndex = []
arrow.forEach(item => {
    arrowIndex.push(item.lastElementChild)
})






itemsDesktop.forEach(option =>{
    option.addEventListener('click',e=>{
        open = e.target.innerText;              
        if(open == 'Product '){
            productDesktop.classList.toggle('show__desktop__items')           
            arrowIndex[3].classList.toggle('rotate__arrow')
        }
        if(open == 'Company '){
            companyDesktop.classList.toggle('show__desktop__items') 
            arrowIndex[4].classList.toggle('rotate__arrow')
        }
        if(open == 'Connect '){
            connectDesktop.classList.toggle('show__desktop__items')
            arrowIndex[5].classList.toggle('rotate__arrow')
        } 
    })
})
















hamburguer.addEventListener('click',()=>{           
        navMobile.classList.toggle('show');   
        if(hamburguer.src =='http://127.0.0.1:5500/blogr-landing-page-main/images/icon-hamburger.svg' ){
            hamburguer.src = 'images/icon-close.svg'
            
        }else{
            hamburguer.src = 'images/icon-hamburger.svg'
        }

        
        
    
})

modalItems.forEach(option =>{
    
    option.addEventListener('click',e=>{
        open = e.target.innerText;
               
        if(open == 'Product '){
            subMenuProduct.classList.toggle('product__link')           
            arrowIndex[0].classList.toggle('rotate__arrow')
        }
        if(open == 'Company '){
            subMenuCompany.classList.toggle('company__link') 
            arrowIndex[1].classList.toggle('rotate__arrow')
        }
        if(open == 'Connect '){
            subMenuConnect.classList.toggle('connect__link')
            arrowIndex[2].classList.toggle('rotate__arrow')
        }  
    })
})