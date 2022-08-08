let body = document.querySelector('body');
body.innerHTML =
`<div class="main-container">
<h1>Random Users</h1>
</div>`;

let getData =  async ()=>{
    try{
        let data = await fetch('https://randomuser.me/api/?results=50&gender=female');
        data = await data.json();
        let users = data.results;
        console.log(users);
        let main = document.querySelector('.main-container');
        let div = document.createElement('div');
        main.appendChild(div);
        div.classList.add('user-container');
        
        users.forEach(user =>{
            div.innerHTML +=
            `<div class="user-card">
            <h3>${user.name.first} ${user.name.first}</h3>
            <img src='${user.picture.large}' alt='${user.name}' height='200' width='200' />
            
            <p>City : ${user.location.city}</p>
            <p>State : ${user.location.state}</p>
            <p>Country : ${user.location.country}</p>
            </div>`;
            
        });
    }catch(err){
        console.log(err);
    }
}
getData();