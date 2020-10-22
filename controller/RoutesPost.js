//rotas post
app.post("/cadastro", function(req, res){
	userinfo.create({
		firstname: req.body.firstname,
		lastname: req.body.lastname
	}).then(function(){
		res.send("Usuário criado com sucesso")
	}).catch(function(erro){
		res.send("Não foi possível criar o usuário, erro: " + erro)
	})
})
// app.post("/alteracao", function(req, res){
// 	userinfo.findOne({where: {"id": req.body.id}}).then(function(Userinfo){
		
// 		userinfo.firstname = req.body.firstname
// 		userinfo.lastname = req.body.lastname

// 		userinfo.save().then(() => {
// 			res.send("Usuário alterado com sucesso <a href=usuarios>Voltar</a>");
// 		})

// 	})
// })