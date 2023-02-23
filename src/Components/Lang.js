import React from "react";
import wind from '../Images/wind.svg';

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
            {/* MIDDLE: LOADING */}
            <div id="ALL-square" class="square2">
                <div className="App-loadblock">
                    <img src={wind} className="App-load" alt="wind" />
                </div>
            </div>
            {/* LANGS AFTER LOGO */}
            <div id="ar-square" class="square1">عربي</div>
            <div id="fa-square" class="square2">فارسی</div>
            <div id="hi-square" class="square1">हिंदी</div>
            <div id="jp-square" class="square2">日本語</div>
            <div id="ko-square" class="square1">한국어</div>
            <div id="ru-square" class="square2">Русский</div>
            <div id="zh-square" class="square1">中文</div>
        </div>
    )
}