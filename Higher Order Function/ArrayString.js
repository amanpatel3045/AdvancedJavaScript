function arrstrptr(x) {
    for (var i = 0; i < x.length; i++) {
        if (x[i] == "a") {
            console.log(x[i]);
        }
    }
}
var a = arrstrptr(["a", "problem", "a", "upload"]);
