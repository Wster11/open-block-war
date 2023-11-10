import websdk from "easemob-websdk";
import Danmu from "../Live/Danmu";

const conn = new websdk.connection({
  appKey: "easemob-demo#sdk111"
});

conn.addEventHandler("message", {
  onTextMessage: function (message) {
    Danmu.Apply({
      text: message.msg,
      id: message.from! as unknown as number,
      name: message.from!,
      face: 'https://avatars.githubusercontent.com/u/20762404?v=4',
      card: {
        level: 1,
        liveId: 233
      }
    });
  }
});

export default conn;
