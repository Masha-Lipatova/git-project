import { useState } from "react";
import ChatBlock from "./Chat-block";
import Comment from "./Comment";
import { useLocalStorage } from "../../hook/useLocalStorage";
const Chat = () => {
  const [chatData, setChatData] = useLocalStorage("CHAT", []);
  const [inputValue, setInputValue] = useState("");
  const [showDialogReg, setShowDialogReg] = useState(false);

  const [user] = useLocalStorage("USER");

  console.log(chatData);

  const sendMessage = () => {
    if (user) {
      setChatData([...chatData, `${user}:${inputValue}`]);
      setInputValue("");
    } else {
      setShowDialogReg(true);
      setInputValue("");
    }
  };

  return (
    <div>
      <ChatBlock chatData={chatData}></ChatBlock>
      <Comment
        inputValue={inputValue}
        setInputValue={setInputValue}
        setChatData={setChatData}
        sendMessage={sendMessage}
        showDialogReg={showDialogReg}
      ></Comment>
    </div>
  );
};

export default Chat;