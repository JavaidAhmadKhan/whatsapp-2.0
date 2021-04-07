import Head from "next/head";
import { Container, ChatContainer } from "./styles";
import Sidebar from "../../components/Sidebar/Sidebar";
import ChatScreen from "../../components/ChatScreen/ChatScreen";

function Chat() {
  return (
    <Container>
      <Head>
        <title>Chat</title>
      </Head>
      <Sidebar />
      <ChatContainer>
          <ChatScreen/>
      </ChatContainer>
    </Container>
  );
}

export default Chat;

export async function getServerSideProps(context) {
  const ref =  db.collection("chats").doc(context.query.id)
}
