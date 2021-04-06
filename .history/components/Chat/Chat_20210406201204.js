import { Avatar } from "@material-ui/core";


function Chat({ id, users }) {
  return (
    <Container>
      <UserAvatar />
      <p>Recipient Email</p>
    </Container>
  );
}

export default Chat;

export const Container = styled.div``;

export  const  UserAvatar = styled(Avatar)``;
