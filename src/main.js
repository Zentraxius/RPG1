import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';



$(document).ready(function () {
  $('#charCreate').submit(function (event) {
    event.preventDefault();
    
    let userClass = $("input:radio[name=charClass]:checked").val();
    let userName = $('.charName').val();
    console.log(userName, userClass);

  });
});