import { Avatar } from "@material-ui/core";
import { Container, Header, UserAvatar } from "./sidebar.styles";

function Sidebar() {
  return (
    <Container>
      <Header>
        <UserAvatar />
      </Header>
    </Container>
  );
}

export default Sidebar;
