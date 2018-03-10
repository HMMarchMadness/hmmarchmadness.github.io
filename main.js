function pickWinner(winner,nextID){
	console.log(winner,nextID)
	var next = document.getElementById(nextID);
	if(nextID.substring(1,3)=="1A"||nextID.substring(1,3)=="1B"){
		var num = parseInt(nextID.substring(1,2));
		num++;
		var nextNextID = nextID.substring(0,1)+num.toString()+"AResult";
	}
	else if(nextID.substring(1,3)=="1C"||nextID.substring(1,3)=="1D"){
		var num = parseInt(nextID.substring(1,2));
		num++;
		var nextNextID = nextID.substring(0,1)+num.toString()+"BResult";
	}
	else if(nextID.substring(1,3)=="2A"||nextID.substring(1,3)=="2B"){
		var num = parseInt(nextID.substring(1,2));
		num++;
		var nextNextID = nextID.substring(0,1)+num.toString()+"AResult";
	}
	else if(nextID.substring(1,3)=="1E"||nextID.substring(1,3)=="1F"){
		var num = parseInt(nextID.substring(1,2));
		num++;
		var nextNextID = nextID.substring(0,1)+num.toString()+"CResult";
	}
	else if(nextID.substring(1,3)=="1G"||nextID.substring(1,3)=="1H"){
		var num = parseInt(nextID.substring(1,2));
		num++;
		var nextNextID = nextID.substring(0,1)+num.toString()+"DResult";
	}
	else if(nextID.substring(1,3)=="2C"||nextID.substring(1,3)=="2D"){
		var num = parseInt(nextID.substring(1,2));
		num++;
		var nextNextID = nextID.substring(0,1)+num.toString()+"BResult";
	}
	else if(nextID.substring(1,3)=="3A"||nextID.substring(1,3)=="3B"){
		var num = parseInt(nextID.substring(1,2));
		num++;
		var nextNextID = "WestWinner";
	}
	var nextButton = "<button onclick=\"pickWinner('"+winner+"','"+nextNextID+"'"+")\">"+winner+"</button>";
	var HTMLToAppend = StringToHTML(nextButton);
	next.appendChild(HTMLToAppend);
	console.log(nextButton);
}

function StringToHTML(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content;
  }