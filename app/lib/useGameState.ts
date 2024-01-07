import { useState } from "react";
import Player from "@/app/lib/player";

export default function useGameState(){
  const [players, setPlayers] = useState<Player[]>([]);

  const addPlayer = (player: Player) => {
    const newPlayers = players.push(player);
    setPlayers(newPlayers);
  }

  return {
    players
  }
}