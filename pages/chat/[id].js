import Head from "next/head";
import { Container, ChatContainer } from "./styles";
import Sidebar from "../../components/Sidebar/Sidebar";

function Chat() {
  return (
    <Container>
      <Head>
        <title>Chat</title>
      </Head>
      <Sidebar />
      <ChatContainer>
          
      </ChatContainer>
    </Container>
  );
}

export default Chat;
