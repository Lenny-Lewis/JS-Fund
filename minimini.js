function getDeveloper(){


      return new Promise((resolve,reject)=>{


        setTimeout(()=>{
            resolve({
                name:"Lenny",
                stack:"Fullstack + AI"
            })
        },2000)

        
      })  
}

getDeveloper()
.then(developer=>{
    console.log(developer.name + " is a " +developer.stack);
})