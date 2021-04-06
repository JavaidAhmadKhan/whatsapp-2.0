import styled from "styled-components";
import { Avatar } from "@material-ui/core";

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
`;

export const UserAvatar = styled(Avatar)``;

export const IconsContainer = styled.div``;
