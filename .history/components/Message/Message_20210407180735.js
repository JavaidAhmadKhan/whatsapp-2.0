import { Container } from "./message.styles";

function Message({ user, message }) {
  return (
    <Container>
      <p>{message.message}</p>
    </Container>
  );
}

export default Message;
