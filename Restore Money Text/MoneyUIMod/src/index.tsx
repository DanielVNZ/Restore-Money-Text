import { ModRegistrar } from "cs2/modding";
import MoneyField from "mods/hello-world"; // Correct import statement


const register: ModRegistrar = (moduleRegistry) => {
    moduleRegistry.append('Game', MoneyField);
}

export default register;
