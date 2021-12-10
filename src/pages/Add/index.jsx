import React, { useState } from "react";
import {
  Header,
  Title,
  ReturnButton,
  ReturnImage,
  Scroll,
  Container,
  Footer,
  NavButton,
  NavImage,
} from "./style";
import { useNavigation } from "@react-navigation/native";

import ProductsTransactions from "../../database/Products";
import categories from "../../utils/categories";
import { Card } from "../../components/Card";

import list from "../../../assets/icons/List.png";
import returnArrow from "../../../assets/icons/Return.png";

export const Add = () => {
  const navigation = useNavigation();

  //? ProductsTransactions.createProduct({
  //?   name: "Biasus",
  //?   category: "Categoria",
  //?   value: 0,
  //?   quantity: 2,
  //? })
  //?   .then((id) => console.log("created with id: " + id))
  //?   .catch((err) => console.log(err));

  return (
    <>
      <Header>
        <ReturnButton
          activeOpacity={0.7}
          onPress={() => navigation.navigate("List")}
        >
          <ReturnImage source={returnArrow} />
        </ReturnButton>
        <Title>Cadastro de Estoque</Title>
      </Header>
      <Scroll>
        <Container></Container>
      </Scroll>
      <Footer>
        <NavButton
          activeOpacity={0.7}
          onPress={() => navigation.navigate("List")}
        >
          <NavImage source={list} />
        </NavButton>
      </Footer>
    </>
  );
};
