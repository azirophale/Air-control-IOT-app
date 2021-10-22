const fetch = require('node-fetch');

// for only last 2 datas 
let url = "https://api.thingspeak.com/channels/838448/feeds.json?results=1";

// for IOT device 
// let url = "https://api.thingspeak.com/channels/1530510/feeds.json";

// for whole data 
// let url = "https://api.thingspeak.com/channels/1530510/feeds.json";

let settings = { method: "Get" };
function getUser() {
fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        // do something with JSON
        console.log(json)
        var names = JSON.stringify(json.feeds[0].field3)

        console.log(names)

        // var channel = json.channel
        // var feeds = json.feeds
        // var newvara = JSON.parse(vara)
        // var obj = newvara.entry_id

        // console.log(channel)
        // console.log(feeds)
        // for (let v in feeds){
        //     console.log(v)
        //     for (let y in v){
        //         console.log(y)
        //     }
        //     console.log("printed")
        // }
        // var buf =feeds[0].field3;

        // console.log(buf);

    });
}

const baba = getUser();
console.log(baba)

// const request = require('request')
//     ,url = 'https://api.thingspeak.com/channels/838448/feeds.json'

// request(url, (error, response, body)=> {
//   if (!error && response.statusCode === 200) {
//       console.log(body)
//     // const fbResponse = JSON.parse(body)
//     // console.log("Got a response: ", fbResponse.picture)
//   } else {
//     console.log("Got an error: ", error, ", status code: ", response.statusCode)
//   }
// })