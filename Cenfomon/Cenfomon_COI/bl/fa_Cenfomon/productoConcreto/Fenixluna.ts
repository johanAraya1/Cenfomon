import {ICenfomon} from "../productoAbstracto/ICenfomon";
import {Especie} from "../../entities/Especie";
import { Potion } from "../../factoryMethodItems/productoConcreto/Potion";
import { EvolutionRocks } from "../../factoryMethodItems/productoConcreto/EvolutionRocks";
import {Movimiento} from "../../f_movimiento/Producto/Movimiento";
import { Observer } from "../../Observer/Concreto/Observer";
import {Item} from "../../factoryMethodItems/Producto/Item";

export class Fenixluna implements ICenfomon{
    private _defence: number;
    private _experience: number;
    private _id: number;
    private _movimientos: Array<Movimiento>;
    private _name: string;
    private _protection: number;
    private _specie: Especie;
    private _vida: number;
    private _rock: string;


    decorateCenfomon(item: Item) {

        if(item.getname() == "Potion"){

            let pot = item as Potion;
            if(pot.strength == "Normal"){
                this._vida+=20;
                if(this.vida > 100){
                    this.vida = 100
                }
            }else if(pot.strength == "Medium"){
                this._vida+=45;
                if(this.vida > 100){
                    this.vida = 100
                }
            }else if (pot.strength == "Maximun"){
                this._vida= 100
            }

        }else if (item.getname() == "Evolution Rocks"){
            let rock = item as EvolutionRocks;
                this._rock = rock.type;
         }
    }
    /**
     * Get y sets
     */


    getdefence(): number {
        return this._defence;
    }

    setdefence(value: number): void {
        this._defence = value;
    }

    getexperience(): number {
        return this._experience;
    }

    setexperience(value: number): void {
        this._experience = value;
    }

    getid(): number {
        return this._id;
    }

    setid(value: number): void {
        this._id = value;
    }

    getmovimientos(): Array<Movimiento> {
        return this._movimientos;
    }

    setmovimientos(value: Array<Movimiento>): void {
        this._movimientos = value;
    }

    getname(): string {
        return this._name;
    }

    setname(value: string): void {
        this._name = value;
    }

    getprotection(): number {
        return this._protection;
    }

    setprotection(value: number): void {
        this._protection = value;
    }

    getspecie(): Especie {
        return this._specie;
    }

    set specie(value: Especie) {
        this._specie = value;
    }

    getvida(): number {
        return this._vida;
    }

    set vida(value: number) {
        this._vida = value;
    }
    get rock(): string {
        return this._rock;
    }

    set rock(value: string) {

        this._rock = value;
    }
    /**
     * Constructor vacio
     */
    constructor() {
        this._defence = Math.random()+100;
        this._experience = 0;
        this._id = Math.random()+9999;
        this._movimientos = new Array<Movimiento>();
        this._name = "Fenixluna";
        this._protection = Math.random()+100;
        this._specie = new Especie();
        this._vida = 100;
        this._rock = "none";
        //Observer
        let observador = new Observer();
        observador.setname(this._name);
        this._observers = [observador];
    }
    setspecie(value: Especie): void {
         this._specie = value;
    }
    setvida(value: number): void {
        this._vida = value;
    }
  getrock(): string {
        return this._rock; 
    }
    setrock(value: string): void {
       this._rock = value;
    }
    //CLASES DEL PATRÓN OBSERVADOR
    private _observers: Array<Observer> = new Array();
    addObserver(o: Observer) {
        this._observers.push(o);
        this.notifyObervers();
    }
    notifyObervers() {
        this._observers.forEach(element => {
            element.update(this.getname(), this.getexperience());
        });       
    }

}