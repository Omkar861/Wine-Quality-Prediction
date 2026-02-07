const date = Date.now()

console.log(date)

function newEmailID(){

    const EmailID = 'Test' + Date.now().toString().slice(8,13) + '@gamil.com';
    return EmailID;
}


const values = newEmailID()

console.log(values)


const name ="omkar";

const name2 = name.split('').reverse().join('')

console.log(name2)


const arr =[ 3,5,6,3,2,6,77,33,44]
const arr1= arr.filter(a => a%2 ==0)
console.log(arr1);

for(let i in arr){
    console.log(i)
}

const arr2 = arr.join('')
console.log(typeof  arr2)


const today = new Date()

const date1 = today.getDate()
const month = today.getMonth()
const year = today.getFullYear()

console.log(date1 + month + year)




