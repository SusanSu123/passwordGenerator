// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
// Add event listener to generate button
generateBtn.addEventListener("click", ()=> {
  passwordText.value = generatePassword(8,false, '', 'kodebase-');
});

writePassword()

var el_down = document.getElementById("geeks"); 
  
        /* Function to generate combination of password */ 
        function generateP() { 
            var pass = ''; 
            var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +  
                    'abcdefghijklmnopqrstuvwxyz0123456789@#$'; 
              
            for (i = 1; i <= 8; i++) { 
                var char = Math.floor(Math.random() 
                            * str.length + 1); 
                  
                pass += str.charAt(char) 
            } 
              
            return pass; 
        } 
  
        function gfg_Run() { 
            el_down.innerHTML = generateP(); 
        } 
