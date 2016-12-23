class Hamming{
	constructor(){
		this.compute = this.compute.bind(this);
	}

	compute(string1, string2){
		let hamming_count = 0;
		if (string1.length !== string2.length){
			throw new Error('DNA strands must be of equal length.');
		}
		for (let i = 0; i < string1.length; i++){
			string1.charAt(i) !== string2.charAt(i) ? hamming_count++ : null;
		}
		return hamming_count;
	}
}

module.exports = Hamming;
