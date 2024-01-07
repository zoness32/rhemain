import Square from "@/app/ui/squares/square";
import PlayerMarker from "@/app/ui/player-markers/playerMarker";

export default async function Page() {
  return (
    <>
      <div className="flex">
        <input type="text" className="w-full" placeholder="Player name..."/>
        <button>Add</button>
      </div>
      <div className="flex flex-col">
        <div className="flex">
          <Square>
            <PlayerMarker color={"green"}/>
          </Square>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
        </div>
        <div className="flex justify-between">
          <Square/>
          <Square/>
        </div>
        <div className="flex justify-between">
          <Square/>
          <Square/>
        </div>
        <div className="flex justify-between">
          <Square/>
          <Square/>
        </div>
        <div className="flex justify-between">
          <Square/>
          <Square/>
        </div>
        <div className="flex justify-between">
          <Square/>
          <Square/>
        </div>
        <div className="flex justify-between">
          <Square/>
          <Square/>
        </div>
        <div className="flex justify-between">
          <Square/>
          <Square/>
        </div>
        <div className="flex justify-between">
          <Square/>
          <Square/>
        </div>
        <div className="flex justify-between">
          <Square/>
          <Square/>
        </div>
        <div className="flex justify-between">
          <div className="flex">
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square className="bg-black text-white">Start</Square>
          </div>
          <div className="flex">
            <Square className="bg-black text-white">End</Square>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
          </div>
        </div>
      </div>
    </>
  )
}