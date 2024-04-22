import { Items_Factory } from "./creadorConcreto/ItemsFactory";
import { Helper } from "./Helper";
var Gestor = (function () {
    function Gestor() {
    }
    Gestor.prototype.newItem = function (pName, pImgUrl, pPlayerID, pCenfomonID) {
        return Gestor.itemsFactory.createItem(Gestor.helper.generarID(), pName, pImgUrl, pPlayerID, pCenfomonID);
    };
    Gestor.itemsFactory = new Items_Factory();
    Gestor.helper = new Helper();
    return Gestor;
}());
export { Gestor };
//# sourceMappingURL=GestorFactoryMethod.js.map