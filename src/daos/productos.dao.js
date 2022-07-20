import knex from "knex";

let instance = null;

class ProductosDao {
    constructor(config) {
        this.tableName = "productos";
        this.knex = knex(config);
        this.id = Math.floor(Math.random() * 1000);
    }

    static getInstance(config) {
        if (!instance) {
            instance = new ProductosDao(config);
        }
        return instance;
    }

    async save(data) {
        try {
            let respId = null;
            await this.knex(this.tableName)
                .insert(data)
                .then((resp) => {
                    respId = resp[0];
                })
                .catch((e) => console.log(e));
            return respId;
        } catch (error) {
            console.log(error);
        }
    }

    async getById(id) {
        try {
            let data = null;
            await this.knex(this.tableName)
                .where({ id: id })
                .select("*")
                .then((dataResp) => {
                    // console.log(dataResp);
                    data = dataResp[0];
                })
                .catch((e) => console.log(e));
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll() {
        try {
            let data = null;
            await this.knex(this.tableName)
                .select("*")
                .then((dataResp) => {
                    data = dataResp;
                })
                .catch((e) => console.log(e));
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async updateById(id, data) {
        try {
            let response = null;
            await this.knex(this.tableName)
                .where({ id: id })
                .update({
                    title: data.title,
                    price: data.price,
                    description: data.description,
                })
                .then((dataResp) => {
                    response = dataResp;
                })
                .catch((e) => console.log(e));
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async deleteById(id) {
        try {
            let response = null;
            await this.knex(this.tableName)
                .where({id: id})
                .del()
                .then((data) => {
                    response = data;
                })
                .catch((e) => console.log(e));
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async deleteAll() {
        try {
            let response = null;
            await this.knex(this.tableName)
                .del()
                .then((data) => {
                    response = data;
                })
                .catch((e) => console.log(e));
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async chequearTabla() {
        try {
            this.knex.schema.hasTable(this.tableName).then((exists) => {
                if (!exists) {
                    this.knex.schema
                        .createTable(this.tableName, (table) => {
                            table.increments("id");
                            table.string("title");
                            table.float("price");
                            table.string("description");
                        })
                        .then(() => console.log("Tabla Creada:", this.tableName))
                        .catch((e) => console.log(e));
                }
            });
        } catch (e) {
            console.log(e);
        }
    }
}

export default ProductosDao;
