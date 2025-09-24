const estudiante={
    nombre:"Ladis",
    edad:18,
    contacto:{
        email:"ladisalberto213@gmail.com",
        telefono:"7955-2722",
    },
    materias:["Programacion I","Matematic II","Realidad nacional","Fisica","Estadistica"]

}
saludar:Function()
    console.log("Hola Me Llamo"+ this.nombre +"Y llevo las materias"+ this.materias[0])

    estudiante.saludar()

    // ejercicio2
    const tienda={
        nombre:"Tienda del campo",
        producto:{
          campo:{
            nombre:"Cartron de huevos",
            stock:5,
            precio:7.5
          }  ,
          celulares:{
            nombre:"Samsung s22+",
            stock:10,
            precio:450
          }
        }
    }
    console.log("\n\n Nombre del producto",tienda.producto.nombre)
    console.log("Precio del producto",tienda.producto.celulares.precio)
    console.log("Cantidad de stock restantes",tienda.producto.celulares.stock-1)