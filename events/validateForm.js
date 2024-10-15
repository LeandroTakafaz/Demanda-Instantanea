function validateForm(form){
    var Now = parseInt(getValue("WKNumState"));
	var errors = [];
	var msg = '';
	Date.prototype.addDays = function(days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    }

    if(Now == 0 || Now == 4)  {
		if(form.getValue("formatoSolucao") == "") {
			errors.push("Campo Formato da Solução não foi preenchido")
		}
		if(form.getValue("nomeSolucao") == "") {
			errors.push("Campo Nome da Solução não foi preenchido")
		}
		if(form.getValue("subtituloSolucao") == "") {
			errors.push("Campo Subtítulo não foi preenchido")
		}
		if(form.getValue("temaSolucao") == "") {
			errors.push("Campo Tema da Solução não foi preenchido")
		}
		if(form.getValue("publicoAlvo") == "") {
			errors.push("Campo Público Alvo não foi preenchido")
		}
        if(form.getValue("grauEscolaridade") == "") {
			errors.push("Campo Grau de Escolaridade não foi preenchido")
		}
        if(form.getValue("modalidadeSolucao") == "") {
			errors.push("Campo Modalidade não foi preenchido")
		}
        if(form.getValue("abordagemSolucao") == "") {
			errors.push("Campo Abordagem não foi preenchido")
		}
        if(form.getValue("cargaHoraria") == "") {
			errors.push("Campo Carga Horária não foi preenchido")
		}
        if(form.getValue("momentoEmpresarial") == "") {
			errors.push("Campo Momento Empresarial não foi preenchido")
		}
        if(form.getValue("ambienteAprendizagem") == "") {
			errors.push("Campo Ambiente de Aprendizagem não foi preenchido")
		}
        if(form.getValue("estrategiasSolucao") == "") {
			errors.push("Campo Estratégias Metodológicas não foi preenchido")
		}
        if(form.getValue("competenciaSolucao") == "") {
			errors.push("Campo Competências Gerais não foi preenchido")
		}
        if(form.getValue("programaSolucao") == "") {
			errors.push("Campo Conteúdo Programático não foi preenchido")
		}
        if(form.getValue("Eventos") == "" && form.getValue("Coffee") == "" && form.getValue("Logo") == "" && form.getValue("Jornada") == ""
        && form.getValue("Estrategia") == "" && form.getValue("Imprensa") == "" && form.getValue("Grafica") == "" && form.getValue("Cobertura") == "" && form.getValue("Outros") == "") {
           errors.push("Nenhuma das Caixas preenchidas")
       }
    }    

    if (errors.length > 0) {
		throw errors.join("\n");
	  }
}