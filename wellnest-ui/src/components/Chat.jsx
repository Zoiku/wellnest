import "../styles/Chat.css";
import { Avatar } from "@mui/material";

const ChatItem = () => (
  <div className="chat-item">
    <div>
      <Avatar>A</Avatar>
    </div>
    <div className="chat-item-meta">
      <div>Something</div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, tenetur!
      </div>
    </div>
  </div>
);

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat-left">
        <div className="chat-items">
          {Array.from(Array(2)).map((_, index) => (
            <ChatItem key={index} />
          ))}
        </div>
      </div>
      <div className="chat-right"></div>
    </div>
  );
};

export default Chat;
