// CONFIGURANDO O SERVIDOR
const express = require("express")
const server = express()




// CONFIGURAR O SERVIDOR PARA APRESENTAR ARQUIVOS ESTÁTICOS
server.use(express.static('public'))


// HABILITAR O CORPO DO FORMULÁRIO
server.use(express.urlencoded({extended: true}))




// CONFIGURANDO A TEMPLATE ENGINE
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server,
    noCache: true
})


// LISTA DE DOADORES: VETOR OU ARRAY
const donors = [
    {
        name: "Diego Fernandes",
        blood: "AB+"
    },
    
    {
        name: "Cleiton Souza",
        blood: "B+"
    },
    
    {
        name: "Robson Marques",
        blood: "A+"
    },
    
    {
        name: "Mayk Brito",
        blood: "O+"
    }


]


// CONFIGURAR A APRESENTAÇÃO DA PÁGINA
server.get("/", (req, res) => res.render("index.html", {donors}))


// CONFIGURANDO O SERVER PARA RECEBER OS DADOS DO FORMULÁRIO
server.post("/", function(req, res){
    const name = req.body.name
    const email = req.body.email
    const blood = req.body.blood

    // COLOCANDO VALORES DENTRO DO ARRAY

    donors.push({
        name: name,
        blood: blood})

    return res.redirect("/")
})



// LIGAR O SERVIDOR E PERMITIR O ACESSO NA PORTA 3000
server.listen(3000, () => console.log("Iniciei o servidor"))


