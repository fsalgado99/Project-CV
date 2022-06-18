$(document).ready(function()
{
    $('#header').toggle();//por defecto se aciva el navbar

    // nave= navigator.navigator;
     ua= navigator.userAgent;
     console.log(ua); 
   

    class dispositivos
    {
        esMovil=false;
        esTablet=false;
        esIphone=false;
        esIpad=false;
        esPC=false;
    }
    const detectarDis=()=>
    {
        dispos=new dispositivos()
        if(navigator.userAgent.toLowerCase().match(/mobile/))//en una expresion regular busco cualquier considencia de mobile que el userAgent me arroje
        {
            dispositivos.esMovil=true;
        }
        if(navigator.userAgent.toLowerCase().match(/tablet/))
        {
                dispositivos.esTablet=true;
        }
        
        
        if(navigator.userAgent.toLowerCase().match(/iPad/))
         {
                dispositivos.esIPad=true;
                console.log("ES PC");

        }
        else
        {
            if(navigator.userAgent.toLowerCase().match(/PC/, /computer/, /ordernator/,/computadora/, /ordenador/))
            {
                dispositivos.esPC=true;
                console.log("ES PC");
            }

        }

    }
    window.addEventListener('load',detectarDis())
    {
        if(dispositivos.esMovil || dispositivos.esIPad || dispositivos.esTablet || dispositivos.esIphone)
        {
            $('#header').toggle();// funciona como un swicth

        }
        else
        {
            $('#header').toggle();
            return false;
        }

    }


    
    var contador=1;  /*necesario para hacer la animacion*/
    var cont2=1;
    $('.mobile-nav-toggle').click(function()
    {
        if(dispositivos.esMovil==true || dispositivos.esIPad==true|| dispositivos.esTablet==true)       
         {
            $('#header').toggle();
            
            if(contador==1)
            {
                $('#hedaer').animate('animationToggle');
                (
                    {
                        left:'0'
    
                    }
                );
                contador=0;
            }
            else
            {       
                contador=1;   
                    $('#hedaer').animate('animationToggle')
                    (
                        {
                            left:'-100%'
        
                        }
                    );
    
            }
        }
        else
        {
            
        

        }
       
    })    
    //para cuando le damos click en una opcion se oculte
    $('.listMenu').click(function() 
    {
        if(dispositivos.esMovil==true || dispositivos.esIPad==true|| dispositivos.esTablet==true)    
        {
            $('#header').toggle('animationToggle');

        }
        // else
        // {
        //     $('#header').toggle('animationToggle');

        // }

       

    })
   /*--------------------------para scroll---------------------------------*/
//    window.addEventListener('scroll',function()
//    {
       
//        let ubicacionPrincipal=window.pageYOffset
//        let $header =document.querySelector('#header')

//        window.addEventListener('scroll',function()
//        {

//            let ubicacionActual=window.pageYOffset
//            if(ubicacionPrincipal>=ubicacionActual)
//            {
//             if(dispositivos.esMovil==true || dispositivos.esIPad==true|| dispositivos.esTablet==true)  
//             {
//                  $('#header').toggle();
 
//             }  
            
            
//             else
//             {
                
//              $('#header').toggle();
 
//             }
               
//            }
          
          

//        })
//        if(contador==1)
//        {
//         $('.listMenu').click(function() 
//         {
//             $('#header').toggle('animationToggle');
    
//         })

//        }
//        else
//        {
//            return false;
//        }

       
//    })
});

