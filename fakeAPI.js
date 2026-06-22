function getUser(){

    return new Promise((resolve)=>{


        setTimeout(()=>{

            resolve({
                name:"Lenny",
                role:"Developer"
            })


        },2000)


    })

}


getUser()
.then(user=>{

    console.log(user.name);

})