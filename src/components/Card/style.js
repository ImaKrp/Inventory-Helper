import styled from "styled-components/native";

export const Container = styled.View`
  margin: 0 0 22px 0;
  height: 140px;
  width: 92%;
  background-color: #f8f8f8;
  border-radius: 6px;
  shadow-color: #00000099;
  elevation: 4;
  overflow: hidden;
  flex-direction: row;
  padding: 11px 14px;
`;

export const DeleteButton = styled.TouchableOpacity`
  background-color: #dc3545;
  width: 185px;
  position: absolute;
  height: 66px;
  top: -26px;
  right: -50px;
  border-radius: 30px;
  align-items: center;
  justify-content: flex-end;
  z-index: 2;
`;

export const DeleteText = styled.Text`
  color: #f8f8f8;
  font-family: Lato_400Regular;
  font-size: 18px;
  margin: 0 40px 10px 0;
`;

export const InfoColumn = styled.View`
  width: 56%;
  height: 100%;
`;

export const QuantityColumn = styled.View`
  width: 44%;
  height: 100%;
  padding-top: 46px;
`;

export const Name = styled.Text`
  color: #1f1f25;
  font-family: Lato_400Regular;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Label = styled.Text`
  color: #1f1f2599;
  font-family: Lato_400Regular;
  font-size: 14px;
  margin-bottom: 2px;
  margin: ${({ margin }) => margin ?? 0};
`;

export const PropsValues = styled.Text`
  color: #1f1f25;
  font-family: Lato_400Regular;
  font-size: 16px;
  margin-bottom: 5px;
  margin: ${({ margin }) => margin ?? 0};
`;

export const QuantityControllers = styled.View`
  flex-direction: row;
  align-items: center;
  height: 80%;
`;

export const Controller = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  background-color: #f8f8f8;
  border-radius: 3px;
  shadow-color: #00000099;
  elevation: 4;
  align-items: center;
  justify-content: center;
  margin: ${({ margin }) => margin};
`;

export const ControllerText = styled.Text`
  color: ${({ color }) => color ?? '#000'};
  font-family: Lato_400Regular;
  font-size: 26px;
`;