import './jauge1.html';
import '../home/homeFond.css';
import '../home/homeFond.html';

Template.jauge1.rendered = function(){
    $('body').removeClass('nuit');
}

Template.jauge1.helpers({
    radioChecked(){
        return document.getElementById("radioFond").checked;
    }
});