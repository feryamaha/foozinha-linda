document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("musica1");

    // Define o tempo inicial do áudio (2:22 = 142 segundos)
    audio.currentTime = 142;

    // Estiliza o elemento <audio> para ficar no canto superior direito
    audio.style.position = "fixed";
    audio.style.top = "10px";
    audio.style.right = "10px";
    audio.style.zIndex = "1000";

    // Tenta tocar o áudio automaticamente (mudo)
    audio.play().catch(function (error) {
        console.log("Autoplay bloqueado. Aguardando interação do usuário.");
    });

    // Desmuta o áudio após qualquer interação do usuário
    document.addEventListener("click", function () {
        audio.muted = false; // Desmuta o áudio
    }, { once: true }); // Executa apenas uma vez
});

// TROCA IMAGEM

document.addEventListener('DOMContentLoaded', function () {
    const genesisElement = document.querySelector('.s-hero-genesis');
    let isRed = false;

    // Função para alternar a imagem
    function toggleImage() {
        if (isRed) {
            genesisElement.classList.remove('red');
        } else {
            genesisElement.classList.add('red');
        }
        isRed = !isRed;
    }

    // Inicia o intervalo para alternar a imagem a cada 500ms (meio segundo)
    setInterval(toggleImage, 500);
});