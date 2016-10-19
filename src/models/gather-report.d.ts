import { Gather } from './gather.d';
import { Player } from './player.d';

export interface GatherReport extends Gather {
    id: number;
    primaryPlayer: Player;
    secondaryPlayer: Player;
}