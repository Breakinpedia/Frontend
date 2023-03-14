import React from "react";
import logo from '../Images/logo.svg';
import wind from '../Images/wind.svg';


// de en es fr it nl pt ar fa hi ja ko ru zh
export default function Logo(){
    return(
        <div className="Parent-Element">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div class="slogan-effect">
                    <h1> </h1>
                    <span style={{'--i':'1'}}>T</span>
                    <span style={{'--i':'2'}}>h</span>
                    <span style={{'--i':'3'}}>e</span>
                    <b> </b>
                    <span style={{'--i':'5'}}>E</span>
                    <span style={{'--i':'6'}}>n</span>
                    <span style={{'--i':'7'}}>c</span>
                    <span style={{'--i':'8'}}>y</span>
                    <span style={{'--i':'9'}}>c</span>
                    <span style={{'--i':'10'}}>l</span>
                    <span style={{'--i':'11'}}>o</span>
                    <span style={{'--i':'12'}}>p</span>
                    <span style={{'--i':'13'}}>e</span>
                    <span style={{'--i':'14'}}>d</span>
                    <span style={{'--i':'15'}}>i</span>
                    <span style={{'--i':'16'}}>a</span>
                    <b> </b>
                    <span style={{'--i':'18'}}>o</span>
                    <span style={{'--i':'19'}}>f</span>
                    <b> </b>
                    <span style={{'--i':'21'}}>B</span>
                    <span style={{'--i':'22'}}>r</span>
                    <span style={{'--i':'23'}}>e</span>
                    <span style={{'--i':'24'}}>a</span>
                    <span style={{'--i':'25'}}>k</span>
                    <span style={{'--i':'26'}}>d</span>
                    <span style={{'--i':'27'}}>a</span>
                    <span style={{'--i':'28'}}>n</span>
                    <span style={{'--i':'29'}}>c</span>
                    <span style={{'--i':'30'}}>i</span>
                    <span style={{'--i':'31'}}>n</span>
                    <span style={{'--i':'32'}}>g</span>
                </div>
            </div>
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
            <div className="App-footer">
                <p>The Encyclopedia for Breakdancing</p>
            </div>
        </div>
    )
}