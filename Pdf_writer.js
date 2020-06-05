const pdf = require('html-pdf');

class Pdf_Write{
    static Write_Pdf(fileName, html){
        pdf.create(html,{}).toFile(fileName,(err)=>{

        });
    }
}

module.exports = Pdf_Write;