import axios from "axios";
import React, { useEffect } from "react";

const App = () => {
  const fetchData = async () => {
    // const response = await fetch("https://fakestoreapi.com/products");
    // const data = await response.json();
    const { data } = await axios("https://fakestoreapi.com/products");
    // console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  // const data = new Promise((resolve, reject) => {
  //   // reject("Rejected");
  //   reject("resolved");
  // });
  // data
  //   .then(() => {
  //     console.log("yes");
  //   })
  //   .catch(() => {
  //     console.log("No");
  //   });

  const register = () => {
    const registerPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("registered");
      }, 4000);
    });
    return registerPromise;
  };
  const login = () => {
    const loginPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve("logged in");
        resolve("Login success");
      }, 2000);
    });
    return loginPromise;
  };
  const fetching = () => {
    const fetchingPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("fetching");
      }, 3000);
    });
    return fetchingPromise;
  };
  const goDb = () => {
    console.log("dashboard page");
  };

  // const showInBrowser = async () => {
  //   try {
  //     const rdata = await register();
  //     console.log(rdata);
  //     const ldata = await login();
  //     console.log(ldata);
  //     const fdata = await fetching();
  //     console.log(fdata);
  //     goDb();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // showInBrowser();
  // showInBrowser().catch((err) => console.log(err));
  register()
    .then((rdata) => {
      console.log(rdata);
      return login();
    })
    .then((ldata) => {
      console.log(ldata);
      return fetching();
    })
    .then((fdata) => {
      console.log(fdata);
      goDb;
    });

  // register()
  //   .then((rdata) => {
  //     console.log(rdata);
  //     login()
  //       .then((ldata) => {
  //         console.log(ldata);
  //         fetching().then((fdata) => {
  //           console.log(fdata);
  //           goDb();
  //         });
  //       })
  //       .catch((error) => console.log(error));
  //   })
  //   .catch((error) => console.log(error));

  return <div>App</div>;
};

export default App;
