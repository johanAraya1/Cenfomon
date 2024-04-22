import { Player } from '../../entities/Player';
export interface IPermisoProxy{
    permiso(usuario:Player):Player;
}
