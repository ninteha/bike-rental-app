import {
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { useContext, useEffect } from "react";
import { SearchContext } from "../../../context/SearchContext";
import { SearchBikesData } from "../SearchBikesData";

const Categories = () => {
  const { searchFilter, setSearchFilter } = useContext(SearchContext);

  useEffect(() => {
    console.log(searchFilter);
  }, [searchFilter, setSearchFilter]);

  return (
    <>
      {SearchBikesData.map((item, index) => {
        return (
          <>
            <div style={{ width: "100%" }}>
              <Typography key={index} variant="body1">
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
                  {item.categories?.map((category, index) => {
                    return (
                      <div key={index}>
                        <FormGroup>
                          <FormControlLabel
                            control={<Checkbox />}
                            label={category}
                            onChange={() =>
                              setSearchFilter({...searchFilter, category})
                            }
                          />
                        </FormGroup>
                      </div>
                    );
                  })}
                </div>
              </Typography>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Categories;
