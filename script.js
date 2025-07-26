// Objeto que mapeia o ID do smoothie para os detalhes da imagem e cor de fundo
const smoothies = {
    strawberry: {
        image: 'https://images.unsplash.com/photo-1546069901-dcd1307b9982?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Imagem de morango
        color: '#f7a072' // Cor mais para o laranja/pêssego
    },
    banana: {
        image: 'https://images.unsplash.com/photo-1627435649068-085e1ce0e561?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Imagem de banana
        color: '#fcd757' // Amarelo da banana
    },
    kiwi: {
        image: 'https://images.unsplash.com/photo-1627435649080-602931210815?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Imagem de kiwi
        color: '#a4cc86'   // Verde do kiwi
    },
    berries: {
        image: 'https://images.unsplash.com/photo-1616422323565-d014022c4f1c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Imagem de frutas vermelhas
        color: '#f26f6f'  // Vermelho das frutas vermelhas
    }
};

// Objeto para armazenar as imagens das frutas que flutuam
const floatingFruitImages = {
    strawberry: [
        'https://images.unsplash.com/photo-1546069901-dcd1307b9982?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Exemplo de imagem para morango
        'https://images.unsplash.com/photo-1587840176316-24155b5d84d1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  // Outra imagem de morango
    ],
    cherry: [
        'https://images.unsplash.com/photo-1548486981-d9a2a7f8b9e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Imagem de cereja
        'https://images.unsplash.com/photo-1601633513360-153c301389e0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'   // Outra imagem de cereja
    ],
    banana_slice: [ // Adicionando fatia de banana para o smoothie de banana
        'https://images.unsplash.com/photo-1571771019793-18967962453e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Fatias de banana
        'https://images.unsplash.com/photo-1621262102551-7872652b4144?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Outra fatia de banana
    ],
    kiwi_slice: [ // Adicionando fatia de kiwi
        'https://images.unsplash.com/photo-1549449673-c62589574486?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Fatias de kiwi
        'https://images.unsplash.com/photo-1601633513360-153c301389e0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Outra fatia de kiwi
    ]
};


// Seleciona os elementos HTML que vamos manipular
const mainSmoothieImage = document.getElementById('main-smoothie-image');
const thumbnails = document.querySelectorAll('.thumbnail');
const body = document.body;
const ctaButton = document.querySelector('.cta-button');
const floatingElementsContainer = document.querySelector('.floating-elements-container');


// Função para gerar um número aleatório dentro de um intervalo
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// Função para criar e animar um elemento flutuante
function createFloatingElement(imageSrc, animationDuration, delay, imageContainerRect) {
    const element = document.createElement('img');
    element.src = imageSrc;
    element.classList.add('floating-element'); // Adiciona a classe base

    // As posições start/mid/end serão relativas ao 'imageContainer'
    // Garantimos que elas apareçam da parte inferior direita em volta do container principal.
    
    // Ponto de início (da parte inferior direita do imageContainer ou um pouco abaixo)
    const startX = getRandomNumber(imageContainerRect.right - imageContainerRect.width * 0.3, imageContainerRect.right + imageContainerRect.width * 0.1);
    const startY = getRandomNumber(imageContainerRect.bottom, imageContainerRect.bottom + imageContainerRect.height * 0.2);

    // Ponto intermediário (subindo em direção ao centro do imageContainer)
    const midX = getRandomNumber(imageContainerRect.left + imageContainerRect.width * 0.5, imageContainerRect.right);
    const midY = getRandomNumber(imageContainerRect.top + imageContainerRect.height * 0.3, imageContainerRect.bottom * 0.8);

    // Ponto final (onde a fruta vai parar, em volta do imageContainer)
    const endX = getRandomNumber(imageContainerRect.left + imageContainerRect.width * 0.1, imageContainerRect.right - imageContainerRect.width * 0.1);
    const endY = getRandomNumber(imageContainerRect.top + imageContainerRect.height * 0.1, imageContainerRect.bottom - imageContainerRect.height * 0.1);

    // Converte de pixels para vw/vh para variáveis CSS
    const startX_vw = (startX / window.innerWidth) * 100;
    const startY_vh = (startY / window.innerHeight) * 100;
    const midX_vw = (midX / window.innerWidth) * 100;
    const midY_vh = (midY / window.innerHeight) * 100;
    const endX_vw = (endX / window.innerWidth) * 100;
    const endY_vh = (endY / window.innerHeight) * 100;

    // Define as variáveis CSS para a animação
    element.style.setProperty('--start-x', startX_vw);
    element.style.setProperty('--start-y', startY_vh);
    element.style.setProperty('--mid-x', midX_vw);
    element.style.setProperty('--mid-y', midY_vh);
    element.style.setProperty('--end-x', endX_vw);
    element.style.setProperty('--end-y', endY_vh);

    // Aplica a animação appearFromBottomRightAndPosition e mantém o estado final
    element.style.animation = `appearFromBottomRightAndPosition ${animationDuration}s ${delay}s forwards ease-in-out`;
    
    floatingElementsContainer.appendChild(element);

    // IMPORTANTE: NÃO REMOVEMOS O ELEMENTO AQUI. Ele ficará estático.
    // A remoção será feita pela função generateFloatingElements antes de criar os novos.
}

// Função para gerar vários elementos flutuantes
function generateFloatingElements(fruitTypes, countPerType = 3, minDuration = 1, maxDuration = 2) {
    // Limpa TODOS os elementos flutuantes atuais antes de adicionar novos
    Array.from(floatingElementsContainer.children).forEach(child => {
        child.remove();
    });

    // Pega as dimensões e posição do contêiner da imagem principal
    const imageContainer = document.querySelector('.image-container');
    const imageContainerRect = imageContainer.getBoundingClientRect();

    // Garante que fruitTypes é um array, mesmo que seja um único tipo
    const types = Array.isArray(fruitTypes) ? fruitTypes : [fruitTypes];

    types.forEach(type => {
        const images = floatingFruitImages[type];
        if (!images || images.length === 0) {
            console.warn(`Nenhuma imagem encontrada para o tipo de fruta: ${type}`);
            return; // Pula se não houver imagens para o tipo
        }

        for (let i = 0; i < countPerType; i++) {
            const randomImage = images[Math.floor(Math.random() * images.length)];
            const duration = getRandomNumber(minDuration, maxDuration);
            const delay = getRandomNumber(0, 0.5); // Atraso menor para que apareçam mais rápido
            createFloatingElement(randomImage, duration, delay, imageContainerRect);
        }
    });
}


// Função para atualizar a imagem principal, a cor de fundo e o botão
function updateSmoothieDisplay(smoothieId) {
    const smoothieData = smoothies[smoothieId];

    // Verifica se os dados do smoothie existem
    if (smoothieData) {
        // Animação da imagem principal: move para cima, muda, volta
        mainSmoothieImage.style.transform = 'translateY(-20px) scale(0.9)';
        mainSmoothieImage.style.opacity = '0'; // Esconde a imagem temporariamente

        setTimeout(() => {
            mainSmoothieImage.src = smoothieData.image; // Garante que a imagem certa seja carregada
            mainSmoothieImage.style.transform = 'translateY(0) scale(1)';
            mainSmoothieImage.style.opacity = '1'; // Mostra a imagem
        }, 400); // Metade do tempo da transição CSS para a imagem

        // Altera a variável CSS customizada para a cor de fundo
        body.style.setProperty('--current-bg-color', smoothieData.color);

        // Altera a cor do texto do botão para a nova cor de fundo
        ctaButton.style.color = smoothieData.color;

        // Atualiza a classe 'active' das miniaturas
        thumbnails.forEach(thumbnail => {
            if (thumbnail.dataset.smoothieId === smoothieId) {
                thumbnail.classList.add('active');
            } else {
                thumbnail.classList.remove('active');
            }
        });

        // NOVO: Chama a função para gerar os elementos flutuantes específicos
        // para o smoothie atual. Eles aparecerão e ficarão estáticos.
        if (smoothieId === 'strawberry' || smoothieId === 'berries') {
            generateFloatingElements(['strawberry', 'cherry'], 3); // Morangos e cerejas
        } else if (smoothieId === 'banana') {
            generateFloatingElements(['banana_slice', 'cherry'], 3); // Fatias de banana e cerejas
        } else if (smoothieId === 'kiwi') {
            generateFloatingElements(['kiwi_slice', 'strawberry'], 3); // Fatias de kiwi e morangos
        } else {
            // Caso um smoothieId não tenha uma configuração específica de frutas flutuantes
            generateFloatingElements('strawberry', 2); // Exemplo: 2 morangos como padrão
        }
    }
}

// Adiciona um ouvinte de evento de clique para cada miniatura
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        const smoothieId = thumbnail.dataset.smoothieId; // Pega o ID do smoothie do atributo data-
        updateSmoothieDisplay(smoothieId); // Chama a função para atualizar a exibição
    });
});

// Define o smoothie inicial quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    updateSmoothieDisplay('strawberry'); // Exibe o smoothie de morango por padrão
});