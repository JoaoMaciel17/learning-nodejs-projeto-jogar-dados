module.exports = function(application){

	application.get('/', function(req,res){
		
		res.render('home');
	});

	application.get('/iniciar', function(req,res){
		console.log('routes: /iniciar');
		application.app.controllers.jogo.iniciar(application,req,res);
		//res.send('Esta funcionalidade não foi implementada ainda.');
	});

	application.get('/lancarDados', function(req,res){
		console.log('routes: /lancarDados');
		application.app.controllers.jogo.novoLancamento(application,req,res);
		//res.send('Esta funcionalidade não foi implementada ainda.');
	});

	application.get('/reiniciar', function(req,res){
		console.log('routes: /reiniciar');
		application.app.controllers.jogo.reiniciar(application,req,res);
		//res.send('Esta funcionalidade não foi implementada ainda.');
	});

	application.get('/encerrar', function(req,res){
		console.log('routes: /encerrar');
		application.app.controllers.jogo.encerrar(application, req, res);
		//res.send('Esta funcionalidade não foi implementada ainda');
	});
	application.get('/dadoNegro', function(req,res){
		console.log('routes: /dadoNegro');
		application.app.controllers.jogo.dadoNegro(application,req,res);
	})
	application.get('/dadoRpg', function(req,res){
		console.log('routes: /dadoRpg');
		application.app.controllers.jogo.dadoRpg(application,req,res);
	})

		application.get('/comprarRpg', function(req,res){
		console.log('routes: /comprarRpg');
		application.app.controllers.jogo.comprarRpg(application,req,res);
		application.app.controllers.jogo.novoLancamento(application,req,res);
	})
	
}