// script.js

// inicializa o efeito de partículas com configurações personalizadas
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 120, // número total de partículas
            "density": {
                "enable": true,
                "value_area": 800 // área de densidade das partículas
            }
        },
        "color": {
            "value": ["#ffffff", "#00ff00", "#ff0000", "#0000ff"] // cores das partículas
        },
        "shape": {
            "type": ["circle", "triangle", "polygon"], // tipos de formas das partículas
            "stroke": {
                "width": 0, // sem borda
                "color": "#000000" // cor da borda das partículas (não visível)
            },
            "polygon": {
                "nb_sides": 5 // número de lados para partículas em formato de polígono
            }
        },
        "opacity": {
            "value": 0.6, // opacidade das partículas
            "random": true, // opacidade aleatória
            "anim": {
                "enable": false,
                "speed": 1, // velocidade da animação de opacidade
                "opacity_min": 0.2,
                "sync": false
            }
        },
        "size": {
            "value": 4, // tamanho das partículas
            "random": true, // tamanho aleatório
            "anim": {
                "enable": false,
                "speed": 40, // velocidade da animação de tamanho
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true, // habilita a conexão entre partículas
            "distance": 150, // distância máxima para conexão
            "color": "#ffffff", // cor das linhas de conexão
            "opacity": 0.5, // opacidade das linhas de conexão
            "width": 1 // largura das linhas de conexão
        },
        "move": {
            "enable": true,
            "speed": 6, // velocidade do movimento das partículas
            "direction": "none", // sem direção específica
            "random": false,
            "straight": false,
            "out_mode": "out", // partículas saem da tela
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas", // detecção de eventos no canvas
        "events": {
            "onhover": {
                "enable": true,
                "mode": ["grab", "bubble", "repulse"] // modos de interação ao passar o mouse
            },
            "onclick": {
                "enable": true,
                "mode": "push" // adiciona mais partículas ao clicar
            },
            "resize": true // ajusta as partículas ao redimensionar a tela
        },
        "modes": {
            "grab": {
                "distance": 140, // distância para o efeito de agarre
                "line_linked": {
                    "opacity": 1 // opacidade das linhas de conexão durante o efeito de agarre
                }
            },
            "bubble": {
                "distance": 200, // distância para o efeito de bolha
                "size": 8, // tamanho máximo da bolha
                "duration": 2, // duração do efeito de bolha
                "opacity": 0.8, // opacidade da bolha
                "speed": 3 // velocidade do efeito de bolha
            },
            "repulse": {
                "distance": 100, // distância para o efeito de repulsão
                "duration": 0.4 // duração do efeito de repulsão
            },
            "push": {
                "particles_nb": 4 // número de partículas adicionadas ao clicar
            }
        }
    },
    "retina_detect": true // habilita a detecção de retina para telas de alta resolução
});
