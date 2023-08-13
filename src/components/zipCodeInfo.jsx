import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/zipCodeInfo.css";

function ZipCodeInfo() {
  const zipCodeInfo = useSelector((state) => state.zipCodeReducer.zipCodeData);
  console.log(zipCodeInfo);

  const getList = (obj) =>{

    let arr = []

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
          const value = obj[key];
  
          if (key === "Column7" && obj[key])
          arr.push(<li>{value}</li>)
          if (key === "Column8" && obj[key])
          arr.push(<li>{value}</li>)  
          if (key === "Column9" && obj[key])
          arr.push(<li>{value}</li>)   

          if (key === "Features" && obj[key])
          arr.push(<li>{value}</li>) 
             }
        
        }   
        
        return arr
        }   
        
   

  

  return (
    <div className="custom-container">

      <h2 style={{textAlign:"center"}}>Intneret Providers</h2>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Provider</th>
            <th scope="col">Prices starting at*</th>
            <th scope="col">Max download speeds up to</th>
            <th scope="col">Features </th>
            <th scope="col">Customer Rating</th>
            <th scope="col"></th>
            {/* <th scope="col">
              <button>View Plans</button>
            </th> */}
          </tr>
        </thead>
        <tbody>
          {
           zipCodeInfo && zipCodeInfo?.internetProviders.map((i) => {

              return  <tr>
              <th scope="row">{i["Column2"]}</th>
              <td>{i["Price"]}</td>
              <td>{i["Column5"]}</td>
              <td>
                <ul>
               { getList(i)}
                </ul>
                
              
              </td>
              <td>{i["Column4"]}</td>
              <td>
                {" "}
                <button>View Plans</button>
              </td>
            </tr>


            })
          }
         
          {/* <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr> */}
        </tbody>
      </table>






      <h2 style={{textAlign:"center"}}>Tv Providers</h2>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Provider</th>
            <th scope="col">Prices starting at*</th>
            <th scope="col">Max download speeds up to</th>
            <th scope="col">Features </th>
            <th scope="col">Customer Rating</th>
            <th scope="col"></th>
            {/* <th scope="col">
              <button>View Plans</button>
            </th> */}
          </tr>
        </thead>
        <tbody>
          {
           zipCodeInfo && zipCodeInfo?.tvProviders.map((i) => {

              return  <tr>
              <th scope="row">{i["Column2"]}</th>
              <td>{i["Price"]}</td>
              <td>{i["Column5"]}</td>
              <td>
                <ul>
                { getList(i)}
                </ul>
                
              
              </td>
              <td>{i["Column4"]}</td>
              <td>
                {" "}
                <button>View Plans</button>
              </td>
            </tr>


            })
          }
         
        </tbody>
      </table>







      <h2 style={{textAlign:"center"}}>Bundles</h2>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Provider</th>
            <th scope="col">Prices starting at*</th>
            <th scope="col">Max download speeds up to</th>
            <th scope="col">Features </th>
            <th scope="col">Customer Rating</th>
            <th scope="col"></th>
            {/* <th scope="col">
              <button>View Plans</button>
            </th> */}
          </tr>
        </thead>
        <tbody>
          {
           zipCodeInfo && zipCodeInfo?.bundles.map((i) => {

              return  <tr>
              <th scope="row">{i["Column2"]}</th>
              <td>{i["Price"]}</td>
              <td>{i["Column5"]}</td>
              <td>
                <ul>
                { getList(i)}
                </ul>
                
              
              </td>
              <td>{i["Column4"]}</td>
              <td>
                {" "}
                <button>View Plans</button>
              </td>
            </tr>


            })
          }
         
        </tbody>
      </table>
    </div>
  );
}

export default ZipCodeInfo;
