import React from "react";

import Form from "../components/Form";
import Table from "../components/Table";
import Editvalue from "../components/Editvalue";


function Profiles(props) {
  const {
    data,
    setData,
    edited,
    setEdited,
    toggleSubmit,
    setTogglesubmit,
    editValue,
    setEditvalue,
    compare,
  } = props;

  return (
    <>
      <h2>Profiles</h2>
      <div>
        <Form
          edited={edited}
          data={data}
          setData={setData}
          setTogglesubmit={setTogglesubmit}
          toggleSubmit={toggleSubmit}
        ></Form>
      </div>
      <div className="editValue-section">
        <h4>Values selected for editing</h4>
        <Editvalue editValue={editValue}></Editvalue>
      </div>
      <Table
        compare={compare}
        setEdited={setEdited}
        data={data}
        setData={setData}
        setTogglesubmit={setTogglesubmit}
        setEditvalue={setEditvalue}
      ></Table>
    </>
  );
}

export default Profiles;
