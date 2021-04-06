import { Container, UserAvatar } from "./chat.styles";

function Chat({ id, users }) {
  return (
    <Container>
      <UserAvatar />
      <p>Recipient Email</p>
    </Container>
  );
}

export default Chat;
