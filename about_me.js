var command = ["a", "t", " ", "a", "b", "o", "u", "t", "-", "m", "e", ".", "t", "x", "t"]
var me = ["******************************************************************", "My skills:", " ", "- Java 11 (Spring Boot 2, Spigot, Forge, Jdbc, Hibernate, etc..)", "- RDBMS (MySQL, PostgreSQL) + SQL on medium level", "- NoSQL(Redis)", "- C# 7+ (.NET Framework 4.5+, .NET Core 3+, WPF)", "Languages: ", " ", "- English: Intermediate,", "- Polish: Advanced,", "- Russian: Advanced", " ", "If you interested in my setup:", " ", "PC: I5 9400f, RX584, 16GB 2666MHZ, NVMe + HDD", "LAPTOP: I5 1135G7, 16GB 3200MHZ, NVMe", "OS: PC -> Win10, Custom Manjaro | Laptop -> Win11", "******************************************************************", "", "btw u can spawn pepe if you click randomly somewhere"];

function load() {
    var word = "guest@my-website $> c";

    for (let i = 0; i < command.length; i++) {
        setTimeout(function timer() {
            word += "_";
            word = word.split('_').join(command[i]);
            document.getElementById("app").innerHTML = word;
            if (word.length >= 36) {
                console.log("ok");
                word = "";
                word += "\n";
                loadText(word);
            }
        }, i * 100);
    }

}

function getText() {
    let word = "";
    for (let i = 0; i < me.length; i++) {
        word += me[i] + "\n";
    }
    return word;
}

function loadText(word) {
    var text = "";
    for (let i = 0; i < me.length; i++) {
        setTimeout(function timer() {
            word += me[i] + "\n";
            document.getElementById("app").innerHTML = word;
        }, i * 200);
    }
}