window.onload = function () {
    let form = document.getElementById('form-1')
    form.addEventListener('submit', function (event) {
        event.preventDefault()
        let firstName = document.getElementById('firstName').value
        let lastName = document.getElementById('lastName').value
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value
        let compass = document.getElementById('compass').value
        if (firstName === "") {
            document.getElementById('firstN').innerHTML = "first name field is required"
        }
        if (lastName === "") {
            document.getElementById('lastN').innerHTML = "last name field is required"
        } if (email === "") {
            document.getElementById('Emerror').innerHTML = "email field is required"
        } if (password === "") {
            document.getElementById('pass').innerHTML = "password field is required"
        } if (compass == "") {
            document.getElementById('confirm').innerHTML = "confirm password field is required"
        }
        // if (!validateEmail(email)) {
        //     document.getElementById('Uerror').innerHTML = "appropriate Username field is required"

            let allData = {
                name: firstName + " " + lastName,
                email: email,
                password: password,
                password_confirmation:compass
            }
            console.log(allData)
        
            
            $.ajax({
                url: "http://127.0.0.1:8000/api/register",
                type: "POST",
                data: allData,
                success: function (result) {
                    console.log("Sign-in Successfully")
                    console.log(result);
                    // let token = result.data;
                    // localStorage.setItem('token', token);
                    // window.location.href = 'http://127.0.0.1:5500/pages/dashboard.html'
                }
            })

        })
    }
    // function validateEmail(email) {
    //     let emailregex = /^[a-z]{3,}(.[0-9a-z])?@([a-z]){2,}.[a-z]$/;
    //     let validation = emailregex.test(email)
    //     console.log(validation)

    