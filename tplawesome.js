/**
 * @author Florian Fries (mail@flolefries.com)
 * @date 04-2014
 */
function tplawesome(template, data) {
	// initiate the result to the basic template
	res = template;
	// for each data key, replace the content of the brackets with the data
	for(var i = 0; i < data.length; i++) {
		res = res.replace(/\{\{(.*?)\}\}/g, function(match, j) { // some magic regex
			return data[i][j];
		})
	}
	return res;
} // and that's it!
