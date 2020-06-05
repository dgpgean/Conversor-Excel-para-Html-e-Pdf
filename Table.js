class Table {
    constructor(array){
        this.header = array[0];
        array.splice(0,1);
        this.rows = array;
    }

    get RowsCount(){
        return this.rows.length;
    }
    get ColunsCount(){
        return this.header.length;
    }
}

module.exports = Table;