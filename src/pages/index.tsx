import Head from "next/head";
import { LoginSignupForm } from "~/components/forms";
import { motion } from "framer-motion";
import { BannerLogo } from "~/components/ui";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import Link from "next/link";
import { Text } from "@chakra-ui/react";
import YardIcon from "@mui/icons-material/Yard";
import TableChartIcon from "@mui/icons-material/TableChart";
import PeopleIcon from "@mui/icons-material/People";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

export default function Home() {
  return (
    <div className="min-w-screen min-h-screen overflow-hidden bg-[#121212]">
      <Head>
        <title>Grower Buddy</title>
        <meta
          name="description"
          content="Your grower helper. Keep track of every aspect about your plants"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div
        animate={{ y: [0, 5] }}
        transition={{ type: "spring", stiffness: 80 }}
      >
        <div id="banner" className="m-1 flex items-center justify-between">
          <Link href="">
            <BannerLogo />
          </Link>

          <Breadcrumb className="text-[#F9F9F9]">
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">Contact</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">Learn More</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Link href="/">
            <PersonOutlinedIcon className="h-12 w-auto text-[#CBE5C1]" />
          </Link>
        </div>
      </motion.div>

      <div className="flex justify-center overflow-hidden p-16 max-sm:flex-col">
        <div
          id="left-container"
          className="mx-6 flex basis-8/12 justify-center max-lg:inline-block max-sm:order-last"
        >
          <div
            id="left-texts"
            className="mr-6 basis-8/12 select-none max-sm:text-center"
          >
            <Text
              fontSize="5xl"
              color="#F9F9F9"
              className="font-bold leading-tight max-lg:text-2xl"
            >
              Grow your plants with Data
            </Text>

            <Text
              fontSize="xl"
              color="#D4D3D3"
              className="font-regular min-w-fit max-lg:text-sm"
            >
              With Grower Buddy, you'll have a sleek and intuitive platform to
              organize and effortlessly track every aspect of your plant's
              growth.
            </Text>
          </div>

          {/* Features */}
          <div
            id="features"
            className="my-4 h-fit w-fit rounded-md border-gray-100 bg-gray-400 bg-opacity-10
              bg-clip-padding p-1 leading-tight backdrop-blur-sm  backdrop-filter"
          >
            <div>
              <div className="m-3 flex text-[#F9F9F9] max-lg:text-sm">
                <YardIcon className="mr-2 text-[#6FBD52]" />
                <Text>
                  Personalize <b>Profiles</b> for each of your plants
                </Text>
              </div>
              <div className="flex p-4 text-[#F9F9F9] max-lg:text-sm">
                <TableChartIcon className="mr-2 text-[#6FBD52]" />
                <Text>
                  Take <Text as="b">Notes</Text>, save data like: pH levels,
                  temperature, humidity, fertilizer, soil and all the
                  <b> grow details </b>you can think of
                </Text>
              </div>
              <div className="flex p-4 pt-2 text-[#F9F9F9] max-lg:text-sm">
                <Text className="mr-2 text-[#6FBD52]" />
                <Text className="mr-2 h-fit select-none rounded-md bg-[#CD56C8] px-1 py-0.5 text-xs font-bold text-[#121212]">
                  Soon
                </Text>
                <Text>
                  Get exclusive<b> Time Lapses </b>
                  <AddAPhotoIcon className="text-md p-0.5" />
                  generated based on your plant profile <b>gallery</b>
                </Text>
              </div>
              <div className="flex p-4 text-[#F9F9F9] max-lg:text-sm">
                <Text className="mr-2 mt-0.5 h-fit select-none rounded-md bg-[#CD56C8] px-1 py-0.5 text-xs font-bold text-[#121212]">
                  Soon
                </Text>
                <Text>
                  <b>
                    Growers Community
                    <PeopleIcon className="text-md m-0.5 p-0.5" />
                  </b>
                  for sharing knowledge among others
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4 flex justify-center max-sm:order-first">
          <LoginSignupForm />
        </div>
      </div>
    </div>
  );
}
