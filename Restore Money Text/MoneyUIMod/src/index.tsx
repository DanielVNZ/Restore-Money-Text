import { ModRegistrar } from "cs2/modding";
import MoneyField from "mods/hello-world"; // Correct import statement
import PopField from "./mods/population";


const register: ModRegistrar = (moduleRegistry) => {
    moduleRegistry.append('Game', MoneyField);
    moduleRegistry.append('Game', PopField);
}

export default register;
