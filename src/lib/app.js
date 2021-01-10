
const baseUrl = 'https://meti-petadoption.azurewebsites.net/api/'


const getUser = () => {
    return fetch(`https://meti-petadoption.azurewebsites.net/api/users/`)
    .then(async response => {
        const data = await response.json();
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
    })
    .catch(error => {
        this.setState({ errorMessage: error.toString() });
        console.error('There was an error!', error);
    });
}

const getUserById = (id) => {
    return fetch(`https://meti-petadoption.azurewebsites.net/api/users/${id}`)
    .then(async response => {
        const data = await response.json();
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

    })
    .catch(error => {
        this.setState({ errorMessage: error.toString() });
        console.error('There was an error!', error);
    });
}

const addNewUser = (data) => {
    return fetch(baseUrl+"users", {
        method:'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(async res => {
        var user = await res.json();
        if(user){
           
            localStorage.setItem("user",JSON.stringify(user.user))
            localStorage.setItem("token",JSON.stringify(user.token))
            window.location.href = "/myhome";
           
        }
    })
}

const loginUser = (data) => {
    return fetch(baseUrl+"login", {
        method:'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(async res => {
        var user = await res.json();
        if (!res.ok) {
            const error = (user && user.message) || res.status;
            return Promise.reject(error);
        }
           localStorage.setItem("user",JSON.stringify(user.user))
            localStorage.setItem("token",JSON.stringify(user.token))
            if(user.user.type  == "Admi") {
                window.location.href = "/adminHome";
            } else {
                window.location.href = '/myhome' 
        }
        
    })
    .catch(error => {
       alert("Can't log in ");
        console.error('There was an error!', error);
    });
}

const addNewPet = (values) => {
  
    var data = new FormData();
    var imagedata = document.querySelector('input[type="file"]').files[0];
    var file = document.getElementById("avatar").files[0]
    console.log(values)
    data.append("values", JSON.stringify(values));
    data.append('file', file);

    console.log(data.get("values"))
    console.log(file)
    console.log(imagedata)

    fetch("https://meti-petadoption.azurewebsites.net/api/pets", {
      method: "POST",
      body: data
    }).then(function (res) {
      if (res.ok) {
        alert("Perfect! ");
      } else if (res.status == 401) {
        alert("Oops! ");
      }
    }, function (e) {
      alert("Error submitting form!");
    });
  }

  const UpdatePet = (values) =>{
    var data = new FormData();
    var imagedata = document.querySelector('input[type="file"]').files[0];
    var file = document.getElementById("avatar").files[0]
    console.log(values)
    data.append("values", JSON.stringify(values));
    data.append('file', file);

    console.log(data.get("values"))
    console.log(file)
    console.log(imagedata)

    fetch("https://meti-petadoption.azurewebsites.net/api/pets", {
      method: "POST",
      body: data
    }).then(function (res) {
      if (res.ok) {
        alert("Perfect! ");
      } else if (res.status == 401) {
        alert("Oops! ");
      }
    }, function (e) {
      alert("Error submitting form!");
    });

  }
    


export {getUser, getUserById, addNewUser, loginUser,addNewPet, baseUrl}