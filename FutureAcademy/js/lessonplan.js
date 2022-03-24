		const grade1Btn = document.querySelector("#grade1Btn");
			const grade2Btn = document.querySelector("#grade2Btn");
			const grade3Btn = document.querySelector("#grade3Btn");
			const displayLesson = document.querySelector("#displayLesson");
			const lessonplanTitle = document.querySelector(".ls-title");
			const search = document.querySelector("#search-input");
			let gradeFilterr;
			let htmlResult;

			let students = [
				{
				    "grade": 1,
				    "title": "Addition",
				    "owner": "Princess Angelica	P. Remegio",
				    "pptLink": "https://docs.google.com/presentation/d/e/2PACX-1vTol11o3yPyI5zFp8xOT-ep6moxNK4VSGtcRIvg0qxh8pM_F-nQFe1IolpU0Ipt3w/embed?start=false&loop=false&delayms=3000",
				    "pptDownload":"https://docs.google.com/presentation/d/1tovYwJevM2gkSHCV_pQ-0LmciOxX1jRE/export?format=pptx",
				    "videoLink":"123",
				    "videoDownload": "123",
				},
				{
				    "grade": 1,
				    "title": "Meaning Of Addition",
				    "owner": "Mary Jane T. Dela Cruz",
				    "pptLink": "https://docs.google.com/presentation/d/e/2PACX-1vQrFKL31FFJYlD9ILsThq0id5vlB7lqyZ29h6LCAGznscoTwkCes8LWDJqp3UkKew/embed?start=false&loop=true&delayms=3000",
				    "pptDownload":"https://docs.google.com/presentation/d/11fuJnkUy6GqDfTrYldWuDM0TFj0yWLrB/export?format=pptx",
				    "videoLink":"123",
				    "videoDownload": "123",
				},
				{
				    "grade": 1,
				    "title": "Telling number and name of this days in a week",
				    "owner": "Karen C. Castillo",
				    "pptLink": "https://docs.google.com/presentation/d/e/2PACX-1vQiwnqCqzYi0Lc3aPVAC1Fmeg7WttdFgjv1iTRGkEEY63WF-6Q-SDQkFkOiUgU2Dw/embed?start=false&loop=true&delayms=3000",
				    "pptDownload":"https://docs.google.com/presentation/d/1X9SFdP9Q7xq_P7QcxLLF3YZ0Jql-Wt_v/export?format=pptx",
				    "videoLink":"123",
				    "videoDownload": "123",
				},
				{
				    "grade": 2,
				    "title": "Identifying lines and suraface on 3-Dimensional objects",
				    "owner": "Jieny Anne G. Flores",
				    "pptLink": "https://docs.google.com/presentation/d/e/2PACX-1vSS9K2104COXbCDkulI1gRmkfJ9y8KZtH-Z1YlEzaObloZlPBpXBbsJC1jMRT_1sw/embed?start=false&loop=true&delayms=3000",
				    "pptDownload":"https://docs.google.com/presentation/d/1gg3YSKRhR_7IegwPbcZKws9tlYrTOdZt/export?format=pptx",
				    "videoLink":"123",
				    "videoDownload": "123",
				},
				{
				    "grade": 2,
				    "title": "Properties of multiplication zero, indentity, and commutative property",
				    "owner": "Russel A. Villasenor",
				    "pptLink": "https://docs.google.com/presentation/d/e/2PACX-1vTQNCi1DCWmIqdB_eqs_VOUYv8DCSZRjmpe_au9Qi-rmzQG0O1du0ysJKRD3xd_-Q/embed?start=false&loop=true&delayms=3000",
				    "pptDownload":"https://docs.google.com/presentation/d/1C65GPaa0bI9xVr2RtKOHNmwyW68thVdD/export?format=pptx",
				    "videoLink":"123",
				    "videoDownload": "123",
				},
				{
				    "grade": 2,
				    "title": "Writing Three-digit numbers in Expanded Form",
				    "owner": "Liezel P. Lappay",
				    "pptLink": "https://docs.google.com/presentation/d/e/2PACX-1vQNOYXVtCz0rwfHNbMN80knvw4FZefQJXeivDk49XXqVZJIU5AhenbohlJXb-eZ5Q/embed?start=false&loop=true&delayms=3000",
				    "pptDownload":"https://docs.google.com/presentation/d/1d27dijCvjRYVOZbYMpcEIoRAocIWOZ9r/export?format=pptx",
				    "videoLink":"123",
				    "videoDownload": "123",
				},
				{
				    "grade": 2,
				    "title": "3 Dimensional shapes",
				    "owner": "Jimmark C. Velasco",
				    "pptLink": "https://docs.google.com/presentation/d/e/2PACX-1vRoxna2mqYaZYRKChH8XUrK5stspw6cxAmo840QDWNqgbYiZYDaHT-pzDFz_vIN-2rn8URRKx82nfUu/embed?start=false&loop=true&delayms=3000",
				    "pptDownload":"https://docs.google.com/presentation/d/1qwTE79HAkXLzzl7Qm4zjWTFBSaKSqluM3DH9ynjajUE/export?format=pptx",
				    "videoLink":"123",
				    "videoDownload": "123",
				},
				{
				    "grade": 2,
				    "title": "Common Plane Shape",
				    "owner": "Arnel Arcelona",
				    "pptLink": "https://docs.google.com/presentation/d/e/2PACX-1vQAe9Ck_N8VoUDAL0rq6fifbPXmsDy3fkqpo84LaIEXBDqNVhGctzsuTfoz_TyKrw/embed?start=false&loop=true&delayms=3000",
				    "pptDownload":"https://docs.google.com/presentation/d/1gUmgazT4QIRaAyFmYmgBxd-ikTdAejO9/export?format=pptx",
				    "videoLink":"123",
				    "videoDownload": "123",
				},
				{
				    "grade": 2,
				    "title": "Introducing Money-Addition of money",
				    "owner": "Louise Angeli D. Dela Pena",
				    "pptLink": "https://docs.google.com/presentation/d/e/2PACX-1vSMo9FpFTQVM20ZRLGFHR9hawTjOS0SUOwV9HUavkY1l_T80m_AyPr3ca0adM1H0w/embed?start=false&loop=true&delayms=3000",
				    "pptDownload":"https://docs.google.com/presentation/d/1FJnZl1i_zqIRatxCi8d-Q7epcBu-HRG_/export?format=pptx",
				    "videoLink":"123",
				    "videoDownload": "123",
				},
				{
				    "grade": 2,
				    "title": "Types of Angles",
				    "owner": "Juvy Mea G. Carvajal",
				    "pptLink": "https://docs.google.com/presentation/d/e/2PACX-1vSSWgkG6rABWdLtzCBDakIwiJNB_7JsSoJ0vZW-Si5zFCJYIM0PpMUbcY1iJCpaXA/embed?start=false&loop=true&delayms=3000",
				    "pptDownload":"https://docs.google.com/presentation/d/1d1OcsNSNS5CzfqdqP0Xg09QtSoIDLVfy/export?format=pptx",
				    "videoLink":"123",
				    "videoDownload": "123",
				},
				{
				    "grade": 2,
				    "title": "Properties of Addition",
				    "owner": "Marife C. Fernandez",
				    "pptLink": "https://docs.google.com/presentation/d/e/2PACX-1vQSZ-heAamBqLe4bhw1AJA6WmFCcPvRn56dQ53svZh-LzB8ir0iB9ePcHZxH3kEyA/embed?start=false&loop=true&delayms=3000",
				    "pptDownload":"https://docs.google.com/presentation/d/1CIRvFr5AvaQ1jIGWde1aV0S2m1Amhi3d/export?format=pptx",
				    "videoLink":"123",
				    "videoDownload": "123",
				},
				{
				    "grade": 2,
				    "title": "Unit Fractions",
				    "owner": "Chris Angelo C. Gamboa",
				    "pptLink": "https://docs.google.com/presentation/d/e/2PACX-1vQZab9oRbqj_SkMXFhbUL1i0YibSPJkbhPXuh1ZBw_oxU71DIOgGFnQflm4n-6kKQ/embed?start=false&loop=true&delayms=3000",
				    "pptDownload":"https://docs.google.com/presentation/d/1hE66OKHc6S-ES8XDG-vVm995pZJjYN-D/export?format=pptx",
				    "videoLink":"123",
				    "videoDownload": "123",
				},
				{
				    "grade": 2,
				    "title": "Unit Fraction",
				    "owner": "Racquel C. Domingo",
				    "pptLink": "https://docs.google.com/presentation/d/e/2PACX-1vRy7EOkpBDDIbVF7xDF-ccp-VbU2fm4OV9a5ElVLcnyD1oUw8ub0Bw-ePto5Zu6vA/embed?start=false&loop=true&delayms=3000",
				    "pptDownload":"https://docs.google.com/presentation/d/1coeRd6W3yw3RtBZxBTmYgNMF3AqrXtmV/export?format=pptx",
				    "videoLink":"123",
				    "videoDownload": "123",
				},
				{
				    "grade": 2,
				    "title": "Comparing Numbers",
				    "owner": "Jayson C. Caballero",
				    "pptLink": "https://docs.google.com/presentation/d/e/2PACX-1vQcikpK0EZj5RjeXKIEtjOV7gv1GKJ49UpBAoSJjVD69hwM5_LL8C2pmVaX970m6A/embed?start=false&loop=true&delayms=3000",
				    "pptDownload":"https://docs.google.com/presentation/d/1drRN12BvWc-FiIQ8f3-NJebU5CgfXhuq/export?format=pptx",
				    "videoLink":"123",
				    "videoDownload": "123",
				},
				{
				    "grade": 2,
				    "title": "Money Bills",
				    "owner": "Mary Claire P. Cabulang",
				    "pptLink": "https://docs.google.com/presentation/d/e/2PACX-1vT2lEWdVcUqoR9DoFCxVhZBuOf5iVxoxXNH_CU8XkgKmbtwhzGV7yglNk6tOY66FQ/embed?start=false&loop=true&delayms=3000",
				    "pptDownload":"https://docs.google.com/presentation/d/1O-ekDc6e4cTgPSZQj498hnde7X_Tv0-7/export?format=pptx",
				    "videoLink":"123",
				    "videoDownload": "123",
				},
				{
				    "grade": 2,
				    "title": "Value and place value of 3 Digit numbers",
				    "owner": "Dienelyn Jane A. Bautista",
				    "pptLink": "https://docs.google.com/presentation/d/e/2PACX-1vRdi4Vvt8gCREhRDuyPf_c81OIzd_-_UqzN_0SBx12bXEUjlAKV4GuRPoHTFQ6Zbw/embed?start=false&loop=false&delayms=3000",
				    "pptDownload":"https://docs.google.com/presentation/d/19J8xedxzlBvnpmz96LCT4s4XbhTNb7N7/export?format=pptx",
				    "videoLink":"123",
				    "videoDownload": "123",
				},
				{
				    "grade": 2,
				    "title": "Time",
				    "owner": "Joan V. Sembrana",
				    "pptLink": "https://docs.google.com/presentation/d/e/2PACX-1vTzN3rGGvfp8_qZnVSxBxMU_OXbrHhtVNxMxck_KdHilKHSY9jZAeiq9zrKhVo5yA/embed?start=false&loop=true&delayms=3000",
				    "pptDownload":"https://docs.google.com/presentation/d/1rH1t1huKpTWzLTR3gbW4LCvNhNU3_Z_8/export?format=pptx",
				    "videoLink":"123",
				    "videoDownload": "123",
				},
				{
				    "grade": 2,
				    "title": "Dividing Two-Digit numbers by a One-Digit number without remainder",
				    "owner": "Leora D. Lomague",
				    "pptLink": "https://docs.google.com/presentation/d/e/2PACX-1vR-Z8E-EfeRbl5QddScbvyzzSa6DCiCKHA7vkFqkw5iOU9eslFcmyl_jXhTnAib4w/embed?start=false&loop=true&delayms=3000",
				    "pptDownload":"https://docs.google.com/presentation/d/1iqIXa55rVaHmWOTwowAymgZWjS9Yakdp/export?format=pptx",
				    "videoLink":"123",
				    "videoDownload": "123",
				},
				{
				    "grade": 2,
				    "title": "Counting Money",
				    "owner": "Francis Noel Macaoay",
				    "pptLink": "https://docs.google.com/presentation/d/e/2PACX-1vTEGYHtfG9Ac8dXzp4lVTnb5Q1ike39PRmyUpKbWU17Vb5G10rYa8VXF44Z6RuLwg/embed?start=false&loop=true&delayms=3000",
				    "pptDownload":"https://docs.google.com/presentation/d/1QIg7BzyiZR16QQw_0qEoYfWtHj8UNJVL/export?format=pptx",
				    "videoLink":"123",
				    "videoDownload": "123",
				},
				{
				    "grade": 3,
				    "title": "Adding and Subtracting Frations",
				    "owner": "Mylene Joy L. Gorospe",
				    "pptLink": "https://docs.google.com/presentation/d/e/2PACX-1vRQ4vc9vHdbwz4ijK91-OiTP7XKMJktaXqZONQF79XEJztqfIfBpXlfCNMjveiAZw/embed?start=false&loop=true&delayms=3000",
				    "pptDownload":"https://docs.google.com/presentation/d/14o4ZeAF3fq_jOG6vlQMXai-ri5TeKHg0/export?format=pptx",
				    "videoLink":"123",
				    "videoDownload": "123",
				},
				{
				    "grade": 3,
				    "title": "Adding and Subtracting Frations",
				    "owner": "Gylzel Joy N. Sembrano",
				    "pptLink": "https://docs.google.com/presentation/d/e/2PACX-1vSCyVIECkW7ljkn-JnzCwojGa9AnuX-xd-IyA1kTGvlgZ0keJW4R8ouruzHwzdk5Q/embed?start=false&loop=true&delayms=3000",
				    "pptDownload":"https://docs.google.com/presentation/d/1iuZMa46xvAxYF-rEk5Axy6aU5z0jt1jO/export?format=pptx",
				    "videoLink":"123",
				    "videoDownload": "123",
				},
				{
				    "grade": 3,
				    "title": "Adding Fraction with common denominator",
				    "owner": "Jim Mark B. Carolino",
				    "pptLink": "https://docs.google.com/presentation/d/e/2PACX-1vR35MDeONaK6qsT8LeVDCBGWk1_N373j1btOA8lpC52lLcNTWobe1ONRpu4iYQu4Q/embed?start=false&loop=true&delayms=3000",
				    "pptDownload":"https://docs.google.com/presentation/d/1oN3t6NaRoWfBLC_qf1AuWloNy8JYYm6R/export?format=pptx",
				    "videoLink":"123",
				    "videoDownload": "123",
				},
				{
				    "grade": 3,
				    "title": "Roman Numerals from from 1-20",
				    "owner": "Thrisha Hazel D. Timbol",
				    "pptLink": "https://docs.google.com/presentation/d/e/2PACX-1vRikqW_iP7-vfMU4hLAlF3eknPfvaus_bDqRvBZc_pRcwRL99EBKCCbnImVrE-iTA/embed?start=false&loop=true&delayms=3000",
				    "pptDownload":"https://docs.google.com/presentation/d/1f4DE2dTIS6RjE_Bgd8IYw85YdbYncqmf/export?format=pptx",
				    "videoLink":"123",
				    "videoDownload": "123",
				},
				{
				    "grade": 3,
				    "title": "Subtracting from 3 digit numbers",
				    "owner": "Ella Mae S. Castillo",
				    "pptLink": "https://docs.google.com/presentation/d/e/2PACX-1vTZAn5DgyZq_mbfTsq8Z4OehBF4xeUcT8VmCSn4Z_9EzwjCmrN3yv6CBlanPp40_g/embed?start=false&loop=true&delayms=3000",
				    "pptDownload":"https://docs.google.com/presentation/d/1Gb4Vyzkp8U5LNp2mmt2t2n4SRsI978uZ/export?format=pptx",
				    "videoLink":"123",
				    "videoDownload": "123",
				},
				{
				    "grade": 3,
				    "title": "Recognizing Coins and Bills up to Php 1,000",
				    "owner": "Edlyn U. Prado",
				    "pptLink": "https://docs.google.com/presentation/d/e/2PACX-1vQtwKG09Ir_voMWuEZFd4vchn2tOM8DzvcTmWCgshZR36hGVy9M-3cCxwi3mLQPXw/embed?start=false&loop=true&delayms=3000",
				    "pptDownload":"https://docs.google.com/presentation/d/1bjOKp4uF-d7m2sUadoRSqBu5h21ofv7H/export?format=pptx",
				    "videoLink":"123",
				    "videoDownload": "123",
				},
			];
	
			
			grade1Btn.addEventListener('click', event => {
				grade1Btn.classList.add("selected-g");
				grade2Btn.classList.remove("selected-g");
				grade3Btn.classList.remove("selected-g");
				lessonplanTitle.innerHTML="Lesson Plan for Grade 1";
				search.value = "";
				displayLesson.innerHTML = "";


				gradeFilterr = students.filter(students => students.grade === 1);

				display();

			});

			grade2Btn.addEventListener('click', event => {

				grade2Btn.classList.add("selected-g");
				grade1Btn.classList.remove("selected-g");
				grade3Btn.classList.remove("selected-g");
				lessonplanTitle.innerHTML="Lesson Plan for Grade 2";
				displayLesson.innerHTML = "";
				search.value = "";

				gradeFilterr = students.filter(students => students.grade === 2);

				display();

			});
			grade3Btn.addEventListener('click', event => {
				grade3Btn.classList.add("selected-g");
				grade1Btn.classList.remove("selected-g");
				grade2Btn.classList.remove("selected-g");
				lessonplanTitle.innerHTML="Lesson Plan for Grade 3";
				displayLesson.innerHTML = "";
				search.value = "";
				
				gradeFilterr = students.filter(students => students.grade === 3);


				display();
		
			});

			
			search.addEventListener('keyup', event => {
				displayLesson.innerHTML = "";
				if(search.value === ""){
					display();
				}else{
					
					let searchfilter = gradeFilterr.filter(gradeFilterr => gradeFilterr.title.toLowerCase().includes(search.value.toLowerCase()));
					
					if(searchfilter.length === 0){
						displayLesson.insertAdjacentHTML('beforeend','<p style="text-align:center">No result Found</p>');
					}else{
						for(let i = 0; i < searchfilter.length; i++){

						  	htmlResult = '<div class="row"><div class="col-lg-8 col-md-8 col-12"><div class="embed-responsive embed-responsive-16by9"><iframe src="'+searchfilter[i].pptLink+'" frameborder="0" class="embed-responsive" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe></div></div><div class="col-lg-4 col-md-4 col-12 info-columns order-md-1"><h4>Title: '+searchfilter[i].title+'</h4><p>Prepared by: '+searchfilter[i].owner+'</p><a href="'+searchfilter[i].pptDownload+'" class="btn-download">Download Presentation</a></div></div>';

							displayLesson.insertAdjacentHTML('beforeend',htmlResult);
						}
					}
				}
			});	


			function display() {
				for(let i = 0; i < gradeFilterr.length; i++){

					htmlResult = '<div class="row"><div class="col-lg-8 col-md-8 col-12"><div class="embed-responsive embed-responsive-16by9"><iframe src="'+gradeFilterr[i].pptLink+'" frameborder="0" class="embed-responsive" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe></div></div><div class="col-lg-4 col-md-4 col-12 info-columns order-md-1"><h4>Title: '+gradeFilterr[i].title+'</h4><p>Prepared by: '+gradeFilterr[i].owner+'</p><a href="'+gradeFilterr[i].pptDownload+'" class="btn-download">Download Presentation</a></div></div>';

						displayLesson.insertAdjacentHTML('beforeend',htmlResult);
					}
			}
					

			grade1Btn.click();