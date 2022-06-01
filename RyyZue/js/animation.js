       
let count_First_A = 1;
let count_Second_A = 1;
let count_Third_A = 1;

function animateFirst(){

    const cotton = document.getElementById("cotton");
    const off = document.getElementById("off");

    switch (count_First_A) {
        case 1:
            cotton.style.borderTop = "2px solid red";
            off.style.border = "2px solid white";
            break;
        case 2:
            cotton.style.borderRight = "2px solid blue";
            off.style.border = "2px solid green";
            break;
        case 3:
            cotton.style.borderBottom = "2px solid violet";
            off.style.border = "2px solid white";
            break;
        case 4:
            cotton.style.borderLeft = "2px solid green";
            off.style.border = "2px solid green";
            break;
        case 5:
            cotton.style.border = "2px solid white";
            off.style.border = "2px solid green";
            break;
    }

    if(count_First_A === 5){
        count_First_A = 0;
    }
}
setInterval(() => {
    animateFirst();
    count_First_A++;
}, 500);

function animateSecond(){
    const z = document.getElementById('z');
    const u = document.getElementById('u');
    const e = document.getElementById('e');

    z.style.color="#F05454"

    switch (count_Second_A) {
        case 1:
            z.style.color="#F05454"
            u.style.color="#F5F5F5"
            e.style.color="#F5F5F5"
            break;
         case 2:
            z.style.color="#F5F5F5"
            u.style.color="#F05454"
            e.style.color="#F5F5F5"
            break;
        case 3:
            z.style.color="#F5F5F5"
            u.style.color="#F5F5F5"
            e.style.color="#F05454"
            break;
    }

    if(count_Second_A === 3){
        count_Second_A = 0;
    }
}
setInterval(() => {
    
    animateSecond();
    count_Second_A++;
}, 300);
   
function animateThird(){

    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');
    const img4 = document.getElementById('img4');

    const new_arrival_1 = document.getElementById('new-1');
    const new_arrival_2 = document.getElementById('new-2');
    const new_arrival_3 = document.getElementById('new-3');
    const new_arrival_4 = document.getElementById('new-4');

    const popular_1 = document.getElementById('popular-1');
    const popular_2 = document.getElementById('popular-2');
    const popular_3 = document.getElementById('popular-3');
    const popular_4 = document.getElementById('popular-4');

    switch (count_Third_A) {
        case 1:
            img4.style.borderColor="#121212";
            img1.style.borderColor="#F05454";

            new_arrival_4.style.borderColor="#121212";
            new_arrival_1.style.borderColor="forestgreen";

            popular_4.style.borderColor="#f5f5f5";
            popular_1.style.borderColor="forestgreen";
            break;
        case 2:
            img1.style.borderColor="#121212";
            img2.style.borderColor="#F05454";

            new_arrival_1.style.borderColor="#121212";
            new_arrival_2.style.borderColor="forestgreen";

            popular_1.style.borderColor="#f5f5f5";
            popular_2.style.borderColor="forestgreen";
            break;
        case 3:
            img2.style.borderColor="#121212";
            img3.style.borderColor="#F05454";

            new_arrival_2.style.borderColor="#121212";
            new_arrival_3.style.borderColor="forestgreen";

            popular_2.style.borderColor="#f5f5f5";
            popular_3.style.borderColor="forestgreen";
            break;
        case 4:
            img3.style.borderColor="#121212";
            img4.style.borderColor="#F05454";

            new_arrival_3.style.borderColor="#121212";
            new_arrival_4.style.borderColor="forestgreen";

            popular_3.style.borderColor="#f5f5f5";
            popular_4.style.borderColor="forestgreen";
            break;
    }
    if(count_Third_A === 4){
        count_Third_A = 0;
    }
}
setInterval(() => {
    animateThird();
    count_Third_A++;
}, 1000);
