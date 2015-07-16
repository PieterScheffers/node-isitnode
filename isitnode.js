var node = null;

module.exports = function() {
	if(node === null) {
		node = (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]' );
	}
	return node;
};