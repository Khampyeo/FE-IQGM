import React, { useState } from "react";
import { Tabs } from "@mantine/core";
import clsx from "clsx";
import CancelledTab from "./components/CancelledTab";
import CompletedTab from "./components/CompletedTab";
import MyBookingTab from "./components/MyBookingTab";

const MyBooking = () => {
  const [value, setValue] = useState("my_booking");
  return (
    <div className="p-4">
      <Tabs
        defaultValue="my_booking"
        onChange={(value: string) => setValue(value)}
      >
        <Tabs.List justify="space-between" grow>
          <Tabs.Tab color="var(--primary)" value="my_booking">
            <p
              className={clsx(
                "font-semibold text",
                value === "my_booking" && "text-primary"
              )}
            >
              My Booking
            </p>
          </Tabs.Tab>
          <Tabs.Tab color="var(--primary)" value="completed">
            <p
              className={clsx(
                "font-semibold text",
                value === "completed" && "text-primary"
              )}
            >
              Completed
            </p>
          </Tabs.Tab>
          <Tabs.Tab color="var(--primary)" value="canceled">
            <p
              className={clsx(
                "font-semibold text",
                value === "canceled" && "text-primary"
              )}
            >
              Canceled
            </p>
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="my_booking">
          <MyBookingTab />
        </Tabs.Panel>

        <Tabs.Panel value="completed">
          <CompletedTab />
        </Tabs.Panel>

        <Tabs.Panel value="canceled">
          <CancelledTab />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};
export default MyBooking;
