function stringChop(str, size) {
  // your code here
	const result = [];
	let temp = '';
	for (let i = 1; i <= str.length; i++) {
		temp += str[i-1];
		if (i%5===0) {
			result.push(temp);
			temp = '';
		}
		if (i===str.length) {
			result.push(temp);
		}
	}
	return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
