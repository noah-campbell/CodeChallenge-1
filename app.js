function calculate() {
    var counter = 0;
    var list = [];

    for (var i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            list[counter] = " CameronSean " + "<br>";
            counter++
        } else if (i % 3 == 0) {
            list[counter] = " Cameron " + "<br>";
            counter++
        } else if (i % 5 == 0) {
            list[counter] = " Sean " + "<br>";
            counter++
        } else {
            console.log(list);
            document.write(list);
            list = [];
            counter = 0;
            list[counter] = i;
            counter++
			
        }

    }
    console.log(list);
    document.write(list);
}

calculate();
