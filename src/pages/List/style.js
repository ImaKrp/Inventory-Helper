import styled from "styled-components/native";

export const Header = styled.View`
  width: 100%;
  background-color: #24292e;
  padding: 44px 0 0 0;
  align-items: center;
`;

export const Title = styled.Text`
  color: #f1f1f2;
  font-family: Lato_400Regular;
  font-size: 18px;
`;

export const Search = styled.TextInput`
  color: #f1f1f2;
  font-family: Lato_400Regular;
  font-size: 18px;
  flex: 1;
`;

export const SearchContainer = styled.View`
  width: 92%;
  background-color: #f1f1f226;
  margin: 20px 0 15px 0;
  height: 50px;
  border-radius: 6px;
  padding: 0 6px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SearchImage = styled.Image`
  width: 21px;
  height: 21px;
  margin: 0 13px 0 10px;
`;

export const Scroll = styled.ScrollView`
  flex: 1;
  background-color: #f1f1f2;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 20px 0 0 0;
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
  background-color: #f1f1f20d;
  border-radius: 6px;
`;

export const NavImage = styled.Image`
  width: 36px;
  height: 36px;
`;

export const RegisterButton = styled.TouchableOpacity`
  width: 92%;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  border: 2px solid #1f1f2533;
  border-radius: 6px;
  flex-direction: row;
  margin-bottom: 22px;
`;

export const RegisterImage = styled.Image`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

export const RegisterText = styled.Text`
  color: #1f1f25;
  font-family: Lato_400Regular;
  font-size: 16px;
`;
