class Person{
    name: string;
    age: number;
    constructor( name_: string, age_: number){
        this.name= name_;
        this.age= age_;
    }
    greet(){
        
        console.log("Hello i am ," +this.name);

    }
    getAge(){
        return this.age;
    }
}