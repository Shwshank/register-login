const APIURL = "http://localhost:3000"

function registerUser(data) {

  axios.post(APIURL+'/user', data)
  .then(function (response) {
    console.log(response);

    let msg = ""
    if(response.data.msg.exists) {
      msg = "User already exists"
    } else if(response.data.msg.email) {
      msg = "User created"
      clearText()
    } else {
      msg = "Some error detected!"
    }

    alert(msg)

  })
  .catch(function (error) {
    console.log(error);
  })
}

function loginUser(data) {

  axios.post(APIURL+'/login', data)
  .then(function (response) {
    console.log(response);

    let msg = ""

    if(response.data.msg.result) {
      msg = "Login"
      
    }
    else {
      if(!response.data.msg.exists){

        if(response.data.msg.email) {
          msg = "Invalid password"
        } else {
          msg = "User dosen't exists"
        }

      }
    }

    alert(msg)

  })
  .catch(function (error) {
    console.log(error);
  })
}
