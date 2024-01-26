import React from "react";
import { Flexbox } from "../styled-component";
import _ from "lodash";
import moment from "moment";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const Calender = () => {
  let total_days = moment("2023 11", "YYYY MM").daysInMonth();
  let day_name = moment("2023/11/01", "YYYY/MM/DD").day();
  console.log(day_name, total_days);
  let date = 1;
  return (
    <Flexbox dir={"column"} width={"100%"}>
      <Flexbox></Flexbox>
      <Flexbox>
        {DAYS.map((item) => (
          <Flexbox
            border={"1px solid lightgray"}
            height={"100px"}
            width={"100px"}
            center={"center"}
          >
            {item}
          </Flexbox>
        ))}
      </Flexbox>
      {_.range(6).map((weeks) => (
        <Flexbox>
          {_.range(7).map((days) => {
            if ((weeks === 0 && days < day_name) || date > total_days) {
              return (
                <Flexbox
                  border={"1px solid lightgray"}
                  height={"100px"}
                  width={"100px"}
                  center={"center"}
                >
                  {}
                </Flexbox>
              );
            }

            return (
              <Flexbox
                border={"1px solid lightgray"}
                height={"100px"}
                width={"100px"}
                center={"center"}
              >
                {date++}
              </Flexbox>
            );
          })}
        </Flexbox>
      ))}
    </Flexbox>
  );
};

export default Calender;
