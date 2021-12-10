import styled from "styled-components/native";

export const Header = styled.View`
  width: 100%;
  background-color: #24292e;
  padding: 44px 0 20px 0;
  align-items: center;
`;

export const Title = styled.Text`
  color: #f1f1f2;
  font-family: Lato_400Regular;
  font-size: 18px;
`;

export const Scroll = styled.ScrollView`
  flex: 1;
  background-color: #f1f1f2;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 20px 0;
`;

export const Footer = styled.View`
  width: 100%;
  height: 68px;
  background-color: #24292e;
  align-items: center;
  justify-content: center;
`;

export const NavButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const NavImage = styled.Image`
  width: 36px;
  height: 36px;
`;

export const ReturnButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 8px;
  bottom: 16px;
`;

export const ReturnImage = styled.Image`
  width: 14px;
  height: 14px;
`;
