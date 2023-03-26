fetch('data.json')
.then(response => response.json())
.then(data =>  { 

 function showAdminName(data) {
        if (isAdmin == true) {
            console.log(data[key]) 
            return true
        }
 }
 console.log(data)
  showAdminName(data);
})