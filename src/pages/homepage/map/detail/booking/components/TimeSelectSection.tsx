import React, { useRef, useState } from "react";
import { ActionIcon, Button, Flex, Select } from "@mantine/core";
import { DatePickerInput, TimeInput } from "@mantine/dates";
import Toolbar from "@/components/toolbar/Toolbar";
import ClockIcon from "@/static/icons/icon_clock.svg";

const TimeSelectSection = ({ setSection }) => {
  const [value, setValue] = useState<Date | null>(null);
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div className="">
      <Toolbar
        name="Booking"
        pre="/home/map/detail"
        animate={false}
        positionName="left"
      ></Toolbar>
      <div className="p-4">
        <DatePickerInput
          size="lg"
          label="Select date"
          placeholder="Pick date"
          value={value}
          onChange={setValue}
        />
        <TimeInput
          size="lg"
          rightSection={
            <ActionIcon
              variant="subtle"
              color="gray"
              onClick={() => ref.current?.showPicker()}
            >
              <ClockIcon />
            </ActionIcon>
          }
          label="Select Arrival Time"
          className="mt-4"
        />
        <Select
          label="Select Charging Duration (Hours)"
          placeholder="Pick value"
          size="lg"
          data={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]}
          className="mt-4"
        />
        <div className="px-4 py-2 text-primary text-sm bg-primary/15 rounded-xl mt-4">
          <Flex>
            <p>
              You can only book available times. Unavailable time means someone
              else has booked it.
            </p>
          </Flex>
        </div>
      </div>
      <div className="h-16"></div>
      <div className="absolute bottom-0 p-4 bg-white w-full">
        <Button
          size="lg"
          radius={50}
          color="var(--primary)"
          fullWidth
          onClick={() => setSection(2)}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};
export default TimeSelectSection;
