class Process_data{
    static Process(data){
        var dados = data.split("\r\n");
        const rows = [];

        dados.forEach(row=>{
            rows.push(row.split(','));
        })
    
        return rows;
    }
}

module.exports = Process_data