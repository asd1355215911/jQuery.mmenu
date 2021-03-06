(function ( factory ) {
    if ( typeof define === 'function' && define.amd )
    {
        // AMD. Register as an anonymous module.
        define( [ 'jquery' ], factory );
    }
    else if ( typeof exports === 'object' )
    {
        // Node/CommonJS
        factory( require( 'jquery' ) );
    }
    else
    {
        // Browser globals
        factory( jQuery );
    }
}( function ( jQuery ) {


/*	
 * jQuery mmenu searchfield addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){function s(e){switch(e){case 9:case 16:case 17:case 18:case 37:case 38:case 39:case 40:return!0}return!1}var a="mmenu",n="searchfield";e[a].addons[n]={setup:function(){var o=this,d=this.opts[n],c=this.conf[n];r=e[a].glbl,"boolean"==typeof d&&(d={add:d,search:d}),"object"!=typeof d&&(d={}),d=this.opts[n]=e.extend(!0,{},e[a].defaults[n],d),this.bind("init",function(a){if(d.add){switch(d.addTo){case"menu":var n=this.$menu;break;case"panels":var n=a;break;default:var n=e(d.addTo,this.$menu).filter("."+t.panel)}n.each(function(){var s=e(this);if(!s.is("."+t.panel)||!s.is("."+t.vertical)){if(!s.children("."+t.search).length){var a=c.form?"form":"div",n=e("<"+a+' class="'+t.search+'" />');if(c.form&&"object"==typeof c.form)for(var l in c.form)n.attr(l,c.form[l]);n.append('<input placeholder="'+d.placeholder+'" type="text" autocomplete="off" />').prependTo(s),s.addClass(t.hassearch)}if(d.noResults&&(s.is("."+t.menu)&&(s=s.children("."+t.panel).first()),!s.children("."+t.noresultsmsg).length)){var i=s.children("."+t.listview);e('<div class="'+t.noresultsmsg+'" />').append(d.noResults)[i.length?"insertBefore":"prependTo"](i.length?i:s)}}})}d.search&&e("."+t.search,this.$menu).each(function(){var a=e(this);if("menu"==d.addTo)var n=e("."+t.panel,o.$menu),r=o.$menu;else var n=a.closest("."+t.panel),r=n;var c=a.children("input"),h=o.__findAddBack(n,"."+t.listview).children("li"),u=h.filter("."+t.divider),f=o.__filterListItems(h),p="> a",v=p+", > span",m=function(){var s=c.val().toLowerCase();n.scrollTop(0),f.add(u).addClass(t.hidden).find("."+t.fullsubopensearch).removeClass(t.fullsubopen).removeClass(t.fullsubopensearch),f.each(function(){var a=e(this),n=p;(d.showTextItems||d.showSubPanels&&a.find("."+t.next))&&(n=v),e(n,a).text().toLowerCase().indexOf(s)>-1&&a.add(a.prevAll("."+t.divider).first()).removeClass(t.hidden)}),d.showSubPanels&&n.each(function(){var s=e(this);o.__filterListItems(s.find("."+t.listview).children()).each(function(){var s=e(this),a=s.data(l.sub);s.removeClass(t.nosubresults),a&&a.find("."+t.listview).children().removeClass(t.hidden)})}),e(n.get().reverse()).each(function(s){var a=e(this),n=a.data(l.parent);n&&(o.__filterListItems(a.find("."+t.listview).children()).length?(n.hasClass(t.hidden)&&n.children("."+t.next).not("."+t.fullsubopen).addClass(t.fullsubopen).addClass(t.fullsubopensearch),n.removeClass(t.hidden).removeClass(t.nosubresults).prevAll("."+t.divider).first().removeClass(t.hidden)):"menu"==d.addTo&&(a.hasClass(t.opened)&&setTimeout(function(){o.openPanel(n.closest("."+t.panel))},1.5*(s+1)*o.conf.openingInterval),n.addClass(t.nosubresults)))}),r[f.not("."+t.hidden).length?"removeClass":"addClass"](t.noresults),this.update()};c.off(i.keyup+"-searchfield "+i.change+"-searchfield").on(i.keyup+"-searchfield",function(e){s(e.keyCode)||m.call(o)}).on(i.change+"-searchfield",function(){m.call(o)})})})},add:function(){t=e[a]._c,l=e[a]._d,i=e[a]._e,t.add("search hassearch noresultsmsg noresults nosubresults fullsubopensearch"),i.add("change keyup")},clickAnchor:function(){}},e[a].defaults[n]={add:!1,addTo:"menu",search:!1,placeholder:"Search",noResults:"No results found.",showTextItems:!1,showSubPanels:!0},e[a].configuration[n]={form:!1};var t,l,i,r}(jQuery);
}));