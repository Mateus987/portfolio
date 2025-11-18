document.addEventListener('DOMContentLoaded', function() {

    const phrase = document.getElementById('phrase');

    const text = [ "\"O coração tem razões que a própria razão desconhece\" -  Blaise Pascal",
                    "\"Penso, logo existo\" -  René Descartes", 
                    "\"A felicidade é a única coisa que podemos dar sem possuir\" -  Voltaire",
                    "\"A verdadeira sabedoria está em reconhecer a própria ignorância\" -  Sócrates",
                    "\"Somos o que fazemos repetidamente. A excelência, então, não é um ato, mas um hábito\" -  Aristóteles",
                    "\"A vida pode ser compreendida olhando-se para trás, mas só pode ser vivida olhando-se para frente\" -  Søren Kierkegaard",
                    "\"A mente é como um paraquedas, só funciona se estiver aberta\" -  Albert Einstein",
                    "\"A vida é realmente simples, mas insistimos em torná-la complicada\" -  Confúcio",
                    "\"O saber a gente aprende com os mestres e os livros. A sabedoria se aprende é com a vida e com os humildes\" -  Cora Coralina",
                    "\"Feliz aquele que transfere o que sabe e aprende o que ensina\" -  Cora Coralina",
                    "\"Se algo está além do seu controle, por que se preocupar com isso?\" -  Marco Aurélio",
                    "\"O conhecimento só é verdadeiramente nosso quando é construído por nós\" -  Immanuel Kant"
                    ];

    var i = Math.floor(text.length * Math.random());
    phrase.innerText = text[i];
});

console.log("testando script de disparo de eventos na página de produtos");

const buttonbuy = document.queryselector("#button-buy");
buttonbuy.addEventListener('mouseover', function(){
    console.log("Vai comprar?");
} )
