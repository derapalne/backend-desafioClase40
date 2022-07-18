import parseArgs from "minimist";
import "dotenv/config"


const args = parseArgs(process.argv.slice(2));

export default  {
    PORT: args.port || process.env.PORT,
    DB: args.db || process.env.DB,
}