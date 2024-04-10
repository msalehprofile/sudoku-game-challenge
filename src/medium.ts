import { endHTML } from "./repeatedgamehtml";

export const renderMedium = 
    `
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

    ${endHTML}`
