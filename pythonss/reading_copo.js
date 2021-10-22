const fetch = require('node-fetch');

// for only last 2 datas 
let url = "https://api.thingspeak.com/channels/838448/feeds.json?results=1";

// for IOT device 
// let url = "https://api.thingspeak.com/channels/1502739/feeds.json";



let settings = { method: "Get" };



res=fetch(url,settings)
json=res
console.log(json)



// console.log(json)
// function reading() {
//     fetch(url, settings)
//     .then(res => res.json())

//     .then((json) => {
//         // do something with JSON
//         console.log(json)
    
    
// })



// fetch(url, settings)
//     .then(res => res.json())

//     .then((json) => {
//         // do something with JSON
//         console.log(json)

//         // var channel = json.channel
//         // var feeds = json.feeds
//         // var newvara = JSON.parse(vara)
//         // var obj = newvara.entry_id

//         // console.log(channel)
//         // console.log(feeds)
//         // for (let v in feeds){
//         //     console.log(v)
//         //     for (let y in v){
//         //         console.log(y)
//         //     }
//         //     console.log("printed")
//         // }
//         // var buf =feeds[0].field3;

//         // console.log(buf);

//     })
