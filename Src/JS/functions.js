export function SayHello(name){
   alert(`Olá, ${name}!`)
}

// function CarregarMocha(file, callback){
//     const lerArquivo = new XMLHttpRequest()
//     lerArquivo.overrideMimeType("application/json")
//     lerArquivo.open("GET", file, true)
//     lerArquivo.onreadystatechange = () => {
//         if(lerArquivo.readyState === 4 && lerArquivo.status === 200){
//             callback(lerArquivo.responseText)
//         }
//     }
//     lerArquivo.send(null)
// }

// export default CarregarMocha