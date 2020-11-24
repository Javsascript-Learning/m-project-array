let persons = [];

function router(input) {
    for (let i = 0; i < 3; i++) {
        input = prompt('enter command')
        switch (input) {
            case 'insert' :
                insertUsers()
                break;
            case 'delete' :
                deleteUsers()
                break;
            case 'search' :
                findUsers()
                break;
            case 'size' :
                personsSize();
                break;
            default :
                return false;
                break;
        }
    }
}
router()

function insertUsers () {
    let input = prompt("Please enter your name :")
    let personsDetails = {name : input}
    persons.push(personsDetails)
        getShowElementOfHtml(persons)
}

function deleteUsers() {
    let deleteUserInput = prompt("Enter username to delete")
    for (let i = 0; i < persons.length; i++) {
        if(persons[i].name == deleteUserInput) {
            let deleteUser = delete persons[i].name;
            getRemoveElementOfHtml(deleteUser)
        } else {
            console.log("Nothing here to remove")
        }
    }
}

function findUsers() {
    let searchInput = prompt("Enter username")
    for (let i = 0; i < persons.length; i++) {
        if(persons[i].name == searchInput) {
            console.log('User has been founded', persons[i])
            getFindElementOfHtml(persons[i])
        } else {
            getFindElementOfHtml("Not Found")
        }
    }
}

function personsSize(){
    let pSize = persons.length;
    console.log(pSize)
}

// ********* Get Elements of HTML Using Function *********//
function getShowElementOfHtml (insertUser) {
    let showUsername = document.getElementById('show').innerHTML =JSON.stringify(insertUser)
    return showUsername;
}

function getFindElementOfHtml (searchUser) {
    let showFindUsername;
    showFindUsername = document.getElementById('search').textContent = "Searching > " + JSON.stringify(searchUser)
    return showFindUsername;
}

function getRemoveElementOfHtml (deleteUser) {
    let showRemoveUsername;
    showRemoveUsername = document.getElementById('remove').textContent = "Removed > " + JSON.stringify(deleteUser)
    return showRemoveUsername;
}