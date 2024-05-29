# Profile Merger
This project is a JavaScript script demonstrating how to merge candidate profiles using JavaScript objects. The script takes two objects, candidate and info, merges their properties, and displays the result.

# Objective
The main objective of this script is to combine the information contained in two separate objects, `candidate` and `info`, into a single comprehensive object called `amina`. The script also illustrates how to validate candidate data, handle property conflicts when merging objects, and add additional properties based on existing data.

# Features
* **Data Validation:** The isValidCandidate function validates if the candidate's properties are valid, including the name as a string, age as a number, and sex as either 'male' or 'female'.
* **Object Merging:** The mergeObjects function merges two objects while handling property conflicts. If a property exists in both objects, it is renamed with the '_info' suffix in the merged object.
* **Adding Additional Information:** The script adds a status property to the merged object based on the candidate's age, indicating whether they are considered a young adult or an adult.
* **Displaying the Result:** The script displays the merged profile in the console, along with a summary of the information including the name, age, personality traits, school, and city of the candidate.

# Usage
1. **Clone the repository:** Begin by cloning this repository to your local machine using the following command
```
git clone https://github.com/fallcoder/profile-merge.git
``` 
2. **Navigate to the directory:** Change your current directory to the cloned repository
```
cd profile-merge
``` 
3. **Execution:** Open the `script.js` file in a browser or in a Node.js environment to run the script. Ensure that the `candidate` and `info` objects are properly defined with the desired information

4. **Customization:** You can modify the candidate information and additional information in the `candidate` and `info` objects to tailor the script to your specific needs

# Author
* Developed by Mouhamed Fall
* Email : mouhamedfall056@gmail.com
* Github : [@fallcoder](https://github.com/fallcoder)
