

function innerModal(){
    const galleryContainer=document.getElementById('gallery')   


    function createModal(){
        
        galleryContainer.innerHTML+=`
        <div id='ovy'></div>
        <div class='modal-gallery'>
            <div class='controls'>
                <button class='modalToggle' onclick='modalToggle()'>x</button>
                <button class='modalToggle' onclick='modalToggle()'>x</button>
            </div>
            <div class='modal-container-img' id='img-cont'>
                img
            </div>
        </div>
        
        `  
    }

    galleryContainer ? createModal() : console.log('err')
          
   

}   
innerModal()


 

modalToggle=(e)=>{ 

    var imgCont=document.getElementById('img-cont')
    var src=e.target.src

    var rect = e.target.getBoundingClientRect(); // get some poition, scale,... properties of the item
    mousePos.x = e.clientX - rect.left; // get the mouse position relative to the element
    mousePos.y = e.clientY - rect.top; 

   
    document.querySelector('.modal-gallery').classList.toggle('show')
    document.getElementById('ovy').classList.toggle('show')
    const mygallery=document.querySelector('.modal-gallery')

    mygallery.style.top = mousePos.y + "px";
    mygallery.style.position = "fixed";   


    imgCont.innerHTML=`
       <img src='`+src+`'>
    
    `
}

var amodalToggle=document.querySelectorAll('#gallery .modalToggle')  


Array.from(amodalToggle).map((el)=>{ 
    el.addEventListener("click", modalToggle)  
}) 