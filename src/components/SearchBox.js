import React, { useState } from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
const params = {
  q: "",
  format: "json",
  addressdetails: "addressdetails",
};

function SearchBox (props) {
  const { selectPosition, setSelectPosition } = props;
  const [SearchText, setSearchText] = useState("");
  const [ListPlace, setListPlace] = useState([]);
  return (
    <>
    <div style={{ display: "flex",  }}>
      <div style={{flex:1,padding:'10px'}}>
          <OutlinedInput style={{
            width: "100%"}} value={ SearchText }
            onChange={(event) =>{setSearchText(event.target.value);}}/>
      </div>
      <div style={{display: "flex",alignItems:"center",padding:'0 20px'}}>
          <Button variant="contained" color="primary" onClick={() => {
            //seaarch
            const params = {
              q: SearchText,
              format: "json",
              addressdetails: 1,
              polygon_geojson: 0,
            };
            const queryString = new URLSearchParams(params).toString();
            const requestOptions = {
              method: "GET",
              redirect: "follow",
            };
            fetch(`${NOMINATIM_BASE_URL}${queryString}`,requestOptions)
                .then((response) => response.text())
                .then((result) => {
                  console.log(JSON.parse(result));
                  setListPlace(JSON.parse(result));
                })
                .catch((err) => console.log("err: ", err));
            
      }}>
         Search
      </Button>
      </div>
    </div>
    <div>
       <List component="nav" aria-label="main mailbox folders">
          {ListPlace.map((item) => {
            return (
              <div key={item?.place_id}>
                    <ListItemButton
                      onClick={() => {
                        setSelectPosition(item);
                      }} >
                      
                        <ListItemIcon>
                          <img
                            src="./placeholder.png"
                            alt="Placeholder"
                            style={{ width: 38, height: 38 }}
                          />
                        </ListItemIcon>
                        <ListItemText primary={item?.display_name} />
                      </ListItemButton>
                    <Divider />
                </div>
               );
              })}
            </List>
       </div>
    </>

  )
}

export default SearchBox;