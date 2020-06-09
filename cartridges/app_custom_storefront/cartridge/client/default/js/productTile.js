'use strict';

var processInclude = require('base/util');

$(document).ready(function () {
    console.log('Hi how are you');
    processInclude(require('base/product/quickView'));
    //alert('hola que tal buenos dias');
})

    $('.fa.fa-search').click(function(){
       
        if($('.search-field').css('visibility') == 'hidden')
        {
      $(".search-field").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});
      $(".fa.fa-search").css({color: "black"});
    }
       
        else if($('.search-field').css('visibility') !== 'hidden')
        {
            $(".search-field").css({opacity: 0.0, visibility: "hidden"}).animate({opacity: 1.0});
            $(".fa.fa-search").css({color: "white"});
        }
            
        });

        
    