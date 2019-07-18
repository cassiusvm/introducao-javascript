var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    var td = event.target;
    var tr = td.parentNode;

    tr.classList.add("fadeOut");

    if(tr.id != "cabecalho")
        setTimeout(function() {
            tr.remove();
        }, 500);

    // outra forma de remover:
    /*
    if(td.tagName == "TD")
        tr.remove();
    */
});