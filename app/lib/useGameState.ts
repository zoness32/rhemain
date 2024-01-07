import { useState } from "react";
import Player from "@/app/lib/player";

export default function useGameState(){
  const [players, setPlayers] = useState<Player[]>([]);

  const addPlayer = (player: Player) => {
    players.push(player);
    setPlayers(players);
  }

  return {
    players
  }
}