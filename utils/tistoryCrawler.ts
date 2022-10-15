const axios = require("axios");
const { Builder, By, Key, until } = require("selenium-webdriver");

const getMyTistoryHTMLByTag = async (tag: string) => {
  const url = "https://cocosy.tistory.com?tag=" + tag;
  const driver = await new Builder().forBrowser("chrome").build();

  await driver.get(url);
  const html = await driver.getPageSource();

  await driver.quit();

  return html;
};

const getMyTistoryPostsListByTag = async (tag: string) => {
  const html = await getMyTistoryHTMLByTag(tag);
  const posts = By.className("post");
  console.log(posts);
  posts.map((post: any) => {
    const postLink = post.match(/https:\/\/cocosy.tistory.com\/\d+/g);
    console.log(postLink);
  });
};

export default getMyTistoryPostsListByTag;
