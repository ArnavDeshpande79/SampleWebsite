function initialEvents(){
	setTimeout(function(){
		document.getElementsByTagName("body")[0].removeChild(document.querySelector("div.anim"));
		document.querySelector("div.container").style["opacity"]="1";
	},2000);
	registerEvents();
}
function registerEvents(){
	var applyButtons = document.querySelectorAll("div.container > div.found > div.apply");
	for(i=0;i<applyButtons.length;i++){
		applyButtons[i].addEventListener("click",getApplicationForm);
	}
}
function getApplicationForm(event){
	event.stopPropagation();
	if(event.currentTarget.childNodes.length>1){
		event.currentTarget.removeChild(event.currentTarget.childNodes[event.currentTarget.childNodes.length-1]);
	}
	else{
	var applyButton = event.currentTarget;
	var appFormTable = "<form method = \"post\"><table>\
	<tr>\
		<td>Name</td>\
		<td><input type = \"text\" name = \"name\"></input></td>\
	</tr>\
	<tr>\
		<td>Phone Number</td>\
		<td><input type = \"text\" name = \"phonenumber\"></input></td>\
	</tr>\
	<tr>\
		<td>Email ID</td>\
		<td><input type = \"text\" name = \"emailid\"></input></td>\
	</tr>\
	<tr>\
		<td>Gender</td>\
		<td><select name = \"gender\">\
		<option value = \"Male\">Male</option>\
		<option value = \"Female\">Female</option>\
		</select>\
		</td>\
	</tr>\
	<tr>\
		<td>Educational Qualifications</td>\
	</tr>\
	<tr>\
		<td>10th Class Percentage</td>\
		<td><input type = \"text\" name = \"class10percentage\"></td>\
	</tr>\
	<tr>\
		<td>12th Class Percentage</td>\
		<td><input type = \"text\" name = \"class12percentage\"></td>\
	</tr>\
	<tr>\
		<td>Highest Educational Qualification</td>\
		<td><select name = \"educationalqual\">\
		<option value = \"BTech\">B.Tech</option>\
		<option value = \"Mtech\">M.Tech</option>\
		<option value = \"BCA\">BCA</option>\
		<option value = \"MCA\">MCA</option>\
		</select>\
		</td>\
	</tr>\
	<tr>\
		<td>Grade Point Average in highest education qualification</td>\
		<td>\<input type = \"text\" name = \"gpa\"></td>\
	</tr>\
	<tr>\
		<td>Talk about your projects, internships and previous work experience (if any)</td>\
		<td><textarea name = \"work\"></textarea></td>\
	</tr>\
	<tr>\
		<td>Why should you be hired for the role ?</td>\
		<td><textarea name = \"remarks\"></textarea></td>\
	</tr>\
	<tr>\
		<td><input type = \"submit\" value = \"Submit Application\"></input></td>\
	</tr>\
	</table>";
	applyButton.innerHTML+=appFormTable;
}
	event.currentTarget.removeEventListener("click",getApplicationForm);
}
