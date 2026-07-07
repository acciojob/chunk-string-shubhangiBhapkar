function stringChop(str, size) {
  // if (str.length <= size) {
        return [str];
    }

    let arr = [];

    for (let i = 0; i < str.length; i += size) {
        let chunk = "";

        for (let j = i; j < i + size && j < str.length; j++) {
            chunk += str[j];
        }

        arr.push(chunk);
    }

    return arr;
	
}

// Do not change the code below
 const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
