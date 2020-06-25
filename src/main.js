import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { charClassNamer } from "./businesslogic.js";

$(document).ready(function () {
  $("#charCreate").submit(function (event) {
    event.preventDefault();

    let userName = $(".charName").val();
    $(".charNameSidebar").text(userName);
    //////////////////////////////////////

    // let userClass = $("input:radio[name=charClass]:checked").val(); // = classMarine =/= Marine
    // let userClassSideBar = charClassNamer(userClass);
    // let userClassSideBar = $("input:radio[name=charClass]:checked").val()

    let userClassSideBar = charClassNamer($("input:radio[name=charClass]:checked").val());
    $(".charLevelandClass").text("Level 1 " + userClassSideBar);

    $("#charCreationMenu").hide();
    $("#prologueRow").show();
  });

  $(".dostuffbutton").click();
});

