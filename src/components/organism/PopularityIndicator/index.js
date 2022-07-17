import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {Svg, Circle, Text as SVGText} from 'react-native-svg';

const PopularityIndicator = ({popularity}) => {
  const size = 60,
    strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circum = radius * 2 * Math.PI;
  const svgProgress = 100 - popularity;

  return (
    <View style={{marginTop: -30}}>
      <Svg width={size} height={size}>
        {/* Background Circle */}
        <Circle
          stroke={'#BBC8D6'}
          fill="#152238"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          {...{strokeWidth}}
        />
        {/* Progress Circle */}
        <Circle
          stroke={'#27AE60'}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={`${circum} ${circum}`}
          strokeDashoffset={radius * Math.PI * 2 * (svgProgress / 100)}
          transform={`rotate(-90, ${size / 2}, ${size / 2})`}
          {...{strokeWidth}}
        />
        {/* Text */}
        <SVGText
          fontSize={'13'}
          x={size / 2}
          y={size / 2 + 5}
          textAnchor="middle"
          fontWeight={'bold'}
          fill={'#fff'}>
          {`${popularity}%`}
        </SVGText>
      </Svg>
    </View>
  );
};

PopularityIndicator.propTypes = {
  popularity: PropTypes.number,
};

export default PopularityIndicator;
