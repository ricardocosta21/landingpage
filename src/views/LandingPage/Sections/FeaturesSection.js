import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function FeaturesSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      {/* <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk product</h2>
          <h5 className={classes.description}>
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise he wouldn
            {"'"}t scroll to get here. Add a button if you want the user to see
            more.
          </h5>
        </GridItem>
      </GridContainer> */}
      <div>
        <GridContainer>
          <GridItem>
            <InfoArea
              title="Enhance your guest's experience"
              description="Provide your guests with tailored information about your property 
              and top notch recommendations around town."
              iconColor="info"
              vertical
            />
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem>
            <InfoArea
              title="User-friendly technology"
              description="One-click access to a professional, innovative technology designed for each property."
              iconColor="success"
              vertical
            />
          </GridItem>
        </GridContainer>
        <GridContainer>
          {/* <GridItem xs={12} sm={12} md={4}> */}
           <GridItem>
            <InfoArea
              title="Fingerprint"
              description="Divide details about your product or agency work into parts."
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
