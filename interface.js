let jogador1 = "Player1";
let jogador2 = "Player2";
let jogadoVez;

document.addEventListener('DOMContentLoaded', () => {

    let quadrados = document.querySelectorAll(".quadrado");
    let botaoReset = document.getElementById("botaoReset");
    let vitorioso;

    console.log(jogadorVez.innerHTML);

    botaoReset.addEventListener('click', resetSquares);

    document.getElementById("player1").addEventListener('change', () => {     
        jogador1 = document.getElementById("player1").value;
        jogadorVez.innerHTML=jogador1;
    });

    document.getElementById("player2").addEventListener('change', () => {

        jogador2 = document.getElementById("player2").value;
    });

    quadrados.forEach((quadrado) => {

        quadrado.addEventListener('click', handleClick);

    })


})

function handleClick(event) {
    console.log(event.target);

    let quadrado = event.target;
    let position = quadrado.id;

    if (handleMove(position)) {

        setTimeout(() => {

            vitorioso = ganhador(playerTime);
            alert("O Jogo Acabou! o ganhador foi:" + vitorioso);
           
        }, 200)

        setTimeout(()=>{
            resetGame();
            resetSquares();
        },500) //Precisei colocar 500ms pois menos estava resetando o nome do ganhador antes de anunciar.

    }
    updateSquare(position);

}


function updateSquare(position) {
    let quadrado = document.getElementById(position.toString());
    let symbol = board[position];
    quadrado.innerHTML = `<div class='${symbol}'> </div>`

    if(jogadorVez.innerHTML==jogador1){
        jogadorVez.innerHTML=jogador2;
        console.log(jogadorVez.innerHTML);
    }else{
        jogadorVez.innerHTML=jogador1;
    }
}


function resetSquares() {

    let quadrados = document.querySelectorAll(".quadrado");

    quadrados.forEach((quadrado) => {
        let position = quadrado.id;
        let symbol = board[position];



        quadrado.innerHTML = ``


    })

    resetGame();
}

function ganhador(n) { //Função está dentro do "handleClick"


    if (n == "0") {


        return vitorioso = jogador1;
    }
    else {
        return vitorioso = jogador2;
    }

}