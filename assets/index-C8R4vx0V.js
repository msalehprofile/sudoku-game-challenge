(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))l(d);new MutationObserver(d=>{for(const _ of d)if(_.type==="childList")for(const c of _.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function t(d){const _={};return d.integrity&&(_.integrity=d.integrity),d.referrerPolicy&&(_.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?_.credentials="include":d.crossOrigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function l(d){if(d.ep)return;d.ep=!0;const _=t(d);fetch(d.href,_)}})();const L=`<selection class="screen__edit">
<button class="screen__edit--delete">Delete</button>
<button id="restart" class="screen__edit--restart">Restart</button>
<button id="finish" class="screen__edit--finish">Finish</button>
</selection>

<selection class="numbers">
<h1 id="1" class="numbers__single">1</h1>
<h1 id="2" class="numbers__single">2</h1>
<h1 id="3" class="numbers__single">3</h1>
<h1 id="4" class="numbers__single">4</h1>
<h1 id="5" class="numbers__single">5</h1>
<h1 id="6" class="numbers__single">6</h1>
<h1 id="7" class="numbers__single">7</h1>
<h1 id="8" class="numbers__single">8</h1>
<h1 id="9" class="numbers__single">9</h1>
</selection>`,M=()=>`
    <header>
        <h1 class="screen__game-name">SUDOKU</h1>
    </header>
    
    <section class="navigation">
        <button class="nagivation__home">Home</button>
        <div class="navigation__level">
            <div class="navigation__level--title">Level:</div>
            <div class="navigation__level--level">Easy</div>
        </div>
        <div class="navigation__errors">
            <div class="navigation__errors--error-title">Errors:</div>
            <div class="navigation__errors--error-count">0</div>
        </div>
    </section>

<main class="screen__grid">

    <div class="grid__box">
        <div id="16H" class="L1 R1 B1 grid__box__no">6</div>
        <div id="17H" class="L1 R2 B1 grid__box__no">7</div>
        <div id="12H" class="L1 R3 B1 grid__box__no">2</div>
        <div id="18" class="L2 R1 B1 grid__box__no"></div>
        <div id="13H" class="L2 R2 B1 grid__box__no">3</div>
        <div id="11H" class="L2 R3 B1 grid__box__no">1</div>
        <div id="15" class="L3 R1 B1 grid__box__no"></div>
        <div id="14H" class="L3 R2 B1 grid__box__no">4</div>
        <div id="19" class="L3 R3 B1 grid__box__no"></div>
    </div>

    <div class="grid__box">
        <div id="25" class="L1 R4 B2 grid__box__no"></div>
        <div id="23" class="L1 R5 B2 grid__box__no"></div>
        <div id="21H" class="L1 R6 B2 grid__box__no">1</div>
        <div id="26" class="L2 R4 B2 grid__box__no"></div>
        <div id="24" class="L2 R5 B2 grid__box__no"></div>
        <div id="29" class="L2 R6 B2 grid__box__no"></div>
        <div id="28" class="L3 R4 B2 grid__box__no"></div>
        <div id="22H" class="L3 R5 B2 grid__box__no">2</div>
        <div id="27" class="L3 R6 B2 grid__box__no"></div>
    </div>

    <div class="grid__box">
        <div id="39H" class="L1 R7 B3 grid__box__no">9</div>
        <div id="38H" class="L1 R8 B3 grid__box__no">8</div>
        <div id="34H" class="L1 R9 B3 grid__box__no">4</div>
        <div id="32" class="L2 R7 B3 grid__box__no"></div>
        <div id="35" class="L2 R8 B3 grid__box__no"></div>
        <div id="37" class="L2 R9 B3 grid__box__no"></div>
        <div id="36" class="L3 R7 B3 grid__box__no"></div>
        <div id="31" class="L3 R8 B3 grid__box__no"></div>
        <div id="33H" class="L3 R9 B3 grid__box__no">3</div>
    </div>

    <div class="grid__box">
        <div id="44H" class="L4 R1 B4 grid__box__no">4</div>
        <div id="41" class="L4 R2 B4 grid__box__no"></div>
        <div id="45H" class="L4 R3 B4 grid__box__no">5</div>
        <div id="49H" class="L5 R1 B4 grid__box__no">9</div>
        <div id="42H" class="L5 R2 B4 grid__box__no">2</div>
        <div id="48" class="L5 R3 B4 grid__box__no"></div>
        <div id="47H" class="L6 R1 B4 grid__box__no">7</div>
        <div id="46H" class="L6 R2 B4 grid__box__no">6</div>
        <div id="43" class="L6 R3 B4 grid__box__no"></div>
    </div>

    <div class="grid__box">
        <div id="54H" class="L4 R4 B5 grid__box__no">4</div>
        <div id="51" class="L4 R5 B5 grid__box__no"></div>
        <div id="55H" class="L4 R6 B5 grid__box__no">5</div>
        <div id="59H" class="L5 R4 B5 grid__box__no">9</div>
        <div id="52H" class="L5 R5 B5 grid__box__no">2</div>
        <div id="58" class="L5 R6 B5 grid__box__no"></div>
        <div id="57H" class="L6 R4 B5 grid__box__no">7</div>
        <div id="56H" class="L6 R5 B5 grid__box__no">6</div>
        <div id="53" class="L6 R6 B5 grid__box__no"></div>
    </div>

    <div class="grid__box">
        <div id="63H" class="L4 R7 B6 grid__box__no">3</div>
        <div id="67" class="L4 R8 B6 grid__box__no"></div>
        <div id="68H" class="L4 R9 B6 grid__box__no">8</div>
        <div id="65H" class="L5 R7 B6 grid__box__no">5</div>
        <div id="66" class="L5 R8 B6 grid__box__no"></div>
        <div id="61" class="L5 R9 B6 grid__box__no"></div>
        <div id="64" class="L6 R7 B6 grid__box__no"></div>
        <div id="62H" class="L6 R8 B6 grid__box__no">2</div>
        <div id="69" class="L6 R9 B6 grid__box__no"></div>
    </div>

    <div class="grid__box">
        <div id="71" class="L7 R1 B7 grid__box__no"></div>
        <div id="75" class="L7 R2 B7 grid__box__no"></div>
        <div id="77" class="L7 R3 B7 grid__box__no"></div>
        <div id="73H" class="L8 R1 B7 grid__box__no">3</div>
        <div id="79" class="L8 R2 B7 grid__box__no"></div>
        <div id="76H" class="L8 R3 B7 grid__box__no">6</div>
        <div id="72" class="L9 R1 B7 grid__box__no"></div>
        <div id="78" class="L9 R2 B7 grid__box__no"></div>
        <div id="74H" class="L9 R3 B7 grid__box__no">4</div>
    </div>

    <div class="grid__box">
        <div id="84H" class="L7 R4 B8 grid__box__no">4</div>
        <div id="89H" class="L7 R5 B8 grid__box__no">9</div>
        <div id="86" class="L7 R6 B8 grid__box__no"></div>
        <div id="82" class="L8 R4 B8 grid__box__no"></div>
        <div id="81" class="L8 R5 B8 grid__box__no"></div>
        <div id="88" class="L8 R6 B8 grid__box__no"></div>
        <div id="87" class="L9 R4 B8 grid__box__no"></div>
        <div id="85H" class="L9 R5 B8 grid__box__no">5</div>
        <div id="83" class="L9 R6 B8 grid__box__no"></div>
    </div>

    <div class="grid__box">
        <div id="98H" class="L7 R7 B9 grid__box__no">8</div>
        <div id="93H" class="L7 R8 B9 grid__box__no">3</div>
        <div id="92H" class="L7 R9 B9 grid__box__no">2</div>
        <div id="97" class="L8 R7 B9 grid__box__no"></div>
        <div id="94H" class="L8 R8 B9 grid__box__no">4</div>
        <div id="95H" class="L8 R9 B9 grid__box__no">5</div>
        <div id="91H" class="L9 R7 B9 grid__box__no">1</div>
        <div id="99H" class="L9 R8 B9 grid__box__no">9</div>
        <div id="96H" class="L9 R9 B9 grid__box__no">6</div>
    </div>
    </main>

    ${L}`,p=`
    <header>
        <h1 class="screen__game-name">SUDOKU</h1>
    </header>

    <section class="navigation">
    <button class="nagivation__home">Home</button>
        <div class="navigation__level">
            <div class="navigation__level--title">Level:</div>
            <div class="navigation__level--level">Meduim</div>
        </div>
        <div class="navigation__errors">
            <div class="navigation__errors--error-title">Errors:</div>
            <div class="navigation__errors--error-count">0</div>
        </div>
    </section>

    <main class="screen__grid">
    <div class="grid__box">
        <div id="19H" class="L1 R1 B1 grid__box__no">9</div>
        <div id="14" class="L1 R2 B1 grid__box__no"></div>
        <div id="18" class="L1 R3 B1 grid__box__no"></div>
        <div id="12" class="L2 R1 B1 grid__box__no"></div>
        <div id="17" class="L2 R2 B1 grid__box__no"></div>
        <div id="15" class="L2 R3 B1 grid__box__no"></div>
        <div id="16" class="L3 R1 B1 grid__box__no"></div>
        <div id="13" class="L3 R2 B1 grid__box__no"></div>
        <div id="11H" class="L3 R3 B1 grid__box__no">1</div>
    </div>

    <div class="grid__box">
        <div id="25H" class="L1 R4 B2 grid__box__no">5</div>
        <div id="23H" class="L1 R5 B2 grid__box__no">3</div>
        <div id="21H" class="L1 R6 B2 grid__box__no">1</div>
        <div id="26" class="L2 R4 B2 grid__box__no"></div>
        <div id="24H" class="L2 R5 B2 grid__box__no">4</div>
        <div id="29H" class="L2 R6 B2 grid__box__no">9</div>
        <div id="28H" class="L3 R4 B2 grid__box__no">8</div>
        <div id="22" class="L3 R5 B2 grid__box__no"></div>
        <div id="27H" class="L3 R6 B2 grid__box__no">7</div>
    </div>

    <div class="grid__box">
        <div id="37" class="L1 R7 B3 grid__box__no"></div>
        <div id="36" class="L1 R8 B3 grid__box__no"></div>
        <div id="32" class="L1 R9 B3 grid__box__no"></div>
        <div id="33H" class="L2 R7 B3 grid__box__no">3</div>
        <div id="38H" class="L2 R8 B3 grid__box__no">8</div>
        <div id="31" class="L2 R9 B3 grid__box__no"></div>
        <div id="34" class="L3 R7 B3 grid__box__no"></div>
        <div id="35H" class="L3 R8 B3 grid__box__no">5</div>
        <div id="39H" class="L3 R9 B3 grid__box__no">9</div>
    </div>

    <div class="grid__box">
        <div id="47H" class="L4 R1 B4 grid__box__no">7</div>
        <div id="45" class="L4 R2 B4 grid__box__no"></div>
        <div id="44H" class="L4 R3 B4 grid__box__no">4</div>
        <div id="48" class="L5 R1 B4 grid__box__no"></div>
        <div id="42" class="L5 R2 B4 grid__box__no"></div>
        <div id="43H" class="L5 R3 B4 grid__box__no">3</div>
        <div id="41" class="L6 R1 B4 grid__box__no"></div>
        <div id="46H" class="L6 R2 B4 grid__box__no">6</div>
        <div id="49H" class="L6 R3 B4 grid__box__no">9</div>
    </div>

    <div class="grid__box">
        <div id="52H" class="L4 R4 B5 grid__box__no">2</div>
        <div id="51" class="L4 R5 B5 grid__box__no"></div>
        <div id="58" class="L4 R6 B5 grid__box__no"></div>
        <div id="54" class="L5 R4 B5 grid__box__no"></div>
        <div id="59H" class="L5 R5 B5 grid__box__no">9</div>
        <div id="56" class="L5 R6 B5 grid__box__no"></div>
        <div id="57" class="L6 R4 B5 grid__box__no"></div>
        <div id="55" class="L6 R5 B5 grid__box__no"></div>
        <div id="53H" class="L6 R6 B5 grid__box__no">3</div>
    </div>

    <div class="grid__box">
        <div id="69" class="L4 R7 B6 grid__box__no"></div>
        <div id="63" class="L4 R8 B6 grid__box__no"></div>
        <div id="66H" class="L4 R9 B6 grid__box__no">6</div>
        <div id="65" class="L5 R7 B6 grid__box__no"></div>
        <div id="61" class="L5 R8 B6 grid__box__no"></div>
        <div id="67H" class="L5 R9 B6 grid__box__no">7</div>
        <div id="68" class="L6 R7 B6 grid__box__no"></div>
        <div id="62" class="L6 R8 B6 grid__box__no"></div>
        <div id="64" class="L6 R9 B6 grid__box__no"></div>
    </div>

    <div class="grid__box">
        <div id="73" class="L7 R1 B7 grid__box__no"></div>
        <div id="78" class="L7 R2 B7 grid__box__no"></div>
        <div id="77H" class="L7 R3 B7 grid__box__no">7</div>
        <div id="74" class="L8 R1 B7 grid__box__no"></div>
        <div id="79H" class="L8 R2 B7 grid__box__no">9</div>
        <div id="72H" class="L8 R3 B7 grid__box__no">2</div>
        <div id="75H" class="L9 R1 B7 grid__box__no">5</div>
        <div id="71H" class="L9 R2 B7 grid__box__no">1</div>
        <div id="76" class="L9 R3 B7 grid__box__no"></div>
    </div>

    <div class="grid__box">
        <div id="89" class="L7 R4 B8 grid__box__no"></div>
        <div id="86" class="L7 R5 B8 grid__box__no"></div>
        <div id="81" class="L7 R6 B8 grid__box__no"></div>
        <div id="86" class="L8 R4 B8 grid__box__no"></div>
        <div id="87" class="L8 R5 B8 grid__box__no"></div>
        <div id="83" class="L8 R6 B8 grid__box__no"></div>
        <div id="82" class="L9 R4 B8 grid__box__no"></div>
        <div id="89" class="L9 R5 B8 grid__box__no"></div>
        <div id="88H" class="L9 R6 B8 grid__box__no">4</div>
    </div>

    <div class="grid__box">
        <div id="91" class="L7 R7 B9 grid__box__no"></div>
        <div id="94" class="L7 R8 B9 grid__box__no"></div>
        <div id="95" class="L7 R9 B9 grid__box__no"></div>
        <div id="96" class="L8 R7 B9 grid__box__no"></div>
        <div id="97H" class="L8 R8 B9 grid__box__no">7</div>
        <div id="93" class="L8 R9 B9 grid__box__no"></div>
        <div id="92" class="L9 R7 B9 grid__box__no"></div>
        <div id="99" class="L9 R8 B9 grid__box__no"></div>
        <div id="98H" class="L9 R9 B9 grid__box__no">8</div>
    </div>
    </main>

    ${L}`,T=`
<header>
<h1 class="screen__game-name">SUDOKU</h1>
</header>

<section class="navigation">
<button class="nagivation__home">Home</button>
<div class="navigation__level">
    <div class="navigation__level--title">Level:</div>
    <div class="navigation__level--level">Hard</div>
</div>
<div class="navigation__errors">
    <div class="navigation__errors--error-title">Errors:</div>
    <div class="navigation__errors--error-count">0</div>
</div>
</section>

<main class="screen__grid">
<div class="grid__box">
        <div id="12H" class="L1 R1 B1 grid__box__no">2</div>
        <div id="15" class="L1 R2 B1 grid__box__no"></div>
        <div id="17H" class="L1 R3 B1 grid__box__no">7</div>
        <div id="19" class="L2 R1 B1 grid__box__no"></div>
        <div id="18H" class="L2 R2 B1 grid__box__no">8</div>
        <div id="14" class="L2 R3 B1 grid__box__no"></div>
        <div id="16" class="L3 R1 B1 grid__box__no"></div>
        <div id="11" class="L3 R2 B1 grid__box__no"></div>
        <div id="13H" class="L3 R3 B1 grid__box__no">3</div>
    </div>

    <div class="grid__box">
        <div id="24H" class="L1 R4 B2 grid__box__no">4</div>
        <div id="29" class="L1 R5 B2 grid__box__no"></div>
        <div id="26" class="L1 R6 B2 grid__box__no"></div>
        <div id="23H" class="L2 R4 B2 grid__box__no">3</div>
        <div id="21" class="L2 R5 B2 grid__box__no"></div>
        <div id="25" class="L2 R6 B2 grid__box__no"></div>
        <div id="22" class="L3 R4 B2 grid__box__no"></div>
        <div id="27" class="L3 R5 B2 grid__box__no"></div>
        <div id="28" class="L3 R6 B2 grid__box__no"></div>
    </div>

    <div class="grid__box">
        <div id="38H" class="L1 R7 B3 grid__box__no">8</div>
        <div id="31" class="L1 R8 B3 grid__box__no"></div>
        <div id="33" class="L1 R9 B3 grid__box__no"></div>
        <div id="36H" class="L2 R7 B3 grid__box__no">6</div>
        <div id="32" class="L2 R8 B3 grid__box__no"></div>
        <div id="37" class="L2 R9 B3 grid__box__no"></div>
        <div id="35" class="L3 R7 B3 grid__box__no"></div>
        <div id="39" class="L3 R8 B3 grid__box__no"></div>
        <div id="34" class="L3 R9 B3 grid__box__no"></div>
    </div>

    <div class="grid__box">
        <div id="43" class="L4 R1 B4 grid__box__no"></div>
        <div id="47" class="L4 R2 B4 grid__box__no"></div>
        <div id="48" class="L4 R3 B4 grid__box__no"></div>
        <div id="44" class="L5 R1 B4 grid__box__no"></div>
        <div id="42" class="L5 R2 B4 grid__box__no"></div>
        <div id="49H" class="L5 R3 B4 grid__box__no">9</div>
        <div id="45" class="L6 R1 B4 grid__box__no"></div>
        <div id="46H" class="L6 R2 B4 grid__box__no">6</div>
        <div id="41" class="L6 R3 B4 grid__box__no"></div>
    </div>

    <div class="grid__box">
        <div id="56" class="L4 R4 B5 grid__box__no"></div>
        <div id="52H" class="L4 R5 B5 grid__box__no">2</div>
        <div id="59H" class="L4 R6 B5 grid__box__no">9</div>
        <div id="58" class="L5 R4 B5 grid__box__no"></div>
        <div id="55H" class="L5 R5 B5 grid__box__no">5</div>
        <div id="51H" class="L5 R6 B5 grid__box__no">1</div>
        <div id="57" class="L6 R4 B5 grid__box__no"></div>
        <div id="54" class="L6 R5 B5 grid__box__no"></div>
        <div id="53H" class="L6 R6 B5 grid__box__no">3</div>
    </div>

    <div class="grid__box">
        <div id="64" class="L4 R7 B6 grid__box__no"></div>
        <div id="65" class="L4 R8 B6 grid__box__no"></div>
        <div id="61H" class="L4 R9 B6 grid__box__no">1</div>
        <div id="67" class="L5 R7 B6 grid__box__no"></div>
        <div id="63" class="L5 R8 B6 grid__box__no"></div>
        <div id="66H" class="L5 R9 B6 grid__box__no">6</div>
        <div id="69H" class="L6 R7 B6 grid__box__no">9</div>
        <div id="68" class="L6 R8 B6 grid__box__no"></div>
        <div id="62H" class="L6 R9 B6 grid__box__no">2</div>
    </div>

    <div class="grid__box">
        <div id="78" class="L7 R1 B7 grid__box__no"></div>
        <div id="73" class="L7 R2 B7 grid__box__no"></div>
        <div id="72" class="L7 R3 B7 grid__box__no"></div>
        <div id="77" class="L8 R1 B7 grid__box__no"></div>
        <div id="74H" class="L8 R2 B7 grid__box__no">4</div>
        <div id="75" class="L8 R3 B7 grid__box__no"></div>
        <div id="71H" class="L9 R1 B7 grid__box__no">1</div>
        <div id="79H" class="L9 R2 B7 grid__box__no">9</div>
        <div id="76" class="L9 R3 B7 grid__box__no"></div>
    </div>

    <div class="grid__box">
        <div id="89" class="L7 R4 B8 grid__box__no"></div>
        <div id="86" class="L7 R5 B8 grid__box__no"></div>
        <div id="84" class="L7 R6 B8 grid__box__no"></div>
        <div id="81" class="L8 R4 B8 grid__box__no"></div>
        <div id="88H" class="L8 R5 B8 grid__box__no">8</div>
        <div id="82" class="L8 R6 B8 grid__box__no"></div>
        <div id="85" class="L9 R4 B8 grid__box__no"></div>
        <div id="83" class="L9 R5 B8 grid__box__no"></div>
        <div id="87" class="L9 R6 B8 grid__box__no"></div>
    </div>

    <div class="grid__box">
        <div id="91" class="L7 R7 B9 grid__box__no"></div>
        <div id="97H" class="L7 R8 B9 grid__box__no">7</div>
        <div id="95" class="L7 R9 B9 grid__box__no"></div>
        <div id="93" class="L8 R7 B9 grid__box__no"></div>
        <div id="96" class="L8 R8 B9 grid__box__no"></div>
        <div id="99" class="L8 R9 B9 grid__box__no"></div>
        <div id="92" class="L9 R7 B9 grid__box__no"></div>
        <div id="94H" class="L9 R8 B9 grid__box__no">4</div>
        <div id="98" class="L9 R9 B9 grid__box__no"></div>
    </div>
    </main>
    
    ${L}`,C=document.querySelectorAll(".navigation__difficulty--button"),r=document.querySelector(".screen"),x=document.querySelector(".screen");if(!C||!r||!x)throw new Error("Issue With Selector");let o="";C.forEach(a=>{a.addEventListener("click",()=>{o=String(a.getAttribute("id")),o==="easy"?r.innerHTML=M():o==="medium"?r.innerHTML=p:o==="hard"&&(r.innerHTML=T)})});const I=a=>{const s=a.target;if(s.matches("#easy")||s.matches("#medium")||s.matches("#hard")||s.matches(".screen__edit--restart")||s.matches(".screen__edit--delete")){const t=document.querySelector(".screen__edit--restart"),l=document.querySelectorAll(".grid__box__no"),d=document.querySelectorAll(".numbers__single"),_=document.querySelector(".navigation__errors--error-count"),c=document.querySelector(".screen__edit--delete"),B=document.querySelector(".screen__edit--finish"),R=document.querySelector(".nagivation__home");if(!l||!d||!_||!c||!t||!t||!B||!R)throw new Error("Issue With Selector");let n="",g="",e="",u="",H="",m="",h="";l.forEach(i=>{i.addEventListener("click",()=>{e=" ",n=String(i.getAttribute("id")),H=String(i.getAttribute("class")).slice(3,5),u=String(i.getAttribute("class")).slice(0,2),m=String(i.getAttribute("class")).slice(6,8),g=n.slice(1,2),h=n.slice(2),y(),f()})}),d.forEach(i=>{i.addEventListener("click",()=>{e=String(i.getAttribute("id")),y()})});const f=()=>{const i=Array.from(document.getElementsByClassName("grid__box__no"));for(let v=0;v<i.length;v++)i[v].classList.contains(u)||i[v].classList.contains(m)||i[v].classList.contains(H)?i[v].style.backgroundColor="#D4BBF9":i[v].style.backgroundColor="white"},y=()=>{if(g===e){let i=document.getElementById(n);i!=null&&(i.innerHTML=e,i.style.color="#374785",console.log(i))}else if(e===" "||n===" ")_.innerHTML=_.innerHTML;else if(g!=e){let i=document.getElementById(n);i!=null&&(i.innerHTML=e,i.style.color="#DC541C",_.innerHTML=String(Number(_.innerHTML)+1))}},q=()=>{o==="easy"?r.innerHTML=M():o==="medium"?r.innerHTML=p:o==="hard"&&(r.innerHTML=T)},A=()=>{let i=document.getElementById(n);console.log("box is",i),i!=null&&h==="H"?i.innerHTML=i.innerHTML:i!=null&&(i.innerHTML="")};let b=_.innerHTML,w="Amazing, you made no errors!",k=`You only made ${b} errors!`,D=`You made ${b} errors, try again!`;const O=(i=>i==="0"?w:i==="1"||i==="2"||i==="3"?k:D)(b),N=()=>{let i=o.slice(0,1).toUpperCase()+o.slice(1);r.innerHTML=`<header class="result">
            <h1 class="result-card__title">SUDOKU</h1>
            <section class="result-card">
              <h1 class="result-card__congrats">Well Done!</h1>
              <p class="result-card__level">You Completed the ${i} Level</p>
              <p class="result-card__errors">${O}</p>
            </section>
            <button class="result__home">Home</button>
          </header>`},S=()=>{window.location.href="index.html"},U=i=>{if(i.target.matches(".screen__edit--finish")){const E=document.querySelector(".result__home");if(!E)throw new Error("issue with Home button");E.addEventListener("click",S)}};l.forEach(i=>{i.addEventListener("click",f)}),c.addEventListener("click",A),t.addEventListener("click",q),B.addEventListener("click",N),R.addEventListener("click",S),x.addEventListener("click",U)}};x.addEventListener("click",I);
