import knex from "knex";

let instance = null;

class ProductosDao {
    constructor(config) {
        this.tableName = "productos";
        this.knex = knex(config);
        this.id = Math.floor(Math.random()*1000);
    }

    static getInstance(config) {
        if (!instance) {
            instance = new ProductosDao(config);
        }
        return instance;
    }

    async save(data) {
        try {
            await this.knex(this.tableName)
                .insert(data)
                .then(() => console.log(data))
                .catch((e) => console.log(e));
        } catch (error) {
            console.log(error);
        }
    }

    async getById(id) {
        try {
            await this.knex(this.tableName)
                .where({ id: id })
                .select("*")
                .then((data) => {
                    return data;
                })
                .catch((e) => console.log(e));
        } catch (error) {
            console.log(error);
        }
    }

    async getAll() {
        try {
            await this.knex(this.tableName)
                .select("*")
                .then((data) => {
                    return data;
                })
                .catch((e) => console.log(e));
        } catch (error) {
            console.log(error);
        }
    }

    async updateById(id, data) {
        await this.knex(this.tableName)
            .update({
                title: data.title,
                price: data.price,
                description: data.description,
            })
            .then((data) => {
                return data;
            })
            .catch((e) => console.log(e));
        try {
        } catch (error) {
            console.log(error);
        }
    }

    async deleteById() {
        try {
            await this.knex(this.tableName)
                .del()
                .then((data) => {
                    return data;
                })
                .catch((e) => console.log(e));
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
              } else {
                  console.log("Tabla Productos existente.");
              }
          });
      } catch (e) {
          console.log(e)
      }
  }
}

export default ProductosDao;
