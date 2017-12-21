import * as React from "react";
import { Icon, IconName } from "@blueprintjs/core";
import { TestReconcilationState } from "jest-editor-support";
import styled from "styled-components";

export interface IndicatorProps {
  isExecuting: boolean;
  status: TestReconcilationState;
}

const Container = styled.div`
  margin-right: 5px;
`;

export default function Indicator({ status, isExecuting }: IndicatorProps) {
  let iconName: null | string = null;
  if (status === "KnownSuccess") {
    iconName = "pt-icon-tick-circle";
  } else if (status === "KnownFail") {
    iconName = "pt-icon-symbol-circle";
  } else if (status === "KnownSkip") {
    iconName = "pt-icon-record";
  }

  return (
    <Container>
      {iconName && <Icon iconName={iconName as IconName} iconSize={16} />}
    </Container>
  );
}
