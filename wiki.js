/*
@project DorpWiki
@version 1.0.0
@author Carver Harrison
@licence bsd-3-clause
@site https://dorper.me/p/wiki
*/

/* @library https://github.com/honza/140medley */
var t=function(a,b){return function(c,d){return a.replace(/#{([^}]*)}/g,function(a,f){return Function("x","with(x)return "+f).call(c,d||b||{})})}},s=function(a,b){return b?{get:function(c){return a[c]&&b.parse(a[c])},set:function(c,d){a[c]=b.stringify(d)}}:{}}(this.localStorage||{},JSON),p=function(a,b,c,d){c=c||document;d=c[b="on"+b];a=c[b]=function(e){d=d&&d(e=e||c.event);return(a=a&&b(e))?b:d};c=this},m=function(a,b,c){b=document;c=b.createElement("p");c.innerHTML=a;for(a=b.createDocumentFragment();b=
c.firstChild;)a.appendChild(b);return a},$=function(a,b){a=a.match(/^(\W)?(.*)/);return(b||document)["getElement"+(a[1]?a[1]=="#"?"ById":"sByClassName":"sByTagName")](a[2])},j=function(a){for(a=0;a<4;a++)try{return a?new ActiveXObject([,"Msxml2","Msxml3","Microsoft"][a]+".XMLHTTP"):new XMLHttpRequest}catch(b){}};

// On Window Load
b(window, 'load', function() {
});
