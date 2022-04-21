// $(document).ready(function(){
//     var url = "https://www.hpb.health.gov.lk/api/get-current-statistical"
//     var url2 = "https://api.covid19api.com/dayone/country/sri-lanka/status/confirmed"
//     var url3 = "https://api.covid19api.com/summary"

//     $.getJSON(url2,function(data){
//         console.log(data)

//         var local_total_cases, local_active_cases, local_recovered, local_deaths

//         local_total_cases = data[0]['Country']
//         local_deaths = data[0]['Cases']
//         local_recovered = data[0]['Status']
//         local_active_cases = data[0]['Date']
        


        
//         // local_total_cases = data.data.local_total_cases
//         // local_deaths = data.data.local_deaths
//         // local_recovered = data.data.local_recovered
//         // local_active_cases = data.data.local_active_cases

//         $("#confirmed").append(local_total_cases)
//         $("#deaths").append(local_deaths)
//         $("#recovered").append(local_recovered)
//         $("#active").append(local_active_cases)
     
        
//     })
// })

$(document).ready(function(){
    var url2 = "https://api.covid19api.com/dayone/country/sri-lanka/status/confirmed"

    $.getJSON(url2,function(data){
        console.log(data)

        var date = []
        var confirmed = []
        var recovered = []
        var deaths = []
        
        for (x in (700,740));
        $.each(data,function(data){
                date.push(data['700-745'][x]['Date'])
                confirmed.push(data['700-745'][x]['Cases'])
        })

        // date.shift()
        // confirmed.shift()

        var myChart = document.getElementById("myChart").getContext('2d')

        var chart = new Chart(myChart,{
                type:'line',
                data:{
                        labels:date,
                        datasets:[
                                {
                                label:"Confirmed Cases",
                                data: confirmed,
                                backgroundColour: "#f1c40f",
                                minBarLength: 100
                                }
                        ]
                }
                
        }
        )
    })

})