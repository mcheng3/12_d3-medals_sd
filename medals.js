var changeCountry = function(){
	var count = [];
	if(this.id == "nor"){
		//console.log("Norway")
		document.getElementById("country").innerHTML = "Norway";
		count = [14, 14, 11];
	}
	else{
		document.getElementById("country").innerHTML = "Olympic Athletes from Russia";
		count = [2, 6, 9];
	}
	d3.selectAll("circle").data(count).attr("r", function(d){
		return d * 5
	});
};

document.getElementById("nor").addEventListener("click", changeCountry)
document.getElementById("oar").addEventListener("click", changeCountry)