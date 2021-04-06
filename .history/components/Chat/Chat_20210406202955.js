import { Container, UserAvatar } from "./chat.styles";
import getRecipientEmail from "../../utilis/getRecipientEmail";

function Chat({ id, users }) {
  const recipientEmail = getRecipientEmail(users, user);
  return (
    <Container>
      <UserAvatar />
      <p>{recipientEmail}</p>
    </Container>
  );
}

export default Chat;
