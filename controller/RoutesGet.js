//Rotas get
app.get('/', function(req, res){
	res.render("index")
})

app.get("/formulario", function(req, res){
	res.render("formulario");
})

app.get("/tabela", function(req, res){
	userinfo.findAll({order: [["firstname", "ASC"]]}).then(function(userinfo){
		res.render("userinfo", {usuarios: usuarios})
	})
})

app.get("/usuario/:id", function(req, res){
	userinfo.findOne({where: {"id": req.params.id}}).then((userinfo) =>{
		res.render("userinfo", {usuario: usuario})
	})
})

app.get("/delete/:id", function(req, res){
	userinfo.destroy({where: {"id": req.params.id}}).then(function(){
		res.send("Usuário removido com sucesso")
	}).catch(function(erro){
		res.send("Erro: " + erro)
	})
})
