
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-DFGBQ96CP4');


// menu toggle

var MenuItems = document.getElementById('MenuItems');
MenuItems.style.maxHeight = '0px';

function menutoggle() {
if (MenuItems.style.maxHeight == '0px') {
  MenuItems.style.maxHeight = '200px';
} else {
  MenuItems.style.maxHeight = '0px';
}
}


// cookies 

const cookieBox = document.getElementById('js-cookie-box');
const cookieButton = document.getElementById('js-cookie-button');

if (!Cookies.get('cookie-box')) {
  
  cookieBox.classList.remove('cookie-box--hide');
    
    cookieButton.onclick = function() {
      Cookies.set('cookie-box', true, { expires: 7 });
      cookieBox.classList.add('cookie-box--hide');
    }
  }
  
  //document.cookie = 'user=Marion ;path=/ ; domain=TIEPOEHO.com'
  //

// scroll to top //

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; //  Safari
  document.documentElement.scrollTop = 0; //  Chrome, Firefox, IE and Opera
}




