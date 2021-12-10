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
  PreviewTitle,
  Label,
  Input,
  InputView,
  MoneyInfo,
  Select,
  SubmitButton,
  SubmitText,
} from "./style";
import { useNavigation } from "@react-navigation/native";
import ProductsTransactions from "../../database/Products";
import categories from "../../utils/categories";
import { Card } from "../../components/Card";

import list from "../../../assets/icons/List.png";
import returnArrow from "../../../assets/icons/Return.png";

export const Add = () => {
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [value, setValue] = useState();
  const [quantity, setQuantity] = useState();
  const navigation = useNavigation();

  const handleSubmit = () => {
    if (!name || !category || !value || !quantity) return;
    ProductsTransactions.createProduct({
      name,
      category,
      value,
      quantity,
    })
      .then((id) => {
        console.log("created with id: " + id);
        navigation.navigate("List");
      })
      .catch((err) => console.log(err));
  };

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
        <Container>
          <PreviewTitle>Pré-visualização</PreviewTitle>
          <Card
            name={name ?? "..."}
            category={category ?? "..."}
            value={value ?? "..."}
            quantity={quantity ?? "..."}
            editable={false}
          />
          <Label>Nome do Produto</Label>
          <InputView>
            <Input
              value={name}
              onChangeText={setName}
              placeholder="Insira o nome do produto"
              placeholderTextColor="#1F1F2599"
            />
          </InputView>
          <Label>Categoria</Label>
          <InputView>
            <Select
              selectedValue={category}
              onValueChange={(itemValue) => setCategory(itemValue)}
            >
              <Select.Item
                color="#1F1F2599"
                label="Selecione a Categoria"
                value={null}
              />
              {categories.length > 0 &&
                categories.map((category, index) => {
                  return (
                    <Select.Item
                      key={index}
                      label={category}
                      value={category}
                    />
                  );
                })}
            </Select>
          </InputView>
          <Label>Valor</Label>
          <InputView>
            <MoneyInfo>R$</MoneyInfo>
            <Input
              value={value}
              onChangeText={setValue}
              placeholder="0,00"
              placeholderTextColor="#1F1F2599"
              keyboardType="numeric"
            />
          </InputView>
          <Label>Quantidade</Label>
          <InputView>
            <Input
              value={quantity}
              onChangeText={setQuantity}
              placeholder="Insira a quantidade"
              placeholderTextColor="#1F1F2599"
              keyboardType="numeric"
            />
          </InputView>
          <SubmitButton activeOpacity={0.8} onPress={handleSubmit}>
            <SubmitText>Cadastrar</SubmitText>
          </SubmitButton>
        </Container>
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
