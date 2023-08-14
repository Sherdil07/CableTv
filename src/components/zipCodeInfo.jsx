import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/zipCodeInfo.css";

function Tab(props) {
  return (
    <div
      className={`tab ${props.active ? "active" : ""}`}
      onClick={props.onClick}
    >
      {props.label}
    </div>
  );
}

function ZipCodeInfo() {
  const zipCodeInfo = useSelector((state) => state.zipCodeReducer.zipCodeData);
  console.log(zipCodeInfo);

  const getList = (obj) => {
    let arr = [];

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];

        if (key === "Column7" && obj[key]) arr.push(<li>{value}</li>);
        if (key === "Column8" && obj[key]) arr.push(<li>{value}</li>);
        if (key === "Column9" && obj[key]) arr.push(<li>{value}</li>);
        if (key === "Features" && obj[key]) arr.push(<li>{value}</li>);
      }
    }

    return arr;
  };

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 50, // Adjust scroll position
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  // Create refs for each section
  const internetRef = useRef(null);
  const tvRef = useRef(null);
  const bundlesRef = useRef(null);

  const [activeTab, setActiveTab] = useState("Internet"); // Initialize the active tab state

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    scrollToRef(
      tab === "Internet" ? internetRef : tab === "TV" ? tvRef : bundlesRef
    );
  };

  useLayoutEffect(() => {
    if (activeTab === "Internet") {
      scrollToRef(internetRef);
    } else if (activeTab === "TV") {
      scrollToRef(tvRef);
    } else if (activeTab === "Bundles") {
      scrollToRef(bundlesRef);
    }
  }, [activeTab, internetRef, tvRef, bundlesRef]);

  return (
    <div className="custom-container">
      <div className="jump-to-links">
        {/* <div className="jump">Jump To: </div> */}
        {/* <span onClick={() => scrollToRef(internetRef)}>Internet</span> |{" "}
        <span onClick={() => scrollToRef(tvRef)}>TV</span> |{" "}
        <span onClick={() => scrollToRef(bundlesRef)}>Bundles</span> */}
        <div className="jump">Jump To:</div>
        <Tab
          label="Internet|"
          active={activeTab === "Internet|"}
          onClick={() => handleTabClick("Internet")}
        />
        <Tab
          label="TV|"
          active={activeTab === "TV|"}
          onClick={() => handleTabClick("TV")}
        />
        <Tab
          label="Bundles"
          active={activeTab === "Bundles"}
          onClick={() => handleTabClick("Bundles")}
        />
      </div>

      <div>
        {activeTab === "Internet" && (
          <div>
            <h2
              className="ref"
              ref={internetRef}
              style={{ textAlign: "center" }}
            >
              Internet Providers
            </h2>

            <table class="table table-bordered" ref={internetRef}>
              <thead>
                <tr>
                  <th scope="col">Provider</th>
                  <th scope="col">Prices starting at*</th>
                  <th scope="col">Max download speeds up to</th>
                  <th scope="col">Features </th>
                  <th scope="col">Customer Rating</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {zipCodeInfo &&
                  zipCodeInfo?.internetProviders.map((i) => {
                    return (
                      <tr>
                        <th scope="row">{i["Column2"]}</th>
                        <td>{i["Price"]}</td>
                        <td>{i["Column5"]}</td>
                        <td>
                          <ul>{getList(i)}</ul>
                        </td>
                        <td>{i["Column4"]}</td>
                        <td>
                          {" "}
                          <button>View Plans</button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        )}
        {activeTab === "TV" && (
          <div>
            <h2 className="ref" ref={tvRef} style={{ textAlign: "center" }}>
              Tv Providers
            </h2>

            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Provider</th>
                  <th scope="col">Prices starting at*</th>
                  <th scope="col">Max download speeds up to</th>
                  <th scope="col">Features </th>
                  <th scope="col">Customer Rating</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {zipCodeInfo &&
                  zipCodeInfo?.tvProviders.map((i) => {
                    return (
                      <tr>
                        <th scope="row">{i["Column2"]}</th>
                        <td>{i["Price"]}</td>
                        <td>{i["Column5"]}</td>
                        <td>
                          <ul>{getList(i)}</ul>
                        </td>
                        <td>{i["Column4"]}</td>
                        <td>
                          {" "}
                          <button>View Plans</button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        )}
        {activeTab === "Bundles" && (
          <div>
            <h2
              className="ref"
              ref={bundlesRef}
              style={{ textAlign: "center" }}
            >
              Bundles
            </h2>

            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Provider</th>
                  <th scope="col">Prices starting at*</th>
                  <th scope="col">Max download speeds up to</th>
                  <th scope="col">Features </th>
                  <th scope="col">Customer Rating</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {zipCodeInfo &&
                  zipCodeInfo?.bundles.map((i) => {
                    return (
                      <tr>
                        <th scope="row">{i["Column2"]}</th>
                        <td>{i["Price"]}</td>
                        <td>{i["Column5"]}</td>
                        <td>
                          <ul>{getList(i)}</ul>
                        </td>
                        <td>{i["Column4"]}</td>
                        <td>
                          {" "}
                          <button>View Plans</button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default ZipCodeInfo;