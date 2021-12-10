import React from "react";
import {
  Container,
  DeleteButton,
  DeleteText,
  InfoColumn,
  QuantityColumn,
  Name,
  Label,
  PropsValues,
  QuantityControllers,
  Controller,
  ControllerText,
} from "./style";

export const Card = ({
  id,
  name,
  category,
  value,
  quantity,
  deleteProduct,
  increaseQuantity,
  decreaseQuantity,
}) => {
  return (
    <>
      <Container>
        <DeleteButton activeOpacity={0.7} onPress={() => deleteProduct(id)}>
          <DeleteText>Deletar</DeleteText>
        </DeleteButton>
        <InfoColumn>
          <Name>{name}</Name>
          <Label>Categoria</Label>
          <PropsValues>{category}</PropsValues>
          <Label margin="5px 0 0 0">Valor</Label>
          <PropsValues>R$ {value}</PropsValues>
        </InfoColumn>
        <QuantityColumn>
          <Label margin="0 0 5px 27px">Quantidade</Label>
          <QuantityControllers>
            <Controller
              margin="0 15px 0 0"
              activeOpacity={0.7}
              onPress={() => decreaseQuantity(id, quantity)}
            >
              <ControllerText color="#DC3545">-</ControllerText>
            </Controller>
            <PropsValues margin="2px 0 0 0">{quantity}</PropsValues>
            <Controller
              margin="0 0 0 15px"
              activeOpacity={0.7}
              onPress={() => increaseQuantity(id, quantity)}
            >
              <ControllerText color="#28A745">+</ControllerText>
            </Controller>
          </QuantityControllers>
        </QuantityColumn>
      </Container>
    </>
  );
};
