// Función para mostrar/ocultar respuestas en actividades
function mostrarRespuesta(id) {
    const respuesta = document.getElementById('respuesta-' + id);
    if (respuesta.style.display === 'none' || respuesta.style.display === '') {
        respuesta.style.display = 'block';
    } else {
        respuesta.style.display = 'none';
    }
}

// Función para toggle sesiones
function toggleSesion(button) {
    const sesionContent = button.nextElementSibling;
    const isActive = button.classList.contains('active');
    
    // Cerrar todas las sesiones
    document.querySelectorAll('.sesion-button').forEach(btn => {
        btn.classList.remove('active');
        btn.nextElementSibling.classList.remove('active');
    });
    
    // Abrir la seleccionada si no estaba abierta
    if (!isActive) {
        button.classList.add('active');
        sesionContent.classList.add('active');
    }
}

// Función para toggle acordeones de fundamentos teóricos
function toggleAccord(button) {
    const accContent = button.nextElementSibling;
    const isActive = button.classList.contains('active');
    
    // Cerrar todos los acordeones
    document.querySelectorAll('.accord-button').forEach(btn => {
        btn.classList.remove('active');
        btn.nextElementSibling.classList.remove('active');
    });
    
    // Abrir el seleccionado si no estaba abierto
    if (!isActive) {
        button.classList.add('active');
        accContent.classList.add('active');
    }
}

function toggleAllReferences() {
    const buttons = document.querySelectorAll('#referencias .accord-button');
    const allOpen = Array.from(buttons).every(btn => btn.classList.contains('active'));
    buttons.forEach(btn => {
        const content = btn.nextElementSibling;
        if (allOpen) {
            btn.classList.remove('active');
            content.classList.remove('active');
        } else {
            btn.classList.add('active');
            content.classList.add('active');
        }
    });
}

// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Chat embebido dentro de la página
function toggleChatPanel() {
    const panel = document.getElementById('chatbot-panel');
    panel.classList.toggle('open');
    panel.setAttribute('aria-hidden', panel.classList.contains('open') ? 'false' : 'true');
}

document.addEventListener('DOMContentLoaded', function() {
    mermaid.initialize({ startOnLoad: true });

    const floatingMenu = document.getElementById('floating-theme-menu');
    const floatingMainBtn = document.getElementById('floating-main-btn');

    if (floatingMenu && floatingMainBtn) {
        floatingMainBtn.addEventListener('click', function () {
            floatingMenu.classList.toggle('open');
        });

        floatingMenu.querySelectorAll('.bubble').forEach(function (link) {
            link.addEventListener('click', function () {
                floatingMenu.classList.remove('open');
            });
        });

        document.addEventListener('click', function (event) {
            if (!floatingMenu.contains(event.target) && !floatingMainBtn.contains(event.target)) {
                floatingMenu.classList.remove('open');
            }
        });
    }

    const chatToggle = document.getElementById('chatbot-toggle');
    const chatClose = document.getElementById('chatbot-close');
    const chatPanel = document.getElementById('chatbot-panel');

    if (chatToggle && chatClose && chatPanel) {
        chatToggle.addEventListener('click', toggleChatPanel);
        chatClose.addEventListener('click', toggleChatPanel);

        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && chatPanel.classList.contains('open')) {
                toggleChatPanel();
            }
        });
    }
});