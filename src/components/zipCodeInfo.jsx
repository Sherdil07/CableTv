import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/zipCodeInfo.css";

function ZipCodeInfo() {
  const zipCodeInfo = useSelector((state) => state.zipCodeReducer.zipCodeData);
  console.log(zipCodeInfo);

  return (
    <div className="custom-container">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Provider</th>
            <th scope="col">Prices starting at*</th>
            <th scope="col">Max download speeds up to</th>
            <th scope="col">Features </th>
            <th scope="col">Area availability*</th>
            <th scope="col"></th>
            {/* <th scope="col">
              <button>View Plans</button>
            </th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>area</td>
            <td>
              {" "}
              <button>View Plans</button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ZipCodeInfo;
