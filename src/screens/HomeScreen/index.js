import React, {useCallback, useEffect, useReducer, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Title} from 'react-native-paper';
import MovieCardItem from '../../components/organism/MovieCardItem';
import ScreenWrapper from '../../components/wrappers/ScreenWrapper';
import {getTopRatedMovies} from '../../services/movies';

const HomeScreen = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useReducer(
    (state, newState) => {
      return {...state, ...newState};
    },
    {page: 1},
  );

  const fetchTopRatedMovies = useCallback(async () => {
    try {
      setIsFetching(true);
      const response = await getTopRatedMovies(query.page);
      if (response?.data?.results) {
        setMovies(prevMovies => [...prevMovies, ...response.data.results]);
      }
      setIsFetching(false);
      setIsRefreshing(false);
    } catch (e) {
      setIsFetching(false);
      setIsRefreshing(false);
    }
  }, [query]);

  useEffect(() => {
    fetchTopRatedMovies();
  }, [fetchTopRatedMovies]);

  const refreshList = () => {
    setIsRefreshing(true);
    setMovies([]);
    fetchTopRatedMovies();
  };

  const handleEndReached = () => {
    const page = query.page;
    if (!isFetching) {
      setQuery({page: page + 1});
    }
  };

  return (
    <ScreenWrapper noPaddings>
      <FlatList
        data={movies}
        renderItem={MovieCardItem}
        keyExtractor={item => item.id}
        refreshing={isRefreshing}
        onRefresh={refreshList}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.6}
        ListEmptyComponent={() => {
          if (isRefreshing || isFetching) {
            return <Title>Loading</Title>;
          }
          return (
            <View style={styles.emptyComponentWrapper}>
              <Title>{'No Movies Found'}</Title>
            </View>
          );
        }}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  emptyComponentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default HomeScreen;
