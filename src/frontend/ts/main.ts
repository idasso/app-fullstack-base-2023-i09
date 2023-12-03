
// Inicio el main.ts definiendo la clase Main que implemente el eventListenerObject

var M; // Para resolver el la falla que arroja TS defino "M". "M" se define en tiempo de compilación en JS, pero TS no lo reconoce y arroja error.

class Main implements EventListenerObject{
    
    private buscarDevices() {
        
        let xmlRequest = new XMLHttpRequest(); // Permite hacer peticiones a un servido asíncrono. Es decir, el servidor en algún momento nos va a contestar, pero no sabemos cuando.
        
        xmlRequest.onreadystatechange = () => { //En el momento en que el servidor responde se viene a esta línea (no entiendo cómo, supongo que es algo que tiene que ver ocn este hilo independiente). Esta línea dice: "Cuando tengas una respuesta informala ejecutando este método de acá". Se usa un método anónimo.
     
            if (xmlRequest.readyState == 4) { //Se espera el estado 4 dado que son los estados que el servidor informa, siendo "4" el que indica que la información está disponible para consultarse. En una petición AJAX siempre se alcanza el estado 4. En realidad son 5 estados, del 0 al 4. 
                if(xmlRequest.status==200){ // Status == 200 es el resultado feliz. Todos lo otros son errores en la comunicación o en los servidores.
                    console.log(xmlRequest.responseText, xmlRequest.readyState); // En el responseText vamos a tener la respuesta.  
                    let respuesta = xmlRequest.responseText;
                    let datos:Array<Device> = JSON.parse(respuesta); // En las consexiones backend-frontend lo que se pasa es TEXTO PLANO, cuando viaja nosotros sabemos internamente que está escrito en formato JSON, así que lo podemos parsear en un objeto JSON. Usamos el método JSON.parse para hacer esto.
                    //Una vez que tenemos el objeto ya podemos manipularlo más fácilmente.
                    
                    let ul = document.getElementById("listaDisp"); 

                    for (let d of datos) { // Tengo que agregar el checked  adentro del input type. Si state==true, que esté "checked". Defino una variable que según el state sea true o no, completo el contenido con la palabra "checked" dentreo de la etiqueta de apertura <input> del checkbox.
                        let itemList =
                            ` <li class="collection-item avatar">
                        <img src="./static/images/lightbulb.png" alt="" class="circle">
                        <span class="title">${d.name}</span>
                        <p>
                         ${d.description}
                        </p>
                        <a href="#!" class="secondary-content">
                        <div class="switch" >
                        <label>
                          Off
                          <input type="checkbox"`;
                          itemList +=`nuevoAtt="${d.id}" id="cb_${d.id}"`
                        if (d.state) {
                            itemList+= ` checked `
                        }
                        
                        itemList+= `>
                          <span class="lever"></span>
                          On
                        </label>
                      </div>
                        </a>
                      </li>`
                       
                        ul.innerHTML += itemList;

                    }
                    for (let d of datos) {
                        let checkbox = document.getElementById("cb_" + d.id);

                        checkbox.addEventListener("click", this);
                    }

                }else{
                    console.log("no encontre nada");
                }
            }
            
        }
        xmlRequest.open("GET","http://localhost:8000/devices",true)
        xmlRequest.send();
    }

    private ejecutarPost(id:number,state:boolean) {
        let xmlRequest = new XMLHttpRequest();

        xmlRequest.onreadystatechange = () => {
            if (xmlRequest.readyState == 4) {
                if (xmlRequest.status == 200) {
                    console.log("Llegó respuesta",xmlRequest.responseText);        
                } else {
                    alert("Salió mal la consulta");
                }
            }   
        }
               
        xmlRequest.open("POST", "http://localhost:8000/device", true)
        xmlRequest.setRequestHeader("Content-Type", "application/json");
        let s = {
            id: id,
            state: state   };
        xmlRequest.send(JSON.stringify(s));
    }

    handleEvent(object: Event): void {
        let elemento = <HTMLElement>object.target;
        let switchID: Array<String> = [];
        
        if ("btnListar" == elemento.id) {
            this.buscarDevices();
        } else if (elemento.id.startsWith("cb_")) {
            let checkbox = <HTMLInputElement>elemento;
            console.log(checkbox.getAttribute("nuevoAtt"),checkbox.checked);
            
            this.ejecutarPost(parseInt(checkbox.getAttribute("nuevoAtt")),checkbox.checked);
        } else {
            console.log("elemento.id no matcheo con las opciones disponibles")
        }
    
    }

}

    
window.addEventListener("load", () => {
    
    let main1: Main = new Main();
    let boton = document.getElementById("btnListar");
    
    boton.addEventListener("click", main1);   

});