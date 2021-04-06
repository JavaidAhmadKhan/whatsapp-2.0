import { Avatar } from "@material-ui/core";
import { Container, Header, UserAvatar } from "./sidebar.styles";

function Sidebar() {
  return (
    <Container>
      <Header>
        <Avatar />
      </Header>
    </Container>
  );
}

export default Sidebar;
