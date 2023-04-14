import React from "react";

type Props = {
  handleNoParamNoEventClick: () => void;
  handleEventClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleEventAndParamClick: (event: React.MouseEvent<HTMLButtonElement>, value: string) => void;
}

function Buttons({ handleNoParamNoEventClick, handleEventClick, handleEventAndParamClick }: Props) {
  return (
    <div>
      <strong>click events</strong>
      <button onClick={handleNoParamNoEventClick}>click with no parameters</button>
      <button onClick={handleEventClick}>click with and event</button>
      <button onClick={(event) => handleEventAndParamClick(event, 'value')}>click with and event and a parameter</button>
    </div>
  )
}

export default Buttons