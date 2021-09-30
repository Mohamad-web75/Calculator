let btn = document.querySelectorAll(".btn");
let ac = document.querySelector('.ac');
let c = document.querySelector('.c');

btn.forEach((btn) => {
    btn.addEventListener("click", (e) => {

        //    btn ac
        if (e.target.classList.contains('ac')) {
            calc.display.value = "";
        }
        //   btn c
        else if (e.target.classList.contains('c')) {
            calc.display.value =calc.display.value.slice(0,-1);
        }
        //   btn =
        else if (e.target.classList.contains('equal')) {
            calc.display.value = eval(calc.display.value);
        }
        // get btn value
        else {
            calc.display.value += e.target.value;
        }
    });
});
