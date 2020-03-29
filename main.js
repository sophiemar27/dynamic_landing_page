

const time = document.getElementById('time');
    greeting = document.getElementById('greeting');
    name = document.getElementById('name');
    focus = document.getElementById('focus');

    console.log(greeting);

    //Show time

    function showTime() {
        let = today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

        //set am or pm

        const amPm = hour >= 12 ? "PM" : "AM"

        

       // 12hr format
        hour = hour % 12 || 12;

        //output time
        time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

        setTimeout(showTime, 1000);

        //add zero 
        function addZero(n) {
            return (parseInt(n, 10) < 10 ? '0' : '') + n;
        }

        //set backgroung and greeting
        function setBgGreet() {
            let today = new Date(),
            hour = today.getHours();

            if(hour < 12) {
                document.body.style.backgroundImage = "url('../images/goodmorning.jpeg')";
                greeting.textContent = 'Good Morniong';
                } else if(hour < 18) {
                    document.body.style.backgroundImage = "url('../images.afternoon.jpg')";
                    greeting.textContent = 'Good Afternoon';
                } else {
                    document.body.style.backgroundImage = "url('../images/goodevining.jpg')";
                    greeting.textContent = 'Good Evining';
                    document.body.style.color = 'white'
                }
             }   
        

    }

    //run

    showTime();
    setBgGreet();



    