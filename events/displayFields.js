function displayFields(form,customHTML){
    var Now_State = parseInt(getValue("WKNumState"));
    var NumProcesso = getValue("WKNumProces");
    var usuario = getValue("WKUser");
    var data = new java.text.SimpleDateFormat("dd/MM/yyyy HH:mm:ss");

    switch(Now_State){
        case 0:
            form.setValue("cmb_NomeSolicitante",usuario);
            form.setValue("dt_DataSolicit",data.format(new Date()));

            form.setEnabled("cmb_NomeSolicitante",false);
            form.setEnabled("dt_DataSolicit",false);
            
            form.setVisibleById("campo-divulg", false);
            form.setVisibleById("campo-apoio", false);

        break;

        case 4:
            form.setValue("cmb_NomeSolicitante",usuario);
            form.setValue("dt_DataSolicit",data.format(new Date()));

            form.setEnabled("cmb_NomeSolicitante",false);
            form.setEnabled("dt_DataSolicit",false);

            form.setVisibleById("campo-divulg", false);
            form.setVisibleById("campo-apoio", false);

        break;

        case 10:
            form.setValue("txt_NumProc",NumProcesso);
        break;

        case 43:
            form.setValue("someMenc",false);
            form.setValue("someMeta",false);
        break;

        default:
    }

    if (Now_State == 43) {
        form.setVisibleById("someMenc",true);
        form.setVisibleById("someAprov",true);
    } if (Now_State == 49) {
        form.setVisibleById("someMeta",true);
        form.setVisibleById("someAprov",true);
    } else {
        form.setVisibleById("someAprov",false);
        form.setVisibleById("someMenc",false);
        form.setVisibleById("someMeta",false);
    }
 }