import { IconButton } from '@material-ui/core';
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import {
  Container,
  Header,
  UserAvatar,
  IconsContainer,
} from "./sidebar.styles";

function Sidebar() {
  return (
    <Container>
      <Header>
        <UserAvatar />
        <IconsContainer>
          <IconButton>Send</IconButton>
          <ChatIcon />
          <MoreVertIcon />
        </IconsContainer>
      </Header>
    </Container>
  );
}

export default Sidebar;
