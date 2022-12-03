import ComboBox from "./components/ComboBox.tsx";

function App() {
  const comboItems = [
    {
      checked: false,
      label: '항목1'
    },
    {
      checked: false,
      label: '항목2'
    },
    {
      checked: true,
      label: '항목3'
    }
  ]
  return (
    <div>
      <ComboBox comboItems={comboItems}></ComboBox>
    </div>
  );
}

export default App;
