import useAuth from "../hooks/useAuth";
import "../styles/Chat.css";

const Chat = () => {
  const { auth } = useAuth();

  return (
    <div className="chat-app">
      <div className="chat-messages-wrapper"></div>
      <div className="chat-session-wrapper"></div>
    </div>
  );
};

export default Chat;
