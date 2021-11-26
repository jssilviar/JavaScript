addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn_menu');
    if (btn_menu) {
        btn_menu.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu_items');
            menu_items.classList.toggle('mostrar');
        })
    }

    //indicador de sombras
    const secciones = document.querySelectorAll('.seccion');
    const menutItems = document.querySelectorAll('.menu_item')

    const funcionObserver = entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const itemActual = Array.from(menutItems).find(item => item.dataset.url === entry.target.id)
                itemActual.classList.add('active')
                for (const item of menutItems) {
                    if (item != itemActual) {
                        item.classList.remove('active')
                    }
                }
            }
        })
    }

    const observer = new IntersectionObserver(funcionObserver, {
        root: null,
        rootMargin: '0px',
        threshold: 0.8
    })

    secciones.forEach(seccion => observer.observe(seccion))
})