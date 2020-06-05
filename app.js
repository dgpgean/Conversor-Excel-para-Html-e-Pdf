const fs = require('fs');
const Reader = require('./Reader');
const Process_data = require('./Process_data');
const Table = require('./Table');
const Html_Parse = require('./html_parse');
const Writer = require('./Writer');
const Pdf = require('./Pdf_writer');

const read = new Reader();
const writer = new Writer();

async function main(){
    const data = await read.Read('./users.csv');
    const data_processed = Process_data.Process(data);

    const users = new Table(data_processed);

    const html = await Html_Parse.Parse(users);

    //writer.Write("HtmlGerado.html",html);
    Pdf.Write_Pdf("New.pdf",html);

}


main();

