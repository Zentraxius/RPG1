import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { charNamer } from "./businesslogic.js";

$(document).ready(function () {
  $("#charCreate").submit(function (event) {
    event.preventDefault();

    let userName = $(".charName").val();
    $(".charNameSidebar").text(userName);
    //////////////////////////////////////
    let userClass = $("input:radio[name=charClass]:checked").val();
let userClassSideBar = charNamer(userClass)
    // let userClassSideBar = charNamer($("input:radio[name=charClass]:checked").val())
    // let userClassSideBar = $("input:radio[name=charClass]:checked").val()
    $(".charLevelandClass").text("1 " + userClassSideBar);

    $("#charCreationMenu").hide();
    $("#prologueRow").show();
  });

  $(".dostuffbutton").click();
});

