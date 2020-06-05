const ejs = require('ejs');

class Html_Parse{
   static  async Parse(table){
        return await ejs.renderFile('./table.ejs',{header:table.header,rows:table.rows});
    }
}

module.exports = Html_Parse; 