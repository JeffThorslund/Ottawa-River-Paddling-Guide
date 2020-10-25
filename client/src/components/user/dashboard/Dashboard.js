import React, { useEffect } from "react";
import Navigation from "../Navigation";
import { useDispatch, useSelector } from "react-redux";
import { initializeInterfaceIndex } from "../../../redux/actions/editingAction";
import ItemListGroup from "./ItemListGroup";
import EditBasicInfo from "./EditBasicInfo";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeInterfaceIndex());
  }, []);

  let { rivers, editingReducer } = useSelector((state) => {
    return {
      rivers: state.startupReducer.rivers,
      editingReducer: state.editingReducer,
    };
  });

  return (
    <>
      <Navigation />
      <div className="d-flex flex-row">
        <ItemListGroup rivers={rivers} editingReducer={editingReducer} />
        <EditBasicInfo rivers={rivers} editingReducer={editingReducer} />
      </div>
    </>
  );
};

export default Dashboard;
