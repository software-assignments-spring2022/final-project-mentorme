import "./chatOnline.css"

export default function ChatOnline({ who }) {
  // console.log("who is this!!!")
  // console.log(who)

  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img className="chatOnlineImg " src={who.picture} alt="" />

          <div className="chatOnlineBadge">

          </div>
        </div>

      </div>
      <span className="chatOnlineName">{who.first_name}  {who.last_name}</span>



    </div>
  )
}