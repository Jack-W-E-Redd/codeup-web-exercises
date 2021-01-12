"use strict";

// var beverage = {
//     brandName: ["boba tea"];
//     type: ["milk tea"];
//     volumeInLiters: [1];
//     priceInCenters: [0.5];
//     expirationDate: ["06/16/2021"];
//     dateOfPreviousSips: ["01/05/2021"];
//     isOpen: true;
// }

// keep in quotes and not just brackets


// var users = [
//     {
//         givenName: 'Sam',
//         age: 21
//     },
//     {
//         givenName: 'Cathy',
//         age: 34
//     },
//     {
//         givenName: 'Karen',
//         age: 43
//     }
//
// ];

var today = new Date();
var dd = String(today.GetDate()).padStart(2, '0');
var mm = String(value: today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.write(today);


var dog = {
    breed: "German Australian Shepherd",
    weightInPounds: 34,
    age: .6,
    color: "brown",
    canBreed: true,
    shotRecords: [
        {
            typeOfShot: "Rabies",
            dateOfShot: "Sept 19, 2020",
        },
        {
            typeOfShot: "Lyme",
            dateOfShot: "Sept 19, 2020",
        },
        {
            typeOfShot: "Bordetella",
            dateOfShot: "Aug 13, 2020",
        },

    ],
    bark: function() {
        console.log("Woof!");
    },
    getOlder: function() {
        this.age += 1;
    },
    disableBreeding: function() {
        this.CanBreed = false;
    },
    vaccinate: function (nameOfVaccination) {
        var newShot = {
            typeOfShot: nameOfVaccination,
            shotDate: today,
        };
        dog.shotRecords.push(newShot);
    },

}
