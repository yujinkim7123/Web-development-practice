class Lawyer {

    constructor(name, age, cantent)
    {

        this.name = name;
        this.age = age;
        this.cantent = cantent;


    }

    introduce()
    {

        console.log(this.name);
        console.log(this.age);
        console.log(this.cantent);

    }



}



const person1 = new Lawyer("우영우", 27,"기러기 토마토 스위스 역삼역");
const person2 = new Lawyer("최수연", 27, "봄날의 햇살");
person1.introduce();
person2.introduce();