import { Expansion } from "../productoConcreto/Expansion";
import { Potion } from "../productoConcreto/Potion";
import { Crystal } from "../productoConcreto/Crystal";
import { EvolutionRocks } from "../productoConcreto/EvolutionRocks";
var Items_Factory = (function () {
    function Items_Factory() {
    }
    Items_Factory.prototype.createItem = function (id, pName, pImgURL, nPlayerID, pCenfomonID) {
        if (pName == "Expansion") {
            return new Expansion(id, 0, pName, pImgURL, 2, nPlayerID);
        }
        else if (pName == "Potion") {
            return new Potion(id, 0, "Potion", pImgURL, "Normal", pCenfomonID);
        }
        else if (pName == "Med Potion") {
            return new Potion(id, 0, "Potion", pImgURL, "Medium", pCenfomonID);
        }
        else if (pName == "Max Potion") {
            return new Potion(id, 0, "Potion", pImgURL, "Maximum", pCenfomonID);
        }
        else if (pName == "Crystal Beta") {
            return new Crystal(id, 0, "Crystal", pImgURL, pCenfomonID, 1, "Beta");
        }
        else if (pName == "Crystal Alfa") {
            return new Crystal(id, 0, "Crystal", pImgURL, pCenfomonID, 2, "Alfa");
        }
        else if (pName == "Fire Rock") {
            return new EvolutionRocks(id, 0, "Evolution Rocks", pImgURL, pCenfomonID, "Fire");
        }
        else if (pName == "Dark Rock") {
            return new EvolutionRocks(id, 0, "Evolution Rocks", pImgURL, pCenfomonID, "Dark");
        }
        else {
            return new Crystal(id, 0, "Crystal", pImgURL, pCenfomonID, 1, "Beta");
        }
    };
    return Items_Factory;
}());
export { Items_Factory };
//# sourceMappingURL=ItemsFactory.js.map