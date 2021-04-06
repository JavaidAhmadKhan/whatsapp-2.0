import { Avatar } from "@material-ui/core";
import styled from "styled-components";


function Chat({ id, users }) {
  return (
    <Container>
      <UserAvatar />
      <p>Recipient Email</p>
    </Container>
  );
}

export default Chat;

const Container = styled.div``;

const UserAvatar = styled(Avatar)``;
