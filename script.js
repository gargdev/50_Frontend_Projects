const panels = document.querySelectorAll('.panel')

panels.forEach(panels =>{
    panels.addEventListener('click', () =>{
        removeActiveClasse()
        panels.classList.add('active')
    })
})

function removeActiveClasse(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}