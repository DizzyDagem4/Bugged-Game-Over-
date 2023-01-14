AFRAME.registerComponent("target-ring",{
    init:function(){
        for (var i = 1;i <= 20;i++){
            var id = `ring${i}`
            var posx = (Math.random()*3000+(-1000))
            var posy = (Math.random()*2+(-1))
            var posz = (Math.random()*3000+ -1000)
            var position = {x:posx,y:posy,z:posz}
            this.createRings(id,position)
        }
    },
    createRings:function(id,position){
        var terrainel = document.querySelector("#terrain")
        var ringel = document.createElement("a-entity")
        ringel.setAttribute("id",id)
        ringel.setAttribute("position",position)
        ringel.setAttribute("material","color","yellow")
        ringel.setAttribute("static-body",{shape:"sphere",sphereRadius:2})
        ringel.setAttribute("geometry",{primitive:"torus",radius:"8"})
        ringel.setAttribute("game-play",{
            elementID:`#${id}`
        })
        terrainel.appendChild(ringel)
    }
})