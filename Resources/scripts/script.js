document.getElementById('astroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page
  
    // Array of valid zodiac signs
    const validSigns = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
  
    // Arrays for random moods and advice
    const moods = ['exciting', 'challenging', 'calm', 'joyful', 'stressful'];
    const advice = ['Trust your instincts.', 'Take time for yourself.', 'Avoid making big decisions.', 'Focus on your goals.', 'Surround yourself with positivity.'];
  
    // Capture the user’s input and capitalize it
    let sign = document.getElementById('signInput').value.trim();
    sign = sign.charAt(0).toUpperCase() + sign.slice(1).toLowerCase(); // Capitalize the first letter
  
    // Check if the entered sign is valid
    if (!validSigns.includes(sign)) {
      document.getElementById('messageDisplay').innerHTML = `Please enter a valid zodiac sign.`;
      document.getElementById('messageDisplay').style.display = 'block'; // Show the div with the error message
      return; // Stop execution if the sign is invalid
    }
  
    // Randomly select mood and advice
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    const randomAdvice = advice[Math.floor(Math.random() * advice.length)];
  
    // Generate the astrology message
    const message = `${sign} will have a ${randomMood} day. ${randomAdvice}`;
  
    // Display the message on the webpage
    document.getElementById('messageDisplay').innerHTML = message;
    document.getElementById('messageDisplay').style.display = 'block'; // Show the div with the valid message
  });
  