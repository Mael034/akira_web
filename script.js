
    
document.addEventListener("DOMContentLoaded", function () {
    
    document.getElementById("btnScroll").addEventListener("click", myFunction);
        function myFunction(){
            document.getElementById("dropDown").classList.toggle("dropDown2");
            console.log("test");
        }

    document.getElementById("btnburger").addEventListener("click", myFunction2);
        function myFunction2(){
            document.getElementById("burgerhidden").classList.toggle("burgerMontré");
            
        }

    document.getElementById("btnPersoBurger").addEventListener("click",function(){
        document.getElementById("BurgerSubMenu").classList.toggle("displayy");
        console.log("hello");
    })
        
    window.onclick = function(event) {
    if(!event.target.matches('.burgerCaché' && '.burger')) {
        var dropdownsburger = document.getElementById("burgerhidden")

            if(dropdownsburger.classList.contains('burgerMontré') && !event.target.matches('#btnPersoBurger')){

            dropdownsburger.classList.remove('burgerMontré');
            document.getElementById("BurgerSubMenu").classList.remove("displayy");
        }
        if (!event.target.matches('.btnScroll')) {
            var dropdowns = document.getElementById("dropDown");
            if (dropdowns.classList.contains('dropDown2')) {
                  dropdowns.classList.remove('dropDown2');
            }
        }
    }}
    

    let i = 1;
    let Cartes =           document.getElementsByClassName("cartePerso");
    let imageCarte =       document.getElementsByClassName("imgCard");
    let imageCarteMobile = document.getElementsByClassName("imgCardMobile2");

    let ImgKaneda = document.getElementById("imgKaneda");
    let ImgTetsuo = document.getElementById("imgTetsuo");
    let ImgKei =    document.getElementById("imgKei");
    let ImgAkira =  document.getElementById("imgAkira");

    let ImgKanedaMobile = document.getElementById("imgKanedaMobile");
    let ImgTetsuoMobile = document.getElementById("imgTetsuoMobile");
    let ImgKeiMobile =    document.getElementById("imgKeiMobile");
    let ImgAkiraMobile =  document.getElementById("imgAkiraMobile");

    document.getElementById("btnNext").addEventListener("click", fonctionApres);
    document.getElementById("btnPrec").addEventListener("click", fonctionAvant);

    document.getElementById("btnKaneda") .addEventListener("click",Kaneda);
    document.getElementById("btnKaneda2").addEventListener("click",KanedaMobile);
    document.getElementById("btnTetsuo") .addEventListener("click",Tetsuo);
    document.getElementById("btnTetsuo2").addEventListener("click",TetsuoMobile);
    document.getElementById("btnKei")    .addEventListener("click",Kei);
    document.getElementById("btnKei2")   .addEventListener("click",KeiMobile);
    document.getElementById("btnAkira")  .addEventListener("click",Akira);
    document.getElementById("btnAkira2") .addEventListener("click",AkiraMobile);

    function Kaneda() {i=1;Caroussel()};
    function Tetsuo() {i=2;Caroussel()};
    function Kei   () {i=3;Caroussel()};
    function Akira () {i=4;Caroussel()};
    function KanedaMobile() {i=10;Caroussel()};
    function TetsuoMobile() {i=11;Caroussel()};
    function KeiMobile   () {i=12;Caroussel()};
    function AkiraMobile () {i=13;Caroussel()};

    window.addEventListener("resize", function() {
        if(window.innerWidth < 700 && i < 6 ){
            i=i+9;
            var y;
            for (y = 0; y < imageCarte.length; y++) {
                imageCarte[y].style.display = 'none';
            }
            Caroussel();
         }
         if (window.innerWidth >700 && 700 && i>6){
            i=i-9;
            var z;
            for (z = 0; z < imageCarteMobile.length; z++) {
                imageCarteMobile[z].style.display = 'none';
            }
            Caroussel();
        }
    })
        
    function fonctionApres(){
        i++;
        if(i==5 || i==14){
            i=i-4;
        }
        if(window.innerWidth < 700 && i < 6 ){
            i=i+9;
        }
        Caroussel();
    }

    function fonctionAvant(){
        i--;
        if(i==0 || i==9){
            i=i+4;
        }
        if (window.innerWidth >700 && 700 && i>6){
            i=i-9;
        }
        Caroussel();
    }

    function Caroussel(){
        var x;
        for (x = 0; x < Cartes.length; x++) {
            Cartes[x].style.display = 'none';
        }
        if (i==1){
            ImgKaneda.style.display = "block";
            document.getElementById("texteKaneda").style.display = "block";
        }
        if (i==2){
            ImgTetsuo.style.display = "block";
            document.getElementById("texteTetsuo").style.display = "block";
        }
        if (i==3){
            ImgKei.style.display = "block";
            document.getElementById("texteKei").style.display = "block";
        }
        if (i==4){
            ImgAkira.style.display = "block";
            document.getElementById("texteAkira").style.display = "block";
        }
        if (i==10){
            ImgKanedaMobile.style.display = "block";
            document.getElementById("texteKaneda").style.display = "block";
        }
        if (i==11){
            ImgTetsuoMobile.style.display = "block";
            document.getElementById("texteTetsuo").style.display = "block";
        }
        if (i==12){
            ImgKeiMobile.style.display = "block";
            document.getElementById("texteKei").style.display = "block";
        }
        if (i==13){
            ImgAkiraMobile.style.display = "block";
            document.getElementById("texteAkira").style.display = "block";
        }
       
    }})
