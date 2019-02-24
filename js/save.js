$(document).ready(function(){
	var urlParams = new URLSearchParams(window.location.search);
	
	
	$.ajax({
                url: "http://localhost:8080/getId/"+urlParams.get('studentId'),
                async: false,
                dataType: 'json',
                success: function (data) {
					console.log(data.studentName);
					$("#studentId").val(data.studentId);
					$('#studentId').attr('readonly', true);
	$("#studentName").val(data.studentName);
	//$("#className").val(data.className);
	$("div.classDiv select").val(data.className).change();
	$("#address").val(data.address);
				$("#title").html('Edit Student Info');
				
                }
            });
			
  $("#submit").click(function(e){
	  console.log($("#className").val());
	  if($("#studentId").val() === "" || $("#studentName").val() === "" || ($("#className").val() === null || $("#className").val() === "") || $("#address").val() === "")
	  {
		  window.alert("There are some mandatory fields violated");
		  return;
	  }
      e.preventDefault();
	  var contactForm = new Object;
	  contactForm.studentId= $("#studentId").val();
	  contactForm.studentName= $("#studentName").val();
	  contactForm.className=$("#className").val(); 
	  contactForm.address=$("#address").val();
    $.ajax({type: "POST",
            url: "http://localhost:8080/saveStudent",
			contentType: 'application/json',
			accept:  "application/json",
            data: JSON.stringify(contactForm),
            success:function(result){
      $("#sharelink").html("<h2>student recrd saved successfully</h2>");
	 $(':input[type="submit"]').prop('disabled', true);
	 $("#link").prop('hidden',false);
    },
	 error:function(result){
		 $("#sharelink").html("<h2>Bad Request</h2>");
	 }
	});
  });
});