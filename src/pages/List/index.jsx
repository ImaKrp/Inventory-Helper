import React, { useState } from "react";
import {
  Header,
  Title,
  SearchContainer,
  SearchButton,
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

import { Card } from "../../components/Card";

import searchIcon from "../../../assets/icons/Search.png";
import selectedList from "../../../assets/icons/SelectedList.png";
import addImage from "../../../assets/icons/Add.png";

export const List = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const submitSearch = () => {
    console.log(searchInput);
    setSearchValue(searchInput);
  };

  return (
    <>
      <Header>
        <Title>Controle de Estoque</Title>
        <SearchContainer>
          <SearchButton activeOpacity={0.7} onPress={submitSearch}>
            <SearchImage source={searchIcon} />
          </SearchButton>
          <Search
            placeholder="Procurar produto"
            placeholderTextColor="#F1F1F2a6"
            value={searchInput}
            onChangeText={setSearchInput}
            onSubmitEditing={submitSearch}
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
          >
            <RegisterImage source={addImage} />
            <RegisterText>Adicionar Produto</RegisterText>
          </RegisterButton>
          <Card
            name="Produto"
            category="Produto"
            value="00,00"
            quantity="20"
          />
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
