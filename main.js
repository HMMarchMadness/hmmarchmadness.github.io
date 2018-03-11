var submission = '{'; 
var name = '';
var database = firebase.database();
function pickWinner(winner,nextID){
	var next = document.getElementById(nextID);
	next.innerHTML = '';
	if(nextID.substring(1,3)=="1A"||nextID.substring(1,3)=="1B"){
		var num = parseInt(nextID.substring(1,2));
		num++;
		var nextNextID = nextID.substring(0,1)+num.toString()+"AResult";
		var nextButton = "<button onclick=\"pickWinner('"+winner+"','"+nextNextID+"'"+")\">"+winner+"</button>";
	}
	else if(nextID.substring(1,3)=="1C"||nextID.substring(1,3)=="1D"){
		var num = parseInt(nextID.substring(1,2));
		num++;
		var nextNextID = nextID.substring(0,1)+num.toString()+"BResult";
		var nextButton = "<button onclick=\"pickWinner('"+winner+"','"+nextNextID+"'"+")\">"+winner+"</button>";
	}
	else if(nextID.substring(1,3)=="2A"||nextID.substring(1,3)=="2B"){
		var num = parseInt(nextID.substring(1,2));
		num++;
		var nextNextID = nextID.substring(0,1)+num.toString()+"AResult";
		var nextButton = "<button onclick=\"pickWinner('"+winner+"','"+nextNextID+"'"+")\">"+winner+"</button>";
	}
	else if(nextID.substring(1,3)=="1E"||nextID.substring(1,3)=="1F"){
		var num = parseInt(nextID.substring(1,2));
		num++;
		var nextNextID = nextID.substring(0,1)+num.toString()+"CResult";
		var nextButton = "<button onclick=\"pickWinner('"+winner+"','"+nextNextID+"'"+")\">"+winner+"</button>";
	}
	else if(nextID.substring(1,3)=="1G"||nextID.substring(1,3)=="1H"){
		var num = parseInt(nextID.substring(1,2));
		num++;
		var nextNextID = nextID.substring(0,1)+num.toString()+"DResult";
		var nextButton = "<button onclick=\"pickWinner('"+winner+"','"+nextNextID+"'"+")\">"+winner+"</button>";
	}
	else if(nextID.substring(1,3)=="2C"||nextID.substring(1,3)=="2D"){
		var num = parseInt(nextID.substring(1,2));
		num++;
		var nextNextID = nextID.substring(0,1)+num.toString()+"BResult";
		var nextButton = "<button onclick=\"pickWinner('"+winner+"','"+nextNextID+"'"+")\">"+winner+"</button>";
	}
	else if(nextID.substring(1,3)=="3A"||nextID.substring(1,3)=="3B"){
		if(nextID.substring(0,1)=='W')
			var nextNextID='WestFinalist';
		else if(nextID.substring(0,1)=='C')
			var nextNextID='MidwestFinalist'
		else if(nextID.substring(0,1)=='E')
			var nextNextID='EastFinalist'
		else if(nextID.substring(0,1)=='M')
			var nextNextID='MideastFinalist'
		var nextButton = "<button onclick=\"pickWinner('"+winner+"','"+nextNextID+"'"+")\">"+winner+"</button>";
	}
	else if(nextID=="WWinner"){
		var nextNextID = "WestFinalist"; 
		var nextButton = "<button onclick=\"pickWinner('"+winner+"','"+nextNextID+"'"+")\">"+winner+"</button>";
	}
	else if(nextID=="CWinner"){
		var nextNextID = "MidwestFinalist"; 
		var nextButton = "<button onclick=\"pickWinner('"+winner+"','"+nextNextID+"'"+")\">"+winner+"</button>";
	}
	else if(nextID=="EWinner"){
		var nextNextID = "EastFinalist"; 
		var nextButton = "<button onclick=\"pickWinner('"+winner+"','"+nextNextID+"'"+")\">"+winner+"</button>";
	}
	else if(nextID=="MWinner"){
		var nextNextID = "MideastFinalist"; 
		var nextButton = "<button onclick=\"pickWinner('"+winner+"','"+nextNextID+"'"+")\">"+winner+"</button>";
	}
	else if(nextID=="WestFinalist"){
		var nextNextID = "WestFinal";
		document.getElementById("WestConfrenceWinner").innerHTML=winner; 
		var nextButton = "<button onclick=\"pickWinner('"+winner+"','"+nextNextID+"'"+")\">"+winner+"</button>";
	}
	else if(nextID=="MidwestFinalist"){
		var nextNextID = "WestFinal";
		document.getElementById("MidwestConfrenceWinner").innerHTML=winner; 
		var nextButton = "<button onclick=\"pickWinner('"+winner+"','"+nextNextID+"'"+")\">"+winner+"</button>";
	}
	else if(nextID=="EastFinalist"){
		var nextNextID = "EastFinal";
		document.getElementById("EastConfrenceWinner").innerHTML=winner; 
		var nextButton = "<button onclick=\"pickWinner('"+winner+"','"+nextNextID+"'"+")\">"+winner+"</button>";
	}
	else if(nextID=="MideastFinalist"){
		var nextNextID = "EastFinal";
		document.getElementById("MideastConfrenceWinner").innerHTML=winner; 
		var nextButton = "<button onclick=\"pickWinner('"+winner+"','"+nextNextID+"'"+")\">"+winner+"</button>";
	}
	else if(nextID=="EastWinner"){
		var nextNextID = "EastFinal"; 
		var nextButton = "<button onclick=\"pickWinner('"+winner+"','"+nextNextID+"'"+")\">"+winner+"</button>";
	}
	else if(nextID=="WestFinal"||nextID=="EastFinal"){
		var nextNextID = "Winner"; 
		var nextButton = "<button onclick=\"pickWinner('"+winner+"','"+nextNextID+"'"+")\">"+winner+"</button>";
	}
	else if(nextID=="Winner"){
		var nextNextID = "Winner"; 
		var nextButton = winner;
	}
	//var nextButton = "<button onclick=\"pickWinner('"+winner+"','"+nextNextID+"'"+")\">"+winner+"</button>";
	var HTMLToAppend = StringToHTML(nextButton);
	next.appendChild(HTMLToAppend);
	console.log(submission);
	console.log(next.id);
	if(submission.includes(next.id)){
		submission = submission.replace((submission.substring((submission.indexOf(next.id)-1),(submission.indexOf(',',(submission.indexOf(next.id))))+1)),'');
	}
	submission = submission + '"'+nextID+'":"'+winner+'",';
}

function StringToHTML(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content;
 }

function submit(){
	name = document.getElementById("username").value;
	//submission = submission + "'name':'"+ (document.getElementById("username").value)+"'";
	submission = submission.substring(0,submission.length-1);
	submission = submission + "}";
	var submit = JSON.parse(submission);
	writeToDB(submit);
	complete();
}

function writeToDB(obj){
	firebase.database().ref(name+'/').set(obj);

}

function resubmit(){
	window.location.href="index.html";
}

function complete(){
	window.location.href="submitted.html";
}