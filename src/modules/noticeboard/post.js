// 액션 타입
const WRITE = "writer/WRITE";

// post ID 생성 함수
let nextPostId = 1;

// 액션 생성 함수
export const write = (post) => ({
  type: WRITE,
  post: {
    ...post,
    id: nextPostId++,
  },
});

// 초기 상태 선언
const initialState = {
  posts: [],
};

export default function noticeboard(state = initialState, action) {
  switch (action.type) {
    case WRITE:
      console.log(state.posts);
      return {
        ...state,
        posts: [...state.posts, action.post],
      };
    default:
      return state;
  }
}
