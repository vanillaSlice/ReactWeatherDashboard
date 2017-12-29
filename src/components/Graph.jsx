import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import PropTypes from 'prop-types';

import './Graph.css';

const Graph = props => (
  <div className="Graph">
    <Sparklines data={props.data}>
      <SparklinesLine color={props.colour} />
      <SparklinesReferenceLine
        type="mean"
        style={{ stroke: '#f44747', strokeOpacity: 0.75, strokeDasharray: '2, 2' }}
      />
    </Sparklines>
  </div>
);

Graph.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
  colour: PropTypes.string.isRequired,
};

export default Graph;
