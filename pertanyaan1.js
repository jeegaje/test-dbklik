function checkValid(ambil, diTempat, dilayani){var pesananValid = true;
    var pesananValid = true;
    for (var i = 0; i < ambil.length; i++) {
        var pesananAmbilIndex = dilayani.indexOf(ambil[i]);
        var pesananMakanDiTempatIndex = dilayani.indexOf(diTempat[i]);
    
        if (pesananAmbilIndex === -1 || pesananMakanDiTempatIndex === -1 || pesananAmbilIndex > pesananMakanDiTempatIndex) {
            pesananValid = false;
            break;
        }
    }
    return pesananValid;
}

console.log(checkValid([1,3,5], [2,4,6], [1,2,4,6,5,3]));
console.log(checkValid([17,8,24], [12,19,2], [17,8,12,19,24,2]));

