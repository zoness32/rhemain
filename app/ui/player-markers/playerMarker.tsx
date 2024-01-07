export default async function PlayerMarker({color}: {color: string}) {
  return (
    <div className={`bg-${color}-500 drop-shadow-md shadow-sm rounded-full w-8 h-8 aspect-square`}>

    </div>
  )
}