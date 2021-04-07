import { Avatar, Button } from "@material-ui/core";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { auth } from "../../firebase";
import {
  Container,
  Header,
  HeaderInformation,
  HeaderIcons,
} from "./chatscreen.styles";

function ChatScreen({ chat, messages }) {
  const [user] = useAuthState(auth);
  const router = useRouter();
  return (
    <Container>
      <Header>
        <Avatar />
        <HeaderInformation>
          <h3>Rec Email</h3>
          <p>Last seen ...</p>
        </HeaderInformation>
        <HeaderIcons>
          <Button>
            <AttachFileIcon />
            <MoreVertIcon/>
          </Button>
        </HeaderIcons>
      </Header>
    </Container>
  );
}

export default ChatScreen;
