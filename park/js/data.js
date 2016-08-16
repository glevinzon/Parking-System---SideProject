$("document").ready(function(){
	var flr = $("#postfloor").val();
	if(flr == '2'){
		
		
		document.getElementById("newsix").src="./img/ps_six.png";
		document.getElementById("neweleven").src="./img/ps_eleven_1.png";
		document.getElementById("newtwelve").src="./img/ps_twelve_1.png";
		document.getElementById("twelve").src="./img/ps_thirteen.png";
		document.getElementById("thirteen").src="./img/ps_fourteen.png";
		document.getElementById("fourteen").src="./img/ps_fifteen.png";
		document.getElementById("fifteen").src="./img/ps_sixteen.png";
		document.getElementById("sixteen").src="./img/ps_seventeen_1.png";
		document.getElementById("seventeen").src="./img/ps_eighteen_1.png";
	}
	
		setInterval(function() {
		//$(".js-ajax-php-json").submit(function(){
			
			//alert(flr);
			var data = {
			//"floor": $("#floorno").val()
			"floor": flr
			};
			
			//alert(flr);
			data = $(this).serialize() + "&" + $.param(data);
				$.ajax({
				type: "POST",
				dataType: "json",
				url: "parklog.php",
				data: data,
				success: function(data) {
				
				var jsonObject = JSON.parse(JSON.stringify(data));
				var propertyNames = Object.keys(jsonObject);

				var myArray = new Array(40);   
				
				for (var i = 0; i < propertyNames.length; i++) { 
					var tmp = JSON.stringify(data[i]["park_no"]);
					var status = JSON.stringify(data[i]["status"]);

					myArray[i] = tmp;
					
					if(tmp == '"1"'){
						if(status == '"1"'){
							document.getElementById("one").src="./img/zeroone.png";
							document.getElementById("one").className = "number";
						}
						else if(status == '"10"'){
							document.getElementById("one").src="./img/1_ps_one.png";
							document.getElementById("one").className = "blink";
						}
						else{
							document.getElementById("one").src="./img/1_ps_one.png";
							document.getElementById("one").className = "number";
						}
					}
					
					if(tmp == '"2"'){
						if(status == '"1"'){
							document.getElementById("two").src="./img/zerotwo.png";
							document.getElementById("two").className = "number";
						}
						else if(status == '"10"'){
							document.getElementById("two").src="./img/1_ps_two.png";
							document.getElementById("two").className = "blink";
						}
						else{
							document.getElementById("two").src="./img/1_ps_two.png";
							document.getElementById("two").className = "number";
						}
					} 
					
					if(tmp == '"3"'){
						if(status == '"1"'){
							document.getElementById("three").src="./img/zerothree.png";
							document.getElementById("three").className = "number";
						}
						else if(status == '"10"'){
							document.getElementById("three").src="./img/1_ps_three.png";
							document.getElementById("three").className = "blink";
						}
						else{
							document.getElementById("three").src="./img/1_ps_three.png";
							document.getElementById("three").className = "number";
						}
					} 
					
					if(tmp == '"4"'){
						if(status == '"1"'){
							document.getElementById("four").src="./img/zerofour.png";
							document.getElementById("four").className = "number";
						}
						else if(status == '"10"'){
							document.getElementById("four").src="./img/1_ps_four.png";
							document.getElementById("four").className = "blink";
						}
						else{
							document.getElementById("four").src="./img/1_ps_four.png";
							document.getElementById("four").className = "number";
						}
					}

					if(tmp == '"5"'){
						if(status == '"1"'){
							document.getElementById("five").src="./img/zerofive.png";
							document.getElementById("five").className = "number";
						}
						else if(status == '"10"'){
							document.getElementById("five").src="./img/1_ps_five.png";
							document.getElementById("five").className = "blink";
						}
						else{
							document.getElementById("five").src="./img/1_ps_five.png";
							document.getElementById("five").className = "number";
						}
					}

					if(tmp == '"6"'){
						if(flr == '1'){
							if(status == '"1"'){
							document.getElementById("six").src="./img/zerosix_1.png";
							document.getElementById("six").className = "number";
							}
							else if(status == '"10"'){
								document.getElementById("six").src="./img/1_ps_six_1.png";
								document.getElementById("six").className = "blink";
							}
							else{
								document.getElementById("six").src="./img/1_ps_six_1.png";
								document.getElementById("six").className = "number";
							}
						}
						else if(flr == '2'){
							if(status == '"1"'){
							document.getElementById("newsix").src="./img/zerosix.png";
							document.getElementById("newsix").className = "number";
							}
							else if(status == '"10"'){
								document.getElementById("newsix1").src="./img/2_ps_six.png";
								document.getElementById("newsix").src="./img/1_ps_six.png";
								document.getElementById("newsix").className = "blink";
							}
							else{
								document.getElementById("newsix1").src="./img/2_ps_six.png";
								document.getElementById("newsix").src="./img/1_ps_six.png";
								document.getElementById("newsix").className = "number";
							}
						}
						else{
							
						}
						
					}

					if(tmp == '"7"'){
						if(status == '"1"'){
							document.getElementById("seven").src="./img/zeroseven.png";
							document.getElementById("seven").className = "number";
						}
						else if(status == '"10"'){
							document.getElementById("seven").src="./img/1_ps_seven.png";
							document.getElementById("seven").className = "blink";
						}
						else{
							document.getElementById("seven").src="./img/1_ps_seven.png";
							document.getElementById("seven").className = "number";
						}
					}

					if(tmp == '"8"'){
						if(status == '"1"'){
							document.getElementById("eight").src="./img/zeroeight.png";
							document.getElementById("eight").className = "number";
						}
						else if(status == '"10"'){
							document.getElementById("eight").src="./img/1_ps_eight.png";
							document.getElementById("eight").className = "blink";
						}
						else{
							document.getElementById("eight").src="./img/1_ps_eight.png";
							document.getElementById("eight").className = "number";
						}
					}

					if(tmp == '"9"'){
						if(status == '"1"'){
							document.getElementById("nine").src="./img/zeronine.png";
							document.getElementById("nine").className = "number";
						}
						else if(status == '"10"'){
							document.getElementById("nine").src="./img/1_ps_nine.png";
							document.getElementById("nine").className = "blink";
						}
						else{
							document.getElementById("nine").src="./img/1_ps_nine.png";
							document.getElementById("nine").className = "number";
						}
					}

					if(tmp == '"10"'){
						if(status == '"1"'){
							document.getElementById("ten").src="./img/onezero.png";
							document.getElementById("ten").className = "number";
						}
						else if(status == '"10"'){
							document.getElementById("ten").src="./img/1_ps_ten.png";
							document.getElementById("ten").className = "blink";
						}
						else{
							document.getElementById("ten").src="./img/1_ps_ten.png";
							document.getElementById("ten").className = "number";
						}
					}
					
					if(tmp == '"11"'){
						if(flr == '1'){
							if(status == '"1"'){
							document.getElementById("eleven").src="./img/oneone_1.png";
							document.getElementById("eleven").className = "number";
							}
							else if(status == '"10"'){
								document.getElementById("eleven").src="./img/1_ps_eleven.png";
								document.getElementById("eleven").className = "blink";
							}
							else{
								document.getElementById("eleven").src="./img/1_ps_eleven.png";
								document.getElementById("eleven").className = "number";
							}
						}
						else if(flr == '2'){
							
							
							if(status == '"1"'){
							document.getElementById("neweleven").src="./img/oneone.png";
							document.getElementById("neweleven").className = "number";
							}
							else if(status == '"10"'){
								document.getElementById("neweleven").src="./img/1_ps_eleven_1.png";
								document.getElementById("neweleven").className = "blink";
							}
							else{
								document.getElementById("neweleven").src="./img/1_ps_eleven_1.png";
								document.getElementById("neweleven").className = "number";
							}
						}
						
					}
					
					if(tmp == '"12"'){
						if(flr == '1'){
							if(status == '"1"'){
							document.getElementById("twelve").src="./img/onetwo_1.png";
							document.getElementById("twelve").className = "number";
							}
							else if(status == '"10"'){
								document.getElementById("twelve").src="./img/1_ps_twelve.png";
								document.getElementById("twelve").className = "blink";
							}
							else{
								document.getElementById("twelve").src="./img/1_ps_twelve.png";
								document.getElementById("twelve").className = "number";
							}
						}
						else if(flr == '2'){
							if(status == '"1"'){
							document.getElementById("newtwelve").src="./img/onetwo.png";
							document.getElementById("newtwelve").className = "number";
							}
							else if(status == '"10"'){
								document.getElementById("newtwelve").src="./img/1_ps_twelve_1.png";
								document.getElementById("newtwelve").className = "blink";
							}
							else{
								document.getElementById("newtwelve").src="./img/1_ps_twelve_1.png";
								document.getElementById("newtwelve").className = "number";
							}
						}
						
					} 
					
					if(tmp == '"13"'){
						if(flr == '1'){
							if(status == '"1"'){
							document.getElementById("thirteen").src="./img/onethree.png";
							document.getElementById("thirteen").className = "number";
							}
							else if(status == '"10"'){
								document.getElementById("thirteen").src="./img/1_ps_thirteen.png";
								document.getElementById("thirteen").className = "blink";
							}
							else{
								document.getElementById("thirteen").src="./img/1_ps_thirteen.png";
								document.getElementById("thirteen").className = "number";
							}
						}
						else if(flr == '2'){
							if(status == '"1"'){
							document.getElementById("twelve").src="./img/onethree.png";
							document.getElementById("twelve").className = "number";
							}
							else if(status == '"10"'){
								document.getElementById("twelve").src="./img/1_ps_thirteen.png";
								document.getElementById("twelve").className = "blink";
							}
							else{
								document.getElementById("twelve").src="./img/1_ps_thirteen.png";
								document.getElementById("twelve").className = "number";
							}
						}
						
					} 
					
					if(tmp == '"14"'){
						if(flr == '1'){
							if(status == '"1"'){
							document.getElementById("fourteen").src="./img/onefour.png";
							document.getElementById("fourteen").className = "number";
							}
							else if(status == '"10"'){
								document.getElementById("fourteen").src="./img/1_ps_fourteen.png";
								document.getElementById("fourteen").className = "blink";
							}
							else{
								document.getElementById("fourteen").src="./img/1_ps_fourteen.png";
								document.getElementById("fourteen").className = "number";
							}
						}
						else if(flr == '2'){
							if(status == '"1"'){
							document.getElementById("thirteen").src="./img/onefour.png";
							document.getElementById("thirteen").className = "number";
							}
							else if(status == '"10"'){
								document.getElementById("thirteen").src="./img/1_ps_fourteen.png";
								document.getElementById("thirteen").className = "blink";
							}
							else{
								document.getElementById("thirteen").src="./img/1_ps_fourteen.png";
								document.getElementById("thirteen").className = "number";
							}
						}
						
					}

					if(tmp == '"15"'){
						if(flr == '1'){
							if(status == '"1"'){
							document.getElementById("fifteen").src="./img/onefive_1.png";
							document.getElementById("fifteen").className = "number";
							}
							else if(status == '"10"'){
								document.getElementById("fifteen").src="./img/1_ps_fifteen_1.png";
								document.getElementById("fifteen").className = "blink";
							}
							else{
								document.getElementById("fifteen").src="./img/1_ps_fifteen_1.png";
								document.getElementById("fifteen").className = "number";
							}
						}
						else if(flr == '2'){
							if(status == '"1"'){
							document.getElementById("fourteen").src="./img/onefive.png";
							document.getElementById("fourteen").className = "number";
							}
							else if(status == '"10"'){
								document.getElementById("fourteen").src="./img/1_ps_fifteen.png";
								document.getElementById("fourteen").className = "blink";
							}
							else{
								document.getElementById("fourteen").src="./img/1_ps_fifteen.png";
								document.getElementById("fourteen").className = "number";
							}
						}
						
					}

					if(tmp == '"16"'){
						if(flr == '1'){
							if(status == '"1"'){
							document.getElementById("sixteen").src="./img/onesix_1.png";
							document.getElementById("sixteen").className = "number";
							}
							else if(status == '"10"'){
								document.getElementById("sixteen").src="./img/1_ps_sixteen_1.png";
								document.getElementById("sixteen").className = "blink";
							}
							else{
								document.getElementById("sixteen").src="./img/1_ps_sixteen_1.png";
								document.getElementById("sixteen").className = "number";
							}
						}
						else if(flr == '2'){
							if(status == '"1"'){
							document.getElementById("fifteen").src="./img/onesix.png";
							document.getElementById("fifteen").className = "number";
							}
							else if(status == '"10"'){
								document.getElementById("fifteen").src="./img/1_ps_sixteen.png";
								document.getElementById("fifteen").className = "blink";
							}
							else{
								document.getElementById("fifteen").src="./img/1_ps_sixteen.png";
								document.getElementById("fifteen").className = "number";
							}
						}
						
					}

					if(tmp == '"17"'){
						if(flr == '1'){
							if(status == '"1"'){
							document.getElementById("seventeen").src="./img/oneseven.png";
							document.getElementById("seventeen").className = "number";
							}
							else if(status == '"10"'){
								document.getElementById("seventeen").src="./img/1_ps_seventeen.png";
								document.getElementById("seventeen").className = "blink";
							}
							else{
								document.getElementById("seventeen").src="./img/1_ps_seventeen.png";
								document.getElementById("seventeen").className = "number";
							}
						}
						else if(flr == '2'){
							if(status == '"1"'){
							document.getElementById("sixteen").src="./img/oneseven_1.png";
							document.getElementById("sixteen").className = "number";
							}
							else if(status == '"10"'){
								document.getElementById("sixteen").src="./img/1_ps_seventeen_1.png";
								document.getElementById("sixteen").className = "blink";
							}
							else{
								document.getElementById("sixteen").src="./img/1_ps_seventeen_1.png";
								document.getElementById("sixteen").className = "number";
							}
						}
						
					}

					if(tmp == '"18"'){
						if(flr == '1'){
							if(status == '"1"'){
							document.getElementById("eighteen").src="./img/oneeat.png";
							document.getElementById("eighteen").className = "number";
							}
							else if(status == '"10"'){
								document.getElementById("eighteen").src="./img/1_ps_eighteen.png";
								document.getElementById("eighteen").className = "blink";
							}
							else{
								document.getElementById("eighteen").src="./img/1_ps_eighteen.png";
								document.getElementById("eighteen").className = "number";
							}
						}
						else if(flr == '2'){
							if(status == '"1"'){
							document.getElementById("seventeen").src="./img/oneeat_1.png";
							document.getElementById("seventeen").className = "number";
							}
							else if(status == '"10"'){
								document.getElementById("seventeen").src="./img/1_ps_eighteen_1.png";
								document.getElementById("seventeen").className = "blink";
							}
							else{
								document.getElementById("seventeen").src="./img/1_ps_eighteen_1.png";
								document.getElementById("seventeen").className = "number";
							}
						}
						
					}

					if(tmp == '"19"'){
						if(status == '"1"'){
							document.getElementById("nineteen").src="./img/onenine.png";
							document.getElementById("nineteen").className = "number";
						}
						else if(status == '"10"'){
							document.getElementById("nineteen").src="./img/1_ps_nineteen.png";
							document.getElementById("nineteen").className = "blink";
						}
						else{
							document.getElementById("nineteen").src="./img/1_ps_nineteen.png";
							document.getElementById("nineteen").className = "number";
						}
					}

					if(tmp == '"20"'){
						if(status == '"1"'){
							document.getElementById("twenty").src="./img/twozero.png";
							document.getElementById("twenty").className = "number";
						}
						else if(status == '"10"'){
							document.getElementById("twenty").src="./img/1_ps_twenty.png";
							document.getElementById("twenty").className = "blink";
						}
						else{
							document.getElementById("twenty").src="./img/1_ps_twenty.png";
							document.getElementById("twenty").className = "number";
						}
					}
					
					if(tmp == '"21"'){
						if(status == '"1"'){
							document.getElementById("twentyone").src="./img/twoone.png";
							document.getElementById("twentyone").className = "number";
						}
						else if(status == '"10"'){
							document.getElementById("twentyone").src="./img/1_ps_twentyone.png";
							document.getElementById("twentyone").className = "blink";
						}
						else{
							document.getElementById("twentyone").src="./img/1_ps_twentyone.png";
							document.getElementById("twentyone").className = "number";
						}
					}

					if(tmp == '"22"'){
						if(status == '"1"'){
							document.getElementById("twentytwo").src="./img/twotwo.png";
							document.getElementById("twentytwo").className = "number";
						}
						else if(status == '"10"'){
							document.getElementById("twentytwo").src="./img/1_ps_twentytwo.png";
							document.getElementById("twentytwo").className = "blink";
						}
						else{
							document.getElementById("twentytwo").src="./img/1_ps_twentytwo.png";
							document.getElementById("twentytwo").className = "number";
						}
					}

					if(tmp == '"23"'){
						if(status == '"1"'){
							document.getElementById("twentythree").src="./img/twothree.png";
							document.getElementById("twentythree").className = "number";
						}
						else if(status == '"10"'){
							document.getElementById("twentythree").src="./img/1_ps_twentythree.png";
							document.getElementById("twentythree").className = "blink";
						}
						else{
							document.getElementById("twentythree").src="./img/1_ps_twentythree.png";
							document.getElementById("twentythree").className = "number";
						}
					}

					if(tmp == '"24"'){
						if(status == '"1"'){
							document.getElementById("twentyfour").src="./img/twofour.png";
							document.getElementById("twentyfour").className = "number";
						}
						else if(status == '"10"'){
							document.getElementById("twentyfour").src="./img/1_ps_twentyfour.png";
							document.getElementById("twentyfour").className = "blink";
						}
						else{
							document.getElementById("twentyfour").src="./img/1_ps_twentyfour.png";
							document.getElementById("twentyfour").className = "number";
						}
					}
					if(tmp == '"25"'){
						if(status == '"1"'){
							document.getElementById("twentyfive").src="./img/ic_action_25_1.png";
						}
						else if(status == '"10"'){
							document.getElementById("twentyfive").src="./img/ic_action_25.png";
							document.getElementById("twentyfive").className = "blink2";
						}
						else{
							document.getElementById("twentyfive").src="./img/ic_action_25.png";
							document.getElementById("twentyfive").className = "number";
						}
					}
					if(tmp == '"26"'){
						if(status == '"1"'){
							document.getElementById("twentysix").src="./img/ic_action_26_1.png";
						}
						else if(status == '"10"'){
							document.getElementById("twentysix").src="./img/ic_action_26.png";
							document.getElementById("twentysix").className = "blink2";
						}
						else{
							document.getElementById("twentysix").src="./img/ic_action_26.png";
							document.getElementById("twentysix").className = "number";
						}
					}
					if(tmp == '"27"'){
						if(status == '"1"'){
							document.getElementById("twentyseven").src="./img/ic_action_27_1.png";
						}
						else if(status == '"10"'){
							document.getElementById("twentyseven").src="./img/ic_action_27.png";
							document.getElementById("twentyseven").className = "blink2";
						}
						else{
							document.getElementById("twentyseven").src="./img/ic_action_27.png";
							document.getElementById("twentyseven").className = "number";
						}
					}
					if(tmp == '"28"'){
						if(status == '"1"'){
							document.getElementById("twentyeight").src="./img/ic_action_28_1.png";
						}
						else if(status == '"10"'){
							document.getElementById("twentyeight").src="./img/ic_action_28.png";
							document.getElementById("twentyeight").className = "blink2";
						}
						else{
							document.getElementById("twentyeight").src="./img/ic_action_28.png";
							document.getElementById("twentyeight").className = "number";
						}
					}
					if(tmp == '"29"'){
						if(status == '"1"'){
							document.getElementById("twentynine").src="./img/ic_action_29_1.png";
						}
						else if(status == '"10"'){
							document.getElementById("twentynine").src="./img/ic_action_29.png";
							document.getElementById("twentynine").className = "blink2";
						}
						else{
							document.getElementById("twentynine").src="./img/ic_action_29.png";
							document.getElementById("twentynine").className = "number";
						}
					}
					if(tmp == '"30"'){
						if(status == '"1"'){
							document.getElementById("thirty").src="./img/ic_action_30_1.png";
						}
						else if(status == '"10"'){
							document.getElementById("thirty").src="./img/ic_action_30.png";
							document.getElementById("thirty").className = "blink2";
						}
						else{
							document.getElementById("thirty").src="./img/ic_action_30.png";
							document.getElementById("thirty").className = "number";
						}
					}
					if(tmp == '"31"'){
						if(status == '"1"'){
							document.getElementById("thirtyone").src="./img/ic_action_31_1.png";
						}
						else if(status == '"10"'){
							document.getElementById("thirtyone").src="./img/ic_action_31.png";
							document.getElementById("thirtyone").className = "blink2";
						}
						else{
							document.getElementById("thirtyone").src="./img/ic_action_31.png";
							document.getElementById("twentyfour").className = "number";
						}
					}
					if(tmp == '"32"'){
						if(status == '"1"'){
							document.getElementById("thirtytwo").src="./img/ic_action_32_1.png";
						}
						else if(status == '"10"'){
							document.getElementById("thirtytwo").src="./img/ic_action_32.png";
							document.getElementById("thirtytwo").className = "blink2";
						}
						else{
							document.getElementById("thirtytwo").src="./img/ic_action_32.png";
							document.getElementById("thirtytwo").className = "number";
						}
					}
					if(tmp == '"33"'){
						if(status == '"1"'){
							document.getElementById("thirtythree").src="./img/ic_action_33_1.png";
						}
						else if(status == '"10"'){
							document.getElementById("thirtythree").src="./img/ic_action_33.png";
							document.getElementById("thirtythree").className = "blink2";
						}
						else{
							document.getElementById("thirtythree").src="./img/ic_action_33.png";
							document.getElementById("thirtythree").className = "number";
						}
					}
					if(tmp == '"34"'){
						if(status == '"1"'){
							document.getElementById("thirtyfour").src="./img/ic_action_34_1.png";
						}
						else if(status == '"10"'){
							document.getElementById("thirtyfour").src="./img/ic_action_34.png";
							document.getElementById("thirtyfour").className = "blink2";
						}
						else{
							document.getElementById("thirtyfour").src="./img/ic_action_34.png";
							document.getElementById("thirtythree").className = "number";
						}
					}
					if(tmp == '"35"'){
						if(status == '"1"'){
							document.getElementById("thirtyfive").src="./img/ic_action_35_1.png";
							
						}
						else if(status == '"10"'){
							document.getElementById("thirtyfive").src="./img/ic_action_35.png";
							document.getElementById("thirtyfive").className = "blink2";
						}
						else{
							document.getElementById("thirtyfive").src="./img/ic_action_35.png";
							document.getElementById("thirtyfive").className = "number";
						}
					}
					if(tmp == '"36"'){
						if(status == '"1"'){
							document.getElementById("thirtysix").src="./img/ic_action_36_1.png";
							
						}
						else if(status == '"10"'){
							document.getElementById("thirtysix").src="./img/ic_action_36.png";
							document.getElementById("thirtysix").className = "blink2";
						}
						else{
							document.getElementById("thirtysix").src="./img/ic_action_36.png";
							document.getElementById("thirtysix").className = "number";
						}
					}
					if(tmp == '"37"'){
						if(status == '"1"'){
							document.getElementById("thirtyseven").src="./img/ic_action_37_1.png";
							
						}
						else if(status == '"10"'){
							document.getElementById("thirtyseven").src="./img/ic_action_37.png";
							document.getElementById("thirtyseven").className = "blink2";
						}
						else{
							document.getElementById("thirtyseven").src="./img/ic_action_37.png";
							document.getElementById("thirtyseven").className = "number";
						}
					}
					if(tmp == '"38"'){
						if(status == '"1"'){
							document.getElementById("thirtyeight").src="./img/ic_action_38_1.png";
							
						}
						else if(status == '"10"'){
							document.getElementById("thirtyeight").src="./img/ic_action_38.png";
							document.getElementById("thirtyeight").className = "blink2";
						}
						else{
							document.getElementById("thirtyeight").src="./img/ic_action_38.png";
							document.getElementById("thirtyeight").className = "number";
						}
					}
					if(tmp == '"39"'){
						if(status == '"1"'){
							document.getElementById("thirtynine").src="./img/ic_action_39_1.png";
							
						}
						else if(status == '"10"'){
							document.getElementById("thirtynine").src="./img/ic_action_39.png";
							document.getElementById("thirtynine").className = "blink2";
						}
						else{
							document.getElementById("thirtynine").src="./img/ic_action_39.png";
							document.getElementById("thirtynine").className = "number";
						}
					}
					if(tmp == '"40"'){
						if(status == '"1"'){
							document.getElementById("forty").src="./img/ic_action_40_1.png";
							
						}
						else if(status == '"10"'){
							document.getElementById("forty").src="./img/ic_action_40.png";
							document.getElementById("forty").className = "blink2";
						}
						else{
							document.getElementById("forty").src="./img/ic_action_40.png";
							document.getElementById("forty").className = "number";
						}
					}
					
				}

				
				if(isPark(myArray, "1") == true){
					console.log("one is present");
				}else{
					document.getElementById("one").src="./img/1_ps_one.png";
					document.getElementById("one").className = "number";
				}

				if(isPark(myArray, "2") == true){
					console.log("two is present");
				}else{
					document.getElementById("two").src="./img/1_ps_two.png";
					document.getElementById("two").className = "number";
				}

				if(isPark(myArray, "3") == true){
					console.log("three is present");
				}else{
					document.getElementById("three").src="./img/1_ps_three.png";
					document.getElementById("three").className = "number";
				}

				if(isPark(myArray, "4") == true){
					console.log("four is present");
				}else{
					document.getElementById("four").src="./img/1_ps_four.png";
					document.getElementById("four").className = "number";
				}

				if(isPark(myArray, "5") == true){
					console.log("five is present");
				}else{
					document.getElementById("five").src="./img/1_ps_five.png";
					document.getElementById("five").className = "number";
				}

				if(isPark(myArray, "6") == true){
					console.log("six is present");
				}else{
					document.getElementById("six").src="./img/1_ps_six.png";
					document.getElementById("six").className = "number";
				}

				if(isPark(myArray, "7") == true){
					console.log("seven is present");
				}else{
					document.getElementById("seven").src="./img/1_ps_seven.png";
					document.getElementById("seven").className = "number";
				}
				if(isPark(myArray, "8") == true){
					console.log("eight is present");
				}else{
					document.getElementById("eight").src="./img/1_ps_eight.png";
					document.getElementById("eight").className = "number";
				}

				if(isPark(myArray, "9") == true){
					console.log("nine is present");
				}else{
					document.getElementById("nine").src="./img/1_ps_nine.png";
					document.getElementById("nine").className = "number";
				}
				if(isPark(myArray, "10") == true){
					console.log("ten is present");
				}else{
					document.getElementById("ten").src="./img/1_ps_ten.png";
					document.getElementById("ten").className = "number";
				}
				if(isPark(myArray, "11") == true){
					console.log("eleven is present");
				}else{
					document.getElementById("eleven").src="./img/1_ps_eleven.png";
					document.getElementById("eleven").className = "number";
				}

				if(isPark(myArray, "12") == true){
					console.log("twelve is present");
				}else{
					document.getElementById("twelve").src="./img/1_ps_twelve.png";
					document.getElementById("twelve").className = "number";
				}

				if(isPark(myArray, "13") == true){
					console.log("thirteen is present");
				}else{
					document.getElementById("thirteen").src="./img/1_ps_thirteen.png";
					document.getElementById("thirteen").className = "number";
				}

				if(isPark(myArray, "14") == true){
					console.log("fourteen is present");
				}else{
					document.getElementById("fourteen").src="./img/1_ps_fourteen.png";
					document.getElementById("fourteen").className = "number";
				}

				if(isPark(myArray, "15") == true){
					console.log("fifteen is present");
				}else{
					document.getElementById("fifteen").src="./img/1_ps_fifteen.png";
					document.getElementById("fifteen").className = "number";
				}

				if(isPark(myArray, "16") == true){
					console.log("sixteen is present");
				}else{
					document.getElementById("sixteen").src="./img/1_ps_sixteen.png";
					document.getElementById("sixteen").className = "number";
				}
				if(isPark(myArray, "17") == true){
					console.log("seventeen is present");
				}else{
					document.getElementById("seventeen").src="./img/1_ps_seventeen.png";
					document.getElementById("seventeen").className = "number";
				}
				if(isPark(myArray, "18") == true){
					console.log("eighteen is present");
				}else{
					document.getElementById("eighteen").src="./img/1_ps_eighteen.png";
					document.getElementById("eighteen").className = "number";
				}
				if(isPark(myArray, "19") == true){
					console.log("nineteen is present");
				}else{
					document.getElementById("nineteen").src="./img/1_ps_nineteen.png";
					document.getElementById("nineteen").className = "number";
				}
				if(isPark(myArray, "20") == true){
					console.log("twenty is present");
				}else{
					document.getElementById("twenty").src="./img/1_ps_twenty.png";
					document.getElementById("twenty").className = "number";
				}
				if(isPark(myArray, "21") == true){
					console.log("twentyone is present");
				}else{
					document.getElementById("twentyone").src="./img/1_ps_twentyone.png";
					document.getElementById("twentyone").className = "number";
				}
				if(isPark(myArray, "22") == true){
					console.log("twentytwo is present");
				}else{
					document.getElementById("twentytwo").src="./img/1_ps_twentytwo.png";
					document.getElementById("twentytwo").className = "number";
				}
				if(isPark(myArray, "23") == true){
					console.log("twentythree is present");
				}else{
					document.getElementById("twentythree").src="./img/1_ps_twentythree.png";
					document.getElementById("twentythree").className = "number";
				}
				if(isPark(myArray, "24") == true){
					console.log("twentyfour is present");
				}else{
					document.getElementById("twentyfour").src="./img/1_ps_twentyfour.png";
					document.getElementById("twentyfour").className = "number";
				}
				/*if(isPark(myArray, "25") == true){
					console.log("twentyfive is present");
				}else{
					document.getElementById("twentyfive").src="./img/ic_action_25.png";
					document.getElementById("twentyfive").className = "number";
				}
				if(isPark(myArray, "26") == true){
					console.log("twentysix is present");
				}else{
					document.getElementById("twentysix").src="./img/ic_action_26.png";
					document.getElementById("twentysix").className = "number";
				}
				if(isPark(myArray, "27") == true){
					console.log("twentyseven is present");
				}else{
					document.getElementById("twentyseven").src="./img/ic_action_27.png";
					document.getElementById("twentyseven").className = "number";
				}
				if(isPark(myArray, "28") == true){
					console.log("twentyeight is present");
				}else{
					document.getElementById("twentyeight").src="./img/ic_action_28.png";
					document.getElementById("twentyeight").className = "number";
				}
				if(isPark(myArray, "29") == true){
					console.log("twentynine is present");
				}else{
					document.getElementById("twentynine").src="./img/ic_action_29.png";
					document.getElementById("twentynine").className = "number";
				}
				if(isPark(myArray, "30") == true){
					console.log("thirty is present");
				}else{
					document.getElementById("thirty").src="./img/ic_action_30.png";
					document.getElementById("thirty").className = "number";
				}
				if(isPark(myArray, "31") == true){
					console.log("thirtyone is present");
				}else{
					document.getElementById("thirtyone").src="./img/ic_action_31.png";
					document.getElementById("thirtyone").className = "number";
				}
				if(isPark(myArray, "32") == true){
					console.log("thirtytwo is present");
				}else{
					document.getElementById("thirtytwo").src="./img/ic_action_32.png";
					document.getElementById("thirtytwo").className = "number";
				}
				if(isPark(myArray, "33") == true){
					console.log("thirtythree is present");
				}else{
					document.getElementById("thirtythree").src="./img/ic_action_33.png";
					document.getElementById("thirtythree").className = "number";
				}
				if(isPark(myArray, "34") == true){
					console.log("thirtyfour is present");
				}else{
					document.getElementById("thirtyfour").src="./img/ic_action_34.png";
					document.getElementById("thirtyfour").className = "number";
				}
				if(isPark(myArray, "35") == true){
					console.log("thirtyfive is present");
				}else{
					document.getElementById("thirtyfive").src="./img/ic_action_35.png";
					document.getElementById("thirtyfive").className = "number";
				}
				if(isPark(myArray, "36") == true){
					console.log("thirtysix is present");
				}else{
					document.getElementById("thirtysix").src="./img/ic_action_36.png";
					document.getElementById("thirtysix").className = "number";
				}
				if(isPark(myArray, "37") == true){
					console.log("thirtyseven is present");
				}else{
					document.getElementById("thirtyseven").src="./img/ic_action_37.png";
					document.getElementById("thirtyseven").className = "number";
				}
				if(isPark(myArray, "38") == true){
					console.log("thirtyeight is present");
				}else{
					document.getElementById("thirtyeight").src="./img/ic_action_38.png";
					document.getElementById("thirtyeight").className = "number";
				}
				if(isPark(myArray, "39") == true){
					console.log("thirtynine is present");
				}else{
					document.getElementById("thirtynine").src="./img/ic_action_39.png";
					document.getElementById("thirtynine").className = "number";
				}
				if(isPark(myArray, "40") == true){
					console.log("forty is present");
				}else{
					document.getElementById("forty").src="./img/ic_action_40.png";
					document.getElementById("forty").className = "number";
				}*/
				//alert(JSON.stringify(data[0]["park_no"]));
				
				}
				});
			return false;
		//});
		
    //call $.ajax here
    			
}, 1000); //5 seconds
	});

function isPark(myArray, parkid){
	var bool = false;

	for(x = 0; x < myArray.length; x++){
	var temp = "'"+"\""+parkid+"\""+"'";
	var temp2 = "'"+myArray[x]+"'";
	var temp3 = "'"+"\""+(myArray.length-1)+"\""+"'";
	var temp4 = "'"+"\""+x+"\""+"'";
						
	if(temp == temp2){
	console.log(parkid+" is present");
	return true;
	}
	if(temp4 == temp3 && bool == false){
		console.log(parkid+" not found");
		return false;

	}
						
}			

}
