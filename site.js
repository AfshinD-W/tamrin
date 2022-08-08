let text = "haji kari nare ke"
let arraytext = text.split(" ")
let uppercase = arraytext.map((props)=>{
   return props.charAt(0).toUpperCase() + props.slice(1)
})
let result = uppercase.join(" ")
console.log(result);