// Storing the join date of a user
join = new Date();
var joinDate = "Last Sync: " + join.getDate() + "/"
	+ (join.getMonth()+1)  + "/"
	+ join.getFullYear() + " || "
	+ join.getHours() + ":"
	+ join.getMinutes() + ":"
	+ join.getSeconds();

 console.log(joinDate)
 document.getElementById('joinDate').value = joinDate