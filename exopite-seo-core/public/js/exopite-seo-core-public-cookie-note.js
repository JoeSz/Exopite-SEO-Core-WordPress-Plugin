(function(a){'use strict';a(document).ready(function(){if(a('.cookie-container').length){function d(g,h,j){if(j){var k=new Date;k.setTime(k.getTime()+1e3*(60*(60*(24*j))));var l='; expires='+k.toGMTString()}else var l='';document.cookie=g+'='+h+l+'; path=/'}function e(g){for(var l,h=g+'=',j=document.cookie.split(';'),k=0;k<j.length;k++){for(l=j[k];' '==l.charAt(0);)l=l.substring(1,l.length);if(0==l.indexOf(h))return l.substring(h.length,l.length)}return null}e('accept-cookies');null===e('accept-cookies')&&a('.cookie-container').show(300),a('.accept-cookies-js').on('click',function(g){g.preventDefault(),d('accept-cookies','accepted',30),a('.cookie-container').hide(300)})}})})(jQuery);