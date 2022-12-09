import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchList } from "../store/listReducer";
import { Container, Grid } from "@mui/material";
import { Form } from "./components/Form";
import { CardItem } from "./components/CardItem";
import { CToolbar } from "./components/Toolbar";

export const Main = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list.listItems);

  useEffect(() => {
    dispatch(fetchList());
  }, []);

  return (
    <>
      <CToolbar title="Redux Toolkit" />

      <main>
        <Form />

        <Container sx={{ py: 4 }} maxWidth="md">
          <Grid container spacing={3}>
            {list.length > 0 &&
              list.map((item) => <CardItem item={item} key={item.id} />)}
          </Grid>
        </Container>
      </main>
    </>
  );
};
