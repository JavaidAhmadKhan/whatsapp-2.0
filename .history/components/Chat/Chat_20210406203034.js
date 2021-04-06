import { Container, UserAvatar } from "./chat.styles";
import getRecipientEmail from "../../utilis/getRecipientEmail";
import { useAuthState } from "react-firebase-hooks/auth";

function Chat({ id, users }) {
  const [user] = useAuthState(auth);
  const recipientEmail = getRecipientEmail(users, user);
  return (
    <Container>
      <UserAvatar />
      <p>{recipientEmail}</p>
    </Container>
  );
}

export default Chat;
