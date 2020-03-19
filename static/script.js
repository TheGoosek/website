// function remove_task(event) {
//     const id = event.target.parentNode.parentNode.id    
//     fetch('/remove/' + id).then(response => window.location.reload())
// }

// function togleModal(event) {
//     const el =document.getElementsByTagName('form')[0]
//     el.style.display='block'
// }

// document.getElementById('form-togler')
// a.addEventlistener('click',togleModal)

function remove_task(event) {
    const id = event.target.parentNode.id
    fetch('/remove/' + id).then(response => window.location.reload())
}