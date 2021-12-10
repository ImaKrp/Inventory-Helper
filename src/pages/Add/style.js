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
  padding: 12px 0 20px 0;
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

export const PreviewTitle = styled.Text`
  color: #1f1f25;
  font-family: Lato_400Regular;
  font-size: 18px;
  width: 92%;
  margin-bottom: 12px;
`;

export const Label = styled.Text`
  color: #1f1f25cc;
  font-family: Lato_400Regular;
  font-size: 18px;
  width: 92%;
  margin: ${({ margin }) => margin ?? "0 0 3px 0"};
`;

export const Input = styled.TextInput`
  color: #1f1f25;
  font-family: Lato_400Regular;
  font-size: 18px;
  height: 34px;
  align-items: center;
  width: 100%;
  padding: 0 2px;
`;

export const InputView = styled.View`
  width: 92%;
  padding: 0 6px;
  margin-bottom: 12px;
  border-bottom-color: #1f1f2533;
  border-bottom-width: 2px;
  flex-direction: row;
  align-items: center;
`;

export const MoneyInfo = styled.Text`
  color: #1f1f25cc;
  font-family: Lato_400Regular;
  font-size: 18px;
  margin-right: 4px;
`;

export const Select = styled.Picker`
  color: #1f1f25;
  font-family: Lato_400Regular;
  font-size: 18px;
  height: 34px;
  align-items: center;
  width: 100%;
`;

export const SubmitButton = styled.TouchableOpacity`
  background-color: #24292e;
  border-radius: 6px;
  margin-top: 30px;
  shadow-color: #00000099;
  elevation: 4;
  width: 175px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const SubmitText = styled.Text`
  color: #FAFBFC;
  font-family: Lato_400Regular;
  font-size: 18px;
`;
