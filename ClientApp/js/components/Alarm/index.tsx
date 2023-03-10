import React, { Component, useEffect, useState } from "react";
import { TypeAlarm } from "../../types/TypeAlarm";
import { SwitchComponent } from "../Switch";
import "./style.scss";

interface AlarmProps {
  alarm: TypeAlarm
}

export function Alarm({ alarm }: AlarmProps) {
  const [activated, setActivated] = useState(true);

  useEffect(() => {
    setActivated(alarm.activated)
  }, [alarm])

  return (
    <div className="alarm-container">
      <div className="alarm" title={alarm.title}>
        <div className="alarm-left">
          <h2>{alarm.title}</h2>
          <span>{alarm.time.$H}:{alarm.time.$M}</span>
        </div>

        <div className="alarm-right">
          <SwitchComponent title={activated ? "Desativar" : "Ativar"} checked={activated} value={activated} onChange={(e) => setActivated(Boolean(e.target.checked))} />
        </div>
      </div>
    </div>
  );
}
