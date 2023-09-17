//FETCHING THE DATA FROM THE CLOUD/SERVER USING GET METHOD :- 
axios.get("https://crudcrud.com/api/68d7c11ffe614e1f9697504ba96967f7/UserDetails")
    .then((res) => {
        for (let i = 0; i < res.data.length; i++) {
            storeUserOnScreen(res.data[i]);
        }
    })
    .catch((err) => console.log(err));

function DSA(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email_id = document.getElementById("exampleInputEmail1").value;
    let cont_num = document.getElementById("con_num").value;

    let obj = {
        name,
        email_id,
        cont_num
    }

    addUser(obj);

    // POST METHOD: 
    function addUser(obj) {
        axios.post("https://crudcrud.com/api/68d7c11ffe614e1f9697504ba96967f7/UserDetails", obj)
            .then((res) => storeUserOnScreen(res.data))
            .catch((err) => console.log(err));
    }


}

// TO SHOW USER DETAILS ON SCREEN:
function storeUserOnScreen(obj) {
    let ul1 = document.getElementById("Link");
    let l1 = document.createElement("li");
    l1.textContent = obj.name + "---" + obj.email_id + "----" + obj.cont_num + "----" + obj._id;
    ul1.appendChild(l1);
}

