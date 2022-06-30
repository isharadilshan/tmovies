import React from 'react';
import {View} from 'react-native';
import {
  Placeholder,
  PlaceholderLine,
  PlaceholderMedia,
  ShineOverlay,
} from 'rn-placeholder';

const MovieListItemLoader = () => {
  return (
    <View style={{margin: 16}}>
      <Placeholder Animation={ShineOverlay} Left={PlaceholderMedia}>
        <PlaceholderLine width={80} />
        <PlaceholderLine />
        <PlaceholderLine width={30} />
        <PlaceholderLine width={80} />
        <PlaceholderLine />
        <PlaceholderLine width={50} />
      </Placeholder>
    </View>
  );
};

const LoadingPlaceholder = () => {
  return (
    <>
      <MovieListItemLoader />
      <MovieListItemLoader />
      <MovieListItemLoader />
      <MovieListItemLoader />
      <MovieListItemLoader />
      <MovieListItemLoader />
      <MovieListItemLoader />
      <MovieListItemLoader />
      <MovieListItemLoader />
      <MovieListItemLoader />
    </>
  );
};

export default LoadingPlaceholder;
