document.addEventListener("DOMContentLoaded",

    function (event) {
        console.log(event);


        function change() {

            document.getElementById('title').textContent = 'asdfasfd';
        }

        function sayHello(event) {
            console.log(event);

            console.log(event.shiftKey);

            var name = document.getElementById('name').value;
            var message = '<h2>Hello ' + name + ' DO try it</h2>';

            // document.getElementById('content').textContent = message;
            document.getElementById('content').innerHTML = message;

            if (name == 'student') {
                var title =
                    document.querySelector('#title')
                    .textContent;
                console.log(title);

                title += " & Lovin it!";
                document.querySelector('h1')
                    .textContent = title;
                this.textContent = "Said i5";


            }
        }

        // document.querySelector('button').addEventListener("click",sayHello);
        document.querySelector('button').onclick = sayHello;

        document.querySelector('body').addEventListener('mousemove',
            function (event) {
                if (event.shiftKey === true) {
                    document.querySelector('#ax').innerHTML = '<h2>' + event.clientX + ',' + event.clientY + '</h2>';
                }
            }
        )

    }



)




// var message = "in global";
// console.log("global: message = " + message);

// var a = function () {
//     var message = "inside a";
//     console.log("a:message = " + message);

//     b();
// }
// var b = function () {
//     console.log("b:message = " + message);
// }

// a();