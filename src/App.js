import logo from './logo.svg';
import { useEffect, useState } from "react";
import './App.css';
import { fetchCountries } from "./components/api/api";
import Card from "./components/Card/Card";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      const data = await fetchCountries();
      setCountries(data);
    };

    getCountries();
  }, []);

  return (
    <div>
      <h1 style={{textAlign:'center'}}>Start {countries.length}</h1>
      <div className='cardcontainer'>

{countries.length > 0 ? (
        countries.map((country) => (
          <Card data={country} key={country.abbr} />

        ))
      ) : (
        <></>
      )}
      </div>
    </div>
  );
}

export default App;
// import logo from './logo.svg';
// import { useEffect, useState } from "react";
// import './App.css';
// import { fetchCountries } from "./components/api/api";
// // import Card from "./components/Card/Card";
// import Card from "./components/Card/Card"

// function App() {
//   console.log('App');
//   const [countries,setCountries] = useState([]);
//   let country;
//   useEffect(()=>{
//     const getCountres = async() =>{

//       let data = await fetchCountries();
//       country = data[0];
//       console.log('data',data,typeof data ,Array.isArray(data));
//       setCountries(data.map(countr => countr));
//     }
//     getCountres();
//   },[]);
//   //const flags = [{name:'India',flag:'', abbr:''}];
//   return (
//     <div>
//       <h1>Start{countries.length}</h1>
//       {/* {countries.length?(
//         countries.map( country =>{ */}
//       {country ? <Card data={country} key={country.abbr} /> :<></>}
//           {/* // (<div key={country.abbr} className="card"> */}
//           {/* //   <img */}
//           {/* //     src={country.flag} */}
//           {/* //     alt={`Flag of ${country.name}`} */}
              
//           {/* //   /> */}
//           {/* //   <p >{country.name}</p> */}
//           {/* // </div>) */}
//         {/* // }) */}
//         {/*  */}
//       {/* // ):<></> */}
//     {/* // } */}
//     </div>
    
//   );
// }

// export default App;
