class Person{
    constructor(name, hp)
    {
        this.name = name;
        this.hp = hp;
    }
    hello()
    {
        console.log(this.name);
        console.log(this.hp);
    }

}

class Avengers extends Person{


    constructor(name, hp, power, skill){

        super(name, hp);
       // this.name = name;
       // this.hp = hp;
        this.power = power;
        this.skill = skill;
    }
    information()
    {
        console.log(this.name, this.hp, this.power, this.skill);

    }

    fly()
    {

        console.log("비행중");

    }

}

const superman = new Avengers("아이언맨", 100, 300, "나노기술");
superman.information();
superman.hello();