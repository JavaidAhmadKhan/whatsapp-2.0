import styled from "styled-components";
import { UserAvatar } from "../Sidebar/sidebar.styles";

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

const UserAvatar = styled(Avatar);
