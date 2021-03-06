// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Code,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  CodePane,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE",
  fifth: "#9D9D9D"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            colmena
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={6} fit bold>
            <code>kolˈmena</code>
          </Text>
          <Text margin="10px 0 0" textColor="fifth" size={1} fit bold>
            Spanish for beehive
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="secondary">History</Heading>
          <Heading margin="30px 0 0" size={2} textColor="secondary">Current</Heading>
          <Heading margin="30px 0 0" size={2} textColor="secondary">Future</Heading>
          <Heading margin="30px 0 0" size={2} textColor="secondary">Structure</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} textColor="secondary">loopback-angular-admin</Heading>
          <Text margin="30px 0" size={4} textColor="secondary">In need of a Mobile Backend to start building Ionic apps</Text>

        </Slide>


        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} textColor="secondary">Why LoopBack (2.x)</Heading>
          <List>
            <ListItem>Rapid API development</ListItem>
            <ListItem>Easy to extend and integrate.</ListItem>
            <ListItem>Running on NodeJS (full-stack JS)</ListItem>
            <ListItem>Great LoopBack SDK for AngularJS SDK</ListItem>
          </List>

          <Text>
            Connects to:
            MongoDB, MySQL, Postgres, Oracle, REST, SOAP
          </Text>
        </Slide>


        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} textColor="secondary">Why AngularJS (1.2.x)</Heading>
          <List>
            <ListItem>'Batteries included' framework</ListItem>
            <ListItem>Ionic is built on it.</ListItem>
            <ListItem>Great Community</ListItem>
            <ListItem>Great LoopBack SDK for AngularJS SDK</ListItem>
          </List>
        </Slide>


        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">2014</Heading>

          <Heading margin="30px 0" size={6} textColor="secondary">Aug, 1st: LoopBack Angular Admin</Heading>
          <Text size={4} textColor="secondary">Proof of Concept for building a CMS using LoopBack and Angular</Text>

          <Heading margin="30px 0" size={6} textColor="secondary">Aug, 22st: First issue/PR</Heading>
          <Text size={4} textColor="secondary">Project got noticed by the community</Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">2015</Heading>

          <Heading margin="30px 0" size={6} textColor="secondary">Jan, '15: Translation support</Heading>
          <Text margin="20px 0" size={4} textColor="secondary">Several languages added by community members</Text>

          <Heading margin="30px 0" size={6} textColor="secondary">May, '15: Started a new job</Heading>
          <Text margin="20px 0" size={4} textColor="secondary">Full-time LoopBack/Angular developer</Text>
          <Text size={4} textColor="secondary">Thanks to the project!</Text>

        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">2016</Heading>
          <Heading margin="30px 0" size={6} textColor="secondary">Modern AngularJS (components)</Heading>
          <Heading margin="30px 0" size={6} textColor="secondary">[unreleased] WebPack + ES6</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">2017</Heading>

          <Heading margin="30px 0" size={6} textColor="secondary">Feb: Rewrite in Angular (2.x)</Heading>
          <Text margin="30px 0" size={4} textColor="secondary">Thanks to Angular CLI</Text>
          <Text size={4} textColor="secondary">Less functionality on a better basis</Text>

          <Heading margin="30px 0" size={6} textColor="secondary">Feb: Rename to Colmena CMS</Heading>
          <Text size={4} textColor="secondary">Move to GitHub org colmena</Text>

          <Heading margin="30px 0" size={6} textColor="secondary">May: Move to lerna</Heading>
          <Text size={4} textColor="secondary">Apps/Modules/Packages all the way</Text>
        </Slide>


        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">Current</Heading>
          <Heading margin="30px 0" size={6} textColor="secondary">Full time working on Colmena.</Heading>
          <Text size={4} textColor="secondary">Shift focus from CMS to a platform to enable Rapid API Development.</Text>
          <Text margin="30px 0" size={2} textColor="fifth">Rename: Colmena CMS -> Colmena</Text>
          <Heading margin="30px 0" size={6} textColor="secondary">LookBack v3.x - Angular v4.x.</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">Future</Heading>
          <List>
            <ListItem>Work towards initial release.</ListItem>
            <ListItem>Validate the project with other devs.</ListItem>
            <ListItem>Create strategy on how to go forward.</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">Structure</Heading>
          <Text size={4} textColor="secondary">Lerna is AWESOME!</Text>
          <List>
            <ListItem>Manage a monorepo of node modules.</ListItem>
            <ListItem>Split Angular and LoopBack app up.</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">Structure</Heading>
          <List>
            <ListItem>apps</ListItem>
            <ListItem>modules</ListItem>
            <ListItem>packages</ListItem>

            <ListItem>extensions</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Questions?</Quote>
            <Cite>Twitter: @beeman_nl</Cite>
            <Cite>GitHub: @beeman</Cite>
            <Cite>Slack: https://colmena-slack.now.sh/</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
