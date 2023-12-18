import { Collapse, theme } from "antd";
import { Text } from "@chakra-ui/react";
import type { CollapseProps } from "antd";
import type { CSSProperties } from "react";
import React from "react";
import YardIcon from "@mui/icons-material/Yard";
import PeopleIcon from "@mui/icons-material/People";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";

const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (
  panelStyle,
) => [
  {
    key: "1",
    label: (
      <div className="flex bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent ">
        <YardIcon className="mr-2 text-[#CBE5C1]" />
        <p className="font-medium">
          Make your plants <b>Profiles</b>
        </p>
      </div>
    ),
    children: (
      <Text className="text-[#D4D3D3]">
        Take <b>Notes</b>, <b>Photos</b>, save data like: pH levels,
        temperature, humidity, fertilizer, soil and all the
        <b> grow details </b>you can think of
      </Text>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: (
      <div className="flex">
        <PeopleIcon className="mr-2 p-0.5 text-[#CBE5C1]" />
        <p className="bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text font-medium text-transparent">
          Growers <b>Community</b> <small className="italic">[soon]</small>
        </p>
      </div>
    ),
    children: (
      <p className="text-[#D4D3D3]">
        Soon, we will have a community where you can engage with other users,
        exchange tips, compare results, and participate in a{" "}
        <b>collaborative learning experience</b>.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label: (
      <div className="flex">
        <VideoCameraBackIcon className="mr-2 text-[#CBE5C1]" />
        <p className="bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text font-medium text-transparent">
          Get exclusive<b> Time Lapses </b>
          <small className="italic">[soon]</small>
        </p>
      </div>
    ),
    children: (
      <p className="text-[#f9f9f9]">
        Transform your plant gallery photos into captivating timelapse videos
        effortlessly.
      </p>
    ),
    style: panelStyle,
  },
];

export const Acordion: React.FC = () => {
  const { token } = theme.useToken();

  const panelStyle: React.CSSProperties = {
    marginBottom: 5,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };

  return (
    <Collapse
      bordered={false}
      defaultActiveKey={["1"]}
      expandIcon={({ isActive }) =>
        isActive ? (
          <KeyboardArrowDownIcon
            style={{ fill: "#f9f9f9", fontSize: "large" }}
          />
        ) : (
          <ChevronRightIcon style={{ fill: "#f9f9f9", fontSize: "large" }} />
        )
      }
      className=" border-gray-100 bg-[#73B956] bg-opacity-10 bg-clip-padding p-1
      leading-tight backdrop-blur-sm backdrop-filter max-lg:my-4"
      items={getItems(panelStyle)}
    />
  );
};
