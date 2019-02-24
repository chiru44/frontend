$(document).ready(function () {
 //$('#dtBasicExample').DataTable();
$('.dataTables_length').addClass('bs-select');
 //var xhrcall = $.ajax('http://localhost:8080/allStudents');
 
 var arrayReturn = [];
            $.ajax({
                url: "http://localhost:8080/allStudents",
                async: false,
                dataType: 'json',
                success: function (data) {
					for (var i = 0, len = data.length; i < len; i++) {
						arrayReturn.push([ data[i].studentName, data[i].studentId, data[i].className, data[i].address, '<a href="StudentForm.html?studentId='+data[i].studentId+'">Edit</a>']);
					}
				inittable(arrayReturn);
                }
            });
			function inittable(data) {	
		//console.log(data);
		$('#dtBasicExample').DataTable( {
			"aaData": data
		} );
	}


  //xhr call to retrieve data
 

  //promise syntax to render after xhr completes
  //xhrcall.done(renderTable);
});