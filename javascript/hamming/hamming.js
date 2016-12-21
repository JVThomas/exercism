var Hamming = function(){
	this.compute = function(string1, string2){
		if(string1.length !== string2.length){
			throw new Error('DNA strands must be of equal length.')
		}
		else{
			string1 = string1.split("");
			hamming_count = 0;
			string1.forEach((char,i) => {
				char !== string2.charAt(i) ? hamming_count++ : null
			})
			return hamming_count	
		}
	}
}

module.exports = Hamming

