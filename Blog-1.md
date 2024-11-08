                        The significance of union and intersection types in Typescript.

///Union TYpes
In union type what it does is that it allow a variable to hold multiple types which is that the value can be anything of the all the types.
This type is mainly used to allow flexibility in the type of a value.

for example

function schoolId(id:string | number):void {
console.log(id);
}

printId(123);
printId("abc");

here the funciton schoolId accepts id as either a string or a number as it is a union type so if we give number it will take number or if we give a sting it will take it.

///Intersection types

In intersection type it allows us to combine multiple types into one i.e a value of an intersection type must satisfy all of the types. This is important when we want to enforce that a value will have properties of multiple types.

for example:

interface person {
name: string;
}

interface phone {
hasPhone: boolean;
}

type personPhone = person & phone;

const Shafin: personPhone = {
name: "khan",
hasPhone: true
};

console.log(Shafin);

Here due to intersection in personPhone so both the name and if the character hasPhone both will be consoled logged.
