const tocaSom = () => {
    const som = document.querySelector("#cerveja");
    if (som) {
        som.play();
    } else {
        console.error("Elemento de áudio não encontrado!");
    }
};

document.querySelector('#play').addEventListener('click', tocaSom);
