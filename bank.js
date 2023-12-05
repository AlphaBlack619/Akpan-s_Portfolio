// let url = 'https://api.paystack.co/bank/resolve?account_number=0451206285&bank_code=058'
let url = "https://api.paystack.co/bank"

// let xhr = new XMLHttpRequest();
// xhr.open("GET",url)
// xhr.setRequestHeader("Authorization","Bearer sk_test_fdfe8ec9ab447b7299351e3663be1b76150d5e27")
// xhr.send();
// xhr.onload = function(){
//   console.log(JSON.parse(xhr.response))
// }

let bankNames = fetch(url)