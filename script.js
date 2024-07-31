// Seleciona o primeiro elemento <img> encontrado no documento e o armazena na variável 'lampadaMagica'
let lampadaMagica = document.querySelector("img");

// Define uma função chamada 'lampada'
function lampada() {
    // Altera a propriedade 'src' da imagem selecionada, mudando o caminho para "./img/genio.png"
    // Isso faz com que a imagem exibida na página seja alterada para 'genio.png' quando a função é chamada
    lampadaMagica.src = "./img/genio.png";
}