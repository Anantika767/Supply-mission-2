class Package{
    constructor(){
        var options = {
            restituition : 0,
        }
        this.body = Bodies.package(options);
        World.add(world,this.body);
    }
}