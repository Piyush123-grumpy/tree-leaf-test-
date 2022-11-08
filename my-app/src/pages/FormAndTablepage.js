
import Form from "../components/Form";
import Table from "../components/Table";
import Editvalue from "../components/Editvalue";

function FormAndTablepage(props) {
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
      <h2>People Tracker</h2>
      <Form
        setEditvalue={setEditvalue}
        compare={compare}
        edited={edited}
        data={data}
        setData={setData}
        setTogglesubmit={setTogglesubmit}
        toggleSubmit={toggleSubmit}
      ></Form>
      <div className="editValue-section">
        <h4>Values selected for editing</h4>
        <Editvalue editValue={editValue}></Editvalue>
      </div>

      <Table
        setEditvalue={setEditvalue}
        compare={compare}
        setEdited={setEdited}
        data={data}
        setData={setData}
        setTogglesubmit={setTogglesubmit}
      ></Table>
    </>
  );
}

export default FormAndTablepage;
