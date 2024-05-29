// function to validate if the candidate object has valid properties
function isValideCandidate() {
    return typeof candidate.name === 'string' &&
           typeof candidate.age === 'number' &&
           (candidate.sex === 'male' || candidate.sex === 'female');
}

// function to merge two objects, handling property name conflicts
function mergeObjects(obj1, obj2) {
    let merged = { ...obj1};
    for(let key in obj2) {
        if(merged.hasOwnProperty(key)) {
            merged[key + '_info'] = obj2[key];
        }
        else
        {
            merged[key] = obj2[key];
        }
    }
    return merged
}

// define the candidate object with basic information
let candidate =
{
  name: 'aminata',
  age: 19,
  sex: 'female'
};

// define the candidate object with additional information
let info =
{
  city: 'thies',
  school: 'ESP',
  traits: 'courageouse, ambitiouse, kind'
};

// combine candidate and info objects into a new object amina using Object.assign
let amina = Object.assign({}, candidate, info);
console.log(amina);

// check if the candidate object is valid
if (isValideCandidate(candidate)) {
    let amina = mergeObjects(candidate, info);

    amina.getSummary = function() {
        return `${this.name}, aged ${this.age}, is ${this.traits}. She is enrolled at ${this.school} in the city of ${this.city}.`;
    }

    // add a status property based on the candidate's age
    if (candidate.age < 20) {
        amina.status = 'young adult';
    }
    else {
        amina.status = 'adult';
    }

    console.log(amina.getSummary()); // log the summary to the console
    console.log(JSON.stringify(amina)); // log the stringified mergedto the console
} 
else {
    // log an error if the candidate data is not valid
    console.error('The candidate data is not valid.'); 
}