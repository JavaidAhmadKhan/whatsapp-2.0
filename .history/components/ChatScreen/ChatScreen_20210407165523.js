import { Avatar, IconButton } from "@material-ui/core";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { auth, db } from "../../firebase";
import {
  Container,
  Header,
  HeaderInformation,
  HeaderIcons,
  MessageContainer,
  EndOfMessage,
} from "./chatscreen.styles";
import { useCollection } from "react-firebase-hooks/firestore";

function ChatScreen({ chat, messages }) {
  const [user] = useAuthState(auth);
  const router = useRouter();
const [messagesSnapshot] = useCollection(db)

const showMessages = () => {

}

  return (
    <Container>
      <Header>
        <Avatar />
        <HeaderInformation>
          <h3>Rec Email</h3>
          <p>Last seen ...</p>
        </HeaderInformation>
        <HeaderIcons>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </HeaderIcons>
      </Header>
      <MessageContainer>
        {/* show messages */}
        <EndOfMessage />
      </MessageContainer>
    </Container>
  );
}

export default ChatScreen;
