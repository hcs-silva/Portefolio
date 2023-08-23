
        // Your birthdate in yyyy-mm-dd format
        var birthdate = '1988-10-13';

        // Split the birthdate into year, month, and day
        var birthdateArray = birthdate.split('-');
        var birthYear = parseInt(birthdateArray[0]);
        var birthMonth = parseInt(birthdateArray[1]);
        var birthDay = parseInt(birthdateArray[2]);

        // Get the current date
        var currentDate = new Date();

        // Calculate the age
        var age = currentDate.getFullYear() - birthYear;
        if (currentDate.getMonth() < birthMonth - 1 || (currentDate.getMonth() === birthMonth - 1 && currentDate.getDate() < birthDay)) {
            age--;
        }

        // Display the age on the webpage
        var ageElement = document.getElementById('actualAge');
        ageElement.textContent =  age 
