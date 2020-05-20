import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import MovieDetail from './MovieDetail';
import useMovieDetail from '../../shared/hooks/useMovieDetail';

import { MOVIE_DETAIL_MOCK_DATA } from '../../shared/constants/mock-data.constant';

jest.mock('../../shared/hooks/useMovieDetail');

describe('<MovieDetail />', () => {
  afterEach(() => {
    useMovieDetail.mockReset();
  });

  it('Should render Loader component', () => {
    const mockMatch = {
      params: {
        id: '1',
      },
    };
    useMovieDetail.mockImplementation(() => {
      return {
        loading: true,
      };
    });
    const { getByTestId } = render(
      <Router>
        <MovieDetail match={mockMatch} />
      </Router>
    );

    expect(getByTestId(/loader/i)).toBeInTheDocument();
  });

  it('Should render Movie Detail properly', () => {
    const mockMatch = {
      params: {
        id: '1',
      },
    };
    useMovieDetail.mockImplementation(() => {
      return {
        loading: false,
        movieDetail: {
          ...MOVIE_DETAIL_MOCK_DATA,
        },
      };
    });
    const { getByText } = render(
      <Router>
        <MovieDetail match={mockMatch} />
      </Router>
    );

    expect(getByText(/something title/i)).toBeInTheDocument();
    expect(getByText(/Jonny Sins/i)).toBeInTheDocument();
    expect(getByText(/Jonny Stark/i)).toBeInTheDocument();
    expect(getByText(/lorem/i)).toBeInTheDocument();
    expect(getByText(/yoda/i)).toBeInTheDocument();
    expect(getByText(/ea-45/i)).toBeInTheDocument();
    expect(getByText(/cat/i)).toBeInTheDocument();
    expect(
      getByText(/we don't have any starships data yet!/i)
    ).toBeInTheDocument();
    expect(getByText(/car/i)).toBeInTheDocument();
  });
});
