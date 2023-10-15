

function innerModal(){
    const galleryContainer=document.getElementById('gallery')   


    function createModal(){
        console.log(galleryContainer)
    
        galleryContainer.innerHTML+=`
        
        <div class='modal-gallery'>
            <div class='controls'>
                <button>x</button>
                <button>x</button>
            </div>
            <div class='modal-container-img'>
                ...
            </div>
        </div>
        
        `  
    }

    galleryContainer ? createModal() : console.log('err')
          
   

}   
innerModal()


var imgs=document.querySelectorAll('#gallery img') 
 

modalToggle=(evt)=>{ 
    //  src=evt.target.src

    var rect = e.target.getBoundingClientRect(); // get some poition, scale,... properties of the item
    mousePos.x = e.clientX - rect.left; // get the mouse position relative to the element
    mousePos.y = e.clientY - rect.top;
console.log(mousePos.x)
  

    console.log('oi',document.querySelector('.modal-gallery'))
    document.querySelector('.modal-gallery').classList.toggle('show')
    const mygallery=document.querySelector('.modal-gallery')

    mygallery.style.top = mousePos.y + "px";
    mygallery.style.position = "fixed";   
}



Array.from(imgs).map((el)=>{ 
    el.addEventListener("click", modalToggle)


}) 