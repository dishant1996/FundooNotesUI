window.onload = function () {
    let form = document.getElementById('formL')
    form.addEventListener('submit', function (event) {
        event.preventDefault()
        let Username = document.getElementById('Username').value
        let Password = document.getElementById('PasswordBlock').value
        if (Username === "") {
            document.getElementById('Uerror').innerHTML = "Username field is required"
        }
        if (Password === "") {
            document.getElementById('Perror').innerHTML = "Password field is required"
        }
        // if (!validateEmail(email)) {
        //     document.getElementById('Uerror').innerHTML = "appropriate Username field is required"
        // }
        let allData = {

            email: Username,
            password: Password
        }
        console.log(allData)
        $.ajax({
            url: "http://127.0.0.1:8000/api/login",
            type: "POST",
            data: allData,
            success: function (result) {
                alert("Login Successfully")
                console.log(result);
                let token = result.token;
                localStorage.setItem('token', token);
                window.location.href = 'http://127.0.0.1:5500/HTML/HomePage.html'
            }
        })

    })
    // function validateEmail(email) {
    //     let emailregex = /^[a-z]{3,}(.[0-9a-z])?@([a-z]){2,}.[a-z]$/;
    //     let validation = emailregex.test(email)
    //     console.log(validation)
    // }
}






