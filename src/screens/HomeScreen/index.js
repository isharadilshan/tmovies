import React, {useCallback, useEffect, useReducer, useState} from 'react';
import _ from 'lodash';
import {FlatList, StyleSheet, View} from 'react-native';
import Config from 'react-native-config';
import {Title} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import LoadingPlaceholder from '../../components/organism/LoadingPlaceholder';
import MovieCardItem from '../../components/organism/MovieCardItem';
import ScreenWrapper from '../../components/wrappers/ScreenWrapper';
import {setTopMovies} from '../../redux/actions/movie';
import {getTopRatedMovies} from '../../services/movies';

const HomeScreen = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const dispatch = useDispatch();
  const topRatedMovies = useSelector(({movie}) => movie.topRatedMovies);
  const [query, setQuery] = useReducer(
    (state, newState) => {
      return {...state, ...newState};
    },
    {page: 1, total_pages: 1},
  );

  const fetchTopRatedMovies = useCallback(async () => {
    try {
      setIsFetching(true);
      const response = await getTopRatedMovies(query.page);

      if (response?.data?.results) {
        const moviewArr = _.uniq(
          [...topRatedMovies, ...response.data.results],
          true,
          'id',
        );
        await dispatch(setTopMovies(moviewArr));
        setQuery({total_pages: response.data.total_pages});
      }
      setIsFetching(false);
      setIsRefreshing(false);
    } catch (e) {
      setIsFetching(false);
      setIsRefreshing(false);
    }
  }, [query.page, dispatch]);

  useEffect(() => {
    fetchTopRatedMovies();
  }, [fetchTopRatedMovies]);

  const refreshList = async () => {
    setIsRefreshing(true);
    await dispatch(setTopMovies([]));
    fetchTopRatedMovies();
  };

  const handleEndReached = () => {
    const {page, total_pages} = query;
    if (!isFetching && page <= total_pages) {
      setQuery({page: page + 1});
    }
  };

  return (
    <ScreenWrapper noPaddings>
      <FlatList
        data={topRatedMovies}
        renderItem={MovieCardItem}
        keyExtractor={item => item.id}
        refreshing={isRefreshing}
        onRefresh={refreshList}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.6}
        ListEmptyComponent={() => {
          if (isRefreshing || isFetching) {
            return <LoadingPlaceholder />;
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
