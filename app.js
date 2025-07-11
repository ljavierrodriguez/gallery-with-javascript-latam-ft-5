window.onload = function () {
    const images = [
        "https://picsum.photos/id/900/800/800",
        "https://picsum.photos/id/800/800/800",
        "https://picsum.photos/id/700/800/800",
        "https://picsum.photos/id/660/800/800",
        "https://picsum.photos/id/500/800/800",
        "https://picsum.photos/id/666/800/800"
    ]

    let imageDefault = 0
    let playing = false

    let list = document.querySelector('#list') // contenedor para listar las imagenes
    let viewer = document.querySelector('#viewer > img')

    let btnPrev = document.getElementById('prev')
    let btnPlay = document.getElementById('play')
    let btnNext = document.getElementById('next')

    let iconPlay = document.querySelector('.fa-solid.fa-play')

    let idInterval = null

    for (let image of images) {
        let img = document.createElement('img')
        img.setAttribute('class', 'img-fluid')
        img.setAttribute('src', image)

        img.addEventListener('click', (e) => {
            /* 
            e.target es el elemento que esta accionando el evento (la imagen de la lista)
            e.target.src es la ruta de la imagen a la que se le esta haciendo click
            */
            viewer.setAttribute('src', e.target.src)
        })

        list.appendChild(img)
    }

    viewer.setAttribute('src', images[imageDefault])

    btnPrev.addEventListener('click', () => {
        if (imageDefault === 0) imageDefault = images.length - 1
        else imageDefault--
        viewer.setAttribute('src', images[imageDefault])
    })
    btnPlay.addEventListener('click', () => {
        play()
    })
    btnNext.addEventListener('click', () => {
        if(imageDefault === images.length - 1) imageDefault = 0
        else imageDefault++
        viewer.setAttribute('src', images[imageDefault])
    })


    function play() {
        console.log(playing)
        console.log(idInterval)
        if (playing) {
            playing = false // decimos que no se esta reproduciendo la galeria
            imageDefault = 0 // inicializamos la imagen por defecto a 0
            iconPlay.classList.add('fa-play')
            iconPlay.classList.remove('fa-pause')
            clearInterval(idInterval) // Limpiamos el setInterval
            idInterval = null
        } else {
            playing = true // indicamos que se esta reproduciendo la galeria
            iconPlay.classList.remove('fa-play')
            iconPlay.classList.add('fa-pause')
            // inicializamos el idInterval para poder detenerlo
            idInterval = setInterval(() => {
                viewer.setAttribute('src', images[imageDefault])
                imageDefault++
                if (imageDefault >= images.length) imageDefault = 0
            }, 2000)
        }
    }


}