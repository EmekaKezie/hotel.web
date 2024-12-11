import React from "react";
import { Box } from "@mui/material";
import MainMenu from "../core/navigation/MainMenu";
import { useAppDispatch, useAppSelector } from "../redux/useReduxhooks";
import {
  onTestDecrement,
  onTestIncrement,
  onTestReset,
} from "../redux/slices/testSlice";

export default function Home() {
  const dispatch = useAppDispatch();
  const redux = useAppSelector((state) => state);
  const testStore = redux.testReducer;
  return (
    <Box>
      <MainMenu />
      <Box>
        <p>{testStore.count}</p>
        <button onClick={() => dispatch(onTestIncrement())}>increment</button>
        <button onClick={() => dispatch(onTestDecrement())}>decerement</button>
        <button onClick={() => dispatch(onTestReset())}>reset</button>
      </Box>
    </Box>
  );
}
