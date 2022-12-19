import Button from "./components/Button.tsx";
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

  function handleClick() {
    console.log('click');
  }

  return (
    <div>
      <ComboBox label={label} 
        styles={{width: '200px'}}
        comboItems={comboItems} 
        defaultLabel="선택"
        getSelectedItem={(item) => console.log(item)}></ComboBox>
      <Button label="버튼" onClick={handleClick}></Button>
    </div>
  );
}

export default App;
