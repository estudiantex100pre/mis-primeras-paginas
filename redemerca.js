const menu = document.getElementById('menu') ;
const nav = document.getElementById("navegacion") ;
const ayuda = document.getElementById("ayuda") ;
const sub = document.getElementById("sub-menu") ;
/*header*/
menu.parentElement.parentElement.addEventListener("click" , (e)=>{
	console.log(e.target)
	if(e.target == menu || e.target ==menu.firstElementChild){
		menu.classList.add("border-naranja") ;
		nav.classList.toggle("menu-abierto") ;
		sub.classList.remove("menu-abierto") ;
	}
	else 
		menu.classList.remove("border-naranja") ;

	if(e.target == ayuda) {
		sub.classList.toggle("menu-abierto") ;
	}
	if (sub.classList[1] == "menu-abierto") 
			ayuda.style.color = "#000" ;
		else
			ayuda.style.color = "rgba(165,167,165,1)" ;
})

/*iamgenes*/
	var i =1 ;
	const opcion = document.getElementById("imagenes").firstElementChild ;
	const div = document.getElementById("imagenes").lastElementChild ;
var tiempo = setInterval(()=>{	 
	i++ ;
	const opcnum= opcion.className[opcion.className.length-1] ;
	if(opcnum == 1){
		div.style.background = 'url(https://www.redemerca.com/Content/img/Banners/Principal/banner2_1.jpg)  left top / 102% 100%' ;
		opcion.className="opcion2" ;
	} else if(opcnum ==2) {
		div.style.background = 'url(https://www.redemerca.com/Content/img/Banners/Principal/banner3_1.jpg) left top / 102% 100%' ;
		opcion.className = "opcion3" ;
	} else {
		div.style.background = 'url(img/imangen1.JPG) left top / 102% 100%' ;
		opcion.className = "opcion1" ;
	}
	const raya1 = opcion.nextElementSibling;
	if(raya1.classList[1] == "rayas" ){
		raya1.classList.remove("rayas") ;
		raya1.nextElementSibling.classList.add("rayas") ;
	} else if(raya1.nextElementSibling.classList[1] == "rayas" ){
		raya1.nextElementSibling.classList.remove("rayas") ;
		raya1.nextElementSibling.nextElementSibling.classList.add("rayas") ;
	} else {
		raya1.classList.add("rayas") ;
		raya1.nextElementSibling.nextElementSibling.classList.remove("rayas") ;
	}

} , 5000)
const enunciado = document.getElementById("enunciado") ;
const hijos = enunciado.children ;
var contador = 0 ;
var oracion = 1 ;
//oracion1 = "<pre>rea</pre><pre>lice</pre><pre> sus</pre><pre> comp</pre><pre>ras</pre><pre> de m</pre><pre>anera</pre><pre> rapi</pre><pre>da</pre><pre>, fac</pre><pre>il y</pre><pre> senc</pre><pre>illa</pre><pre>   </pre><pre>    </pre><pre>     </pre><pre>     </pre>"
oracion1 ='<pre class="">rea</pre><pre class="">lice</pre><pre class=""> sus</pre><pre class=""> comp</pre><pre class="">ras</pre><pre class=""> de m</pre><pre class="">anera</pre><pre class=""> rapi</pre><pre class="">da</pre><pre class="">, fac</pre><pre class="">il y</pre><pre class=""> senc</pre><pre class="">illa</pre><pre class="">   </pre><pre class="">    </pre><pre class="">     </pre><pre class="">     </pre>'
oracion2 ='<pre class="">!nues</pre><pre class="">tra </pre><pre class="">empre</pre><pre class="">sa g</pre><pre class="">arant</pre><pre class="">iza </pre><pre class="">sus </pre><pre class="">comp</pre><pre class="">ras </pre><pre class="">mas </pre><pre class="">de 20 a</pre><pre class="">ños </pre><pre class="">de t</pre><pre class="">raye</pre><pre class="">ctor</pre><pre class="">ia </pre><pre class="">come</pre><pre class="">rcia</pre><pre class="">l le </pre><pre class="">res</pre><pre class="">pal</pre><pre class="">dan! </pre><pre class="">      </pre><pre class="">     </pre><pre class="">       </pre>'
oracion3 ='<pre class="">!sin </pre><pre class="">cos</pre><pre class="">to </pre><pre class="">por </pre><pre class="">env</pre><pre class="">io! </pre><pre class="">des</pre><pre class="">pac</pre><pre class="">hamos </pre><pre class="">gra</pre><pre class="">tis </pre><pre class="">a tu</pre><pre class="">cas</pre><pre class="">a o of</pre><pre class="">ici</pre><pre class="">na </pre><pre class="">las </pre><pre class="">24hr!</pre><pre class="">        </pre><pre class="">       </pre><pre class="">        </pre><pre class="">     </pre>'
enunciado.innerHTML = oracion1 ;

var stop =  setInterval( ()=>{
	var palabras = setInterval( ()=>{ console.log(contador) ;
		if((contador != hijos.length) && (hijos[contador].className != "borrar")  )
			hijos[contador].className = "borrar"     // 0 1
		else {
			contador = -1 ;
			for(var i =0 ; i<hijos.length ; i++)
				hijos[i].classList.remove("borrar") ; 

			if(oracion1 ==  enunciado.innerHTML) 
				enunciado.innerHTML = oracion2;
			else if(oracion2 == enunciado.innerHTML)
				enunciado.innerHTML = oracion3 ;
			else enunciado.innerHTML = oracion1 ;
			clearTimeout(palabras) ;
		}
		contador++ ;
		console.log(contador)

	} , 100 )
	

} , 4000) ;
