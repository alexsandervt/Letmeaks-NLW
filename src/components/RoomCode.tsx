import copyImg from '../assets/images/copy.svg'
import '../styles/roomCode.scss'

type RoomCodeProps = {
  code: string,
}

export function RoomCode(props: RoomCodeProps){

  function copyRoomCodeToClipboard(){
    navigator.clipboard.writeText(props.code)
  }

  return(
    <button className="room-code" onChange={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>sala #{props.code}</span>
    </button>
  )
}