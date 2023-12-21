require('dotenv').config({path: '../.env'});

const student = {
    voornaam: process.env.VOORNAAM,
    achternaam: process.env.ACHTERNAAM,
    studentnummer: process.env.STUDENTNUMMER,
    adres: process.env.ADRES,
  };

console.log(student);