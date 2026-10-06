document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. DATA ATUAL NO RODAPÉ
       ========================================================================== */
    const currentDateElement = document.getElementById('current-date');
    if (currentDateElement) {
        const today = new Date();
        currentDateElement.textContent = today.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    }

    /* ==========================================================================
       2. MANIPULAÇÃO DOS SUBMENUS
       ========================================================================== */
    const submenus = [
        { btnId: 'btn-sobre', menuId: 'submenu-sobre' },
        { btnId: 'btn-contato', menuId: 'submenu-contato' }
    ];

    submenus.forEach(({ btnId, menuId }) => {
        const btn = document.getElementById(btnId);
        const menu = document.getElementById(menuId);

        if (btn && menu) {
            btn.addEventListener('click', (event) => {
                event.preventDefault();
                submenus.forEach(item => {
                    if (item.menuId !== menuId) {
                        const otherMenu = document.getElementById(item.menuId);
                        if (otherMenu) otherMenu.classList.remove('active');
                    }
                });
                menu.classList.toggle('active');
            });
        }
    });

    document.addEventListener('click', (event) => {
        const header = document.getElementById('main-header');
        if (header && !header.contains(event.target)) {
            submenus.forEach(({ menuId }) => {
                const menu = document.getElementById(menuId);
                if (menu) menu.classList.remove('active');
            });
        }
    });

    /* ==========================================================================
       3. CORREÇÃO DE REDIRECIONAMENTO DO BOTÃO DE CORTE E CABELO
       ========================================================================== */
    const btnCorteCabelo = document.getElementById('btnCorteCabelo');
    if (btnCorteCabelo) {
        btnCorteCabelo.addEventListener('click', (e) => {
            // Garante o direcionamento correto
            window.location.href = 'corteecabelo.html';
        });
    }
});
