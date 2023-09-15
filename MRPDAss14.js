const posts = [{ title: "Post1", createdAt: new Date().toLocaleTimeString() }];

function getPost() {
    posts.forEach((a) => {
        console.log(a.title, a.createdAt);
    });
}

function createPost2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ title: "Post2", createdAt: new Date().toLocaleTimeString() })
            resolve();
        }, 1000);
    });
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                posts.pop();
                resolve();
            } else {
                reject("ERROR");
            }
        }, 1000);
    })
}

function LastUpdate() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("USER ACTIVITY:  " + new Date().toLocaleTimeString());
            resolve();
        }, 1000);
    })
}

async function myGuru() {
    try {
        await createPost2()
        await LastUpdate()
        await deletePost()
        getPost()
    }
    catch (err) {
        console.log(err);
    }
}
myGuru();