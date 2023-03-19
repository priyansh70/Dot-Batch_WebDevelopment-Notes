// Write a function called 'countLetters' that takes a string parameter and returns an object that contains a count of each letter in the string.

function countLetters(str)
{
    let count = {};
    for(let ch of str)
    {
        if(count[ch])
        {
            count[ch]++;
        }
        else{
            count[ch] = 1;
        }
    }
    return count;
}

console.log(countLetters("My Name is Priyansh PAtel"));