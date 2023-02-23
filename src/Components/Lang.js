import React from "react";

// de en es fr it nl pt ar fa hi ja ko ru zh
export default function Logo(){
    return(
        <div id="lang-rectan" class="lang" >
            {/* LANGS BEFORE LOGO */}
            <div id="de-square" class="square1">Deutsch</div>
            <div id="en-square" class="square2">English</div>
            <div id="sp-square" class="square1">Español</div>
            <div id="fr-square" class="square2">Français</div>
            <div id="it-square" class="square1">Italiano</div>
            <div id="nl-square" class="square2">Nederlands</div>
            <div id="pt-square" class="square1">Português</div>
            {/* MIDDLE: LOGO */}
            <div id="ALL-square" class="square2"> LOGO </div>
            {/* LANGS AFTER LOGO */}
            <div id="ar-square" class="square1">Arabic</div>
            <div id="fa-square" class="square2">Persian</div>
            <div id="hi-square" class="square1">Hindi</div>
            <div id="jp-square" class="square2">Japanese</div>
            <div id="ko-square" class="square1">Korean</div>
            <div id="ru-square" class="square2">Russian</div>
            <div id="zh-square" class="square1">Chinese</div>
        </div>
    )
}