AFRAME.registerComponent("flying-birds",{
    init:function(){
        for (var i =1;i < 20;i++){
            var id = `hurdle${i}`
            var posx = Math.floor(Math.random()*3000+ -1000)
            var posy = Math.floor(Math.random()*2 + -1)
            var posz = Math.floor(Math.random()*3000 + -1000)
            var pos = {x:posx,y:posy,z:posz}
            this.flyingBirds(id,pos)
        }
    },
    flyingBirds:(id,pos)=>{
        var terrainel = document.querySelector("#terrain")
        var birdel = document.createElement("a-entity")
        birdel.setAttribute("id",id)
        birdel.setAttribute("position",pos)
        birdel.setAttribute("scale",{x:500,y:500,z:500})
        birdel.setAttribute("gltf-model","./assets/flying_bird/scene.gltf")
        birdel.setAttribute("animation-mixer",{})
        birdel.setAttribute("static-body",{shape:"sphere",sphereRadius:5})
        birdel.setAttribute("game-play",{
            elementID:`#${id}`
        })
        terrainel.appendChild(birdel)
    }
})