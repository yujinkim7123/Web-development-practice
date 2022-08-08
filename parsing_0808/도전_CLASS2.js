class Hero{
    HP =100;

    showHP(){

        console.log(this.HP);

    }

    run(){

        this.HP = this.HP - 10;


    }


}

const batman = new Hero();

batman.showHP();
batman.run();
batman.run();
batman.showHP();

