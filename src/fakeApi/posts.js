// 데이터를 반환하는 가짜 API 함수
// TODO : resolve란? : promise 관련 정리한 거 있음 그거보고 추가
const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

const posts = [
  {
    id: 1,
    owner: "test",
    title: "awgwa",
    content: "<p>asdfawf</p>",
    tags: ["gawg", "wfwef"],
    date: "2024-04-02 12:30",
  },
  {
    id: 2,
    owner: "user1",
    title: "example title",
    content: "<p>This is an example post content.</p>",
    tags: ["example", "sample"],
    date: "2024-04-03 10:45",
  },
  {
    id: 3,
    owner: "user2",
    title: "another example",
    content: "<p>This is another example post.</p>",
    tags: ["example", "test"],
    date: "2024-04-04 15:20",
  },
  {
    id: 4,
    owner: "user3",
    title: "test post",
    content: "<p>This is a test post.</p>",
    tags: ["test", "sample"],
    date: "2024-04-05 08:55",
  },
  {
    id: 5,
    owner: "user4",
    title: "random post",
    content: "<p>This is a random post.</p>",
    tags: ["random", "post"],
    date: "2024-04-06 17:10",
  },
];

// 포스트 목록을 가져오는 비동기 함수
export const getPosts = async () => {
  await sleep(500); // 0.5초 쉬고
  return posts; // posts 배열
};

// ID로 포스트를 조회하는 비동기 함수
export const getPostById = async (id) => {
  await sleep(500); // 0.5초 쉬고
  return posts.find((post) => post.id === id); // id 로 찾아서 반환
};

// 포스트를 추가하는 함수
export const addPost = async (newPost, owner) => {
  await sleep(500); // 0.5초 쉬고
  const id = posts.length + 1; // 새로운 포스트의 ID는 현재 포스트 개수 + 1
  const date = new Date().toLocaleString(); // 현재 시간을 가져와서 포스트 작성 시간으로 설정
  const postWithIdAndDate = { ...newPost, id, date, owner }; // 새로운 포스트 정보에 ID와 작성 시간을 추가
  posts.push(postWithIdAndDate); // 포스트 목록에 새로운 포스트 추가
  return postWithIdAndDate; // 추가된 포스트 반환
};

// 포스트를 삭제하는 함수
export const deletePost = async (id) => {
  await sleep(500); // 0.5초 쉬고
  const index = posts.findIndex((post) => post.id === id); // 삭제할 포스트의 인덱스 찾기
  if (index !== -1) {
    const deletedPost = posts.splice(index, 1)[0]; // 삭제된 포스트를 배열에서 제거하고 반환
    return deletedPost;
  }
  throw new Error("해당 ID의 포스트를 찾을 수 없습니다.");
};

// 포스트를 업데이트하는 함수
export const updatePost = async (id, updatedPost) => {
  await sleep(500); // 0.5초 쉬고
  const index = posts.findIndex((post) => post.id === id); // 업데이트할 포스트의 인덱스 찾기
  if (index !== -1) {
    posts[index] = { ...posts[index], ...updatedPost }; // 해당 포스트를 업데이트
    return posts[index]; // 업데이트된 포스트 반환
  }
  throw new Error("해당 ID의 포스트를 찾을 수 없습니다.");
};
