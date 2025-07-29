// Objeto que mapeia o ID do smoothie para os detalhes da imagem e cor de fundo
const smoothies = {
    strawberry: {
        // MUDE ESTAS URLS para suas imagens locais reais. Ex: 'data/Images/smoothie_morango.png'
        image: 'https://images.unsplash.com/photo-1546069901-dcd1307b9982?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        color: '#f7a072' 
    },
    banana: {
        image: 'https://images.unsplash.com/photo-1627435649068-085e1ce0e561?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        color: '#fcd757' 
    },
    kiwi: {
        image: 'https://images.unsplash.com/photo-1627435649080-602931210815?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        color: '#a4cc86'   
    },
    berries: {
        image: 'https://images.unsplash.com/photo-1616422323565-d014022c4f1c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        color: '#f26f6f'  
    }
};

// Objeto para armazenar as imagens das frutas que flutuam (AGORA COM 4 IMAGENS DIFERENTES PARA CADA TIPO)
const floatingFruitImages = {
    strawberry: [
        'https://images.unsplash.com/photo-1587840176316-24155b5d84d1?q=80&w=100&h=100&fit=crop&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        'https://images.unsplash.com/photo-1546069901-dcd1307b9982?q=80&w=100&h=100&fit=crop&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1546069901-dcd1307b9982?q=80&w=100&h=100&fit=crop&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1587840176316-24155b5d84d1?q=80&w=100&h=100&fit=crop&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    cherry: [
        'https://images.unsplash.com/photo-1548486981-d9a2a7f8b9e1?q=80&w=100&h=100&fit=crop&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        'https://images.unsplash.com/photo-1601633513360-153c301389e0?q=80&w=100&h=100&fit=crop&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1548486981-d9a2a7f8b9e1?q=80&w=100&h=100&fit=crop&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1601633513360-153c301389e0?q=80&w=100&h=100&fit=crop&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    // Adicione URLs reais para banana_slice e kiwi_slice aqui
    banana_slice: [ 
        'https://images.unsplash.com/photo-1571771019793-18967962453e?q=80&w=100&h=100&fit=crop&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        'https://images.unsplash.com/photo-1621262102551-7872652b4144?q=80&w=100&h=100&fit=crop&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1571771019793-18967962453e?q=80&w=100&h=100&fit=crop&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1621262102551-7872652b4144?q=80&w=100&h=100&fit=crop&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    kiwi_slice: [ 
        'https://images.unsplash.com/photo-1549449673-c62589574486?q=80&w=100&h=100&fit=crop&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        'https://images.unsplash.com/photo-1601633513360-153c301389e0?q=80&w=100&h=100&fit=crop&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1549449673-c62589574486?q=80&w=100&h=100&fit=crop&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1601633513360-153c301389e0?q=80&w=100&h=100&fit=crop&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    // Adicione aqui também os tipos para chocolate que você mencionou
    chocolate_piece: [
        'https://images.unsplash.com/photo-1585802119933-2a3b0b3b3a3b?q=80&w=100&h=100&fit=crop&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        'https://images.unsplash.com/photo-1585802119933-2a3b0b3b3a3b?q=80&w=100&h=100&fit=crop&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1585802119933-2a3b0b3b3a3b?q=80&w=100&h=100&fit=crop&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1585802119933-2a3b0b3b3a3b?q=80&w=100&h=100&fit=crop&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    chocolate_shave: [
        'https://images.unsplash.com/photo-1621262102551-7872652b4144?q=80&w=100&h=100&fit=crop&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1621262102551-7872652b4144?q=80&w=100&h=100&fit=crop&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1621262102551-7872652b4144?q=80&w=100&h=100&fit=crop&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1621262102551-7872652b4144?q=80&w=100&h=100&fit=crop&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]
};


// Seleciona os elementos HTML que vamos manipular
const mainSmoothieImage = document.getElementById('main-smoothie-image'); 
const navItems = document.querySelectorAll('.nav-item'); // Seletor atualizado para os itens do menu lateral
const body = document.body;
const ctaButton = document.querySelector('.cta-button');
const floatingElementsContainer = document.querySelector('.floating-elements-container');
const imageDisplayArea = document.querySelector('.image-display-area'); 
const textContentArea = document.querySelector('.text-content'); 


// Função para gerar um número aleatório dentro de um intervalo
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// Função para criar e animar um elemento flutuante (AGORA MAIS FOCO EM BAIXO PARA CIMA)
function createFloatingElement(imageSrc, animationDuration, delay, imageContainerRect) {
    const element = document.createElement('img');
    element.src = imageSrc;
    element.classList.add('floating-element'); 

    // As posições start/mid/end serão relativas ao 'imageContainerRect' (a área da imagem principal)
    // Para que surjam da parte inferior e subam em direção ao círculo.
    
    // Ponto de início: Abaixo e à direita da imageContainerRect para surgir de "baixo"
    // Usamos window.innerHeight para garantir que a fruta venha de fora da tela por baixo
    // Ajuste esses valores para controlar de onde exatamente eles surgem
    const startX = getRandomNumber(imageContainerRect.left + imageContainerRect.width * 0.7, imageContainerRect.right + imageContainerRect.width * 0.3); // Mais para a direita do círculo
    const startY = getRandomNumber(window.innerHeight + 50, window.innerHeight + 150); // Começa bem abaixo da tela

    // Ponto intermediário: Um pouco acima da imageContainerRect, no caminho, para dar um arco
    const midX = getRandomNumber(imageContainerRect.left + imageContainerRect.width * 0.3, imageContainerRect.right + imageContainerRect.width * 0.1); 
    const midY = getRandomNumber(imageContainerRect.top + imageContainerRect.height * 0.1, imageContainerRect.bottom * 0.8); 

    // Ponto final: Dentro ou perto da imageContainerRect
    const endX = getRandomNumber(imageContainerRect.left + imageContainerRect.width * 0.1, imageContainerRect.right - imageContainerRect.width * 0.1);
    const endY = getRandomNumber(imageContainerRect.top + imageContainerRect.height * 0.1, imageContainerRect.bottom - imageContainerRect.height * 0.1);

    // Converte de pixels absolutos (getBoundingClientRect) para vw/vh para variáveis CSS
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
}

// Função para gerar vários elementos flutuantes
function generateFloatingElements(fruitTypes, countPerType = 3, minDuration = 1, maxDuration = 2) {
    // Limpa TODOS os elementos flutuantes atuais antes de adicionar novos
    Array.from(floatingElementsContainer.children).forEach(child => {
        child.remove();
    });

    // Pega as dimensões e posição do contêiner da imagem principal
    const imageContainerRect = imageDisplayArea.getBoundingClientRect();

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
            createFloatingElement(randomImage, duration, delay, imageContainerRect); // Passa imageContainerRect
        }
    });
}


// Função para atualizar a imagem principal, a cor de fundo e o botão
function updateSmoothieDisplay(smoothieId) {
    const smoothieData = smoothies[smoothieId];

    // Verifica se os dados do smoothie existem
    if (smoothieData) {
        // Animação de transição para a imagem principal (fade-out e scale-down, depois fade-in e scale-up)
        // Isso é para as TROCAS entre smoothies, não para o carregamento inicial.
        mainSmoothieImage.style.transition = 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out';
        mainSmoothieImage.style.opacity = '0'; // Esconde a imagem atual
        mainSmoothieImage.style.transform = 'translateX(150%) scale(0.8)'; // Move para a direita para animar entrando

        setTimeout(() => {
            mainSmoothieImage.src = smoothieData.image; // Define a nova imagem
            mainSmoothieImage.style.opacity = '1'; // Mostra a nova imagem
            mainSmoothieImage.style.transform = 'translateX(0) scale(0.9)'; // Volta para a posição final
            mainSmoothieImage.style.animation = 'none'; // Garante que a animação CSS inicial não interfira
        }, 300); // Tempo para o fade-out/scale-down antes de trocar e reaparecer


        // Altera a variável CSS customizada para a cor de fundo
        body.style.setProperty('--current-bg-color', smoothieData.color);

        // Altera a cor do texto do botão para a nova cor de fundo
        ctaButton.style.color = smoothieData.color;

        // Atualiza a classe 'active' dos itens do menu lateral
        navItems.forEach(item => {
            if (item.dataset.smoothieId === smoothieId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // Chama a função para gerar os elementos flutuantes específicos
        // para o smoothie atual. Eles aparecerão e ficarão estáticos.
        if (smoothieId === 'strawberry' || smoothieId === 'berries') {
            generateFloatingElements(['strawberry', 'cherry', 'chocolate_piece', 'chocolate_shave'], 3); 
        } else if (smoothieId === 'banana') {
            generateFloatingElements(['banana_slice', 'cherry', 'chocolate_piece', 'chocolate_shave'], 3); 
        } else if (smoothieId === 'kiwi') {
            generateFloatingElements(['kiwi_slice', 'strawberry', 'chocolate_piece', 'chocolate_shave'], 3); 
        } else {
            generateFloatingElements(['strawberry', 'chocolate_piece'], 2); 
        }
    }
}

// Adiciona um ouvinte de evento de clique para cada item do menu lateral
navItems.forEach(item => {
    item.addEventListener('click', () => {
        const smoothieId = item.dataset.smoothieId; 
        updateSmoothieDisplay(smoothieId); 
    });
});

// Define o smoothie inicial quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    const initialSmoothieId = 'strawberry';
    const initialSmoothieData = smoothies[initialSmoothieId];

    if (initialSmoothieData) {
        mainSmoothieImage.src = initialSmoothieData.image; // Define a imagem inicial
        
        // Garante que ela começa invisível e fora da tela para a animação CSS
        mainSmoothieImage.style.opacity = '0';
        mainSmoothieImage.style.transform = 'translateX(150%) scale(0.8)'; // Posição inicial para a animação

        // Ativa a animação CSS uma única vez ao carregar a página
        // Isso fará a imagem aparecer da direita para a esquerda
        mainSmoothieImage.style.animation = 'slideInMainImage 1s forwards ease-out 1s'; 
        
        body.style.setProperty('--current-bg-color', initialSmoothieData.color); // Define a cor de fundo inicial
        ctaButton.style.color = initialSmoothieData.color; // Define a cor do botão inicial
        
        // Ativa o item inicial do menu lateral
        navItems.forEach(item => {
            if (item.dataset.smoothieId === initialSmoothieId) {
                item.classList.add('active');
            }
        });

        // Gera as frutas flutuantes para o estado inicial
        if (initialSmoothieId === 'strawberry' || initialSmoothieId === 'berries') {
            generateFloatingElements(['strawberry', 'cherry', 'chocolate_piece', 'chocolate_shave'], 3); 
        } else {
            generateFloatingElements(['strawberry', 'chocolate_piece'], 2); 
        }
    }

    // Garante que o texto esteja visível e no lugar na carga inicial
    textContentArea.style.opacity = '1';
    textContentArea.style.transform = 'none'; 
    // A imageDisplayArea (o círculo) já deve estar visível via CSS padrão, sem animação de entrada direta nela.
    imageDisplayArea.style.opacity = '1';
    imageDisplayArea.style.transform = 'none'; 
});