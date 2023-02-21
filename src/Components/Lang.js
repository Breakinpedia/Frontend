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
        <div id="board" class="grid">
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
            <div class="grid__item"></div>
        </div>
    )
}