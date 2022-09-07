// modal
const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const removeModalButton = document.querySelector("#remove-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};



[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});


[removeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});



function MudaVisualizacaoMenuCadastro(el) {
    document.getElementById('seta-lado-cadastro').classList.toggle('mostrar-seta-lado-cadastro');
    document.getElementById(el).classList.toggle('mostrar-cadastro');

}

function MudaVisualizacaoMenuSuporte(el) {
    document.getElementById('seta-lado-suporte').classList.toggle('mostrar-seta-lado-suporte');
    document.getElementById(el).classList.toggle('mostrar-suporte');

}

// menu usuario (some e mostra)
function menuUser(el) {
    document.getElementById(el).classList.toggle('mostrar-menu-user');
    document.getElementById('fade-tela-menu-user').style.display = "block";
}
function menuUsers(el) {
    document.getElementById(el).classList.toggle('mostrar-menu-user');
    document.getElementById('fade-tela-menu-user').style.display = "none";
}

// menu mensagens (some e mostra)
function mostrarMenuMensagens(el) {
    document.getElementById('fade-tela-menu-mensagem').style.display = "block";

    document.getElementById(el).classList.toggle('mostrar-menu-mensagens');
}


// responder mensagem suporte -- clique na mensagem
function respondeMensagem(el) {
    document.getElementById(el).classList.toggle('caixa-resposta');
}

// 

function mostrarMenuMensagem(el) {
    document.getElementById('fade-tela-menu-mensagem').style.display = "none";
    document.getElementById(el).classList.toggle('mostrar-menu-mensagens');
}


// menu laretal some e mostra
function mostraMenuLateral(el) {
    document.getElementById('caixa-2').classList.toggle('gridTemplateColumns1');
    // document.getElementById('menu-lateral-corpo').classList.toggle('gridTemplateColumns2');
    // document.getElementById('logo').classList.toggle('logoMostrar');
    document.getElementById('menu-lado').classList.toggle('menuLadoMostrar');
    console.log('teste');
}

// Ativar tela cheia
function toggleFullScreen() {
    if (!document.fullscreenElement &&
        !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement
    ) {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
}



function trocaTemaClaro() {
    // document.querySelector('link').href = "css/tema-claro.css";
    document.querySelector('#tema-claro').style.display = "none";
    document.querySelector('#tema-escuro').style.display = "inline";
  }

  function trocaTemaEscuro() {
    // document.querySelector('link').href = "css/tema-escuro.css";
    document.querySelector('#tema-claro').style.display = "inline";
    document.querySelector('#tema-escuro').style.display = "none";
  }

