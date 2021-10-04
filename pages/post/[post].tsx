import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import Author from '../../src/components/author/author';
import { getPost } from '../../api/post';
import { PostState } from '../../src/state/post';
import Wrapper from '../../src/components/wrapper/wrapper';

const PostId = () => {
  const router = useRouter();
  const { post: postId } = router.query;
  const [post, setPost] = useRecoilState(PostState);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPost(+postId);

        setPost(response.result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  if (!post) {
    return null;
  }

  return (
    <Wrapper>
      <Author
        id={post.id}
        title={post.title}
        avatar={post.avatar}
        space={post.space}
        publicationDate={post.publicationDate}
      />
    </Wrapper>
  );
};

export async function getServerSideProps(context) {
  let post = null;
  const { params: { post: postsId } } = context;

  try {
    const response = await getPost(postsId);

    post = response.result;
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      store: {
        post,
      },
    },
  };
}

export default PostId;
