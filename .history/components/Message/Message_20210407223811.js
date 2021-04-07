import moment from "moment";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import {
  Container,
  MessageElement,
  Sender,
  Receiver,
  TimeStamp,
} from "./message.styles";

function Message({ user, message }) {
  const [userLoggedIn] = useAuthState(auth);

  const TypeOfMessage = user === userLoggedIn.email ? Sender : Receiver;

  return (
    <Container>
      <TypeOfMessage>
        {message.message}
<TimeStamp>
        {message.timestamp ? moment(message.timestamp).format("LT") : "..."}
        </TimeStamp>
      </TypeOfMessage>
    </Container>
  );
}

export default Message;
