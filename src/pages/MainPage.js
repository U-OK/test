import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUser } from "../redux/main/actions";

const MainPage = () => {
  useEffect(() => {
    dispatch(getUser());
  }, []);

  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.mainReducer);

  return <div>Добро пожаловать {name} </div>;
};

export default MainPage;
