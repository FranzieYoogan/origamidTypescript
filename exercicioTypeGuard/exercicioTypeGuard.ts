async function fetchCursos() {
    const response = await fetch("https://api.origamid.dev/json/cursos.json")
    const json = await response.json()
    handleCursos(json)
}

fetchCursos()

interface Curso {
    nome:string,
    aulas:number,
    gratuito:boolean,
    horas:number,
    idAulas:number[],
    nivel:"iniciante" | "avancado",
    tags:string[]
}

function  isCurso(value:unknown):value is Curso { //typeguard
    if(value && typeof value ==="object" && "nome" in value && "horas" in value && "tags" in value) { 
        return true
} else {
    return false
}
}

function handleCursos(data:unknown) {
    if(Array.isArray(data)){
        console.log(data) // verificar o q tem no api
       data.filter(isCurso).forEach((item => {
        document.body.innerHTML += `
        <div>
        <h2>${item.nome}</h2>
        <p>${item.horas}</p>
        <p>${item.tags.join(", ")}</p>
        </div>`
       }))
        }

    }
    
