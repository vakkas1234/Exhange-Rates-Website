async function convertCurrency(){
    var gbpAmount = document.getElementById("gbpAmount").value
    const apikey = "34281b4ef57bf42fdf228b8f"
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${apikey}/pair/GBP/TRY/${gbpAmount}`);
 const data=  await response.json()
    if(data.result == "success"){
        document.getElementById("result").textContent  = data.conversion_result.toFixed(2) + "TRY"

    }
    else{
        document.getElementById("result").textContent = "veri alınamadı"
    }
}
async function click2(){
    var tryamount = document.getElementById("tryamount").value
    const apikey1 =  "34281b4ef57bf42fdf228b8f"
    const response1  = await fetch(`https://v6.exchangerate-api.com/v6/${apikey1}/pair/TRY/GBP/${tryamount}`);
    const data1=  await response1.json()
    if(data1.result =="success"){
        document.getElementById("result2").textContent = data1.conversion_result.toFixed(2) + "GBP"
    }
    else{
        document.getElementById("result2").textContent  = "Veri alınamadı"

    }
}