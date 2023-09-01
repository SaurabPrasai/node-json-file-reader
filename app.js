const fs=require('fs')
const fetchAllData=()=>{
    return new Promise((resolve, reject) => {
        fs.readFile('./data.json',(err,data)=>{    
            if(err){
                reject(err);
                return;
            }
           const  jsonData=JSON.parse(data);
             resolve(jsonData);
        })
    })
}

fetchAllData()
.then(data=>{
    console.log(data);
})
.catch(err=>{
    console.log(err)
})