import React from "react";
import { StackComponent } from "./Stack";
import { QueueComponent } from "./Queue";
import { LinkedListComponent } from "./LinkedList";
import { TreeComponent } from "./Tree";
import { GraphComponent } from "./Graph";
import { Array } from "./Array";

export const DataStructures = () => {
  return (
    <>
      <StackComponent />
      <QueueComponent />
      <LinkedListComponent />
      <TreeComponent />
      <GraphComponent/>
      <Array/>
    </>
  );
};
