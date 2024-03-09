class Vertice {
    constructor(acao){
        this.acao = acao
        this.cor = null
        this.pai = null
        this.adjacencia = []
    }

    insereAdjacencia(vertice){
        this.adjacencia.push(vertice)
    }
}

class Grafo {
    constructor(){
        this.vertices = []
        this.tempo = 0
    }

    adicionarVertice(acao){
        for(let i = 0; i < this.vertices.length; i++){
            if(this.vertices[i].acao == acao) return this.vertices[i].acao
        }
        const vertice = new Vertice(acao);
        this.vertices.push(vertice); 
        return vertice;
    }

    DFS(){ //busca em profundidade
        for(let i = 0; i < this.vertices.length; i++) {
            this.vertices[i].cor = 'branco'
        }

        for(let i = 0; i < this.vertices.length; i++){
            if(this.vertices[i].cor == 'branco'){
                this.DFSvisit(this.vertices[i])
            }
        }
    }

    DFSvisit(vert){
        this.tempo = this.tempo + 1
        vert.descoberta = this.tempo //momento da busca em que o vértice vert foi descoberto
        vert.cor = 'cinzento'
        for(let i = 0; i < vert.adjacencia.size; i++){
            if(vert.adjacencia[i].cor == 'branco'){
                vert.adjacencia[i].pai = vert
                this.DFSvisit(vert.adjacencia[i])
            }
        }
        vert.cor = 'preto'
        this.tempo = this.tempo+ 1
        vert.termino = this.tempo //momento da busca em que todos os vizinhos do vertice vert foram examinados
    }
}


//Criando fluxo de atendimento
grafoFluxoAtendimento = new Grafo()
let verticesAtendimento = ['Pegar senha', 'Triagem', 'Cadastro', 
                            'Avaliação médica','Realizar exames', 
                            'Internação']

//Adicionar vértices
for(let i = 0; i < verticesAtendimento.length; i++){
    grafoFluxoAtendimento.adicionarVertice(verticesAtendimento[i])
}

//Adicionar vizinhos
grafoFluxoAtendimento.vertices[0].adjacencia.push(verticesAtendimento[1])
grafoFluxoAtendimento.vertices[1].adjacencia.push(verticesAtendimento[2])
grafoFluxoAtendimento.vertices[2].adjacencia.push(verticesAtendimento[3])
grafoFluxoAtendimento.vertices[3].adjacencia.push(verticesAtendimento[4])
grafoFluxoAtendimento.vertices[3].adjacencia.push(verticesAtendimento[5])
grafoFluxoAtendimento.vertices[4].adjacencia.push(verticesAtendimento[3])

grafoFluxoAtendimento.DFS()


let brancos = new Map()
let cinzentos = new Map()
let pretos = new Map()

for(let j = 0; j < grafoFluxoAtendimento.vertices.length; j++){
    if(grafoFluxoAtendimento.vertices[j].cor == 'branco'){
        brancos.set(j, grafoFluxoAtendimento.vertices[j])
    }
    if(grafoFluxoAtendimento.vertices[j].cor == 'cinzento'){
        cinzentos.set(j, grafoFluxoAtendimento.vertices[j])
    }
    if(grafoFluxoAtendimento.vertices[j].cor == 'preto'){
        pretos.set(j, grafoFluxoAtendimento.vertices[j])
    }
}
console.log("Brancos: ")
console.log(brancos)
console.log("Cinzentos: ")
console.log(cinzentos)
console.log("Pretos:")
console.log(pretos)



