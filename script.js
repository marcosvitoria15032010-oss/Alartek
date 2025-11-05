
let quantity = 1;
 
o
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
 

function openModal(type) {
    document.getElementById(type + 'Modal').classList.add('active');
}
 

function closeModal(type) {
    document.getElementById(type + 'Modal').classList.remove('active');
}
 

function changeColor(color, event) {
    const imageMap = {
        'black': '/SITE PROJETO/imagens/garrafa-black.png',
        'pink': '/SITE PROJETO/imagens/garrafa-pink.png',
        'yellow': '/SITE PROJETO/imagens/garrafa-yellow.png',
        'red': '/SITE PROJETO/imagens/garrafa-red.png',
        'blue': '/SITE PROJETO/imagens/garrafa-blue.png'
    };

    // Troca a imagem principal
    const productImage = document.getElementById('productImage');
    productImage.style.opacity = 0; // animação de transição suave
    setTimeout(() => {
        productImage.src = imageMap[color];
        productImage.style.opacity = 1;
    }, 200);

    // Atualiza botão ativo
    document.querySelectorAll('.color-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

 

function changeQuantity(delta) {
    quantity = Math.max(1, quantity + delta);
    document.getElementById('quantity').textContent = quantity;
}
 

function calculateWater(event) {
    event.preventDefault();
   
    const weight = parseFloat(document.getElementById('weight').value);
   
   
    const dailyWater = weight * 35;
   
 
    const bottles = Math.ceil(dailyWater / 510);
   

    document.getElementById('waterAmount').textContent = `${dailyWater.toFixed(0)}ml por dia`;
    document.getElementById('bottlesAmount').textContent = `Aproximadamente ${bottles} garrafas Alartek`;
    document.getElementById('result').style.display = 'block';
}
 

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
    }
}
 