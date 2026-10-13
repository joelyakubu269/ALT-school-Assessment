let arr = []
const userInfo=(username,password)=> {
    if (username.length < 10) {
        alert("username cannot be less than 10")
        return
    }else{
        arr.push(username)
        
    }
    if (password < 6) {
        alert("password cannot be less than 6")
        return
    }else{
        arr.push(password)
    }
    if (username!="salahuddin" || password!== "12345ayubbi") {
        alert("incorrect password or username")
        return
    }
}