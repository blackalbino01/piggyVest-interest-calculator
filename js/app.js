$(document).ready(function(){
    $("#interest_button").click(function () {
        console.log('hello!')
        let principal = $("#formControlRange1").val();
        let time = $("#formControlRange2").val();
        let rate = $("#formControlRange3").val();
        $.ajax({
            url: "https://piggyvest-interest-calc.herokuapp.com/api/interest",
            type: "POST",
            data: {
                principal: principal,
                time: time,
                rate: rate
            },
            success: function (result) {
                console.log('good',result.result)
                $(".modal-body").html(`<p>Interest: &#8358;${result.result.interest}<br> 
                Balance: &#8358;${result.result.amount}
                <br><br>
                NOTE: Interest is the amount paid after tenure. Balance is the interest added to your principal
                </p>`)
                let modalButton = $("#modal-btn");
                modalButton.click();
            },
            error: function (error) {
                console.log('bad',error)
                $(".modal-body").html(`<p>
                NOTE: CONNECTION ERROR
                </p>`)
                let modalButton = $("#modal-btn");
                modalButton.click();
            }
        })
        // let request = new XMLHttpRequest();
        // let data ={
        //            principal: 3000,
        //            time: 1,
        //             rate: 10}
        // request.open("POST", "https://piggyvest-interest-calc.herokuapp.com/api/interest");
        // request.send(data);
        // request.onload = ()=>{
        //     console.log(request);
        //     if (request.status == 200) {
        //         console.log(JSON.parse(request.response))
        //     } else {
        //         console.log(`error ${request.status}  ${request.statusText}`);
        //         console.log(JSON.parse(request.response));
        //     }
        // }
    })
})