var i = 2;

while (i<=65536) {
    console.log(i);
    i *= 2
}

var allCones = Math.floor(Math.random() * 50) + 50;

do {
    var conesPurchased = Math.floor(Math.random() * 5) + 1;
    if(conesPurchased <= allCones) {
        console.log(conesPurchased + ' cones sold ');
        allCones = allCones - conesPurchased;
    }
    else {
        console.log(' Unable to sell you ' + conesPurchased + ' Available cones ' + allCones + '...')
    }
} while (allCones > 0);

console.log(' All cones have been sold ');