let compAll=document.getElementById('comp-all');
let compTata=document.getElementById('comp-tata');
let compMaruti=document.getElementById('comp-maruti');
let compHundai=document.getElementById('comp-hundai');
let compHonda=document.getElementById('comp-honda');
let compMahindra=document.getElementById('comp-mahindra');
let compFord=document.getElementById('comp-ford');

let colorAll=document.getElementById("color-all");
let colorBlack=document.getElementById("color-black");
let colorWhite=document.getElementById("color-white");
let colorBlue=document.getElementById("color-blue");

let carBlue=document.getElementById('blue-car');
let carBlack=document.getElementById('black-car');

let priceAll=document.getElementById('all-price');
let price1to5=document.getElementById('price-1to5');
let price5to10=document.getElementById('price-5to10');
let priceAbove10=document.getElementById('price-above-10');

let vehicleTata=document.getElementById('vehicle-tata');
let vehicleAll=document.getElementById('vehicle-all');
let vehicleMaruti=document.getElementById('vehicle-maruti');
let vehicleHundai=document.getElementById('vehicle-hundai');
let vehicleHonda=document.getElementById('vehicle-honda');
let vehicleMahindra=document.getElementById('vehicle-mahindra');
let vehicleFord=document.getElementById('vehicle-ford');




compTata.addEventListener("click",forTata);
compAll.addEventListener("click",forAll);
compMaruti.addEventListener("click",forMaruti);
compHundai.addEventListener("click",forHundai);
compHonda.addEventListener("click",forHonda);
compMahindra.addEventListener("click",forMahindra);
compFord.addEventListener("click",forFord);

colorAll.addEventListener('click',forAllColor);
colorWhite.addEventListener('click',forWhite);
colorBlack.addEventListener('click',forBlack);
colorBlue.addEventListener('click',forBlue);

priceAll.addEventListener('click',forAllPrice);
price1to5.addEventListener('click',forPrice1to5);
price5to10.addEventListener('click',forPrice5to10);
priceAbove10.addEventListener('click',forPriceAbove10);


function forAll(){
    if(compAll.checked==true)
    {
        vehicleAll.style.display="block";
        vehicleTata.style.display="none";
        vehicleMaruti.style.display="none";
        vehicleHundai.style.display="none";
        vehicleHonda.style.display="none";
        vehicleMahindra.style.display="none";
        vehicleFord.style.display="none";

        if(compTata.checked==true)
        {
            compTata.click();
        }
        if(compMaruti.checked==true)
        {
            compMaruti.click();
        }
        if(compHundai.checked==true)
        {
            compHundai.click();
        }
        if(compMahindra.checked==true)
        {
            compMahindra.click();
        }
        if(compFord.checked==true)
        {
            compFord.click();
        }
    }
    else
    {
        vehicleAll.style.display="none";
    }
}
function forTata(){
    
    if(compTata.checked==true){
        vehicleAll.style.display="none";
        vehicleTata.style.display="block";
        vehicleMaruti.style.display="none";
        vehicleHundai.style.display="none";
        vehicleHonda.style.display="none";
        vehicleMahindra.style.display="none";
        vehicleFord.style.display="none";

        if(compAll.checked==true)
        {
            compAll.click();
           // vehicleAll.style.display="none";
        }
        if(compMaruti.checked==true)
        {
            compMaruti.click();
        }
        if(compHundai.checked==true)
        {
            compHundai.click();
        }
        if(compHonda.checked==true)
        {
            compHonda.click();
        }
        if(compMahindra.checked==true)
        {
            compMahindra.click();
        }
        if(compFord.checked==true)
        {
            compFord.click();
        }
        // if(vehicleAll.)
    }
    else
    {
        vehicleTata.style.display="none";
    }
    
}
function forMaruti(){
    if(compMaruti.checked==true)
    {
        vehicleAll.style.display="none";
        vehicleTata.style.display="none";
        vehicleMaruti.style.display="block";
        vehicleHundai.style.display="none";
        vehicleHonda.style.display="none";
        vehicleMahindra.style.display="none";
        vehicleFord.style.display="none";

        if(compAll.checked==true)
        {
            compAll.click();
        }
        if(compTata.checked==true)
        {
            compTata.click();
        }
        if(compHundai.checked==true)
        {
            compHundai.click();
        }
        if(compHonda.checked==true)
        {
            compHonda.click();
        }
        if(compMahindra.checked==true)
        {
            compMahindra.click();
        }
        if(compFord.checked==true)
        {
            compFord.click();
        }
    }
    else
    {
        vehicleMaruti.style.display="none";
    }
}
function forHundai(){
    if(compHundai.checked==true)
    {
        vehicleAll.style.display="none";
        vehicleTata.style.display="none";
        vehicleMaruti.style.display="none";
        vehicleHundai.style.display="block";
        vehicleHonda.style.display="none";
        vehicleMahindra.style.display="none";
        vehicleFord.style.display="none";

        if(compAll.checked==true)
        {
            compAll.click();
        }
        if(compTata.checked==true)
        {
            compTata.click();
        }
        if(compMaruti.checked==true)
        {
            compMaruti.click();
        }
        if(compHonda.checked==true)
        {
            compHonda.click();
        }
        if(compMahindra.checked==true)
        {
            compMahindra.click();
        }
        if(compFord.checked==true)
        {
            compFord.click();
        }
    }
    else
    {
        vehicleHundai.style.display="none";
    }
}
function forHonda(){
    if(compHonda.checked==true)
    {
        vehicleAll.style.display="none";
        vehicleTata.style.display="none";
        vehicleMaruti.style.display="none";
        vehicleHundai.style.display="none";
        vehicleHonda.style.display="block";
        vehicleMahindra.style.display="none";
        vehicleFord.style.display="none";

        if(compAll.checked==true)
        {
            compAll.click();
        }
        if(compTata.checked==true)
        {
            compTata.click();
        }
        if(compMaruti.checked==true)
        {
            compMaruti.click();
        }
        if(compHundai.checked==true)
        {
            compHundai.click();
        }
        if(compMahindra.checked==true)
        {
            compMahindra.click();
        }
        if(compFord.checked==true)
        {
            compFord.click();
        }
    }
    else
    {
        vehicleHonda.style.display="none";
    }
}
function forMahindra(){
    if(compMahindra.checked==true)
    {
        vehicleAll.style.display="none";
        vehicleTata.style.display="none";
        vehicleMaruti.style.display="none";
        vehicleHundai.style.display="none";
        vehicleHonda.style.display="none";
        vehicleMahindra.style.display="block";
        vehicleFord.style.display="none";

        if(compAll.checked==true)
        {
            compAll.click();
        }
        if(compTata.checked==true)
        {
            compTata.click();
        }
        if(compMaruti.checked==true)
        {
            compMaruti.click();
        }
        if(compHundai.checked==true)
        {
            compHundai.click();
        }
        if(compHonda.checked==true)
        {
            compHonda.click();
        }
        if(compFord.checked==true)
        {
            compFord.click();
        }
    }
    else
    {
        vehicleMahindra.style.display="none";
    }
}
function forFord(){
    if(compFord.checked==true)
    {
        vehicleAll.style.display="none";
        vehicleTata.style.display="none";
        vehicleMaruti.style.display="none";
        vehicleHundai.style.display="none";
        vehicleHonda.style.display="none";
        vehicleMahindra.style.display="none";
        vehicleFord.style.display="block";

        if(compAll.checked==true)
        {
            compAll.click();
        }
        if(compTata.checked==true)
        {
            compTata.click();
        }
        if(compMaruti.checked==true)
        {
            compMaruti.click();
        }
        if(compHundai.checked==true)
        {
            compHundai.click();
        }
        if(compHonda.checked==true)
        {
            compHonda.click();
        }
        if(compMahindra.checked==true)
        {
            compMahindra.click();
        }
    }

}

// let vehicleTata=document.getElementById('vehicle-tata');

function forAllColor(){
    carBlue.style.display="none";
    carBlack.style.display="none";
    if(compAll.checked==false)
        {
            compAll.click();
            
            
        }
        if(compAll.checked==true)
        {
            vehicleAll.style.display="block";         
        }
    if(colorAll.checked==true)
    {
        if(colorBlack.checked==true)
        {
            colorBlack.click();
        }
        if(colorWhite.checked==true)
        {
            colorWhite.click();
        }
        if(colorBlue.checked==true)
        {
            colorBlue.click();
        }
    }
}
function forBlack(){
    if(colorBlack.checked==true)
    {

        carBlack.style.display="block";
        carBlue.style.display="none";
        if(compAll.checked==false)
        {
            compAll.click();
            vehicleAll.style.display="none";
            
        }
        if(colorAll.checked==true)
        {
            colorAll.click();
        }
        if(colorWhite.checked==true)
        {
            colorWhite.click();
        }
        if(colorBlue.checked==true)
        {
            colorBlue.click();
        }
    }
}
function forWhite(){
    if(colorWhite.checked==true)
    {
        if(colorBlack.checked==true)
        {
            colorBlack.click();
        }
        if(colorAll.checked==true)
        {
            colorAll.click();
        }
        if(colorBlue.checked==true)
        {
            colorBlue.click();
        }
    }
}
function forBlue(){
    if(colorBlue.checked==true)
    {
        carBlue.style.display="block";
        carBlack.style.display="none";
        if(compAll.checked==false)
        {
            compAll.click();
            vehicleAll.style.display="none";
            
        }
        if(colorBlack.checked==true)
        {
            colorBlack.click();
        }
        if(colorWhite.checked==true)
        {
            colorWhite.click();
        }
        if(colorAll.checked==true)
        {
            colorAll.click();
        }
    }
}

//price
function forAllPrice(){ 
    console.log("hi");
    if(priceAll.checked==true)
    {
        if(price1to5.checked==true)
        {
            price1to5.click();
        }
        if(price5to10.checked==true)
        {
            price5to10.click();
        }
        if(priceAbove10.checked==true)
        {
            priceAbove10.click();
        }
    }
}
function forPrice1to5(){
    if(price1to5.checked==true)
    {
        if(priceAll.checked==true)
        {
            priceAll.click();
        }
        if(price5to10.checked==true)
        {
            price5to10.click();
        }
        if(priceAbove10.checked==true)
        {
            priceAbove10.click();
        }
    }
}
function forPrice5to10(){
    if(price5to10.checked==true)
    {
        if(price1to5.checked==true)
        {
            price1to5.click();
        }
        if(priceAll.checked==true)
        {
            priceAll.click();
        }
        if(priceAbove10.checked==true)
        {
            priceAbove10.click();
        }
    }
}
function forPriceAbove10(){
    if(priceAbove10.checked==true)
    {
        if(price1to5.checked==true)
        {
            price1to5.click();
        }
        if(price5to10.checked==true)
        {
            price5to10.click();
        }
        if(priceAll.checked==true)
        {
            priceAll.click();
        }
    }
}
