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
        this.nCiclos = 0
    }

    adicionarVertice(acao){
        for(let i = 0; i < this.vertices.length; i++){
            if(this.vertices[i].acao == acao) return this.vertices[i].acao
        }
        const vertice = new Vertice(acao);
        this.vertices.push(vertice);
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
        console.log("HÁ " + this.nCiclos + " CICLO(S) NO GRAFO!")
    }

    DFSvisit(vert){
        this.tempo = this.tempo + 1
        vert.descoberta = this.tempo //momento da busca em que o vértice vert foi descoberto
        vert.cor = 'cinzento'
        for(let i = 0; i < vert.adjacencia.length; i++){
            if(vert.adjacencia[i].cor == 'branco'){
                vert.adjacencia[i].pai = vert
                this.DFSvisit(vert.adjacencia[i])
            } else if(vert.adjacencia[i].cor == 'cinzento'){
                this.nCiclos++
                
            }
        }
        vert.cor = 'preto'
        this.tempo = this.tempo+ 1
        vert.termino = this.tempo //momento da busca em que todos os vizinhos do vertice vert foram examinados
    }
}

//EXEMPLO DE FLUXO DE ATENDIMENTO COM UM CICLO
//Criando fluxo de atendimento
/*grafoFluxoAtendimento = new Grafo()
let verticesAtendimento = ['Pegar senha', 'Triagem', 'Cadastro', 
                            'Avaliação médica','Realizar exames', 
                            'Ser medicado', 'Alta']

//Adicionar vértices
for(let i = 0; i < verticesAtendimento.length; i++){
    grafoFluxoAtendimento.adicionarVertice(verticesAtendimento[i])
}

//Adicionar vizinhos
grafoFluxoAtendimento.vertices[0].adjacencia.push(grafoFluxoAtendimento.vertices[1])
grafoFluxoAtendimento.vertices[1].adjacencia.push(grafoFluxoAtendimento.vertices[2])
grafoFluxoAtendimento.vertices[2].adjacencia.push(grafoFluxoAtendimento.vertices[3])
grafoFluxoAtendimento.vertices[3].adjacencia.push(grafoFluxoAtendimento.vertices[4])
grafoFluxoAtendimento.vertices[3].adjacencia.push(grafoFluxoAtendimento.vertices[6])
grafoFluxoAtendimento.vertices[4].adjacencia.push(grafoFluxoAtendimento.vertices[5])
grafoFluxoAtendimento.vertices[5].adjacencia.push(grafoFluxoAtendimento.vertices[3])

grafoFluxoAtendimento.DFS()

let pretos = new Map()

for(let j = 0; j < grafoFluxoAtendimento.vertices.length; j++){
        pretos.set(j, grafoFluxoAtendimento.vertices[j])
}
console.log("Pretos:")
console.log(pretos)*/

//EXEMPLO DE FLUXO DE ATENDIMENTO COM 2 CICLOS
//Criando fluxo de atendimento
/*grafoFluxoAtendimento2 = new Grafo()
let verticesAtendimento2 = ['Pegar senha', 'Triagem', 'Cadastro', 
                            'Avaliação médica','Realizar exames', 
                            'Internação']

//Adicionar vértices
for(let i = 0; i < verticesAtendimento2.length; i++){
    grafoFluxoAtendimento2.adicionarVertice(verticesAtendimento2[i])
}

//Adicionar vizinhos
grafoFluxoAtendimento2.vertices[0].adjacencia.push(grafoFluxoAtendimento2.vertices[1])
grafoFluxoAtendimento2.vertices[1].adjacencia.push(grafoFluxoAtendimento2.vertices[2])
grafoFluxoAtendimento2.vertices[2].adjacencia.push(grafoFluxoAtendimento2.vertices[3])
grafoFluxoAtendimento2.vertices[3].adjacencia.push(grafoFluxoAtendimento2.vertices[4])
grafoFluxoAtendimento2.vertices[3].adjacencia.push(grafoFluxoAtendimento2.vertices[5])
grafoFluxoAtendimento2.vertices[4].adjacencia.push(grafoFluxoAtendimento2.vertices[3])
grafoFluxoAtendimento2.vertices[5].adjacencia.push(grafoFluxoAtendimento2.vertices[3])

grafoFluxoAtendimento2.DFS()

let pretos2 = new Map()

for(let j = 0; j < grafoFluxoAtendimento2.vertices.length; j++){
        pretos2.set(j, grafoFluxoAtendimento2.vertices[j])
}
console.log("Pretos:")
console.log(pretos2)*/

//EXEMPLO DE ÁRVORE DE DECISÃO
grafoArvoreDecisao = new Grafo()
let verticesArvore = ['Dor', 'Febre', 'Cansaço', 'Cultura positiva',
                       'Troponina aumentada', 'TSH aumentado', 'Vertigem',
                        'Infecção bacteriana', 'Infarto', 'Hipotireoidismo',
                        'Labirintite']

//Adicionar vértices
for(let i = 0; i < verticesArvore.length; i++){
    grafoArvoreDecisao.adicionarVertice(verticesArvore[i])
}

//Adicionar vizinhos
grafoArvoreDecisao.vertices[0].adjacencia.push(grafoArvoreDecisao.vertices[1])
grafoArvoreDecisao.vertices[0].adjacencia.push(grafoArvoreDecisao.vertices[2])
grafoArvoreDecisao.vertices[1].adjacencia.push(grafoArvoreDecisao.vertices[3])
grafoArvoreDecisao.vertices[1].adjacencia.push(grafoArvoreDecisao.vertices[4])
grafoArvoreDecisao.vertices[2].adjacencia.push(grafoArvoreDecisao.vertices[5])
grafoArvoreDecisao.vertices[2].adjacencia.push(grafoArvoreDecisao.vertices[6])
grafoArvoreDecisao.vertices[3].adjacencia.push(grafoArvoreDecisao.vertices[7])
grafoArvoreDecisao.vertices[4].adjacencia.push(grafoArvoreDecisao.vertices[8])
grafoArvoreDecisao.vertices[5].adjacencia.push(grafoArvoreDecisao.vertices[9])
grafoArvoreDecisao.vertices[6].adjacencia.push(grafoArvoreDecisao.vertices[10])

grafoArvoreDecisao.DFS()

let final = new Map()
for(let j = 0; j < grafoArvoreDecisao.vertices.length; j++){
    final.set(j, grafoArvoreDecisao.vertices[j])
}
console.log("Pretos:")
console.log(final)



