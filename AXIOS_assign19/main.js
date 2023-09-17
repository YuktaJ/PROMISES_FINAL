//FETCHING THE DATA FROM THE CLOUD/SERVER USING GET METHOD :- 
axios.get("https://crudcrud.com/api/6e7c27ba775e462fb40e7b75c10a27df/UserDetails")
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
        axios.post("https://crudcrud.com/api/6e7c27ba775e462fb40e7b75c10a27df/UserDetails", obj)
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


    //DELETE BUTTON
    let delete_button = document.createElement("button");
    delete_button.appendChild(document.createTextNode("DELETE"));
    delete_button.className = "btn btn-danger";

    l1.appendChild(delete_button);

    delete_button.onclick = () => {
        deleteData(obj._id);
    }

    //EDIT BUTTON
    let edit_button = document.createElement("button");
    edit_button.appendChild(document.createTextNode("EDIT"));
    edit_button.className = "btn btn-primary";

    l1.appendChild(edit_button);

    edit_button.onclick = () => {
        editData(obj);
    }
}

function deleteData(userId) {
    let parentEle = document.getElementById("Link");
    for (let i = 0; i < parentEle.children.length; i++) {
        let child = parentEle.children[i];
        if (child.textContent.includes(userId)) {
            parentEle.removeChild(child);
            break;
        }
    }
    axios.delete(`https://crudcrud.com/api/6e7c27ba775e462fb40e7b75c10a27df/UserDetails/${userId}`)
        .then(res => console.log("USER DELETED", userId))
        .catch(err => console.log(err));
}
//EDIT BUTTON FUNCTION:

function editData(obj) {
    deleteData(obj._id);
    document.querySelector("#name").value = obj.name;
    document.getElementById("exampleInputEmail1").value = obj.email_id;
    document.getElementsById("con_num").value = obj.cont_num;
}
