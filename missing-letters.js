/*
Intermediate Algorithm Scripting: Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

function fearNotLetter(str) {
    let alph = 'abcdefghijklmnopqrstuvwxyz';
    let indAlph = alph.match(str[0]).index;     //index in 'alph' of the first letter in 'str'
    for (let i = indAlph; i < indAlph + str.length; i++) {    //iterate through a section of 'alph' starting from 'indAlph'
      if (alph[i] != str[i - indAlph]) {        //when the letter in alph is not equal to letter in str, return letter in alph (missing letter in str)
        return alph[i]
      }
    }
    return undefined;
  }
  
  console.log(fearNotLetter("stvwx"));