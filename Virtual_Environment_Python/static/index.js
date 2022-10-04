document.addEventListener('DOMContentLoaded', ()=>{
    var scoket = io();
    scoket.on('connect',function(){
        document querySelectorALL("button").forEach(button =>{
            button.onclick=()=>{
                const vote = button.dataset.vote;
            }
        })
        scoket.emit('My event', {data: 'I\'m connected!'})
    })

}
)