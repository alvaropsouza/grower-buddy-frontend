import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";
import LoginForm from "~/components/forms/login-form/LoginForm";
import SignupForm from "~/components/forms/signup-form/SignupForm";

export default function LoginSignupForm() {
  return (
    <Tabs
      align="center"
      size="md"
      variant="enclosed"
      isFitted
      className="items-center bg-[#f9f9f9]"
    >
      <TabPanels>
        <TabPanel>
          <LoginForm />
        </TabPanel>
        <TabPanel>
          <SignupForm />
        </TabPanel>
      </TabPanels>

      <TabList className="rounded-md bg-[#f2f2f2] text-[#26343b]">
        <Tab _selected={{ color: "#277a4e", fontWeight: "500" }}>Login</Tab>
        <Tab _selected={{ color: "#277a4e", fontWeight: "500" }}>Signup</Tab>
      </TabList>
      <TabIndicator height="2px" bg="green.500" borderRadius="1px" />
    </Tabs>
  );
}