//array questions

var arr=[4,5,2,3,1,54,23,,54,2476,33]
let count=0
arr.sort((a,b)=>{return a-b})
console.log(arr)
console.log(count)


//swaping min numbers
var arr1=[4,5,2,3,1,54,23,54,2476,33]
for(var i=0;i<arr1.length;i++)
{
    for(var j=i+1;j<arr1.length;j++){
      
        if(arr1[i]>arr1[j]){
            count++;
            let temp=arr1[i];
            arr1[i]=arr1[j];
            arr1[j]=temp;

        }
    }
}

console.log(arr1)
console.log(count)

