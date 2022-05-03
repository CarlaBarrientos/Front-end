function f() {
    console.log('this is the start');
    setTimeout(function cb() {
        console.log('from call back');
    });

    console.log('this is just a message');
    setTimeout(function cb1() {
        console.log('this is a msg');
    }, 0);
    console.log('this is the end');
};

f();
//Resultado:
/*
En consola obtenemos lo siguiente:
this is the start
this is just a message
this is the end       
from call back        
this is a msg
Esto debido a que al llamar a setTimeout se añade el contenido al callback queue
después del tiempo especificado. Hasta eso en el stack se irán apilando los
demás mensajes que en este caso son los console.log que se imprimen primero.
El poner 0 o vacío como el tiempo especificado del setTimeout no significa que la
llamada a la función callback se ejecutará después del intérvalo dado 0 sino que
esta ejecución depende del número de tareas que están en la cola de espera y de si 
el CallStack está vacío para poder ejecutarse.
*/