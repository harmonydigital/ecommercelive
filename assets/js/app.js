const app = document.getElementById('app')
relogio=()=>{
    containerDate=document.getElementById('relogio')
    const data=new Date()
    let hr=data.getHours()
    let mn=data.getMinutes()
    let ms=data.getSeconds()


    let horaatual=hr+":"+mn+":"+ms
    // console.log(horaatual)

    if(containerDate){
        containerDate.innerHTML=`<h5>Horário de Brasília `+horaatual+`</h5>`
    }

    return horaatual
}  

gotop=()=>{
   window.scrollTo(0, 0);
}
initapp=()=>{
    app.innerHTML=`
        <header  id="top">
            <div class='brand'><a href='index.html'>
            Harmony Store
            </a></div>
            <div class='menu'>
            <button onclick='menutoggleMenu()' class='btn-menu'>
            <i class="fa-solid fa-bars"></i>
            </button>
                <nav>
                    <div class='controls' onclick='closeMenu()' >
                        <button>
                        <svg class="svg-inline--fa fa-chevron-left" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path></svg>
                        </button>
                        <button onclick='closeMenu()' >
                        <svg class="svg-inline--fa fa-xmark" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"></path></svg>
                        </button>
                    </div>
                    <ul>
                        <li>
                            <a href='#portfolio'>Galeria</a>
                        </li>
                        
                        <li>
                            <a href='#about'>Loja Demo</a>
                        </li>
                        
                        <li>
                            <a class='btn primary convert-btn' href="">
                                <span>comprar agora</span>
                                <i class="fa-brands fa-whatsapp"></i>
                            </a>
                        </li>
                       
                    </ul>
                </nav>
            </div>
            
        </header>
        <main>
    <div class='display'>
       <div class='content-text'>
          <span class='title'>E-commerce</span>
          <h1>Visual, Leve e Intuitivo</h1>
            <div class='mockupDesk'>
               <img src='assets/img/mockup.png' class='lojaMockup' alt=''>
            </div>
          <!--<h2>ative a criatividade e comece algo novo  agora mesmo...</h2> -->
          <a class='btn-down' href='#about' style='display:none;'>
          <i class="fa-solid fa-chevron-down"></i>
          </a>
       </div>
       <div class='social' style='display:none;'>
          <a class='' href='https://www.instagram.com/harmonydigitalflow/'  target="_blank">    
          <i class="fa-brands fa-instagram"></i>
          </a>
          <a class='' href="https://www.linkedin.com/in/vinicius-harmony-699b37267/" target="_blank">
          <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a class='' href="https://github.com/harmonydigital" target="_blank" > 
          <i class="fa-brands fa-github"></i>
          </a>
       </div>
    </div>
    <div class='download'>
        <div class="container">
          <div class="text-content">
            <span class="title"></span>
            <h2>Seu e-commerce sem limites   </h2>
            <p>Obtenha sua loja completa com integração de pagamento e painel administrativo, receba pedidos sem limites.</p>
            <a href='curriculo-vinicius-araujo-harmony.pdf' target='_blank' class="btn primary ">
                 Comprar loja agora <i class="fa-brands fa-whatsapp"></i>

            </a>
         </div>
        </div>
      </div>
    <div class='harmonyabout' id='about' hidden>
       <div class='container-flex'>
          <div class='content-text'>
             <span class='title'></span>
             <h2>produtos
                para pessoas,
                como eu e você.
             </h2>
             <a class='anchor btn primary convert-btn h-xs' href='#about'>
             <span>d q</span>
             <i class="fa-brands fa-whatsapp"></i>
             </a>
          </div>
          <div>
             <p>Harmony se traduz na eficiente interação entre produtos e pessoas.
                </br></br>Somos a estreita relação do homem e tecnologia, amamos criar soluções reais para tornar a vida de pessoas ainda
                melhor.
                </br></br>Unimos um grupo de profissionais do Design, para conversas sobre o comportamento humano e como a interação de alguns produtos podem ser tão relevantes, assim projetar novos modelos e testar novas soluções.
                </br></br>Aqui tudo começa na relação de pessoa para pessoa, criamos uma conexão com o interlocutor e então podemos entender como o Design pode solucionar e otimizar nossa vida enquanto seres humanos.
                Veja o que fizemos até aqui, e crie algo novo você também..
             </p>
          </div>
       </div>
    </div>
    <div class='portfolio' id='portfolio'>
       <div class='text-content'>
          <span class='title'></span>
          <h3> Painel Intuítivo</h3>
       </div>
       <div class='tabs-portfolio'>
          <div class="tab">
             <button class="tablinks" onclick="openCity(event, 'apps')">Screenshots</button>
             <button class="tablinks" onclick="openCity(event, 'brand')">Vantagens</button> 
          </div>
          <div id="apps" class="tabcontent">
                
                <div id='gallery' class='screenshotsgallery'>
                  <div class='container-fluid'>
                  <div class='container-img'>
                     <img class='modalToggle' src='assets/img/screens/img1.png' alt=''> 
                  </div>
                </div>
         
          </div>
          <div id="brand" class="tabcontent">
          
          
          
          </div>
          
       </div>
    </div>
    </div>
    <div class='download'>
        <div class="container">
          <div class="text-content">
            <span class="title"></span>
            <h2>Seu e-commerce sem limites   </h2>
            <p>Obtenha sua loja completa com integração de pagamento e painel administrativo, receba pedidos sem limites.</p>
            <a href='curriculo-vinicius-araujo-harmony.pdf' target='_blank' class="btn primary ">
                 Comprar loja agora <i class="fa-regular fa-file-pdf"></i>
            </a>
         </div>
        </div>
      </div>
 </main>
      
    `
    gotop()
}
app ? initapp() : console.log('err')