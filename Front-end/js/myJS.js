function getInfoFromJSON(){	  
			$.getJSON( "data.json", function( data ) {
		    	for (var i = 0; i <= Object.keys(data.data).length; i++) {
	    			localStorage.setItem('name_'+i,data.data[i].name);
	    			localStorage.setItem('address_'+i,data.data[i].address);
	    			localStorage.setItem('number_'+i,data.data[i].phoneNumber);
	    			localStorage.setItem('email_'+i,data.data[i].email);
	    		}
		    });
		}
		getInfoFromJSON();
		$( document ).ready(function($) {
			initialize();
			var listCount = localStorage.length/4;
			for (var i = 0; i < listCount; i++) {
				$("#listTable").append("<tr id='"+i+"'><td><p class='tName'>"+ localStorage.getItem('name_'+i) +"</p><p>"+ localStorage.getItem('address_'+i) +'</p></td><td><i class="fa fa-phone" aria-hidden="true"></i>'+ localStorage.getItem('number_'+i) +"</td><td>"+ localStorage.getItem('email_'+i) +"</td></tr>");
					codeAddress(localStorage.getItem('address_'+i));
			}

			$("#number").mask("+7 (9999) 99-99-99");

			$("#add").click(function(){
				var name = $("#name").val();
				var phoneNumber = $("#number").val();
				var email = $("#email").val();
				var address = $("#address").val();

				$("#name").val("");
				$("#number").val("");
				$("#email").val("");
				$("#address").val("");

				localStorage.setItem('name_'+listCount,name);
    			localStorage.setItem('address_'+listCount,address);
    			localStorage.setItem('number_'+listCount,phoneNumber);
    			localStorage.setItem('email_'+listCount,email);
    			listCount++;
			});

			$("#find").click(function(){
				var id;
				var findStr = $("#search").val();
				$("#search").val("");

				for (var i = 0; i < listCount; i++) {
					var str = localStorage.getItem('name_'+i);
					if((str.toLowerCase().indexOf(findStr.toLowerCase()) + 1) > 0){
						id = i;
					}
				}

				for (var i = 0; i <= listCount; i++) {
					if(i != id){
						$('tr[id = '+i+']').css({'display':'none'});
					}
				}
			});

			$(".menu li a").click(function(event){
				event.preventDefault();		
				$(".menu li").removeClass("active").addClass("noActive");	
				$(this).parent().removeClass("noActive").addClass("active");
				$(".cont").removeClass("visible").addClass("noVisible");	
				var id = $(this).attr("href");		
				$(id).removeClass("noVisible");	
				$(id).addClass("visible");
			});
		});