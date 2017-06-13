$(document).ready(function(){
   /*$('<p class="valami">ez egy szöveg az új</p>').appendTo('#elso');*/
   /*$('<p class="valami">ez egy szöveg az új</p>').prependTo('#elso');*/
  /* $('<p class="valami">ez egy szöveg az új</p>').insertAfter('.valami');*/
  /*$('<b>Cserélt</b>').replaceAll('.mas');*/
  /*$('#elso').empty();*/
  $('#elso').clone().appendTo('#masodik');/*Így két id van ami nem jó*/
  $('body').append('<div>Ez a beszúrt szövegem.</div>');
});