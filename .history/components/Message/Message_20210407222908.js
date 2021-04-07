import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { Container, MessageElement, Sender, Receiver } from "./message.styles";

function Message({ user, message }) {
  const [userLoggedIn] = useAuthState(auth);

  const TypeOfMessage = user === userLoggedIn.email ? Sender : Receiver;

  return (
    <Container>
      <TypeOfMessage>{message.message}</TypeOfMessage>
    </Container>
  );
}

export default Message;
