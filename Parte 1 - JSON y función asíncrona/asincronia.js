const datos= [
    {
      id: 1,
      nombre: "goku",
      poder: "genkidama"
    },
    {
      nombre: "freeza",
      poder: "Death Ball",
      id: 2
    },
    {
      id: 3,
      nombre: "Piccolo",
      poder: "Masenko"
    }
  ]

  const getDatos = () => {
    return new Promise ((resolve,reject) => {
        setTimeout(()=>{
            resolve(datos);
        return datos;
    },1500);
    });
}


async function asincrono(){
    const datos_asincrono = await getDatos();
    console.log(datos_asincrono)
}
asincrono();
