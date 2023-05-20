
//Завдання 1
fetch('data.json')
.then(response => response.json())
.then(data =>  { 

   
 function showAdminName(data) {
        
       const art = 'true' in data
       console.log(art);
 }
 console.log();
  showAdminName(data);
})

//Завданя 2
let nikola = {firstName: 'Nikola', lastName: 'Tesla'};
let bob = {firstName:'Bob'};
let mike = {lastName:'Smith'}
let michael = {}

let getFullName = function (user){
    return `${user.firstName} ${user.lastName}`;
}
console.log(getFullName(bob));
console.log(getFullName(mike));

getFullName = new Proxy (getFullName , {
    
        apply(target, thisArg, args) {
            
            return target.apply(thisArg,args.firstName)
        }
    
    }

)
console.log(getFullName(bob));

//Завдання 3
let users = [
    { name:'Nikola', age:18 ,id:1},
    { name:'Bob', age:25 ,id:2},
    { name:'Mike', age:32 ,id:3}
]
localStorage.setItem('storedUsers', JSON.stringify(users));
if (localStorage.getItem('storedUsers'))
  users = JSON.parse(localStorage.getItem('storedUsers'));

//Завдання 4
let text = document.getElementById("text");
localStorage.setItem('inputText', text)