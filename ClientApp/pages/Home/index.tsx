import React, { useState } from "react";
import AddAlarmButton from "../../js/components/AddAlarmButton";
import { getDayPeriod } from '../../js/utils/getDayPeriod'
import { Alarm } from '../../js/components/Alarm';
import { TypeAlarm } from "../../js/types/TypeAlarm";
import "./style.scss";
import { TypeTimePicker } from "../../js/types/TypeTimePicker";

export default function HomePage() {
  const [alarms] = useState<TypeAlarm[]>([
    {
      title: "Levar cachorro pra passear",
      time: { $H: 15, $M: 30 } as TypeTimePicker,
      activated: true
    },
    {
      title: "Estudar",
      time: { $H: 15, $M: 30 } as TypeTimePicker,
      activated: false
    },
    {
      title: "Pagar a conta de luz",
      time: { $H: 15, $M: 30 } as TypeTimePicker,
      activated: false
    },
    {
      title: "Vender peixe 🐟🎣",
      time: { $H: 15, $M: 30 } as TypeTimePicker,
      activated: true
    },
    {
      title: "Beber água",
      time: { $H: 15, $M: 30 } as TypeTimePicker,
      activated: false
    },
    ]);

    return (
        <div className="home">
            <div className="home-container">
                <header className="alarms-header">
                  <div className="alarms-header-text">
                  <h1>{getDayPeriod()}, Bruno!</h1>
                    <span>Aqui estão os seus alarmes pro dia de hoje.</span>
                  </div>
                  <div className="alarms-header-button">
                    <AddAlarmButton />
                  </div>
                </header>
                <section className="alarms-container">
                {alarms.map((alarm) => (
                    <Alarm key={alarm.title} alarm={alarm} />
                ))}
                </section>
            </div>
        </div>
    );
}
