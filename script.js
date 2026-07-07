function stringChop(str, size) {
  // your code here
	if(str.length <= size){
		return str.split("");
	}
	for (let i = 0; i < str.length; i += size) {
    let world = "";

    for (let j = i; j < i + size && j < str.length; j++) {
        world += str[j];
    }

    arr[cnt] = world;
    cnt++;
} 
	
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
