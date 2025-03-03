const apiURL = "http://localhost:3000";
async function getAllPosts(apiPath) {
  try {
    // let response = await fetch(`${apiURL}/reader/posts`);
    let response = await fetch(`${apiURL}/${apiPath}`);

    if (!response.ok) {
      throw new Error(`HTTP Error! status:${response.status}`);
    }

    const allPosts = await response.json();
    // console.log(allPosts);
    return allPosts;
  } catch (error) {
    console.error("Error catching posts:", error);
    throw error;
  }
}

export { getAllPosts };
