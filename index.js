var users = [
	{
		username:"Anna",
		password:"superpass"
	},
	{
		username:"bobi",
		password:"753"
	},
	{
		username:"leila",
		password:"789"
	}

];

var newsFeed = [
	{
		username:"Anna",
		timeline: "js is soo cool!"
	},
	{
		username:"bobi",
		timeline:"Iam bored :("
	},
	{
		username:"leila",
		timeline: "heyyyyyyyyyyyyy everyoneeee!"
	}
];

var promptName = prompt("Input your name");
var promptPass = prompt("Input your password");

function isUserValid(promptName, promptPass){
	for (var i = 0; i < users.length; i++) {
		if (users[i].username === promptName &&
				 users[i].password === promptPass) {
			return true;
		}
	}
		return false;
};

function SignIn(userName, password){
	if (isUserValid(userName, password)=== true) {
		console.log(newsFeed);
	}
}


SignIn(promptName,promptPass);