var xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD");
xhttp.responseType = 'text';
xhttp.onreadystatechange = function() {
  if(this.readyState == 4 && this.status == 200){
    var data = JSON.parse(xhttp.response);
    var movies = data["data"];
    movies = movies.filter(x => x[10] == "Golden Gate Bridge").map(x =>
       x[8]+" in year: "+x[9]+" by production: "+x[12] + "<br>"
    ).join("\n");
  //  var result = movies.join("\n");
    document.getElementById('result').innerHTML += movies;
  }
};
xhttp.send();
