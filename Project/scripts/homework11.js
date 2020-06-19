   
    (function getUsers() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(json => addUsers(json))
            .catch(e => console.error(`Error occured: ${e}`))        
    }())

    function addUsers(usersRaw) {
        let element = document.querySelector(".users")
        for (let i=0; i<usersRaw.length; i++) {
            let childUser = document.createElement("div");
            childUser.classList.add("user");
            addUserProp(childUser, "user-name", usersRaw[i]["name"])
            addUserProp(childUser, "user-email", usersRaw[i]["email"])
            addUserProp(childUser, "user-address", usersRaw[i]["address"]["city"])
            element.appendChild(childUser)
            }
        }
   
    function addUserProp(parent, pName, pValue) {
        let p = document.createElement("p");
        p.classList.add(pName);
        p.innerText = pValue;
        parent.appendChild(p)
    }

    $(document).ready(function() {
        $(".slider").slick({
            infinite: true,
            slidesToShow: 3,
            autoplay: true,
        })
    })
