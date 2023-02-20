﻿console.log("blabla")

const apiUrl = 'https://localhost:44374';
let resultStatus; //boolean
let resultData;


const data = {
    Sum: 1,
    PaymentsNum: 1,
    Description: "The destination of the payment",
}

const options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
}

async function getPaymentLink() {
    console.log("i am getPaymentLink method!!!!!!")
    const response = await fetch(`${apiUrl}/api/Payment/GetPaymentLink`, options); //response in format {isSuccess: boolean, message: string (link or error-message)}
    const data = await response.json();
    console.log(data.message)
    growPayment.renderPaymentOptions(data.message)
}

window.addEventListener("growWalletChange", (result) => {
    console.log("result:", result.detail);
    let res = result.detail;
    if (res.status === 1) {
        resultStatus = true;
        resultData = res.data;
    }
    if (res.state === "close" && resultStatus) {
        console.log(resultData) //or display success page whith resultData
    }
});