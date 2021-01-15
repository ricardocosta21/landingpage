import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          {/* <h2 className={classes.title}>NOTIFY ME</h2> */}
          {/* <h4 className={classes.description}>
            Divide details about your product or agency work into parts.
          </h4> */}
          <form>
            <GridContainer justify="center">
              {/* <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem> */}
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
                 <Button color="#324242">Notify Me</Button>
              </GridItem>
            </GridContainer>

            {/* <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
                <Button color="#324242">Notify Me</Button>
              </GridItem>
            </GridContainer> */}
              
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
