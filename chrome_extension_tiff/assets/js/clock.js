window.onload = runClock;

function runClock() {

    var now = new Date();

    var pageTitle = document.head.getElementsByTagName('title')[0];

    var shape = document.getElementById('shape');

    var bday = document.getElementById('bday');

    var body = document.getElementsByTagName('body')[0];


    console.log( now ); 
    console.log( pageTitle );
    console.log( checkTime() ); 


    setInterval( function(){

        now = checkTime();

        updateTitle( now );
        bgColour ( now );

    }, 1000 );


    function updateTitle( now ) {

        pageTitle.innerText = now.hours+":"+now.minutes+":"+now.seconds;

    };

    
    function checkTime() {

        now = new Date();

        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
        var day= now.getDay();
        var month = now.getMonth();
        var monthday = now.getDate();
        var start = new Date(now.getFullYear(), 0, 0);
        var diff = now - start;
        var oneDay = 1000 * 60 * 60 * 24;
        var yearday = Math.floor(diff / oneDay)



        if ( seconds < 10) {
        	seconds = "0"+ seconds;
        };

        if ( minutes < 10) {
        	minutes = "0"+ minutes;
        };

        if ( hours < 10) {
        	hours = "0"+ hours;
        };

        return {
            hours : hours,
            minutes : minutes,
            seconds : seconds,
            day : day,
            month : month,
            monthday: monthday,
            yearday : yearday,
        };  
    };


    function bgColour(now) {

        if ( now.day == 0) {
           document.body.style.backgroundColor = "white";

            if ( now.hours <= 2 ) {
                document.body.style.backgroundColor = "#f8f8ff";
            };

            if ( now.hours > 2 && now.hours <= 4 ) {
                   document.body.style.backgroundColor = "#ececff"
            };

            if ( now.hours > 4 && now.hours <= 6 ) {
                    document.body.style.backgroundColor = "#dfe0ff"
            };

            if ( now.hours > 6 && now.hours <= 8 ) {
                    document.body.style.backgroundColor = "#d2d4ff"
            };

            if ( now.hours > 8 && now.hours <= 10 ) {
                    document.body.style.backgroundColor = "#c6c8ff"
            };

           if ( now.hours > 10 && now.hours <= 12 ) {
                    document.body.style.backgroundColor = "#c0c2ff"
            };

            if ( now.hours > 12 && now.hours <= 14 ) {
                    document.body.style.backgroundColor = "#999bcc"
            };

            if ( now.hours > 14 && now.hours <= 16 ) {
                    document.body.style.backgroundColor = "#737499"
            };

            if ( now.hours > 16 && now.hours <= 18 ) {
                    document.body.style.backgroundColor = "#4c4d66"
           	};

            if ( now.hours > 18 && now.hours <= 20 ) {
                    document.body.style.backgroundColor = "#393a4c"
            };

            if ( now.hours > 20 && now.hours <= 22 ) {
                    document.body.style.backgroundColor = "#131319"
            };

            if ( now.hours > 22 ) {
                    document.body.style.backgroundColor = "#000000"
            };
        };


        if ( now.day == 1 ) {

            document.body.style.backgroundColor = "purple";

            if ( now.hours <= 2 ) {
                document.body.style.backgroundColor = "#fdf9ff";
            };

            if ( now.hours > 2 && now.hours <= 4 ) {
                    document.body.style.backgroundColor = "#faefff"
            };

            if ( now.hours > 4 && now.hours <= 6 ) {
                    document.body.style.backgroundColor = "#f8e5ff"
            };

            if ( now.hours > 6 && now.hours <= 8 ) {
                    document.body.style.backgroundColor = "#f5daff"
            };

            if ( now.hours > 8 && now.hours <= 10 ) {
                    document.body.style.backgroundColor = "#f2d0ff"
            };

           	if ( now.hours > 10 && now.hours <= 12 ) {
                    document.body.style.backgroundColor = "#f1cbff"
            };

            if ( now.hours > 12 && now.hours <= 14 ) {
                    document.body.style.backgroundColor = "#d8b6e5"
            };

            if ( now.hours > 14 && now.hours <= 16 ) {
                    document.body.style.backgroundColor = "#c0a2cc"
            };

            if ( now.hours > 16 && now.hours <= 18 ) {
                    document.body.style.backgroundColor = "#907999"
            };

            if ( now.hours > 18 && now.hours <= 20 ) {
                    document.body.style.backgroundColor = "#605166"
            };

            if ( now.hours > 20 && now.hours <= 22 ) {
                    document.body.style.backgroundColor = "#302833"
            };

            if ( now.hours > 22 ) {
                    document.body.style.backgroundColor = "#000000"
            };
        };


        if ( now.day == 2 ) {
            document.body.style.backgroundColor = "pink";
            
            if ( now.hours <= 2 ) {
                document.body.style.backgroundColor = "#fff8f8";
            };

            if ( now.hours > 2 && now.hours <= 4 ) {
                    document.body.style.backgroundColor = "#ffebeb"
            };

            if ( now.hours > 4 && now.hours <= 6 ) {
                    document.body.style.backgroundColor = "#ffe4e4"
            };

            if ( now.hours > 6 && now.hours <= 8 ) {
                    document.body.style.backgroundColor = "#ffd7d7"
            };

            if ( now.hours > 8 && now.hours <= 10 ) {
                    document.body.style.backgroundColor = "#ffcaca"
            };

           if ( now.hours > 10 && now.hours <= 12 ) {
                    document.body.style.backgroundColor = "#ffbdbd"
            };

            if ( now.hours > 12 && now.hours <= 14 ) {
                    document.body.style.backgroundColor = "#e5aaaa"
           	};

            if ( now.hours > 14 && now.hours <= 16 ) {
                    document.body.style.backgroundColor = "#cc9797"
            };

            if ( now.hours > 16 && now.hours <= 18 ) {
                    document.body.style.backgroundColor = "#997171"
            };

            if ( now.hours > 18 && now.hours <= 20 ) {
                    document.body.style.backgroundColor = "#664b4b"
            };

            if ( now.hours > 20 && now.hours <= 22 ) {
                    document.body.style.backgroundColor = "#332525"
            };

            if ( now.hours > 22 ) {
                    document.body.style.backgroundColor = "#000000"
            };
        };


        if ( now.day == 3 ) {
            document.body.style.backgroundColor = "red";

            if ( now.hours <= 2 ) {
                document.body.style.backgroundColor = "#fdefee";
            };

            if ( now.hours > 2 && now.hours <= 4 ) {
                    document.body.style.backgroundColor = "#fad1ce"
            };

            if ( now.hours > 4 && now.hours <= 6 ) {
                    document.body.style.backgroundColor = "#f8b2ae"
            };

            if ( now.hours > 6 && now.hours <= 8 ) {
                    document.body.style.backgroundColor = "#f5938d"
            };

            if ( now.hours > 8 && now.hours <= 10 ) {
                    document.body.style.backgroundColor = "#f2756d"
            };

           if ( now.hours > 10 && now.hours <= 12 ) {
                    document.body.style.backgroundColor = "#f1665d"
            };

            if ( now.hours > 12 && now.hours <= 14 ) {
                    document.body.style.backgroundColor = "#d85b53"
            };

            if ( now.hours > 14 && now.hours <= 16 ) {
                    document.body.style.backgroundColor = "#a84741"
            };

            if ( now.hours > 16 && now.hours <= 18 ) {
                    document.body.style.backgroundColor = "#78332e"
            };

            if ( now.hours > 18 && now.hours <= 20 ) {
                    document.body.style.backgroundColor = "#602825"
            };

            if ( now.hours > 20 && now.hours <= 22 ) {
                    document.body.style.backgroundColor = "#301412"
            };

            if ( now.hours > 22 ) {
                    document.body.style.backgroundColor = "#000000"
            };
        };   


        if ( now.day == 4 ) {
            document.body.style.backgroundColor = "orange";

            if ( now.hours <= 2 ) {
                document.body.style.backgroundColor = "#fef3ee";
            };

            if ( now.hours > 2 && now.hours <= 4 ) {
                    document.body.style.backgroundColor = "#fcddce"
            };

            if ( now.hours > 4 && now.hours <= 6 ) {
                    document.body.style.backgroundColor = "#fac7ad"
            };

            if ( now.hours > 6 && now.hours <= 8 ) {
                    document.body.style.backgroundColor = "#f8b18c"
            };

            if ( now.hours > 8 && now.hours <= 10 ) {
                    document.body.style.backgroundColor = "#f69b6c"
            };

            if ( now.hours > 10 && now.hours <= 12 ) {
                    document.body.style.backgroundColor = "#f5905c"
            };

            if ( now.hours > 12 && now.hours <= 14 ) {
                    document.body.style.backgroundColor = "#dc8152"
            };

            if ( now.hours > 14 && now.hours <= 16 ) {
                    document.body.style.backgroundColor = "#ab6440"
            };

            if ( now.hours > 16 && now.hours <= 18 ) {
                    document.body.style.backgroundColor = "#935637"
            };

            if ( now.hours > 18 && now.hours <= 20 ) {
                    document.body.style.backgroundColor = "#623924"
            };

            if ( now.hours > 20 && now.hours <= 22 ) {
                    document.body.style.backgroundColor = "#311c12"
            };

            if ( now.hours > 22 ) {
                    document.body.style.backgroundColor = "#000000"
            };
        };  


        if ( now.day == 5 ) {
           document.body.style.backgroundColor = "yellow";

            if ( now.hours <= 2 ) {
                document.body.style.backgroundColor = "#fefdf4";
            };

            if ( now.hours > 2 && now.hours <= 4 ) {
                    document.body.style.backgroundColor = "#fefbe0"
            };

            if ( now.hours > 4 && now.hours <= 6 ) {
                    document.body.style.backgroundColor = "#fef9cb"
            };

            if ( now.hours > 6 && now.hours <= 8 ) {
                    document.body.style.backgroundColor = "#fdf7b6"
            };

            if ( now.hours > 8 && now.hours <= 10 ) {
                    document.body.style.backgroundColor = "#fdf5a2"
            };

            if ( now.hours > 10 && now.hours <= 12 ) {
                    document.body.style.backgroundColor = "#fdf498"
            };

            if ( now.hours > 12 && now.hours <= 14 ) {
                    document.body.style.backgroundColor = "#e3db88"
            };

            if ( now.hours > 14 && now.hours <= 16 ) {
                    document.body.style.backgroundColor = "#b1aa6a"
            };

            if ( now.hours > 16 && now.hours <= 18 ) {
                    document.body.style.backgroundColor = "#97925b"
            };

            if ( now.hours > 18 && now.hours <= 20 ) {
                    document.body.style.backgroundColor = "#65613c"
            };

            if ( now.hours > 20 && now.hours <= 22 ) {
                    document.body.style.backgroundColor = "#32301e"
            };

            if ( now.hours > 22 ) {
                    document.body.style.backgroundColor = "#000000"
            };
        };


        if ( now.day == 6 ) {
            document.body.style.backgroundColor = "green";

             if ( now.hours <= 2 ) {
                document.body.style.backgroundColor = "#edf2f1";
            };

            if ( now.hours > 2 && now.hours <= 4 ) {
                    document.body.style.backgroundColor = "#cad8d7"
            };

            if ( now.hours > 4 && now.hours <= 6 ) {
                    document.body.style.backgroundColor = "#a7bebd"
            };

            if ( now.hours > 6 && now.hours <= 8 ) {
                    document.body.style.backgroundColor = "#83a4a2"
             };

            if ( now.hours > 8 && now.hours <= 10 ) {
                    document.body.style.backgroundColor = "##608a88"
            };

            if ( now.hours > 10 && now.hours <= 12 ) {
                    document.body.style.backgroundColor = "#4f7e7b"
            };

            if ( now.hours > 12 && now.hours <= 14 ) {
                    document.body.style.backgroundColor = "#47716e"
            };

            if ( now.hours > 14 && now.hours <= 16 ) {
                    document.body.style.backgroundColor = "#375856"
           	};

            if ( now.hours > 16 && now.hours <= 18 ) {
                    document.body.style.backgroundColor = "#273f3d"
            };

            if ( now.hours > 18 && now.hours <= 20 ) {
                    document.body.style.backgroundColor = "#1f3231"
            };

            if ( now.hours > 20 && now.hours <= 22 ) {
                    document.body.style.backgroundColor = "#0f1918"
            };

            if ( now.hours > 22 ) {
                    document.body.style.backgroundColor = "#000000"
            };
        };


            if ((now.month == 0 && now.monthday >= 21 )||(now.month == 1 && now.monthday <= 19)){
                shape.style.transform = "rotate(60deg)";
            };

            if ((now.month == 1 && now.monthday >= 20 )||(now.month == 2 && now.monthday <= 20)){
                shape.style.transform = "rotate(90deg)";
            };

            if ((now.month == 2 && now.monthday >= 21 )||(now.month == 3 && now.monthday <= 20)){
                shape.style.transform = "rotate(120deg)";
            };

            if ((now.month == 3 && now.monthday >= 21 )||(now.month == 4 && now.monthday <= 21)){
                shape.style.transform = "rotate(150deg)";
            };

            if ((now.month == 4 && now.monthday >= 22 )||(now.month == 5 && now.monthday <= 21)){
                shape.style.transform = "rotate(180deg)";
            };

            if ((now.month == 5 && now.monthday >= 22 )||(now.month == 6 && now.monthday <= 22)){
                shape.style.transform = "rotate(210deg)";
            };

            if ((now.month == 6 && now.monthday >= 23 )||(now.month == 7 && now.monthday <= 23)){
                shape.style.transform = "rotate(240deg)";
            };

            if ((now.month == 7 && now.monthday >= 24 )||(now.month == 8 && now.monthday <= 23)){
                shape.style.transform = "rotate(270deg)";
            };

            if ((now.month == 8 && now.monthday >= 24 )||(now.month == 9 && now.monthday <= 23)){
                shape.style.transform = "rotate(300deg)";
            };

            if ((now.month == 9 && now.monthday >= 24 )||(now.month == 10 && now.monthday <= 22)){
                shape.style.transform = "rotate(330deg)";
            };

             if ((now.month == 10 && now.monthday >= 23 )||(now.month == 11 && now.monthday <= 21)){
                shape.style.transform = "rotate(360deg)";
            };

            if ((now.month == 11 && now.monthday >= 22 )||(now.month == 0 && now.monthday <= 20)){
                shape.style.transform = "rotate(30deg)";
            };


        if ( now.month == 2 && now.monthday == 6 ) {

            document.getElementById("bday").style.display = "block";
            document.getElementById("shape").style.display = "none";

        } else {
            document.getElementById("bday").style.display = "none";

        };
    };

	
	fadeIn();
	
	function fadeIn() {
		
		document.getElementById('project-wrapper').className += "fade-in";
	
	};

}