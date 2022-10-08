// cookies

function cookies(){
    document.querySelector('#cookies').style.display = 'none';
}


/// menu

function menuSuperior() {
    menu = document.querySelectorAll('.menu-caixa');
    for (i = 0; i < menu.length; i++) {
      menu[i].classList.toggle('block');
    }
  }

///  botão troca de visualização de cadastro pessoa fisica e pessoa juridica

function btnfisica() {
  document.getElementById('cor-f').style.backgroundColor = "#0f1833"
  document.getElementById('cor-r').style.backgroundColor = "#FF6600"
  document.getElementById("btn-p-fisica").style.display = "grid";
  document.getElementById("btn-p-juridico").style.display = "none";
}

function btnjuridico() {
  document.getElementById('cor-f').style.backgroundColor = "#FF6600"
  document.getElementById('cor-r').style.backgroundColor = "#0f1833"
  document.getElementById("btn-p-juridico").style.display = "grid";
  document.getElementById("btn-p-fisica").style.display = "none";
}


/// API de CEP Pessoa fisica

function limpa_formulário_cep() {
  //Limpa valores do formulário de cep.
  document.getElementById('rua').value = ("");
  document.getElementById('bairro').value = ("");
  document.getElementById('cidade').value = ("");
  document.getElementById('uf').value = ("");
}

function meu_callback(conteudo) {
  if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById('rua').value = (conteudo.logradouro);
    document.getElementById('bairro').value = (conteudo.bairro);
    document.getElementById('cidade').value = (conteudo.localidade);
    document.getElementById('uf').value = (conteudo.uf);
  } //end if.
  else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
  }
}

function pesquisacep(valor) {

  //Nova variável "cep" somente com dígitos.
  var cep = valor.replace(/\D/g, '');

  //Verifica se campo cep possui valor informado.
  if (cep != "") {

    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if (validacep.test(cep)) {

      //Preenche os campos com "..." enquanto consulta webservice.
      document.getElementById('rua').value = "...";
      document.getElementById('bairro').value = "...";
      document.getElementById('cidade').value = "...";
      document.getElementById('uf').value = "...";

      //Cria um elemento javascript.
      var script = document.createElement('script');

      //Sincroniza com o callback.
      script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

      //Insere script no documento e carrega o conteúdo.
      document.body.appendChild(script);

    } //end if.
    else {
      //cep é inválido.
      limpa_formulário_cep();
      alert("Formato de CEP inválido.");
    }
  } //end if.
  else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep();
  }
};

/// API de CEP Pessoa juridica

function limpa_formulário_cep_juridico() {
  //Limpa valores do formulário de cep.
  document.getElementById('rua_juridico').value = ("");
  document.getElementById('bairro_juridico').value = ("");
  document.getElementById('cidade_juridico').value = ("");
  document.getElementById('uf_juridico').value = ("");
}

function meu_callback_juridico(conteudo) {
  if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById('rua_juridico').value = (conteudo.logradouro);
    document.getElementById('bairro_juridico').value = (conteudo.bairro);
    document.getElementById('cidade_juridico').value = (conteudo.localidade);
    document.getElementById('uf_juridico').value = (conteudo.uf);
  } //end if.
  else {
    //CEP não Encontrado.
    limpa_formulário_cep_juridico();
    alert("CEP não encontrado.");
  }
}

function pesquisacep_juridico(valor) {

  //Nova variável "cep" somente com dígitos.
  var cep = valor.replace(/\D/g, '');

  //Verifica se campo cep possui valor informado.
  if (cep != "") {

    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if (validacep.test(cep)) {

      //Preenche os campos com "..." enquanto consulta webservice.
      document.getElementById('rua_juridico').value = "...";
      document.getElementById('bairro_juridico').value = "...";
      document.getElementById('cidade_juridico').value = "...";
      document.getElementById('uf_juridico').value = "...";

      //Cria um elemento javascript.
      var script = document.createElement('script');

      //Sincroniza com o callback.
      script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback_juridico';

      //Insere script no documento e carrega o conteúdo.
      document.body.appendChild(script);

    } //end if.
    else {
      //cep é inválido.
      limpa_formulário_cep_juridico();
      alert("Formato de CEP inválido.");
    }
  } //end if.
  else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep_juridico();
  }
};


/// CADASTRO JS - TROCA DE FORMULARIO PESSOA FISICA / JURIDICA

function mask_fisico(o, f) {
  setTimeout(function () {
    var v = mphone_fisico(o.value);
    if (v != o.value) {
      o.value = v;
    }
  }, 1);
}

function mphone_fisico(v) {
  var r = v.replace(/\D/g, "");
  r = r.replace(/^0/, "");
  if (r.length > 10) {
    r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (r.length > 5) {
    r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
  } else if (r.length > 2) {
    r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
  } else {
    r = r.replace(/^(\d*)/, "($1");
  }
  return r;
}

function mask_juridico(o, f) {
  setTimeout(function () {
    var v = mphone_juridico(o.value);
    if (v != o.value) {
      o.value = v;
    }
  }, 1);
}

function mphone_juridico(v) {
  var r = v.replace(/\D/g, "");
  r = r.replace(/^0/, "");
  if (r.length > 10) {
    r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (r.length > 5) {
    r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
  } else if (r.length > 2) {
    r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
  } else {
    r = r.replace(/^(\d*)/, "($1");
  }
  return r;
}

/// SOBRE - ACORDEON

var accItem = document.getElementsByClassName("accordionItem");
    var accHD = document.getElementsByClassName("accordionItemHeading");
    for (i = 0; i < accHD.length; i++) {
      accHD[i].addEventListener("click", toggleItem, false);
    }

    function toggleItem() {
      var itemClass = this.parentNode.className;
      for (i = 0; i < accItem.length; i++) {
        accItem[i].className = "accordionItem close";
      }
      if (itemClass == "accordionItem close") {
        this.parentNode.className = "accordionItem open";
      }
    }

/// SLIDE INDEX

    let slideIndex = 1;
        showSlides(slideIndex);

        // Next/previous controls
        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        // Thumbnail image controls
        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");
            if (n > slides.length) {
                slideIndex = 1
            }
            if (n < 1) {
                slideIndex = slides.length
            }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }

///MENU CATEGORIAS INDEX

let span = document.getElementsByClassName('btn-menu-categoria');
        console.log()
        let logoCategoria = document.getElementsByClassName('logo-categoria')
        let logoCategoria_page = Math.ceil(logoCategoria.length / 4);
        let l = 0;
        let movePer = 14.5;
        let maxMove = 101.5;
        // mobile_view	
        let mob_view = window.matchMedia("(max-width: 768px)");
        if (mob_view.matches) {
            movePer = 50.36;
            maxMove = 504;
        }

        let right_mover = () => {
            l = l + movePer;
            if (logoCategoria == 1) {
                l = 0;
            }
            for (const i of logoCategoria) {
                if (l > maxMove) {
                    l = l - movePer;
                }
                i.style.left = '-' + l + '%';
            }

        }
        let left_mover = () => {
            l = l - movePer;
            if (l <= 0) {
                l = 0;
            }
            for (const i of logoCategoria) {
                if (logoCategoria_page > 1) {
                    i.style.left = '-' + l + '%';
                }
            }
        }
        span[1].onclick = () => {
            right_mover();
        }
        span[0].onclick = () => {
            left_mover();
        }

///ROLAGEM DE ANUNCIO INDEX

let btnMenuAnuncio = document.getElementsByClassName('btn-menu-anuncio');

        let imgAnuncio = document.getElementsByClassName('img-anuncio')
        let imgAnuncio_page = Math.ceil(imgAnuncio.length / 4);
        let lAnuncio = 0;
        let movePerAnuncio = 25.5;
        let maxMoveAnuncio = 51;
        // mobile_view	
        let mob_view_anuncio = window.matchMedia("(max-width: 768px)");
        if (mob_view_anuncio.matches) {
            movePerAnuncio = 50.36;
            maxMoveAnuncio = 504;
        }

        let right_mover_anuncio = () => {
            console.log('right');
            lAnuncio = lAnuncio + movePerAnuncio;
            if (imgAnuncio == 1) {
                lAnuncio = 0;
            }
            for (const i of imgAnuncio) {
                if (lAnuncio > maxMoveAnuncio) {
                    lAnuncio = lAnuncio - movePerAnuncio;
                }
                i.style.left = '-' + lAnuncio + '%';
            }

        }
        let left_mover_anuncio = () => {
            console.log('left');
            lAnuncio = lAnuncio - movePer;
            if (lAnuncio <= 0) {
                lAnuncio = 0;
            }
            for (const i of imgAnuncio) {
                if (imgAnuncio_page > 1) {
                    i.style.left = '-' + lAnuncio + '%';
                }
            }
        }
        btnMenuAnuncio[1].onclick = () => {
            right_mover_anuncio();
        }
        btnMenuAnuncio[0].onclick = () => {
            left_mover_anuncio();
        }

///TROCAR MODELO DE CADASTRO PESSOA FISICA

document.getElementById('olho-fisica').addEventListener('mousedown', function () {
  document.getElementById('cadastro-senha-fisica').type = 'text';
});

document.getElementById('olho-fisica').addEventListener('mouseup', function () {
  document.getElementById('cadastro-senha-fisica').type = 'password';
});

// Para que o password não fique exposto apos mover a imagem.
document.getElementById('olho-fisica').addEventListener('mousemove', function () {
  document.getElementById('cadastro-senha-fisica').type = 'password';
});

///TROCAR MODELO DE CADASTRO PESSOA JURIDICA

document.getElementById('olho-juridica').addEventListener('mousedown', function () {
  document.getElementById('cadastro-senha-juridica').type = 'text';
});

document.getElementById('olho-juridica').addEventListener('mouseup', function () {
  document.getElementById('cadastro-senha-juridica').type = 'password';
});

// Para que o password não fique exposto apos mover a imagem.
document.getElementById('olho-fisica').addEventListener('mousemove', function () {
  document.getElementById('cadastro-senha-juridica').type = 'password';
});