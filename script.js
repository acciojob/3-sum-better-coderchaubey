function threeSum(S, target) {
// write your code here
  for (let index = 0; index < S.length; index++) {
	  let j=index+1;
  	for (let i = index; i < s.length; i++) {
  		if (S[index]+S[j]+S[i]===target || S[index]+S[j]+S[i]===target-1 || S[index]+S[j]+S[i]===target+1) {
  			return S[index]+S[j]+S[i];
  		}
		j++;
  	}
  }
}

module.exports = threeSum;
