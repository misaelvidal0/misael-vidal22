const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado:
      "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
    alternativas: [
      {
        texto: "Isso é assustador!",
        afirmacao:
          "Você ficou assustado com a velocidade do avanço da inteligência artificial e decidiu que é importante ter cuidado com essa tecnologia."
      },
      {
        texto: "Isso é maravilhoso!",
        afirmacao:
          "Você ficou impressionado com as possibilidades da inteligência artificial e percebeu que ela pode ajudar em muitas situações."
      }
    ]
  },

  {
    enunciado:
      "Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
    alternativas: [
      {
        texto:
          "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
        afirmacao:
          "Você percebeu que a IA pode ser utilizada como uma ferramenta de pesquisa, ajudando a encontrar informações e explicando assuntos de maneira mais simples."
      },
      {
        texto:
          "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
        afirmacao:
          "Você preferiu realizar a pesquisa por conta própria, utilizando seus conhecimentos, conversas e diferentes fontes de informação."
      }
    ]
  },

  {
    enunciado:
      "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
    alternativas: [
      {
        texto:
          "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
        afirmacao:
          "Você acredita que a inteligência artificial pode criar novas oportunidades e ajudar as pessoas a desenvolverem novas habilidades."
      },
      {
        texto:
          "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendo a importância de proteger os trabalhadores.",
        afirmacao:
          "Você se preocupa com os impactos da automação e acredita que é importante proteger os trabalhadores durante essas mudanças."
      }
    ]
  },

  {
    enunciado:
      "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
    alternativas: [
      {
        texto:
          "Criar uma imagem utilizando uma plataforma de design como o Paint.",
        afirmacao:
          "Você prefere utilizar ferramentas tradicionais de criação e desenvolver a imagem com suas próprias habilidades."
      },
      {
        texto:
          "Criar uma imagem utilizando um gerador de imagem de IA.",
        afirmacao:
          "Você decide experimentar um gerador de imagens por IA para explorar as novas possibilidades oferecidas pela tecnologia."
      }
    ]
  },

  {
    enunciado:
      "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
    alternativas: [
      {
        texto:
          "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
        afirmacao:
          "Você considera que utilizar o conteúdo produzido pela IA pode ser uma forma de contribuir para o trabalho do grupo."
      },
      {
        texto:
          "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
        afirmacao:
          "Você entende que a IA pode ajudar, mas acredita que é fundamental revisar as informações, corrigir possíveis erros e acrescentar as perspectivas do grupo."
      }
    ]
  }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }

  perguntaAtual = perguntas[atual];

  caixaPerguntas.textContent = perguntaAtual.enunciado;

  caixaAlternativas.innerHTML = "";

  mostraAlternativas();
}

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");

    botaoAlternativas.textContent = alternativa.texto;

    botaoAlternativas.addEventListener("click", () => {
      respostaSelecionada(alternativa);
    });

    caixaAlternativas.appendChild(botaoAlternativas);
  }
}

function respostaSelecionada(opcaoSelecionada) {
  const afirmacao = opcaoSelecionada.afirmacao;

  historiaFinal += afirmacao + " ";

  atual++;

  mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent = "Em 2049...";

  textoResultado.textContent = historiaFinal;

  caixaAlternativas.innerHTML = "";

  caixaResultado.style.display = "block";
}

mostraPergunta();   2