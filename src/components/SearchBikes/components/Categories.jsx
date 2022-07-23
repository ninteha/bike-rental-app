import {
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import React, { useCallback, useContext } from "react";
import { SearchContext } from "../../../context/SearchContext";
import { SearchBikesData } from "../SearchBikesData";

const Categories = () => {
  const { searchFilter, setSearchFilter } = useContext(SearchContext);

  const filterHandler = useCallback((categoryName, item) => {
    const categoryNameIncludes = searchFilter[categoryName].includes(item)
    if(!categoryNameIncludes) {
      setSearchFilter({...searchFilter, [categoryName]: [...searchFilter[categoryName], item]});
      return;
    }
    
    setSearchFilter({...searchFilter, [categoryName]: searchFilter[categoryName].filter(cat => cat !== item)});
  }, [searchFilter, setSearchFilter])


  console.log(searchFilter);

  return (
    <>
      {SearchBikesData.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <div style={{ width: "100%" }}>
              <Typography variant="body1">
                <h1
                  style={{
                    fontSize: "14px",
                    margin: "0",
                  }}
                >
                  <Divider>{item.title}</Divider>
                </h1>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    width: "100%",
                  }}
                >
                  {item.categories?.map((item, index) => {
                    return (
                      <div key={index}>
                        <FormGroup>
                          <FormControlLabel
                            control={<Checkbox />}
                            label={item.itemTitle}
                            onChange={() => {
                              filterHandler(
                                item.category,
                                item.itemTitle
                              )
                            }}
                          />
                        </FormGroup>
                      </div>
                    );
                  })}
                </div>
              </Typography>
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Categories;
