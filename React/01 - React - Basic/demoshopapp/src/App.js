import './App.css';
import './Component/Items'
import Items from './Component/Items';
import ItemDate from './Component/ItemDate';
import Card from './Component/Card';


function App() {

  const response = [
    {
      itemName: "Nirma",
      itemDate: "20",
      itemMonth: "May",
      itemYear: "2010"
    },
    {
      itemName: "Ghadi",
      itemDate: "20",
      itemMonth: "July",
      itemYear: "2010"
    },
    {
      itemName: "SurfExcel",
      itemDate: "20",
      itemMonth: "June",
      itemYear: "2010"
    },
  ]

  return (
    <div className="App">
      <Card>
        <Items name={response[0].itemName} >
          Hello Nirma
        </Items>
        <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear} />
      </Card>


      <Card>
        <Items name={response[1].itemName} />
        <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear} />
      </Card>


      <Card>
        <Items name={response[2].itemName} />
        <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear} />
      </Card>
    </div>
  );
}

export default App;
