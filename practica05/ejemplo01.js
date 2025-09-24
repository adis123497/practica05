
// objetos
const persona={
    nombre: "Ladis",
    edad:18,
    profesion:"Estudiante",
    saludar:function(){
        console.log("Hola soy"+ this.nombre)
    }
}

persona.saludar();

// objetos anidados
const universidad={
    nombre:"UNIVO",
    ubicacion:{
        ciudad:"San Miguel",
        pais:"El Salvador"

    },
    facultades:{
        IngenieriaYarquitectura:{
            carreras:["Ingeneria en Dessarrollo de Software","Industrial","Arquitectura"]
        }
    }
}
