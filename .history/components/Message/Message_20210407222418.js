import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { Container, MessageElement } from "./message.styles";

function Message({ user, message }) {
  const [userLoggedIn] = useAuthState(auth);

  return (
    <Container>
      <p>{message.message}</p>
    </Container>
  );
}

export default Message;
