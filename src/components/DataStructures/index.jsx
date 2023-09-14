import React from "react";
import { StackComponent } from "./Stack";
import { QueueComponent } from "./Queue";
import { LinkedListComponent } from "./LinkedList";
import { TreeComponent } from "./Tree";

export const DataStructures = () => {
  return (
    <>
      <StackComponent />
      <QueueComponent />
      <LinkedListComponent />
      <TreeComponent />
    </>
  );
};
