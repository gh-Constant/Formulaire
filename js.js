function empty() {
    var x;
    x = document.getElementById("libelle").value;
    if (x == "") {
        alert("Vous devez remplir le champ libelle");
        return false;
    };
}

function emptyForm2() {
    var x;
    x = document.getElementById("nom").value;
    if (x == "") {
        alert("Vous devez remplir le champ nom");
        return false;
    };
    
    x = document.getElementById("type_article_id").value;
    if (x == "") {
        alert("Vous devez remplir le champ type article");
        return false;
    };
}