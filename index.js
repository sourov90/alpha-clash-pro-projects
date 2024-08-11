document.getElementById('btn-clas').addEventListener('click',function(){
    const started = document.getElementById('start')
    console.log(started)
    started.classList.remove('hidden')
    const firstItem = document.getElementById('first-section')
    firstItem.classList.add('hidden')
})