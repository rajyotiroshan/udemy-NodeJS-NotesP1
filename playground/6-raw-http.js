const https = require('https');

const url = `https://api.darksky.net/forecast/a3a3eac404d8ba7fb32ffb3c826071e9/28.2,77.2?units=si&lang=es`

const request = https.request(url, (response)=>{
    let data = '';
    response.on('data', (chunk)=>{
        data += chunk.toString();
    });

    response.on('end', ()=>{
        const body = JSON.parse(data);
        console.log(body);
    });
});

request.on('error', (error)=> {
    console.log("an error::",error);
});
request.end();