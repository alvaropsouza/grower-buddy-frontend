import Head from "next/head";
import { LoginSignupForm } from "~/components/forms";
import { motion } from "framer-motion";
import { BannerLogo } from "~/components/ui";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import Link from "next/link";
import { Text } from "@chakra-ui/react";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { HomeCarousel, Acordion, Divider } from "~/components/ui";

export default function Home() {
  return (
    <div className="min-w-screen min-h-screen items-baseline overflow-hidden bg-[#121212] align-baseline ">
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
        <div id="banner" className="m-2 flex place-content-around items-center">
          <Link href="" className="flex">
            <BannerLogo />
          </Link>

          <Breadcrumb className="text-[#F9F9F9] max-md:hidden">
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

          <Link href="/" className="max-md:hidden">
            <PersonOutlinedIcon className="h-8 w-auto text-[#CBE5C1]" />
          </Link>
        </div>
      </motion.div>

      <div className="flex justify-center overflow-hidden px-8 pt-12 max-sm:flex-col">
        <div
          id="left-container"
          className="flex h-fit basis-8/12 justify-center px-6 max-lg:flex-col max-sm:order-first"
        >
          <div
            id="left-texts"
            className="mr-6 basis-8/12 select-none max-sm:text-center"
          >
            <Text color="#F9F9F9" className="text-2xl font-bold leading-tight">
              Grow your plants with Data
            </Text>

            <Text className="font-regular mt-2 text-[#D4D3D3] md:text-xl">
              Say goodbye to messy notes! Grower Buddy organizes and tracks your
              plant's growth effortlessly. From planting to watering, get
              crystal-clear insights at your fingertips. No more guesswork, just
              streamlined plant care.
            </Text>
          </div>

          <Acordion />
        </div>
        <div className="mb-4 flex justify-center ">
          <LoginSignupForm />
        </div>
      </div>

      <div className="flex justify-center">
        <Divider content="" />
      </div>

      <div className="m-4 flex place-content-around items-center justify-center py-4 max-lg:flex-row max-sm:flex-col">
        <HomeCarousel image="/dashboard-image.png" />
        <HomeCarousel image="https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <HomeCarousel image="https://images.unsplash.com/photo-1582131503261-fca1d1c0589f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
    </div>
  );
}
