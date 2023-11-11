import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import LoginForm from "~/components/login-form/loginForm";
import SignupForm from "~/components/signup-form/signupForm";

export default function LoginSignupForm() {
  return (
    <Tabs
      align="center"
      size="md"
      className="items-center rounded-md bg-[#f9f9f9]"
    >
      <TabPanels>
        <TabPanel>
          <LoginForm />
        </TabPanel>
        <TabPanel>
          <SignupForm />
        </TabPanel>
      </TabPanels>

      <TabList className="rounded-md text-[#26343b]">
        <Tab>Login</Tab>
        <Tab>Signup</Tab>
      </TabList>
    </Tabs>
  );
}
