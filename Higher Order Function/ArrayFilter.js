var users = [
    { firstName: "Nrupul", lastName: "Dev", place: "Banglore" },
    { firstName: "Prateek", lastName: "Shukla", place: "Banglore" },
    { firstName: "Yogesh", lastName: "Bhat", place: "Kolkata" },
];

var ans = users.filter(function (ele) {
    return ele.place == "Banglore";
})
    .map(function (elem) {
        return elem.firstName + " " + elem.lastName;
    });

console.log(ans);
