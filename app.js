let laptop1={
    name: 'hp',
    ram: 12,
    cpu: 'i7',

    getConfig: function(){
        console.log(laptop1.ram);

    }

}
let laptop2={
    name: 'asus',
    ram: 8,
    cpu: 'i9',

    getConfig: function(){
        console.log(this.ram);

    }

}

laptop1.getConfig();