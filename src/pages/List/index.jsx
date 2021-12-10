import React, { useState } from "react";
import {
  Header,
  Title,
  SearchContainer,
  SearchImage,
  Search,
  Scroll,
  Container,
  Footer,
  NavButton,
  NavImage,
  RegisterButton,
  RegisterImage,
  RegisterText,
} from "./style";
import { useNavigation } from "@react-navigation/native";

import { Card } from "../../components/Card";

import ProductsTransactions from "../../database/Products";
import { formatMoneyValue } from "../../utils/formatValues";

import searchIcon from "../../../assets/icons/Search.png";
import selectedList from "../../../assets/icons/SelectedList.png";
import addImage from "../../../assets/icons/Add.png";

export const List = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();

  //? ProductsTransactions.createProduct({
  //?   name: "Julio",
  //?   category: "Categoria",
  //?   value: 0,
  //?   quantity: 2,
  //? })
  //?   .then((id) => console.log("created with id: " + id))
  //?   .catch((err) => console.log(err));

  const fetchProducts = () => {
    ProductsTransactions.listAllProducts().then((products) =>
      setProducts(products)
    );
  };

  const deleteProduct = (id) => {
    ProductsTransactions.deleteProduct(id).then(() => fetchProducts());
  };

  const increaseQuantity = (id, quantity) => {
    ProductsTransactions.updateProduct(id, Number(quantity) + 1)
      .then(() => fetchProducts())
      .catch((err) => console.log(err));
  };

  const decreaseQuantity = (id, quantity) => {
    if (Number(quantity) === 0) return;
    ProductsTransactions.updateProduct(id, Number(quantity) - 1)
      .then(() => fetchProducts())
      .catch((err) => console.log(err));
  };

  fetchProducts();

  return (
    <>
      <Header>
        <Title>Controle de Estoque</Title>
        <SearchContainer>
          <SearchImage source={searchIcon} />
          <Search
            placeholder="Procurar produto"
            placeholderTextColor="#F1F1F2a6"
            value={search}
            onChangeText={setSearch}
          />
        </SearchContainer>
      </Header>
      <Scroll>
        <Container>
          <RegisterButton
            activeOpacity={0.7}
            style={{
              borderStyle: "dashed",
            }}
            onPress={() => navigation.navigate("Add")}
          >
            <RegisterImage source={addImage} />
            <RegisterText>Adicionar Produto</RegisterText>
          </RegisterButton>

          {products.length > 0 &&
            products
              .filter(
                ({ name }) =>
                  name.toLowerCase()?.indexOf(search.toLowerCase()) > -1
              )
              .map((product, id) => {
                return (
                  <Card
                    key={id}
                    id={product.id}
                    name={product.name}
                    category={product.category}
                    value={formatMoneyValue(Number(product.value))}
                    quantity={product.quantity}
                    deleteProduct={deleteProduct}
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                  />
                );
              })}
        </Container>
      </Scroll>
      <Footer>
        <NavButton activeOpacity={0.8}>
          <NavImage source={selectedList} />
        </NavButton>
      </Footer>
    </>
  );
};
