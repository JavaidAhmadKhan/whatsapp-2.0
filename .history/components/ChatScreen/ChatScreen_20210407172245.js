import { Avatar, IconButton } from "@material-ui/core";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

import { auth, db } from "../../firebase";
import {
  Container,
  Header,
  HeaderInformation,
  HeaderIcons,
  MessageContainer,
  EndOfMessage,
  InputContainer,
} from "./chatscreen.styles";
import { useCollection } from "react-firebase-hooks/firestore";

function ChatScreen({ chat, messages }) {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const [messagesSnapshot] = useCollection(
    db
      .collection("chats")
      .doc(router.query.id)
      .collection("messages")
      .orderBy("timestamp", "asc")
  );

  const showMessages = () => {
    if (messagesSnapshot) {
      return messagesSnapshot.docs.map((message) => (
        <Message
          key={message.id}
          user={message.data().user}
          message={{
            ...message.data(),
            timestamp: message.data().timestamp?.toDate().getTime(),
          }}
        />
      ));
    }
  };

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
        {showMessages()}
        <EndOfMessage />
      </MessageContainer>
      <InputContainer>
<InsertEmoticonIcon/>
      </InputContainer>
    </Container>
  );
}

export default ChatScreen;
