import ChatIcon from '@material-ui/icons/Chat';
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
        <IconsContainer></IconsContainer>
      </Header>
    </Container>
  );
}

export default Sidebar;
