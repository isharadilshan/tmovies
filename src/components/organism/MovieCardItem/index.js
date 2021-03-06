import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import Config from 'react-native-config';
import FastImage from 'react-native-fast-image';
import {Surface, Subheading, Title} from 'react-native-paper';
import {truncateString} from '../../../utils/helper';
import PopularityIndicator from '../PopularityIndicator';

const MovieCardItem = ({item, index}) => {
  const {
    adult,
    original_language,
    original_title,
    overview,
    popularity,
    poster_path,
    release_date,
    title,
  } = item;

  return (
    <Surface style={styles.surface}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <FastImage
          style={{width: 150, height: 250, borderRadius: 4}}
          source={{
            uri: `${Config.IMG_PATH}${poster_path}`,
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <PopularityIndicator popularity={Math.round(popularity)} />
      </View>
      <View style={styles.cardRight}>
        <Title style={styles.title}>
          {`#${index + 1} `}
          {original_title}
        </Title>
        <Subheading style={styles.subtitle}>{`(${title})`}</Subheading>
        <View style={styles.dateWrapper}>
          <Subheading style={styles.subtitle}>{release_date}</Subheading>
          <Subheading
            style={styles.subtitle}>{`(${original_language})`}</Subheading>
          <Subheading style={styles.adultLabel}>
            {adult ? 'Adult' : 'All'}
          </Subheading>
        </View>
        <Subheading style={[styles.subtitle, {color: 'grey'}]}>
          {truncateString(overview, 180)}
        </Subheading>
      </View>
    </Surface>
  );
};

MovieCardItem.propTypes = {
  item: PropTypes.shape({
    adult: PropTypes.bool,
    original_language: PropTypes.string,
    original_title: PropTypes.string,
    overview: PropTypes.string,
    popularity: PropTypes.number,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    title: PropTypes.string,
  }),
  index: PropTypes.number,
};

const styles = StyleSheet.create({
  surface: {
    flexDirection: 'row',
    elevation: 4,
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  cardRight: {
    flex: 1,
    paddingLeft: 10,
  },
  title: {
    fontSize: 16,
    lineHeight: 18,
    color: 'black',
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 16,
    marginHorizontal: 3,
    color: 'black',
  },
  dateWrapper: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  adultLabel: {
    fontSize: 10,
    lineHeight: 16,
    borderRadius: 4,
    borderWidth: 1,
    paddingHorizontal: 4,
    borderColor: 'grey',
    color: 'black',
  },
});

export default MovieCardItem;
