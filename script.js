'use strict'
let input = document.querySelector('input');
let btnAdd = document.querySelector('button');
let nodoNoCompletada = document.querySelector('.noCompletada');
let nodoCompletada = document.querySelector('.completada');

// ESTADO
let nuevaTarea = {
	nocompletadas:[
		
	],
	completadas:[
		
	]
};

//Guardar tareas / LOCAL STORAGE

function guardar(){

	let misTareas_json = JSON.stringify(nuevaTarea);
	localStorage.setItem('tareas', misTareas_json); 

}


//Pedir datos a local storage y almacena dato complejo, lo convierte a string

let misTareas_json = localStorage.getItem('tareas');
console.log(misTareas_json);


if(misTareas_json){
	nuevaTarea = JSON.parse(misTareas_json);
	
}
console.log(nuevaTarea)
// ESTADO actualizado

// No voy a ver las tareas pintadas

// Pintar tdas las tareas en su sitio

//aqui va el bucle for


for (let i = 0; i < nuevaTarea.nocompletadas.length; i++){

		
	let nuevaLista = document.createElement('li');
	let checkBtn = document.createElement('button');
	let borraBtn = document.createElement('button');
	let upBtn = document.createElement('button');
	

	checkBtn.innerHTML = '<i class="fas fa-check-double"></i>';
	borraBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
	upBtn.innerHTML = '<i class="fas fa-arrow-alt-circle-up"></i>';
	

	nuevaLista.textContent =nuevaTarea.nocompletadas[i];


	nodoNoCompletada.appendChild(nuevaLista);
	nuevaLista.appendChild(checkBtn);
	nuevaLista.appendChild(borraBtn);
	nuevaLista.appendChild(upBtn);

	
	
	checkBtn.addEventListener('click', function(){

		// Borrar la tarea del array no completadas

		// Añadir la tarea al array completadas

		// Guardar en Local Storage

		let parent = checkBtn.parentNode;
		parent.remove();
		nodoCompletada.appendChild(parent);
		// checkBtn.style.display = 'none';
		nuevaTarea.completadas.push(nuevaLista.textContent)
		borrarTarea( nuevaTarea.nocompletadas, nuevaLista.textContent );
		guardar();
		
	});
	
	
	upBtn.addEventListener('click', function(){
		let parent = checkBtn.parentNode;
		parent.append();
		nodoNoCompletada.appendChild(parent);
			// checkBtn.style.display = 'flex';
		nuevaTarea.nocompletadas.push(nuevaLista.textContent)
		borrarTarea( nuevaTarea.completadas, nuevaLista.textContent );
		guardar();
	});
	
	
	
	borraBtn.addEventListener('click', function(){
		let parent = borraBtn.parentNode;
		parent.remove();
		borrarTarea(nuevaTarea.nocompletadas,nuevaLista.textContent);
		borrarTarea(nuevaTarea.completadas,nuevaLista.textContent);
		guardar();
	});
	
}

for (let i = 0; i < nuevaTarea.completadas.length; i++){

		
	let nuevaLista = document.createElement('li');
	let checkBtn = document.createElement('button');
	let borraBtn = document.createElement('button');
	let upBtn = document.createElement('button');
	

	checkBtn.innerHTML = '<i class="fas fa-check-double"></i>';
	borraBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
	upBtn.innerHTML = '<i class="fas fa-arrow-alt-circle-up"></i>';
	

	nuevaLista.textContent =nuevaTarea.completadas[i];


	nodoCompletada.appendChild(nuevaLista);
	nuevaLista.appendChild(checkBtn);
	nuevaLista.appendChild(borraBtn);
	nuevaLista.appendChild(upBtn);

	
	
	checkBtn.addEventListener('click', function(){


		let parent = checkBtn.parentNode;
		parent.remove();
		nodoCompletada.appendChild(parent);
		nuevaTarea.completadas.push(nuevaLista.textContent)
		borrarTarea( nuevaTarea.nocompletadas, nuevaLista.textContent );
		guardar();
		
	});
	
	
	upBtn.addEventListener('click', function(){
		let parent = checkBtn.parentNode;
		parent.append();
		nodoNoCompletada.appendChild(parent);
		nuevaTarea.nocompletadas.push(nuevaLista.textContent)
		borrarTarea( nuevaTarea.completadas, nuevaLista.textContent );
		guardar();
	});
	
	
	
	borraBtn.addEventListener('click', function(){
		let parent = borraBtn.parentNode;
		parent.remove();
		borrarTarea(nuevaTarea.nocompletadas,nuevaLista.textContent);
		borrarTarea(nuevaTarea.completadas,nuevaLista.textContent);
		guardar();
	});
	
}




btnAdd.addEventListener('click', agregaLista);



//Borras tareas / LOCAL STORAGE

function borrarTarea ( lista , item ){
	console.log(nuevaTarea)

	let i = lista.indexOf( item );

	if ( i !== -1 ){
		lista.splice (i, 1);
	}
}


function agregaLista(){

	
	let nuevaLista = document.createElement('li');
	let checkBtn = document.createElement('button');
	let borraBtn = document.createElement('button');
	let upBtn = document.createElement('button');
	
    //PINTA BOTONES DE CHECK Y BORRAR

	checkBtn.innerHTML = '<i class="fas fa-check-double"></i>';
	borraBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
	upBtn.innerHTML = '<i class="fas fa-arrow-alt-circle-up"></i>';
	
	
    //EVITAR CELDAS EN BLANCO y PINTAR BOTONES

	if(input.value !=''){
		nuevaLista.textContent = input.value;
		// añadir la tarea al array y después actualitar local storage
		// push sobre un array
		nuevaTarea.nocompletadas.push( input.value )

		// Guardar en Local Storage
		
		guardar();


		input.value = '';
		nodoNoCompletada.appendChild(nuevaLista);
		nuevaLista.appendChild(checkBtn);
		nuevaLista.appendChild(borraBtn);
		nuevaLista.appendChild(upBtn);
	}
	
    //CLICK EN BOTON DOBLE CHECK PARA PASAR A TAREA COMPLETADA
	
	checkBtn.addEventListener('click', function(){

		// Borrar la tarea del array no completadas

		// Añadir la tarea al array completadas

		// Guardar en Local Storage

		let parent = checkBtn.parentNode;
		parent.remove();
		nodoCompletada.appendChild(parent);
		// checkBtn.style.display = 'none';
		nuevaTarea.completadas.push(nuevaLista.textContent)
		borrarTarea( nuevaTarea.nocompletadas, nuevaLista.textContent );
		guardar();
		
	});
	
	//CLICK EN BOTON FLECHA PARA VOLVER A NO COMPLETADA
	
	upBtn.addEventListener('click', function(){
		let parent = checkBtn.parentNode;
		parent.append();
		nodoNoCompletada.appendChild(parent);
			// checkBtn.style.display = 'flex';
		nuevaTarea.nocompletadas.push(nuevaLista.textContent)
		borrarTarea( nuevaTarea.completadas, nuevaLista.textContent );
		guardar();
	});
	
	
    //CLICK EN BOTON PAPELERA PARA ELIMINAR TAREA
	
	borraBtn.addEventListener('click', function(){
		let parent = borraBtn.parentNode;
		parent.remove();
		borrarTarea(nuevaTarea.nocompletadas,nuevaLista.textContent);
		borrarTarea(nuevaTarea.completadas,nuevaLista.textContent);
		guardar();
	});


}

