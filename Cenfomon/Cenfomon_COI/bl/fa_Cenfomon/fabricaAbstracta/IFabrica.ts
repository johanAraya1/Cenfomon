import { ICenfomon} from "../productoAbstracto/ICenfomon";

export interface  Fabrica{
    crearCenfomon():ICenfomon;
}