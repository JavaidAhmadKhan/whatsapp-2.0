import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { Container } from "./chatscreen.styles";

function ChatScreen({ chat, messages }) {
  const [user] = useAuthState(auth);
  const router = useRouter()
  return (
    <Container>
      <h1>Chat Screen</h1>
    </Container>
  );
}

export default ChatScreen;
