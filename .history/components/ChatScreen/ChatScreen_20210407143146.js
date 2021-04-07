import { Avatar } from "@material-ui/core";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "../../firebase";
import { Container, Header,HeaderInformation } from "./chatscreen.styles";

function ChatScreen({ chat, messages }) {
  const [user] = useAuthState(auth);
  const router = useRouter();
  return (
    <Container>
      <Header>
        <Avatar/>
        <HeaderInformation>

        </HeaderInformation>
      </Header>
    </Container>
  );
}

export default ChatScreen;
