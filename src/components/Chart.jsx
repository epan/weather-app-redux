import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average (numbers) {
  return _.round(_.mean(numbers), 0);
}

export default ({data, color, units}) => (
      <div>
        <Sparklines height={100} width={100} data={data}>
          <SparklinesLine color={color} />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div className="stat-number">{average(data)} {units}</div>
      </div>
);
