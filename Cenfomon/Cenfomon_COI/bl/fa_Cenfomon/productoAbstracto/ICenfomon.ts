
import { Cenfo } from "../../decoratorItems/componente/Cenfo";
import {Movimiento} from "../../f_movimiento/Producto/Movimiento";
import {Especie} from "../../entities/Especie";
import { Observer } from "../../Observer/Concreto/Observer";


export interface ICenfomon extends Cenfo {
    getdefence(): number;
    setdefence(value: number): void;
    getexperience(): number;
    setexperience(value: number): void;
    getid(): number;
    setid(value: number): void;
    getmovimientos(): Array<Movimiento>;
    setmovimientos(value: Array<Movimiento>): void;
    getname(): string;
    setname(value: string): void;
    getprotection(): number;
    setprotection(value: number): void;
    getspecie(): Especie;
    setspecie(value: Especie): void;
    getvida(): number;
    setvida(value: number): void;
    getrock(): string ;
    setrock(value: string): void;

    //Clases del observador
    addObserver(o:Observer):void;
    notifyObervers(): void;
}