import "./styling.scss";
import { Sudoku } from "./object";
import { endHTML } from "./repeatedgamehtml";

export const renderGameHTML = (game : Sudoku) => {
    return `
    <header>
        <h1 class="screen__game-name">SUDOKU</h1>
    </header>
    
        <navigation class="navigation">
            <button class="nagivation__home">Home</button>
            <div class="navigation__level">
                <div class="navigation__level--title">Level:</div>
                <div class="navigation__level--level">${game.Level}</div>
            </div>
            <div class="navigation__errors">
                <div class="navigation__errors--error-title">Errors:</div>
                <div class="navigation__errors--error-count">0</div>
            </div>
        </navigation>

        <main class="screen__grid">
            <div class="grid__box">
                <div id=${game.ID1} class="L1 R1 B1 grid__box__no">${game.B1}</div>
                <div id=${game.ID2} class="L1 R2 B1 grid__box__no">${game.B2}</div>
                <div id=${game.ID3} class="L1 R3 B1 grid__box__no">${game.B3}</div>
                <div id=${game.ID4} class="L2 R1 B1 grid__box__no">${game.B4}</div>
                <div id=${game.ID5} class="L2 R2 B1 grid__box__no">${game.B5}</div>
                <div id=${game.ID6} class="L2 R3 B1 grid__box__no">${game.B6}</div>
                <div id=${game.ID7} class="L3 R1 B1 grid__box__no">${game.B7}</div>
                <div id=${game.ID8} class="L3 R2 B1 grid__box__no">${game.B8}</div>
                <div id=${game.ID9} class="L3 R3 B1 grid__box__no">${game.B9}</div>
            </div>

            <div class="grid__box">
                <div id=${game.ID10} class="L1 R4 B2 grid__box__no">${game.B10}</div>
                <div id=${game.ID11} class="L1 R5 B2 grid__box__no">${game.B11}</div>
                <div id=${game.ID12} class="L1 R6 B2 grid__box__no">${game.B12}</div>
                <div id=${game.ID13} class="L2 R4 B2 grid__box__no">${game.B13}</div>
                <div id=${game.ID14} class="L2 R5 B2 grid__box__no">${game.B14}</div>
                <div id=${game.ID15} class="L2 R6 B2 grid__box__no">${game.B15}</div>
                <div id=${game.ID16} class="L3 R4 B2 grid__box__no">${game.B16}</div>
                <div id=${game.ID17} class="L3 R5 B2 grid__box__no">${game.B17}</div>
                <div id=${game.ID18} class="L3 R6 B2 grid__box__no">${game.B18}</div>
            </div>

            <div class="grid__box">
                <div id=${game.ID19} class="L1 R7 B3 grid__box__no">${game.B19}</div>
                <div id=${game.ID20} class="L1 R8 B3 grid__box__no">${game.B20}</div>
                <div id=${game.ID21} class="L1 R9 B3 grid__box__no">${game.B21}</div>
                <div id=${game.ID22} class="L2 R7 B3 grid__box__no">${game.B22}</div>
                <div id=${game.ID23} class="L2 R8 B3 grid__box__no">${game.B23}</div>
                <div id=${game.ID24} class="L2 R9 B3 grid__box__no">${game.B24}</div>
                <div id=${game.ID25} class="L3 R7 B3 grid__box__no">${game.B25}</div>
                <div id=${game.ID26} class="L3 R8 B3 grid__box__no">${game.B26}</div>
                <div id=${game.ID27} class="L3 R9 B3 grid__box__no">${game.B27}</div>
            </div>

            <div class="grid__box">
                <div id=${game.ID28} class="L4 R1 B4 grid__box__no">${game.B28}</div>
                <div id=${game.ID29} class="L4 R2 B4 grid__box__no">${game.B29}</div>
                <div id=${game.ID30} class="L4 R3 B4 grid__box__no">${game.B30}</div>
                <div id=${game.ID31} class="L5 R1 B4 grid__box__no">${game.B31}</div>
                <div id=${game.ID32} class="L5 R2 B4 grid__box__no">${game.B32}</div>
                <div id=${game.ID33} class="L5 R3 B4 grid__box__no">${game.B33}</div>
                <div id=${game.ID34} class="L6 R1 B4 grid__box__no">${game.B34}</div>
                <div id=${game.ID35} class="L6 R2 B4 grid__box__no">${game.B35}</div>
                <div id=${game.ID36} class="L6 R3 B4 grid__box__no">${game.B36}</div>
            </div>

            <div class="grid__box">
                <div id=${game.ID37} class="L4 R4 B5 grid__box__no">${game.B37}</div>
                <div id=${game.ID38} class="L4 R5 B5 grid__box__no">${game.B38}</div>
                <div id=${game.ID39} class="L4 R6 B5 grid__box__no">${game.B39}</div>
                <div id=${game.ID40} class="L5 R4 B5 grid__box__no">${game.B40}</div>
                <div id=${game.ID41} class="L5 R5 B5 grid__box__no">${game.B41}</div>
                <div id=${game.ID42} class="L5 R6 B5 grid__box__no">${game.B42}</div>
                <div id=${game.ID43} class="L6 R4 B5 grid__box__no">${game.B43}</div>
                <div id=${game.ID44} class="L6 R5 B5 grid__box__no">${game.B44}</div>
                <div id=${game.ID45} class="L6 R6 B5 grid__box__no">${game.B45}</div>
            </div>

            <div class="grid__box">
                <div id=${game.ID46} class="L4 R7 B6 grid__box__no">${game.B46}</div>
                <div id=${game.ID47} class="L4 R8 B6 grid__box__no">${game.B47}</div>
                <div id=${game.ID48} class="L4 R9 B6 grid__box__no">${game.B48}</div>
                <div id=${game.ID49} class="L5 R7 B6 grid__box__no">${game.B49}</div>
                <div id=${game.ID50} class="L5 R8 B6 grid__box__no">${game.B50}</div>
                <div id=${game.ID51} class="L5 R9 B6 grid__box__no">${game.B51}</div>
                <div id=${game.ID52} class="L6 R7 B6 grid__box__no">${game.B52}</div>
                <div id=${game.ID53} class="L6 R8 B6 grid__box__no">${game.B53}</div>
                <div id=${game.ID54} class="L6 R9 B6 grid__box__no">${game.B54}</div>
            </div>

            <div class="grid__box">
                <div id=${game.ID55} class="L7 R1 B7 grid__box__no">${game.B55}</div>
                <div id=${game.ID56} class="L7 R2 B7 grid__box__no">${game.B56}</div>
                <div id=${game.ID57} class="L7 R3 B7 grid__box__no">${game.B57}</div>
                <div id=${game.ID58} class="L8 R1 B7 grid__box__no">${game.B58}</div>
                <div id=${game.ID59} class="L8 R2 B7 grid__box__no">${game.B59}</div>
                <div id=${game.ID60} class="L8 R3 B7 grid__box__no">${game.B60}</div>
                <div id=${game.ID61} class="L9 R1 B7 grid__box__no">${game.B61}</div>
                <div id=${game.ID62} class="L9 R2 B7 grid__box__no">${game.B62}</div>
                <div id=${game.ID63} class="L9 R3 B7 grid__box__no">${game.B63}</div>
            </div>

            <div class="grid__box">
                <div id=${game.ID64} class="L7 R4 B8 grid__box__no">${game.B64}</div>
                <div id=${game.ID65} class="L7 R5 B8 grid__box__no">${game.B65}</div>
                <div id=${game.ID66} class="L7 R6 B8 grid__box__no">${game.B66}</div>
                <div id=${game.ID67} class="L8 R4 B8 grid__box__no">${game.B67}</div>
                <div id=${game.ID68} class="L8 R5 B8 grid__box__no">${game.B68}</div>
                <div id=${game.ID69} class="L8 R6 B8 grid__box__no">${game.B69}</div>
                <div id=${game.ID70} class="L9 R4 B8 grid__box__no">${game.B70}</div>
                <div id=${game.ID71} class="L9 R5 B8 grid__box__no">${game.B71}</div>
                <div id=${game.ID72} class="L9 R6 B8 grid__box__no">${game.B72}</div>
            </div>

            <div class="grid__box">
                <div id=${game.ID73} class="L7 R7 B9 grid__box__no">${game.B73}</div>
                <div id=${game.ID74} class="L7 R8 B9 grid__box__no">${game.B74}</div>
                <div id=${game.ID75} class="L7 R9 B9 grid__box__no">${game.B75}</div>
                <div id=${game.ID76} class="L8 R7 B9 grid__box__no">${game.B76}</div>
                <div id=${game.ID77} class="L8 R8 B9 grid__box__no">${game.B77}</div>
                <div id=${game.ID78} class="L8 R9 B9 grid__box__no">${game.B78}</div>
                <div id=${game.ID79} class="L9 R7 B9 grid__box__no">${game.B79}</div>
                <div id=${game.ID80} class="L9 R8 B9 grid__box__no">${game.B80}</div>
                <div id=${game.ID81} class="L9 R9 B9 grid__box__no">${game.B81}</div>
            </div>
        </main>



    ${endHTML}`;
}



