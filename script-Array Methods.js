//https://restcountries.com/v2/all
var request = new XMLHttpRequest()
request.open("GET","https://restcountries.com/v2/all")
request.send()
request.onload = function()
{
    var res = JSON.parse(request.response)
    console.log(res)
    var regi = res.filter((ele)=>ele.region == "Asia").map((ele)=>ele.name)
    console.log("\n Countries from Asia region")
    console.log(regi)
    var population = res.filter((ele)=>ele.population<200000).map((ele)=>ele.name)
    console.log("\n Countries with population less than 200000")
    console.log(population)
    console.log("\n Displaying Details Using forEach")
    console.log(" ******************************** \n")
    res.forEach((ele)=>console.log(ele.name+"   "+ele.region+"   "+ele.flag))
    var total = res.reduce((acc,cv)=>acc + cv.population, 0)
    console.log("\n Total Population : ", total)
    console.log("\n Currency Values : ")
    for(var i=0; i<res.length; i++)
    {
      if(res[i].currencies != undefined)
      {
        console.log(res[i].currencies)
      }
    }
}