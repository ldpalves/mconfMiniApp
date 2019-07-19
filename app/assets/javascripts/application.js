// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
const colors = ['#481E9D', '#8D74C0', '#CA4B57', '#2B2D42', '#1C77C3', '#81B29A', '#E98039'];
let found = false;

document.addEventListener("turbolinks:load", () => {
    document.querySelectorAll('.mensagem').forEach(element => {
        
        let index = Math.floor(Math.random() * 7);
        if (element.innerHTML.match(/mconf/gi)) {  
            element.innerHTML = element.innerHTML.replace(/mconf/gi, "<b style=\"color:"+colors[index]+"\" >Mconf</b>");
        }
    });
});

function keyHandler() {
    const body = document.querySelector('body');
    const textarea = document.querySelector('textarea');

    let index2 = Math.floor(Math.random() * 7);
    if (textarea.value.match(/mconf/gi)) {
        if (!found) {
            found = true;
            body.style.backgroundColor = colors[index2];
        }
    } else {
        found = false;
        body.style.backgroundColor = 'white';
    }
}


