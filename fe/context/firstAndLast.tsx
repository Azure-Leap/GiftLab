import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useUser } from './user';

export const AuthContext = createContext('');

    const {setCheckUserProfile} = useUser()
// ------------------------------------------------------------------------------------------------------------>>>>
const AuthProvider = ({ children }) => {
  const reRender = async (whatResource) => {
    // const token = localStorage.getItem('token');
    const result = await axios.get(`http://localhost:8000/api/${whatResource}`, {
      headers: {
        // Authorization: `Bearer ${token}`,
      },
    });
    
    if (whatResource === 'travels') setTravelList(result.data.data);
  };
  // ------------------------------------------------------------------------------------------------------------>>>>

  // GET VALUE FROM TEXTFIELD
  const [newData, setNewData] = useState({});
  const infoFromInput = (e) => {
    const obj = {};
    obj[e.target.name] = e.target.value;
    console.log(obj);
    setNewData({ ...newData, ...obj });
  };
  // ------------------------------------------------------------------------------------------------------------>>>>

//   // MODAL
//   const [openCategoryModal, setOpenCategoryModal] = useState(false);
//   const [openTravelModal, setOpenTravelModal] = useState(false);

  // MODAL depends on CREATE or EDIT?
  const [isNew, setIsNew] = useState(null);
  // ------------------------------------------------------------------------------------------------------------>>>>

  // CREATE CATEGORY ===>
  const dataCreater = async (whatResource) => {
    try {
    // //   const token = localStorage.getItem('token');
      const result = await axios.post(
        `http://localhost:8000/api/${whatResource}`,
        { ...newData },
        {
          headers: {
            // Authorization: `Bearer ${token}`,
          },
        }
      );
      reRender(whatResource);
      if (whatResource === 'categories') setOpenCategoryModal(false);
      if (whatResource === 'travels') setOpenTravelModal(false);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  // ------------------------------------------------------------------------------------------------------------>>>>

  // UPDATE CATEGORY
  const dataUpdater = async (catId, whatResource) => {
    try {
    // //   const token = localStorage.getItem('token');

      const result = await axios.put(
        `http://localhost:8000/api/${whatResource}/${catId}`,
        { ...newData },
        {
          headers: {
            // Authorization: `Bearer ${token}`,
          },
        }
      );
      reRender(whatResource);
      if (whatResource === 'categories') setOpenCategoryModal(false);
      if (whatResource === 'travels') setOpenTravelModal(false);
    } catch (error) {
      console.log(error);
    }
  };
  // ------------------------------------------------------------------------------------------------------------>>>>

  //   RE-RENDER
  const [categoryList, setCategoryList] = useState([]);
//   const [travelList, setTravelList] = useState([]);

  const getData = async (whatResource) => {
    // // const token = localStorage.getItem('token');
    const result = await axios.get(`http://localhost:8000/api/${whatResource}`, {
      headers: {
        // Authorization: `Bearer ${token}`,
      },
    });
    if (whatResource === 'categories') setCategoryList(result.data.data);
    if (whatResource === 'travels') setTravelList(result.data.data);
    // else if (whatKindOfData === 'travels')
  };
  // ------------------------------------------------------------------------------------------------------------>>>>

  const [whichOneDoYouWannaSelect, setWhichOneDoYouWannaSelect] = useState({});
  // ------------------------------------------------------------------------------------------------------------>>>>

  // DELETE CATEGORY
  const dataRemover = async (catId, whatResource) => {
    try {
    // //   const token = localStorage.getItem('token');
      const result = await axios.delete(`http://localhost:8000/api/${whatResource}/${catId}`, {
        headers: {
        //   Authorization: `Bearer ${token}`,
        },
      });
      reRender('categories');
      setOpenCategoryModal(false);
    } catch (error) {
      console.log(error);
    }
  };
  // ------------------------------------------------------------------------------------------------------------>>>>
  // ymar 1 zuil amjiltta esvel amjiltgu bolson uyd alert gargadag ym
  const [isSuccessful, setIsSuccessful] = useState('');

  // alert ni garch anhnaasaa garch ireh eseh
  const [alertHidden, setAlertHidden] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        getData,
        categoryList,
        setCategoryList,
        openCategoryModal,
        setOpenCategoryModal,
        isNew,
        setIsNew,
        dataCreater,
        dataUpdater,
        infoFromInput,
        setWhichOneDoYouWannaSelect,
        whichOneDoYouWannaSelect,
        dataRemover,
        travelList,
        openTravelModal,
        setOpenTravelModal,
        reRender,
        newData,
        isSuccessful,
        setIsSuccessful,
        alertHidden,
        setAlertHidden,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

//   // ------------------------------------------------------------------------------------------------------------>>>> REQUESTS
