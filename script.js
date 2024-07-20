function generatePAN(firstName, lastName, type) {
    // Function to generate a random letter
    function getRandomLetter() {
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      return letters[Math.floor(Math.random() * letters.length)];
    }
  
    // Function to generate a random four-digit number
    function getRandomNumber() {
      return Math.floor(1000 + Math.random() * 9000); // Generates a number between 1000 and 9999
    }
  
    // Function to generate the check digit
    function getCheckDigit(pan) {
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const digits = "0123456789";
      const chars = letters + digits;
  
      let total = 0;
      for (let i = 0; i < pan.length; i++) {
        let char = pan.charAt(i);
        let value = chars.indexOf(char);
        total += value * (i + 1);
      }
  
      let checkDigitValue = total % 36;
      return chars.charAt(checkDigitValue);
    }
  
    // Generate the first three characters
    const firstThree = getRandomLetter() + getRandomLetter() + getRandomLetter();
  
    // Fourth character
    const fourth = type; // for tht the type of the professionals
  
    // Fifth character
    const fifth = lastName.charAt(0).toUpperCase() || getRandomLetter();
  
    // Next four characters
    const nextFour = getRandomNumber().toString();
  
    // Combine first nine characters
    const panWithoutCheckDigit = firstThree + fourth + fifth + nextFour;
  
    // Generate the check digit
    const checkDigit = getCheckDigit(panWithoutCheckDigit);
  
    // Combine to form the full PAN
    const pan = panWithoutCheckDigit + checkDigit;
  
    return pan;
  }
  
  document.getElementById('generateBtn').addEventListener('click', function() {
      const firstName = document.getElementById('firstNameInput').value;
      const lastName = document.getElementById('lastNameInput').value;
      const type = document.getElementById('typeSelect').value;
      if (firstName && lastName && type) {
          const panNumber = generatePAN(firstName, lastName, type);
          document.getElementById('panDisplay').textContent = panNumber;
      } else {
          alert('Please enter both first name and last name.');
      }
  });
  