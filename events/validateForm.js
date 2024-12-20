function validateForm(form){
    var Now = parseInt(getValue("WKNumState"));
	var errors = [];
	var msg = '';
	var usuario = getValue("WKUser");
	Date.prototype.addDays = function(days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    }

    if(Now == 0 || Now == 4 && usuario != "20000834")  {
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
        if(form.getValue("Ficha") == "" && form.getValue("Vendas") == "" && form.getValue("Livro") == "" && form.getValue("Apoio") == ""
        && form.getValue("Video") == "" && form.getValue("Manual") == "" && form.getValue("Arquivo") == "" && form.getValue("Slides") == ""
		&& form.getValue("Plano") == "" && form.getValue("Cessao") == "" && form.getValue("Material") == "") {
           errors.push("Nenhuma das Caixas preenchidas")
       }

	   if(form.getValue("campoDivulgacao") == "") {
			errors.push("Campo Listar Materiais de Divulgação não foi preenchido")
	   }
	   if(form.getValue("campoApoio") == "") {
		errors.push("Campo Listar Materiais de Apoio não foi preenchido")
	   }
	   if(form.getValue("programaSolucao") == "") {
		errors.push("Campo Conteúdo Programático não foi preenchido")
	   }	
   	   if(form.getValue("programaSolucao") == "") {
			errors.push("Campo Conteúdo Programático não foi preenchido")
	   }
	   if(form.getValue("programaSolucao") == "") {
		errors.push("Campo Conteúdo Programático não foi preenchido")
       }
	   if(form.getValue("programaSolucao") == "") {
		errors.push("Campo Conteúdo Programático não foi preenchido")
       }
	   if(form.getValue("programaSolucao") == "") {
		errors.push("Campo Conteúdo Programático não foi preenchido")
	   }	
    }    

    if (errors.length > 0) {
		throw errors.join("\n");
	  }
}