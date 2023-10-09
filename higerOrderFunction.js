// //reduce function

// /*
// array reduce syntax

//   array.reduce(function((total,currentitem,currentIndex,initial value,arr),intialvalue))
//   total,currentitem ---> mandatory
//   remaining optional
// */

// // sum of array elements 

// var arr3=[3,1,44,98,34]
// // console.log(arr3.reduce((total,current)=>{return total+current})) //180
// // console.log(arr3.reduce((total,current,index)=>{return total+current+index}))

// function maximum(arr3){
//     return arr3.reduce((max,num)=>{
//         if(num>max){
//             return num
            
//         }
//         return max;
        
//     })
// }

// console.log(maximum(arr3))



/*
   Filter
   array.filter(function(currentvalue))
        or
   array.filter(function(currentvalue,index,arr),thisvalue)
*/

 //var arr=[3,4,5,6,7,8,33,11,75,12,43,21]
// var newarray=arr.filter((item)=>{return item%2==0})
// console.log(newarray) //[ 4, 6, 8, 12 ]

// var arr1=["smith","jay","varma","antony"]
// console.log(arr1.filter((item)=>item.length==5)) //[ 'smith', 'varma' ]


/*
        MAP
        
        
*/

var arr3=[3,4,1,54,23,71]
var newarr=arr3.map((element)=>{return element%2==0}) //[ false, true, false, true, false, false ]
console.log(newarr)

newarr = arr3.map((element)=>{if(element%2==0){return element}}) //[ undefined, 4, undefined, 54, undefined, undefined ]
newarr=arr3.filter((element)=>{if(element%2==0){return element}})//[ 4, 54 ]
console.log(newarr)
//json data
var obj=[
        {
                "name":"jay",
                "age":20
        },
        {
                "name":"ash",
                "age":22
        }
]

obj.map((element)=>{console.log(element)})  /* name: 'jay', age: 20 }
                                              { name: 'ash', age: 22 }*/


obj.map((element)=>{if(element.name=="ash"){console.log(element)}}) //{ name: 'ash', age: 22 }


