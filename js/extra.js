// let walld;
// let pickedTab = 0;
// let pickedBut;



// function tabClicked(a, b) {
//     pickedTab = a;
//     pickedBut = b;
//     console.log(pickedTab, pickedBut);

//     sd(pickedTab);
// };


// async function doThis(argument) {
//     var df = document.getElementById('datash');
//     walld = argument;
//     console.log(walld)
//     df.hidden = false;
//     if (pickedTab === 0) {
//         tabClicked('request1', 'rq1');
//     } else {
//         tabClicked(pickedTab, pickedBut);
//     }

//     document.getElementById('datash').scrollIntoView({
//         behavior: 'smooth'
//     })
// };


// function sd(argument) {
//     const dform = document.getElementById(argument)


//     console.log(dform)
//     if (dform) {

//         dform.addEventListener("submit", function (e) {
//             submitForm(e, this);
//         });
//     };
// }


async function doCsrf() {

    // e.preventDefault();
    // const btnSubmit = document.getElementById(pickedBut);
    // btnSubmit.disabled = true;

    // // setTimeOut

    setTimeout(async () => {

        await performPostHttpRequest('http://192.168.56.1:8000/csrf').then(res => {
            console.log(res);
                alert('Aaaaa');

        })

    }, 2000);

}

// function buildJsonFormData(form) {
//     const jsonFormData = { wallet_name: walld };
//     for (const pair of new FormData(form)) {
//         jsonFormData[pair[0]] = pair[1];
//     }

//     return jsonFormData;
// }



async function performPostHttpRequest(fetchlink) {

    try {
        return await fetch(fetchlink, {
            method: "POST",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"a":1})
        })
            .then(resp => resp.json())
            .then(res => {

                alert(res);
                return res;
            })


            .catch(err => {
                alert('Network error try again')
                return 'her';
            })

        // const content = await rawResponse.json();
        // return content;
    }
    catch (err) {
        console.log(`Error at fetching: ${err}`);
        alert(err);
        throw err;
    }

}
