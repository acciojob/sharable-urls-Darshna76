  function changeText() {
var name=document.getElementById("name").value;
var year=document.getElementById("year").value;
var h3 =document.getElementById("url");

	 var queryString = "?name=" + encodeURIComponent(name) + "&year=" + encodeURIComponent(year);
	  
	  
		   h3.textContent = "https://localhost:8080/" + queryString;
	  }
}