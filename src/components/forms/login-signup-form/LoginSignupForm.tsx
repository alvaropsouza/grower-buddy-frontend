import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";
import { LoginForm, SignupForm } from "~/components/forms";

export function LoginSignupForm() {
  return (
    <div className="max-w-fit items-center leading-tight">
      <Tabs
        align="center"
        size="md"
        variant="enclosed"
        isFitted
        className=" min-w-fit rounded-t-md bg-[#f9f9f9]"
      >
        <TabPanels>
          <TabPanel>
            <SignupForm />
          </TabPanel>
          <TabPanel className="px-4">
            <LoginForm />
          </TabPanel>
        </TabPanels>

        <TabList className="rounded-sm text-[#121212]">
          <Tab _selected={{ color: "#277a4e", fontWeight: "500" }}>Signup</Tab>
          <Tab
            _selected={{
              color: "#277a4e",
              fontWeight: "500",
            }}
          >
            Login
          </Tab>
        </TabList>
        <TabIndicator height="2px" bg="green.500" borderRadius="1px" />
      </Tabs>
    </div>
  );
}
