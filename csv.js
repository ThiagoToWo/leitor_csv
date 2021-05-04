function CSV(textoCSV) {
	this.texto = textoCSV;	
	this.matriz = this.criarMatriz(textoCSV);
	this.linhas = this.matriz.length;
	this.colunas = this.matriz[0].length;
}

CSV.prototype = {	
	criarMatriz: function(texto) {
		var matriz = []
		var linhas = texto.split('\n');
		
		for (var i in linhas) {
			matriz[i] = linhas[i].split(',');
		}
		
		return matriz;
	},
	
	linha: function(n) {
		return this.matriz[n];
	},
	
	coluna: function(n) {
		var col = [];
		
		for (var i in this.matriz) {
			col[i] = this.matriz[i][n];
		}
		
		return col;
	}
}