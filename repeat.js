$(function(){
   $('button').click(function(){
    var nev = $('input').val();   
     if (nev.length > 0) {
            var template = "<li>" + nev + "</li>"; /* nev = input*//* miért változóban kell megadni a ++-?*/
            $("input").val("");/*Nekem ez a sorrend logikusabb.Ekkor várja a nevet.*/
            $('ul').append(template);
        } else {
            alert("Töltsd ki a név mezőt!");
        }
   });
});

