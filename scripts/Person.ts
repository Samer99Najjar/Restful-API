import fs from 'fs';

export class Person{

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


  // get all the person list from the file person.json
  static  getAllPersons() {
    const data = fs.readFileSync('./person.json', 'utf8');
    const persons = JSON.parse(data);
    return persons;
  }
      

  // add new person to file person.json
  static addPerson(personData: Person) {
    let person = this.getAllPersons();
    person.push(personData);
    fs.writeFileSync('./person.json', JSON.stringify(person));
  }

  // delete person from file person.json
  public static deletePerson(personname: string):boolean{
    let person = this.getAllPersons();
    const index = person.findIndex((p: { name: string; }) => p.name === personname);
    if (index === -1) {
      return false;
      }
    person.splice(index, 1);
    fs.writeFileSync('./person.json', JSON.stringify(person));
    return true;
  }

  // select person form the file person.json
  public static SelectPerson(personname: string){
    let all_person = this.getAllPersons();
    let person = all_person.find((p: { name: string; })=> p.name === personname);
    return person;
  }

}
