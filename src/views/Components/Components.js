import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionBasics from "./Sections/SectionBasics.js";
import SectionNavbars from "./Sections/SectionNavbars.js";
import SectionTabs from "./Sections/SectionTabs.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionNotifications from "./Sections/SectionNotifications.js";
import SectionTypography from "./Sections/SectionTypography.js";
import SectionJavascript from "./Sections/SectionJavascript.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import SectionLogin from "./Sections/SectionLogin.js";
import SectionExamples from "./Sections/SectionExamples.js";
import SectionDownload from "./Sections/SectionDownload.js";

import ProductSection from "../LandingPage/Sections/ProductSection.js";
import WorkSection from "../LandingPage/Sections/WorkSection.js";
import FeaturesSection from "../LandingPage/Sections/FeaturesSection.js";

import styles from "assets/jss/material-kit-react/views/components.js";
import navStyles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";


const useStyles = makeStyles(styles);
const useNavStyles = makeStyles(navStyles);

export default function Components(props) {
  const classes = useStyles();
  const navClasses = useNavStyles();

  const { ...rest } = props;
  return (
    <div style={{ backgroundColor: 'white'}}>      
   
   
        <GridContainer >
          <GridItem xs={12} sm={12} md={12}>
           
          <Header
            brand="#CasamentoDoAno"
            color="info"
            rightLinks={
              <div>
                  <Button
                    href="#pablo"
                    className={classes.navLink + " " + classes.navLinkActive}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    Historia
                  </Button>
              
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    Informacoes
                  </Button>
               
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    Como chegar
                  </Button>
                  </div>
            }
          />
          </GridItem>         
        </GridContainer>  


  
      {/* <SectionNavbars/> */}
        {/* <div className={classes.splitLeft}> */}       
        {/* <div className={classes.splitRight}> */}
        <div>        
            <GridContainer>

              <GridItem>
                <Parallax image={require("assets/img/paris.jpg")} />
              </GridItem>
            
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Ines & Ricardo</h1>
                </div>
              </GridItem>

              <GridItem>
                <FeaturesSection />
              </GridItem>

              <GridItem>
                <WorkSection />
              </GridItem>

            </GridContainer>
       
     
      </div>

      {/* <Parallax image={require("assets/img/r2.jpg")}
        style={{ width: "50%"}}>
        <div className={classes.mainRight}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Material Kit React.</h1>
                <h3 className={classes.subtitle}>
                  A Badass Material-UI Kit based on Material Design.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax> */}

      {/* <div className={classNames(classes.main, classes.mainRaised)}> */}
      {/* <ProductSection />
          <WorkSection /> */}

      {/* <SectionBasics />
        <SectionNavbars />
        <SectionTabs />
        <SectionPills />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavascript />
        <SectionCarousel />
        <SectionCompletedExamples />
        <SectionLogin />
        <GridItem md={12} className={classes.textCenter}>
          <Link to={"/login-page"} className={classes.link}>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
          </Link>
        </GridItem>
        <SectionExamples />
        <SectionDownload /> */}
      {/* </div> */}
      <Footer />
    </div>
  );
}
