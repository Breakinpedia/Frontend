import React from "react";

export default function Logo(){
    var items = document.querySelectorAll( '.grid__item' )
    var count = 0;
    for( var y = 1; y <= 8; y++ )
    {   
        for( var x = 1; x <= 8; x++ )
        {
            var item = items[ count ]
            item.style['-ms-grid-column'] = x
            item.style['-ms-grid-row'] = y
            count++
        }
    }
    return(
        <div id="lang-rectan" class="lang" >
            <div id="jp-square" class="square"> </div>
            <div id="pt-square" class="square"> </div>
            <div id="de-square" class="square"> </div>
            <div id="en-square" class="square"> </div>
            <div id="sp-square" class="square"> </div>
            <div id="it-square" class="square"> </div>
            <div id="ko-square" class="square"> </div>
            <div id="fr-square" class="square"> </div>
        </div>
    )
}