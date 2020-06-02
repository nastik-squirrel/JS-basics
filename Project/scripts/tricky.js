function tricky1() {
    let checkPrompt = (whatToCheck, correctValue, actionIfOK) => {
        let value = prompt(`Provide ${whatToCheck}`)
        if (value == correctValue) {
            actionIfOK();
        } else if (value == null) {
            alert('Canceled');
        } else {
            alert(`Wrong ${whatToCheck}`);
        }
    }

    const correctLogin = 'Admin';
    const correctPassword = 'TheMaster';

    let checkPassword = () => checkPrompt('password', correctPassword, () => alert('Welcome'))
    let checkLogin = () => checkPrompt('login', correctLogin, checkPassword)

    checkLogin();
}


function tricky2() {
    alert(`Nothing there as well`);
}
