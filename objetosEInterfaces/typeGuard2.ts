async function fetchProduto() {
    const response = await fetch("https://api.origamid.dev/json/notebook.json")
    const json = await response.json()
    handleProduto(json)
}

fetchProduto()

interface Produto {
    nome:string,
    preco:number
}

function isProduto(value:unknown): value is Produto {
    if (value && typeof value==="object" && "nome" in value && "preco" in Produto) {
        return true
    } else {
        return false
    }
}

function handleProduto(data:unknown) {
console.log(data)
}

