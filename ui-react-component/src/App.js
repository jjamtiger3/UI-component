import ComboBox from "./components/ComboBox.tsx";

function App() {
  const comboItems = [
    {
      label: '항목1'
    },
    {
      label: '항목2'
    },
    {
      label: '항목3'
    }
  ];
  const label = '선택';

  return (
    <div>
      <ComboBox label={label} comboItems={comboItems} getSelectedItems={(item) => console.log(item)}></ComboBox>
    </div>
  );
}

export default App;
