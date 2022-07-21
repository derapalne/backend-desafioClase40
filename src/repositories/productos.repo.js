import ProductoDto  from "../dtos/index.js";
import { config } from "../utils/index.js";
import ProductosFactory  from "../factories/index.js";

export default class ProductosRepo {
    constructor() {
        const factory = new ProductosFactory();
        this.dao = factory.createDao(config.DB);
    }

    async add(prod) {
        const dto = new ProductoDto(prod);
        return this.dao.save(dto);
    }

    async getAll() {
        const dtos = await this.dao.getAll();
        return dtos.map((dto) => new ProductoDto(dto));
    }

    async getById(id) {
        const daoResponse = await this.dao.getById(id);
        const dto = new ProductoDto(daoResponse);
        return dto;
    }

    async updateById(id, prod) {
        const dto = new ProductoDto(prod);
        return this.dao.updateById(id, dto);
    }

    async deleteById(id) {
        return this.dao.deleteById(id);
    }
}
