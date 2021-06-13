import { useState } from 'react';

import { useTimeline, TimelineActionType } from 'src/context/timeline.context';
import { useUser } from 'src/context/user.context';
import { Post, PostSortMethod } from 'src/interfaces/post';
import { User } from 'src/interfaces/user';
import * as PostAPI from 'src/lib/api/post';
import * as UserAPI from 'src/lib/api/user';

export const useTimelineHook = () => {
  const { state: userState } = useUser();
  const { state: timelineState, dispatch } = useTimeline();

  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadTimeline = async (page: number = 1, sort?: PostSortMethod) => {
    if (userState.user) {
      await loadUserPosts(userState.user, page, sort);
    }

    if (userState.anonymous) {
      await loadPosts(page, sort);
    }
  };

  const loadUserPosts = async (user: User, page: number = 1, sort?: PostSortMethod) => {
    setLoading(true);

    try {
      const data = await PostAPI.getFriendPost(user.id, page, sort);

      if (data.length < 10) {
        setHasMore(false);
      }

      if (data.length > 0) {
        for await (const post of data) {
          if (post.importBy && post.importBy.length > 0) {
            const user = await UserAPI.getUserDetail(post.importBy[0]);

            post.importer = user;
          }
        }
      }

      dispatch({
        type: TimelineActionType.LOAD_POST,
        posts: data.map((item: Post) => ({ ...item, comments: item.comments || [] }))
      });
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const loadPosts = async (page: number = 1, sort: PostSortMethod = 'created') => {
    setLoading(true);

    try {
      const data = await PostAPI.getPost(page, sort, timelineState.filter);

      if (data.length < 10) {
        setHasMore(false);
      }

      dispatch({
        type: TimelineActionType.LOAD_POST,
        posts: data.map((item: Post) => ({ ...item, comments: item.comments || [] }))
      });
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const nextPosts = async () => {
    dispatch({
      type: TimelineActionType.LOAD_MORE_POST
    });

    await loadTimeline(timelineState.page + 1);
  };

  const sortTimeline = async (sort: PostSortMethod) => {
    dispatch({
      type: TimelineActionType.SORT_POST,
      sort
    });

    await loadTimeline(1, sort);
  };

  return {
    error,
    loading,
    hasMore,
    sort: timelineState.sort,
    loadTimeline,
    nextPosts,
    sortTimeline
  };
};
