const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const url = 'https://id.wikipedia.org/wiki/Daftar_kabupaten_di_Indonesia';

async function getData() {

    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const kabupatenData = [];
    
    $('table.wikitable tbody tr').each((index, element) => {
        const columns = $(element).find('td');
        const kabupaten = columns.eq(1).text().trim();
        const provinsi = columns.eq(2).text().trim();

        if (kabupaten && provinsi) {
            kabupatenData.push({ kabupaten, provinsi });
        }
    });

    const csvData = kabupatenData.map(item => `${item.kabupaten},${item.provinsi}`).join('\n');
    fs.writeFileSync('kabupaten_data.csv', 'Kabupaten,Provinsi\n' + csvData, 'utf-8');

    console.log('Data berhasil diambil dan disimpan dalam file CSV.');
}

getData();
