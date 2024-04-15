(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))e(i);new MutationObserver(i=>{for(const I of i)if(I.type==="childList")for(const n of I.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function l(i){const I={};return i.integrity&&(I.integrity=i.integrity),i.referrerPolicy&&(I.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?I.credentials="include":i.crossOrigin==="anonymous"?I.credentials="omit":I.credentials="same-origin",I}function e(i){if(i.ep)return;i.ep=!0;const I=l(i);fetch(i.href,I)}})();const N=`<selection class="screen__edit">
<button class="screen__edit--delete">Delete</button>
<button id="restart" class="screen__edit--restart">Restart</button>

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
</selection>
</section>`,u=B=>`
    <header>
        <h1 class="screen__game-name">SUDOKU</h1>
    </header>
    
        <navigation class="navigation">
            <button class="nagivation__home">Home</button>
            <div class="navigation__level">
                <div class="navigation__level--title">Level:</div>
                <div class="navigation__level--level">${B.Level}</div>
            </div>
            <div class="navigation__errors">
                <div class="navigation__errors--error-title">Penalty:</div>
                <div id="errors "class="navigation__errors--error-count">0</div>
            </div>
        </navigation>

        <main class="screen__grid">
            <div class="grid__box">
                <div id=${B.ID1} class="L1 R1 B1 grid__box__no">${B.B1}</div>
                <div id=${B.ID2} class="L1 R2 B1 grid__box__no">${B.B2}</div>
                <div id=${B.ID3} class="L1 R3 B1 grid__box__no">${B.B3}</div>
                <div id=${B.ID4} class="L2 R1 B1 grid__box__no">${B.B4}</div>
                <div id=${B.ID5} class="L2 R2 B1 grid__box__no">${B.B5}</div>
                <div id=${B.ID6} class="L2 R3 B1 grid__box__no">${B.B6}</div>
                <div id=${B.ID7} class="L3 R1 B1 grid__box__no">${B.B7}</div>
                <div id=${B.ID8} class="L3 R2 B1 grid__box__no">${B.B8}</div>
                <div id=${B.ID9} class="L3 R3 B1 grid__box__no">${B.B9}</div>
            </div>

            <div class="grid__box">
                <div id=${B.ID10} class="L1 R4 B2 grid__box__no">${B.B10}</div>
                <div id=${B.ID11} class="L1 R5 B2 grid__box__no">${B.B11}</div>
                <div id=${B.ID12} class="L1 R6 B2 grid__box__no">${B.B12}</div>
                <div id=${B.ID13} class="L2 R4 B2 grid__box__no">${B.B13}</div>
                <div id=${B.ID14} class="L2 R5 B2 grid__box__no">${B.B14}</div>
                <div id=${B.ID15} class="L2 R6 B2 grid__box__no">${B.B15}</div>
                <div id=${B.ID16} class="L3 R4 B2 grid__box__no">${B.B16}</div>
                <div id=${B.ID17} class="L3 R5 B2 grid__box__no">${B.B17}</div>
                <div id=${B.ID18} class="L3 R6 B2 grid__box__no">${B.B18}</div>
            </div>

            <div class="grid__box">
                <div id=${B.ID19} class="L1 R7 B3 grid__box__no">${B.B19}</div>
                <div id=${B.ID20} class="L1 R8 B3 grid__box__no">${B.B20}</div>
                <div id=${B.ID21} class="L1 R9 B3 grid__box__no">${B.B21}</div>
                <div id=${B.ID22} class="L2 R7 B3 grid__box__no">${B.B22}</div>
                <div id=${B.ID23} class="L2 R8 B3 grid__box__no">${B.B23}</div>
                <div id=${B.ID24} class="L2 R9 B3 grid__box__no">${B.B24}</div>
                <div id=${B.ID25} class="L3 R7 B3 grid__box__no">${B.B25}</div>
                <div id=${B.ID26} class="L3 R8 B3 grid__box__no">${B.B26}</div>
                <div id=${B.ID27} class="L3 R9 B3 grid__box__no">${B.B27}</div>
            </div>

            <div class="grid__box">
                <div id=${B.ID28} class="L4 R1 B4 grid__box__no">${B.B28}</div>
                <div id=${B.ID29} class="L4 R2 B4 grid__box__no">${B.B29}</div>
                <div id=${B.ID30} class="L4 R3 B4 grid__box__no">${B.B30}</div>
                <div id=${B.ID31} class="L5 R1 B4 grid__box__no">${B.B31}</div>
                <div id=${B.ID32} class="L5 R2 B4 grid__box__no">${B.B32}</div>
                <div id=${B.ID33} class="L5 R3 B4 grid__box__no">${B.B33}</div>
                <div id=${B.ID34} class="L6 R1 B4 grid__box__no">${B.B34}</div>
                <div id=${B.ID35} class="L6 R2 B4 grid__box__no">${B.B35}</div>
                <div id=${B.ID36} class="L6 R3 B4 grid__box__no">${B.B36}</div>
            </div>

            <div class="grid__box">
                <div id=${B.ID37} class="L4 R4 B5 grid__box__no">${B.B37}</div>
                <div id=${B.ID38} class="L4 R5 B5 grid__box__no">${B.B38}</div>
                <div id=${B.ID39} class="L4 R6 B5 grid__box__no">${B.B39}</div>
                <div id=${B.ID40} class="L5 R4 B5 grid__box__no">${B.B40}</div>
                <div id=${B.ID41} class="L5 R5 B5 grid__box__no">${B.B41}</div>
                <div id=${B.ID42} class="L5 R6 B5 grid__box__no">${B.B42}</div>
                <div id=${B.ID43} class="L6 R4 B5 grid__box__no">${B.B43}</div>
                <div id=${B.ID44} class="L6 R5 B5 grid__box__no">${B.B44}</div>
                <div id=${B.ID45} class="L6 R6 B5 grid__box__no">${B.B45}</div>
            </div>

            <div class="grid__box">
                <div id=${B.ID46} class="L4 R7 B6 grid__box__no">${B.B46}</div>
                <div id=${B.ID47} class="L4 R8 B6 grid__box__no">${B.B47}</div>
                <div id=${B.ID48} class="L4 R9 B6 grid__box__no">${B.B48}</div>
                <div id=${B.ID49} class="L5 R7 B6 grid__box__no">${B.B49}</div>
                <div id=${B.ID50} class="L5 R8 B6 grid__box__no">${B.B50}</div>
                <div id=${B.ID51} class="L5 R9 B6 grid__box__no">${B.B51}</div>
                <div id=${B.ID52} class="L6 R7 B6 grid__box__no">${B.B52}</div>
                <div id=${B.ID53} class="L6 R8 B6 grid__box__no">${B.B53}</div>
                <div id=${B.ID54} class="L6 R9 B6 grid__box__no">${B.B54}</div>
            </div>

            <div class="grid__box">
                <div id=${B.ID55} class="L7 R1 B7 grid__box__no">${B.B55}</div>
                <div id=${B.ID56} class="L7 R2 B7 grid__box__no">${B.B56}</div>
                <div id=${B.ID57} class="L7 R3 B7 grid__box__no">${B.B57}</div>
                <div id=${B.ID58} class="L8 R1 B7 grid__box__no">${B.B58}</div>
                <div id=${B.ID59} class="L8 R2 B7 grid__box__no">${B.B59}</div>
                <div id=${B.ID60} class="L8 R3 B7 grid__box__no">${B.B60}</div>
                <div id=${B.ID61} class="L9 R1 B7 grid__box__no">${B.B61}</div>
                <div id=${B.ID62} class="L9 R2 B7 grid__box__no">${B.B62}</div>
                <div id=${B.ID63} class="L9 R3 B7 grid__box__no">${B.B63}</div>
            </div>

            <div class="grid__box">
                <div id=${B.ID64} class="L7 R4 B8 grid__box__no">${B.B64}</div>
                <div id=${B.ID65} class="L7 R5 B8 grid__box__no">${B.B65}</div>
                <div id=${B.ID66} class="L7 R6 B8 grid__box__no">${B.B66}</div>
                <div id=${B.ID67} class="L8 R4 B8 grid__box__no">${B.B67}</div>
                <div id=${B.ID68} class="L8 R5 B8 grid__box__no">${B.B68}</div>
                <div id=${B.ID69} class="L8 R6 B8 grid__box__no">${B.B69}</div>
                <div id=${B.ID70} class="L9 R4 B8 grid__box__no">${B.B70}</div>
                <div id=${B.ID71} class="L9 R5 B8 grid__box__no">${B.B71}</div>
                <div id=${B.ID72} class="L9 R6 B8 grid__box__no">${B.B72}</div>
            </div>

            <div class="grid__box">
                <div id=${B.ID73} class="L7 R7 B9 grid__box__no">${B.B73}</div>
                <div id=${B.ID74} class="L7 R8 B9 grid__box__no">${B.B74}</div>
                <div id=${B.ID75} class="L7 R9 B9 grid__box__no">${B.B75}</div>
                <div id=${B.ID76} class="L8 R7 B9 grid__box__no">${B.B76}</div>
                <div id=${B.ID77} class="L8 R8 B9 grid__box__no">${B.B77}</div>
                <div id=${B.ID78} class="L8 R9 B9 grid__box__no">${B.B78}</div>
                <div id=${B.ID79} class="L9 R7 B9 grid__box__no">${B.B79}</div>
                <div id=${B.ID80} class="L9 R8 B9 grid__box__no">${B.B80}</div>
                <div id=${B.ID81} class="L9 R9 B9 grid__box__no">${B.B81}</div>
            </div>
        </main>



    ${N}`,O=[{Level:"Easy",B1:"6",ID1:"16H",B2:"7",ID2:"17H",B3:"2",ID3:"12H",B4:"",ID4:"18",B5:"3",ID5:"13H",B6:"1",ID6:"11H",B7:"",ID7:"15",B8:"4",ID8:"14H",B9:"",ID9:"19H",B10:"",ID10:"25",B11:"",ID11:"23",B12:"1",ID12:"21H",B13:"",ID13:"26",B14:"",ID14:"24",B15:"",ID15:"29",B16:"",ID16:"28",B17:"2",ID17:"22H",B18:"",ID18:"27",B19:"9",ID19:"39H",B20:"8",ID20:"38H",B21:"4",ID21:"34H",B22:"",ID22:"32",B23:"",ID23:"35",B24:"",ID24:"37",B25:"",ID25:"36",B26:"",ID26:"31",B27:"3",ID27:"33H",B28:"4",ID28:"44H",B29:"",ID29:"41",B30:"5",ID30:"45H",B31:"9",ID31:"49H",B32:"2",ID32:"42H",B33:"",ID33:"48",B34:"7",ID34:"47H",B35:"6",ID35:"46H",B36:"",ID36:"43",B37:"",ID37:"59",B38:"",ID38:"56",B39:"",ID39:"52",B40:"3",ID40:"53H",B41:"7",ID41:"57H",B42:"",ID42:"54",B43:"",ID43:"51",B44:"",ID44:"58",B45:"",ID45:"55",B46:"3",ID46:"63H",B47:"",ID47:"67",B48:"8",ID48:"68H",B49:"5",ID49:"65H",B50:"",ID50:"66",B51:"",ID51:"61",B52:"",ID52:"64",B53:"2",ID53:"62H",B54:"",ID54:"69",B55:"",ID55:"71",B56:"",ID56:"75",B57:"",ID57:"77",B58:"3",ID58:"73H",B59:"",ID59:"79",B60:"6",ID60:"76H",B61:"",ID61:"72",B62:"",ID62:"78",B63:"4",ID63:"74H",B64:"4",ID64:"84H",B65:"9",ID65:"89H",B66:"",ID66:"86",B67:"",ID67:"82",B68:"",ID68:"81",B69:"",ID69:"88",B70:"",ID70:"87",B71:"5",ID71:"85H",B72:"",ID72:"83",B73:"8",ID73:"98H",B74:"3",ID74:"93H",B75:"2",ID75:"92H",B76:"",ID76:"97",B77:"4",ID77:"94H",B78:"5",ID78:"95H",B79:"1",ID79:"91H",B80:"9",ID80:"99H",B81:"6",ID81:"96H"},{Level:"Easy",B1:"",ID1:"19",B2:"6",ID2:"16H",B3:"",ID3:"12",B4:"",ID4:"11",B5:"",ID5:"18",B6:"5",ID6:"15H",B7:"3",ID7:"13H",B8:"7",ID8:"17H",B9:"",ID9:"14",B10:"",ID10:"23",B11:"7",ID11:"27H",B12:"",ID12:"28",B13:"",ID13:"24",B14:"2",ID14:"22H",B15:"",ID15:"29",B16:"",ID16:"25",B17:"6",ID17:"26H",B18:"1",ID18:"21H",B19:"",ID19:"34",B20:"",ID20:"35",B21:"",ID21:"31",B22:"7",ID22:"37H",B23:"",ID23:"33",B24:"",ID24:"36",B25:"",ID25:"39",B26:"",ID26:"38",B27:"",ID27:"32",B28:"",ID28:"45",B29:"3",ID29:"43H",B30:"1",ID30:"41H",B31:"6",ID31:"46H",B32:"",ID32:"44",B33:"9",ID33:"49H",B34:"",ID34:"48",B35:"",ID35:"42",B36:"7",ID36:"47H",B37:"9",ID37:"59H",B38:"",ID38:"58",B39:"4",ID39:"54H",B40:"",ID40:"52",B41:"",ID41:"55",B42:"",ID42:"57",B43:"6",ID43:"56H",B44:"1",ID44:"51H",B45:"",ID45:"53",B46:"6",ID46:"66H",B47:"2",ID47:"62",B48:"7",ID48:"67H",B49:"8",ID49:"68H",B50:"",ID50:"61",B51:"",ID51:"63",B52:"5",ID52:"65H",B53:"",ID53:"69",B54:"4",ID54:"64H",B55:"2",ID55:"72H",B56:"",ID56:"71",B57:"",ID57:"78",B58:"4",ID58:"74H",B59:"9",ID59:"79H",B60:"6",ID60:"76H",B61:"",ID61:"77",B62:"",ID62:"75",B63:"",ID63:"73",B64:"",ID64:"87",B65:"",ID65:"84",B66:"5",ID66:"85H",B67:"8",ID67:"88H",B68:"3",ID68:"83H",B69:"",ID69:"82",B70:"",ID70:"81",B71:"9",ID71:"89H",B72:"6",ID72:"86H",B73:"3",ID73:"93H",B74:"6",ID74:"96H",B75:"",ID75:"99",B76:"",ID76:"91",B77:"7",ID77:"97H",B78:"5",ID78:"95H",B79:"",ID79:"92",B80:"4",ID80:"94H",B81:"8",ID81:"98H"},{Level:"Easy",B1:"",ID1:"17",B2:"",ID2:"16",B3:"2",ID3:"12H",B4:"",ID4:"13",B5:"8",ID5:"18H",B6:"",ID6:"11",B7:"4",ID7:"14H",B8:"5",ID8:"15H",B9:"9",ID9:"19H",B10:"3",ID10:"23H",B11:"",ID11:"25",B12:"",ID12:"21",B13:"",ID13:"24",B14:"6",ID14:"26H",B15:"9",ID15:"29H",B16:"2",ID16:"22H",B17:"",ID17:"28",B18:"7",ID18:"27H",B19:"",ID19:"38",B20:"",ID20:"39",B21:"4",ID21:"34H",B22:"",ID22:"35",B23:"",ID23:"32",B24:"",ID24:"37",B25:"1",ID25:"31H",B26:"6",ID26:"36",B27:"3",ID27:"33H",B28:"1",ID28:"41H",B29:"4",ID29:"44H",B30:"5",ID30:"45H",B31:"6",ID31:"46H",B32:"7",ID32:"47H",B33:"",ID33:"43",B34:"2",ID34:"42H",B35:"",ID35:"49",B36:"",ID36:"48",B37:"",ID37:"56",B38:"9",ID38:"59H",B39:"2",ID39:"52H",B40:"",ID40:"58",B41:"1",ID41:"51H",B42:"",ID42:"55",B43:"",ID43:"57",B44:"",ID44:"53",B45:"",ID45:"54",B46:"",ID46:"67",B47:"3",ID47:"63H",B48:"8",ID48:"68H",B49:"",ID49:"62",B50:"4",ID50:"64H",B51:"",ID51:"69",B52:"6",ID52:"66H",B53:"5",ID53:"65H",B54:"1",ID54:"61H",B55:"",ID55:"65",B56:"1",ID56:"71H",B57:"7",ID57:"77H",B58:"",ID58:"79",B59:"",ID59:"73",B60:"",ID60:"76",B61:"8",ID61:"78H",B62:"",ID62:"72",B63:"4",ID63:"74",B64:"",ID64:"89",B65:"",ID65:"84",B66:"6",ID66:"86H",B67:"",ID67:"81",B68:"",ID68:"82",B69:"",ID69:"88",B70:"5",ID70:"85H",B71:"",ID71:"87",B72:"",ID72:"83",B73:"3",ID73:"93H",B74:"",ID74:"98",B75:"",ID75:"92",B76:"",ID76:"94",B77:"7",ID77:"97H",B78:"5",ID78:"95H",B79:"",ID79:"99",B80:"1",ID80:"91H",B81:"6",ID81:"96H"}],P=[{Level:"Medium",B1:"9",ID1:"19H",B2:"",ID2:"14",B3:"",ID3:"18",B4:"",ID4:"12",B5:"",ID5:"17",B6:"",ID6:"15",B7:"",ID7:"16",B8:"",ID8:"13",B9:"1",ID9:"11H",B10:"5",ID10:"25h",B11:"3",ID11:"23h",B12:"1",ID12:"21H",B13:"",ID13:"26",B14:"4",ID14:"24H",B15:"9",ID15:"29H",B16:"8",ID16:"28H",B17:"",ID17:"22",B18:"7",ID18:"27H",B19:"",ID19:"37",B20:"",ID20:"36",B21:"",ID21:"32",B22:"3",ID22:"33H",B23:"8",ID23:"38H",B24:"",ID24:"31",B25:"4",ID25:"34H",B26:"",ID26:"35",B27:"",ID27:"39",B28:"7",ID28:"47H",B29:"",ID29:"45",B30:"4",ID30:"44H",B31:"",ID31:"48",B32:"",ID32:"42",B33:"3",ID33:"43H",B34:"",ID34:"41",B35:"6",ID35:"46H",B36:"9",ID36:"49H",B37:"2",ID37:"52H",B38:"",ID38:"51",B39:"",ID39:"58",B40:"",ID40:"54",B41:"9",ID41:"59H",B42:"",ID42:"56",B43:"",ID43:"57",B44:"",ID44:"55",B45:"3",ID45:"53H",B46:"",ID46:"69",B47:"",ID47:"63",B48:"6",ID48:"66H",B49:"",ID49:"65",B50:"",ID50:"61",B51:"7",ID51:"67H",B52:"",ID52:"68",B53:"",ID53:"62",B54:"",ID54:"64",B55:"",ID55:"73",B56:"",ID56:"78",B57:"7",ID57:"77H",B58:"",ID58:"74",B59:"9",ID59:"79H",B60:"2",ID60:"72H",B61:"5",ID61:"75H",B62:"1",ID62:"71H",B63:"",ID63:"76",B64:"",ID64:"9",B65:"",ID65:"6",B66:"",ID66:"2",B67:"",ID67:"1",B68:"",ID68:"88",B69:"",ID69:"85",B70:"",ID70:"83",B71:"",ID71:"87",B72:"4",ID72:"84H",B73:"",ID73:"91",B74:"",ID74:"94",B75:"",ID75:"95",B76:"",ID76:"96",B77:"7",ID77:"97H",B78:"",ID78:"93",B79:"",ID79:"92",B80:"",ID80:"99",B81:"8",ID81:"98H"},{Level:"Medium",B1:"",ID1:"16",B2:"",ID2:"18",B3:"5",ID3:"15H",B4:"7",ID4:"17H",B5:"3",ID5:"13H",B6:"",ID6:"14",B7:"",ID7:"12",B8:"",ID8:"11",B9:"",ID9:"19",B10:"",ID10:"23",B11:"1",ID11:"21H",B12:"2",ID12:"22H",B13:"9",ID13:"29H",B14:"5",ID14:"25H",B15:"",ID15:"28",B16:"",ID16:"26",B17:"",ID17:"27",B18:"",ID18:"24",B19:"",ID19:"34",B20:"",ID20:"37",B21:"9",ID21:"39H",B22:"1",ID22:"31H",B23:"",ID23:"36",B24:"",ID24:"32",B25:"",ID25:"35",B26:"3",ID26:"33H",B27:"",ID27:"38",B28:"",ID28:"49",B29:"2",ID29:"42H",B30:"",ID30:"46",B31:"",ID31:"44",B32:"",ID32:"47",B33:"",ID33:"43",B34:"8",ID34:"48H",B35:"",ID35:"45",B36:"",ID36:"41",B37:"",ID37:"57",B38:"",ID38:"58",B39:"1",ID39:"51H",B40:"",ID40:"55",B41:"2",ID41:"52H",B42:"",ID42:"56",B43:"",ID43:"54",B44:"",ID44:"53",B45:"",ID45:"59",B46:"",ID46:"63",B47:"4",ID47:"64H",B48:"5",ID48:"65H",B49:"8",ID49:"68H",B50:"",ID50:"69",B51:"",ID51:"61",B52:"7",ID52:"67H",B53:"2",ID53:"62H",B54:"6",ID54:"66H",B55:"",ID55:"75",B56:"",ID56:"76",B57:"",ID57:"78",B58:"",ID58:"73",B59:"4",ID59:"74H",B60:"2",ID60:"72H",B61:"",ID61:"71",B62:"",ID62:"79",B63:"7",ID63:"77H",B64:"",ID64:"82",B65:"4",ID65:"84H",B66:"",ID66:"87",B67:"1",ID67:"81H",B68:"",ID68:"89",B69:"",ID69:"85",B70:"",ID70:"88",B71:"6",ID71:"86H",B72:"",ID72:"83",B73:"",ID73:"99",B74:"1",ID74:"91H",B75:"3",ID75:"93H",B76:"",ID76:"96",B77:"",ID77:"98",B78:"7",ID78:"97H",B79:"",ID79:"92",B80:"",ID80:"95",B81:"4",ID81:"94H"},{Level:"Medium",B1:"6",ID1:"16H",B2:"",ID2:"18",B3:"",ID3:"13",B4:"9",ID4:"19H",B5:"",ID5:"11",B6:"",ID6:"15",B7:"4",ID7:"14H",B8:"",ID8:"12",B9:"",ID9:"17",B10:"2",ID10:"22H",B11:"",ID11:"25",B12:"",ID12:"24",B13:"",ID13:"26",B14:"8",ID14:"28H",B15:"",ID15:"27",B16:"",ID16:"29",B17:"",ID17:"21",B18:"",ID18:"23",B19:"",ID19:"31",B20:"",ID20:"37",B21:"",ID21:"39",B22:"",ID22:"33",B23:"",ID23:"32",B24:"",ID24:"34",B25:"5",ID25:"35H",B26:"8",ID26:"38H",B27:"",ID27:"36",B28:"1",ID28:"41H",B29:"",ID29:"43",B30:"",ID30:"42",B31:"5",ID31:"45H",B32:"9",ID32:"49H",B33:"8",ID33:"48H",B34:"7",ID34:"47H",B35:"6",ID35:"46H",B36:"",ID36:"44",B37:"4",ID37:"54H",B38:"",ID38:"57",B39:"",ID39:"59",B40:"1",ID40:"51H",B41:"6",ID41:"56H",B42:"2",ID42:"52H",B43:"5",ID43:"55H",B44:"",ID44:"53",B45:"",ID45:"58",B46:"",ID46:"66",B47:"",ID47:"65",B48:"",ID48:"68",B49:"7",ID49:"67H",B50:"",ID50:"64",B51:"",ID51:"63",B52:"2",ID52:"62H",B53:"",ID53:"69",B54:"1",ID54:"61H",B55:"",ID55:"78",B56:"7",ID56:"77H",B57:"",ID57:"71",B58:"",ID58:"73",B59:"",ID59:"74",B60:"",ID60:"79",B61:"",ID61:"72",B62:"",ID62:"75",B63:"",ID63:"76",B64:"",ID64:"83",B65:"",ID65:"84",B66:"5",ID66:"85H",B67:"",ID67:"87",B68:"2",ID68:"82H",B69:"6",ID69:"86H",B70:"8",ID70:"88H",B71:"9",ID71:"89H",B72:"",ID72:"81",B73:"",ID73:"99",B74:"",ID74:"96",B75:"",ID75:"92",B76:"",ID76:"98",B77:"",ID77:"91",B78:"5",ID78:"95H",B79:"4",ID79:"94H",B80:"3",ID80:"93H",B81:"",ID81:"97"}],F=[{Level:"Hard",B1:"2",ID1:"12H",B2:"",ID2:"15",B3:"7",ID3:"17H",B4:"",ID4:"19",B5:"8",ID5:"18H",B6:"",ID6:"14",B7:"",ID7:"16",B8:"",ID8:"11",B9:"3",ID9:"13H",B10:"4",ID10:"24H",B11:"",ID11:"29",B12:"",ID12:"26",B13:"3",ID13:"23H",B14:"",ID14:"21",B15:"",ID15:"25",B16:"",ID16:"22",B17:"",ID17:"27",B18:"",ID18:"28",B19:"8",ID19:"38H",B20:"",ID20:"31",B21:"",ID21:"33",B22:"6",ID22:"36H",B23:"",ID23:"32",B24:"",ID24:"37",B25:"",ID25:"35",B26:"",ID26:"39",B27:"",ID27:"34",B28:"",ID28:"43",B29:"",ID29:"47",B30:"",ID30:"48",B31:"",ID31:"44",B32:"",ID32:"42",B33:"9",ID33:"49H",B34:"",ID34:"45",B35:"6",ID35:"46H",B36:"",ID36:"41",B37:"",ID37:"56",B38:"2",ID38:"52H",B39:"9",ID39:"59H",B40:"",ID40:"58",B41:"5",ID41:"55H",B42:"1",ID42:"51H",B43:"",ID43:"57",B44:"",ID44:"54",B45:"3",ID45:"53H",B46:"",ID46:"64",B47:"",ID47:"65",B48:"1",ID48:"61H",B49:"",ID49:"67",B50:"",ID50:"63",B51:"6",ID51:"66H",B52:"9",ID52:"69H",B53:"",ID53:"68",B54:"2",ID54:"62H",B55:"",ID55:"78",B56:"",ID56:"73",B57:"",ID57:"72",B58:"",ID58:"77",B59:"4",ID59:"74H",B60:"",ID60:"75",B61:"1",ID61:"71H",B62:"9",ID62:"79H",B63:"",ID63:"76",B64:"",ID64:"89",B65:"",ID65:"86",B66:"",ID66:"84",B67:"",ID67:"81",B68:"8",ID68:"88",B69:"",ID69:"82",B70:"",ID70:"85",B71:"",ID71:"83",B72:"",ID72:"87",B73:"",ID73:"91",B74:"7",ID74:"97H",B75:"",ID75:"95",B76:"",ID76:"93",B77:"",ID77:"96",B78:"",ID78:"99",B79:"",ID79:"92",B80:"4",ID80:"94H",B81:"",ID81:"98"},{Level:"Hard",B1:"4",ID1:"14H",B2:"",ID2:"19",B3:"",ID3:"16",B4:"",ID4:"12",B5:"",ID5:"11",B6:"",ID6:"18",B7:"",ID7:"17",B8:"5",ID8:"15H",B9:"",ID9:"13",B10:"1",ID10:"21H",B11:"",ID11:"25",B12:"",ID12:"27",B13:"3",ID13:"23H",B14:"",ID14:"29",B15:"",ID15:"26",B16:"",ID16:"22",B17:"",ID17:"28",B18:"4",ID18:"24H",B19:"",ID19:"38",B20:"",ID20:"33",B21:"",ID21:"32",B22:"7",ID22:"37H",B23:"",ID23:"34",B24:"5",ID24:"35H",B25:"",ID25:"31",B26:"",ID26:"39",B27:"6",ID27:"36H",B28:"1",ID28:"41H",B29:"",ID29:"48",B30:"",ID30:"45",B31:"",ID31:"49",B32:"6",ID32:"46H",B33:"",ID33:"42",B34:"3",ID34:"43H",B35:"",ID35:"47",B36:"",ID36:"44",B37:"",ID37:"57",B38:"",ID38:"56",B39:"",ID39:"53",B40:"",ID40:"54",B41:"",ID41:"51",B42:"5",ID42:"55H",B43:"",ID43:"59H",B44:"",ID44:"52",B45:"",ID45:"58",B46:"4",ID46:"64H",B47:"2",ID47:"62H",B48:"",ID48:"69",B49:"3",ID49:"63H",B50:"",ID50:"67",B51:"",ID51:"68",B52:"",ID52:"65",B53:"6",ID53:"66H",B54:"",ID54:"61",B55:"",ID55:"75",B56:"3",ID56:"73H",B57:"",ID57:"71",B58:"6",ID58:"76H",B59:"",ID59:"74",B60:"",ID60:"79",B61:"8",ID61:"78H",B62:"",ID62:"72",B63:"",ID63:"77",B64:"6",ID64:"86H",B65:"",ID65:"87",B66:"",ID66:"82",B67:"",ID67:"88",B68:"",ID68:"83",B69:"1",ID69:"81H",B70:"",ID70:"85",B71:"",ID71:"84",B72:"",ID72:"89",B73:"9",ID73:"99H",B74:"",ID74:"98",B75:"",ID75:"94",B76:"",ID76:"92",B77:"",ID77:"95",B78:"7",ID78:"97H",B79:"6",ID79:"96H",B80:"1",ID80:"91H",B81:"",ID81:"93"},{Level:"Hard",B1:"",ID1:"18",B2:"",ID2:"17",B3:"",ID3:"11",B4:"3",ID4:"13H",B5:"",ID5:"14",B6:"",ID6:"19",B7:"",ID7:"12",B8:"5",ID8:"15H",B9:"",ID9:"16",B10:"",ID10:"26",B11:"2",ID11:"22H",B12:"",ID12:"29",B13:"",ID13:"21",B14:"5",ID14:"25H",B15:"",ID15:"28",B16:"",ID16:"23",B17:"7",ID17:"27H",B18:"4",ID18:"24H",B19:"",ID19:"33",B20:"",ID20:"34",B21:"5",ID21:"35H",B22:"7",ID22:"37H",B23:"",ID23:"32",B24:"",ID24:"36",B25:"8",ID25:"38H",B26:"9",ID26:"39H",B27:"1",ID27:"31H",B28:"6",ID28:"46H",B29:"",ID29:"48",B30:"",ID30:"43",B31:"4",ID31:"44H",B32:"",ID32:"42",B33:"7",ID33:"47H",B34:"",ID34:"49",B35:"",ID35:"41",B36:"",ID36:"45",B37:"",ID37:"57",B38:"9",ID38:"59H",B39:"",ID39:"51",B40:"8",ID40:"58H",B41:"",ID41:"56",B42:"",ID42:"55",B43:"",ID43:"52",B44:"",ID44:"54",B45:"",ID45:"53",B46:"",ID46:"62",B47:"5",ID47:"65H",B48:"",ID48:"64",B49:"",ID49:"69",B50:"",ID50:"61",B51:"",ID51:"63",B52:"",ID52:"66",B53:"",ID53:"68",B54:"",ID54:"67",B55:"",ID55:"61",B56:"",ID56:"73",B57:"",ID57:"72",B58:"",ID58:"75",B59:"",ID59:"79",B60:"8",ID60:"78H",B61:"",ID61:"77",B62:"",ID62:"76",B63:"",ID63:"74",B64:"5",ID64:"85H",B65:"",ID65:"88",B66:"",ID66:"86",B67:"4",ID67:"84H",B68:"",ID68:"83",B69:"",ID69:"87",B70:"",ID70:"89",B71:"1",ID71:"81H",B72:"2",ID72:"82H",B73:"4",ID73:"94H",B74:"7",ID74:"97H",B75:"",ID75:"99",B76:"",ID76:"91",B77:"6",ID77:"96H",B78:"",ID78:"92",B79:"",ID79:"95",B80:"",ID80:"93",B81:"",ID81:"98"}],C=document.querySelectorAll(".navigation__difficulty--button"),o=document.querySelector(".screen"),R=document.querySelector(".screen");if(!C||!o||!R)throw new Error("Issue With Selector");let _="",a="",x="",h="";C.forEach(B=>{B.addEventListener("click",()=>{_=String(B.getAttribute("id")),_==="easy"?(a=u(O[Math.floor(Math.random()*3)]),o.innerHTML=a):_==="medium"?(x=u(P[Math.floor(Math.random()*3)]),o.innerHTML=x):_==="hard"&&(h=u(F[Math.floor(Math.random()*3)]),o.innerHTML=h)})});const U=B=>{const s=B.target;if(s.matches("#easy")||s.matches("#medium")||s.matches("#hard")||s.matches(".screen__edit--restart")||s.matches(".screen__edit--delete")){const l=document.querySelector(".screen__edit--restart"),e=document.querySelectorAll(".grid__box__no"),i=document.querySelectorAll(".numbers__single"),I=document.querySelector(".navigation__errors--error-count"),n=document.querySelector(".screen__edit--delete"),f=document.querySelector(".nagivation__home");if(!e||!i||!I||!n||!l||!l||!f)throw new Error("Issue With Selector");let H="",$="",r="",y="",M="",p="",L="",t="";e.forEach(D=>{D.addEventListener("click",()=>{r=" ",H=String(D.getAttribute("id")),M=String(D.getAttribute("class")).slice(3,5),y=String(D.getAttribute("class")).slice(0,2),p=String(D.getAttribute("class")).slice(6,8),$=H.slice(1,2),L=H.slice(2),S(),E()})}),i.forEach(D=>{D.addEventListener("click",()=>{r=String(D.getAttribute("id")),S()})});const E=()=>{const D=Array.from(document.getElementsByClassName("grid__box__no"));for(let d=0;d<D.length;d++)D[d].classList.contains(y)||D[d].classList.contains(p)||D[d].classList.contains(M)?D[d].style.backgroundColor="#D4BBF9":D[d].style.backgroundColor="white"},S=()=>{let D=document.getElementById(H),d=I.innerHTML;if($===r){if(D!=null){D.innerHTML=r,D.style.color="#374785";let c=0;const b=document.querySelectorAll(".grid__box__no");if(!b)throw new Error("issue with selectors");for(let v=0;v<b.length;v++)b[v].innerHTML===""&&c++;if(c===0){const v=T(t);let G=_.slice(0,1).toUpperCase()+_.slice(1);o.innerHTML=`<header class="result">
            <h1 class="result__title">Level completed</h1>
            <section class="result-card">
              <p class="result-card__level">Difficulty: ${G}</p>
              <p class="result-card__errors">${v}</p>
            </section>
            <button class="result__home">Home</button>
          </header>`}q(B)}}else r===" "||L==="H"?I.innerHTML=I.innerHTML:$!=r&&D!=null&&(D.innerHTML=r,D.style.color="#DC541C",t=String(Number(d)+1),I.innerHTML=t,T(I.innerHTML))},w=()=>{_==="easy"?o.innerHTML=a:_==="medium"?o.innerHTML=x:_==="hard"&&(o.innerHTML=h)},k=()=>{let D=document.getElementById(H);D!=null&&L==="H"?D.innerHTML=D.innerHTML:D!=null&&(D.innerHTML="")},T=D=>(t=I.innerHTML,D==="0"?"You got no penalties!":D==="1"?`You recieved ${t} penalty`:`You recieved ${t} penalties`),A=()=>{window.location.href="index.html"},q=D=>{if(D.target.matches(".numbers__single")){const c=document.querySelector(".result__home");c&&c.addEventListener("click",A)}};e.forEach(D=>{D.addEventListener("click",E)}),n.addEventListener("click",k),l.addEventListener("click",w),f.addEventListener("click",A),R.addEventListener("click",q)}};R.addEventListener("click",U);
